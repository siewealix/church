import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  createResource,
  deleteResource,
  updateResource,
  uploadFile
} from '../../api/resources';
import api from '../../api/client';

const ResourceManager = ({ resource, title, fields }) => {
  const queryClient = useQueryClient();
  const [formState, setFormState] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [uploading, setUploading] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: [resource],
    queryFn: async () => {
      const { data: response } = await api.get(`/api/${resource}`, {
        params: { page: 1, limit: 20 }
      });
      return response;
    }
  });

  const createMutation = useMutation({
    mutationFn: (payload) => createResource(resource, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [resource] });
      setFormState({});
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, payload }) => updateResource(resource, id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [resource] });
      setEditingId(null);
      setFormState({});
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteResource(resource, id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [resource] })
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = { ...formState };
    fields.forEach((field) => {
      if (field.type === 'number' && payload[field.name] !== undefined) {
        payload[field.name] = Number(payload[field.name]);
      }
      if (field.name === 'tags' && typeof payload.tags === 'string') {
        payload.tags = payload.tags
          .split(',')
          .map((tag) => tag.trim())
          .filter(Boolean);
      }
    });

    if (editingId) {
      updateMutation.mutate({ id: editingId, payload });
    } else {
      createMutation.mutate(payload);
    }
  };

  const handleUpload = async (event, fieldName) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const result = await uploadFile(file);
      setFormState((prev) => ({ ...prev, [fieldName]: result.url }));
    } finally {
      setUploading(false);
    }
  };

  const selectItem = (item) => {
    setEditingId(item._id);
    const nextState = fields.reduce((acc, field) => {
      if (field.name === 'tags' && Array.isArray(item.tags)) {
        acc[field.name] = item.tags.join(', ');
      } else if (field.type === 'datetime-local' && item[field.name]) {
        const date = new Date(item[field.name]);
        acc[field.name] = date.toISOString().slice(0, 16);
      } else {
        acc[field.name] = item[field.name] ?? '';
      }
      return acc;
    }, {});
    setFormState(nextState);
  };

  return (
    <section className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {isLoading && <p>Chargement...</p>}
        {error && <p className="text-red-400">Erreur de chargement.</p>}
        <div className="space-y-4">
          {data?.items?.map((item) => (
            <div key={item._id} className="card flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">{item.title || item.name}</p>
                  {item.date && <p className="text-sm text-slate-400">{new Date(item.date).toLocaleDateString('fr-FR')}</p>}
                </div>
                <span className={item.published ? 'text-green-400' : 'text-slate-400'}>
                  {item.published ? 'Publié' : 'Brouillon'}
                </span>
              </div>
              <p className="text-sm text-slate-400 line-clamp-3">{item.description || item.content || item.bio}</p>
              <div className="flex gap-3">
                <button type="button" className="button-outline" onClick={() => selectItem(item)}>
                  Éditer
                </button>
                <button
                  type="button"
                  className="button-primary"
                  onClick={() => deleteMutation.mutate(item._id)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="card space-y-4">
        <h3 className="text-lg font-semibold">{editingId ? 'Mettre à jour' : 'Créer un élément'}</h3>
        {fields.map((field) => (
          <label key={field.name} className="block text-sm">
            <span className="mb-2 block text-slate-400">{field.label}</span>
            {field.type === 'textarea' ? (
              <textarea
                className="input min-h-[120px]"
                value={formState[field.name] ?? ''}
                onChange={(event) =>
                  setFormState((prev) => ({ ...prev, [field.name]: event.target.value }))
                }
              />
            ) : field.type === 'checkbox' ? (
              <input
                type="checkbox"
                checked={Boolean(formState[field.name])}
                onChange={(event) =>
                  setFormState((prev) => ({ ...prev, [field.name]: event.target.checked }))
                }
              />
            ) : field.type === 'file' ? (
              <input
                type="file"
                onChange={(event) => handleUpload(event, field.name)}
                className="text-sm"
              />
            ) : (
              <input
                className="input"
                type={field.type}
                value={formState[field.name] ?? ''}
                onChange={(event) =>
                  setFormState((prev) => ({ ...prev, [field.name]: event.target.value }))
                }
              />
            )}
          </label>
        ))}
        {uploading && <p className="text-sm text-secondary">Téléversement en cours...</p>}
        <div className="flex gap-3">
          <button type="submit" className="button-primary">
            {editingId ? 'Mettre à jour' : 'Créer'}
          </button>
          {editingId && (
            <button
              type="button"
              className="button-outline"
              onClick={() => {
                setEditingId(null);
                setFormState({});
              }}
            >
              Annuler
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default ResourceManager;

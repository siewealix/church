import ResourceManager from '../../components/admin/ResourceManager';

const SermonsAdmin = () => (
  <ResourceManager
    resource="sermons"
    title="Gestion des sermons"
    fields={[
      { name: 'title', label: 'Titre', type: 'text' },
      { name: 'preacher', label: 'Prédicateur', type: 'text' },
      { name: 'date', label: 'Date', type: 'datetime-local' },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'mediaUrl', label: 'Lien média', type: 'text' },
      { name: 'notes', label: 'Notes', type: 'textarea' },
      { name: 'published', label: 'Publié', type: 'checkbox' }
    ]}
  />
);

export default SermonsAdmin;

import ResourceManager from '../../components/admin/ResourceManager';

const MinistriesAdmin = () => (
  <ResourceManager
    resource="ministries"
    title="Gestion des ministères"
    fields={[
      { name: 'name', label: 'Nom', type: 'text' },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'leader', label: 'Responsable', type: 'text' },
      { name: 'schedule', label: 'Horaire', type: 'text' },
      { name: 'image', label: 'Image', type: 'file' },
      { name: 'published', label: 'Publié', type: 'checkbox' }
    ]}
  />
);

export default MinistriesAdmin;

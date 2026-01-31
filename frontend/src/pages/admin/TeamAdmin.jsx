import ResourceManager from '../../components/admin/ResourceManager';

const TeamAdmin = () => (
  <ResourceManager
    resource="team"
    title="Gestion de l'équipe"
    fields={[
      { name: 'name', label: 'Nom', type: 'text' },
      { name: 'roleTitle', label: 'Rôle', type: 'text' },
      { name: 'bio', label: 'Biographie', type: 'textarea' },
      { name: 'photo', label: 'Photo', type: 'file' },
      { name: 'order', label: 'Ordre', type: 'number' },
      { name: 'published', label: 'Publié', type: 'checkbox' }
    ]}
  />
);

export default TeamAdmin;

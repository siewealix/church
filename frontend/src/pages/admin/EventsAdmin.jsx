import ResourceManager from '../../components/admin/ResourceManager';

const EventsAdmin = () => (
  <ResourceManager
    resource="events"
    title="Gestion des événements"
    fields={[
      { name: 'title', label: 'Titre', type: 'text' },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'date', label: 'Date', type: 'datetime-local' },
      { name: 'location', label: 'Lieu', type: 'text' },
      { name: 'image', label: 'Image', type: 'file' },
      { name: 'published', label: 'Publié', type: 'checkbox' }
    ]}
  />
);

export default EventsAdmin;

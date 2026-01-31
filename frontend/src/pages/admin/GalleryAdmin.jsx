import ResourceManager from '../../components/admin/ResourceManager';

const GalleryAdmin = () => (
  <ResourceManager
    resource="gallery"
    title="Gestion de la galerie"
    fields={[
      { name: 'title', label: 'Titre', type: 'text' },
      { name: 'imageUrl', label: 'Image', type: 'file' },
      { name: 'published', label: 'Publié', type: 'checkbox' }
    ]}
  />
);

export default GalleryAdmin;

import ResourceManager from '../../components/admin/ResourceManager';

const PostsAdmin = () => (
  <ResourceManager
    resource="posts"
    title="Gestion des annonces"
    fields={[
      { name: 'title', label: 'Titre', type: 'text' },
      { name: 'content', label: 'Contenu', type: 'textarea' },
      { name: 'coverImage', label: 'Image de couverture', type: 'file' },
      { name: 'tags', label: 'Tags (séparés par virgules)', type: 'text' },
      { name: 'published', label: 'Publié', type: 'checkbox' }
    ]}
  />
);

export default PostsAdmin;

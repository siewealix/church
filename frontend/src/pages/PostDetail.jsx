import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import { fetchPost } from '../api/resources';

const PostDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPost(id)
  });

  return (
    <Layout>
      <Meta title="TFMI - Actualité" />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <Link to="/posts" className="text-secondary">← Retour</Link>
        {isLoading && <p className="mt-6">Chargement...</p>}
        {error && <p className="mt-6 text-red-400">Impossible de charger.</p>}
        {data && (
          <div className="mt-6 space-y-4">
            <h1 className="section-title">{data.title}</h1>
            <p className="text-slate-300">{data.content}</p>
            {data.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {data.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-secondary/20 px-3 py-1 text-xs text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default PostDetail;

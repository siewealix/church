import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import { fetchPosts } from '../api/resources';

const Posts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts({ page: 1, limit: 10, published: true })
  });

  return (
    <Layout>
      <Meta title="TFMI - Actualités" description="Annonces et actualités TFMI" />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="section-title">Actualités & Annonces</h1>
        {isLoading && <p className="mt-6">Chargement...</p>}
        {error && <p className="mt-6 text-red-400">Impossible de charger les actualités.</p>}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {data?.items?.map((post) => (
            <article key={post._id} className="card">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-slate-300 line-clamp-3">{post.content}</p>
              <Link to={`/posts/${post._id}`} className="mt-4 inline-block text-secondary">
                Lire l'annonce
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Posts;

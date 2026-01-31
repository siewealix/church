import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import { fetchSermons } from '../api/resources';

const Sermons = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['sermons'],
    queryFn: () => fetchSermons({ page: 1, limit: 10, published: true })
  });

  return (
    <Layout>
      <Meta title="TFMI - Sermons" description="Sermons et enseignements" />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="section-title">Sermons & Enseignements</h1>
        {isLoading && <p className="mt-6">Chargement...</p>}
        {error && <p className="mt-6 text-red-400">Impossible de charger les sermons.</p>}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {data?.items?.map((sermon) => (
            <article key={sermon._id} className="card">
              <h2 className="text-xl font-semibold">{sermon.title}</h2>
              <p className="text-sm text-slate-400">{sermon.preacher}</p>
              <p className="mt-2 text-slate-300 line-clamp-3">{sermon.description}</p>
              <Link to={`/sermons/${sermon._id}`} className="mt-4 inline-block text-secondary">
                Lire la suite
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Sermons;

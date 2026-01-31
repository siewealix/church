import { useQuery } from '@tanstack/react-query';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import { fetchMinistries } from '../api/resources';

const Ministries = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['ministries'],
    queryFn: () => fetchMinistries({ page: 1, limit: 20, published: true })
  });

  return (
    <Layout>
      <Meta title="TFMI - Ministères" description="Les ministères et départements de TFMI" />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="section-title">Ministères & Départements</h1>
        {isLoading && <p className="mt-6">Chargement...</p>}
        {error && <p className="mt-6 text-red-400">Impossible de charger les ministères.</p>}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {data?.items?.map((ministry) => (
            <div key={ministry._id} className="card">
              <img
                src={ministry.image || '/assets/ministry.svg'}
                alt={ministry.name}
                className="h-40 w-full rounded-xl object-cover"
              />
              <h2 className="mt-4 text-xl font-semibold">{ministry.name}</h2>
              <p className="text-sm text-slate-400">Responsable : {ministry.leader}</p>
              <p className="mt-2 text-slate-300">{ministry.description}</p>
              {ministry.schedule && (
                <p className="mt-2 text-xs uppercase text-secondary">{ministry.schedule}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Ministries;

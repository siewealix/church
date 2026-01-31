import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import { fetchEvent } from '../api/resources';

const EventDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ['event', id],
    queryFn: () => fetchEvent(id)
  });

  return (
    <Layout>
      <Meta title="TFMI - Détail événement" />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <Link to="/events" className="text-secondary">← Retour</Link>
        {isLoading && <p className="mt-6">Chargement...</p>}
        {error && <p className="mt-6 text-red-400">Impossible de charger.</p>}
        {data && (
          <div className="mt-6 space-y-4">
            <h1 className="section-title">{data.title}</h1>
            <p className="text-sm text-slate-400">{new Date(data.date).toLocaleDateString('fr-FR')}</p>
            <p className="text-slate-300">{data.description}</p>
            <p className="text-secondary">{data.location}</p>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default EventDetail;

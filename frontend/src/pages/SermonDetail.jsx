import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import { fetchSermon } from '../api/resources';

const SermonDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ['sermon', id],
    queryFn: () => fetchSermon(id)
  });

  return (
    <Layout>
      <Meta title="TFMI - Sermon" />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <Link to="/sermons" className="text-secondary">← Retour</Link>
        {isLoading && <p className="mt-6">Chargement...</p>}
        {error && <p className="mt-6 text-red-400">Impossible de charger.</p>}
        {data && (
          <div className="mt-6 space-y-4">
            <h1 className="section-title">{data.title}</h1>
            <p className="text-sm text-slate-400">{data.preacher}</p>
            <p className="text-slate-300">{data.description}</p>
            {data.notes && <p className="text-sm text-slate-400">Notes: {data.notes}</p>}
            {data.mediaUrl && (
              <a href={data.mediaUrl} target="_blank" rel="noreferrer" className="button-outline">
                Voir la vidéo / audio
              </a>
            )}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default SermonDetail;

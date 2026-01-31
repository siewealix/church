import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import { fetchEvents } from '../api/resources';

const Events = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['events'],
    queryFn: () => fetchEvents({ page: 1, limit: 10, published: true })
  });

  return (
    <Layout>
      <Meta title="TFMI - Événements" description="Agenda des événements TFMI" />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="section-title">Événements</h1>
        {isLoading && <p className="mt-6">Chargement...</p>}
        {error && <p className="mt-6 text-red-400">Impossible de charger les événements.</p>}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {data?.items?.map((event) => (
            <article key={event._id} className="card">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p className="text-sm text-slate-400">{new Date(event.date).toLocaleDateString('fr-FR')}</p>
              <p className="mt-2 text-slate-300 line-clamp-3">{event.description}</p>
              <Link to={`/events/${event._id}`} className="mt-4 inline-block text-secondary">
                Voir le détail
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Events;

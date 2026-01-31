import { useQuery } from '@tanstack/react-query';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import { fetchEvents, fetchSermons, fetchPosts } from '../api/resources';

const Home = () => {
  const eventsQuery = useQuery({
    queryKey: ['events', 'home'],
    queryFn: () => fetchEvents({ page: 1, limit: 3, published: true })
  });
  const sermonsQuery = useQuery({
    queryKey: ['sermons', 'home'],
    queryFn: () => fetchSermons({ page: 1, limit: 1, published: true })
  });
  const postsQuery = useQuery({
    queryKey: ['posts', 'home'],
    queryFn: () => fetchPosts({ page: 1, limit: 2, published: true })
  });

  const latestSermon = sermonsQuery.data?.items?.[0];

  return (
    <Layout>
      <Meta title="TFMI - Accueil" description="Triumphant Faith Ministries - ensemble vers la victoire en Christ" />
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img
            src="/assets/hero.svg"
            alt="Communauté TFMI"
            className="h-full w-full object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-24">
          <p className="text-sm uppercase tracking-widest text-secondary">Triumphant Faith Ministries</p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Ensemble vers la victoire en Christ
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            Nous sommes une communauté dédiée à la foi, à l'amour et à la puissance de l'Évangile.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/events" className="button-primary">Nos événements</a>
            <a href="/contact" className="button-outline">Nous contacter</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="section-title">Bienvenue</h2>
            <p className="text-slate-300">
              Nous sommes heureux de vous accueillir sur le site de Triumphant Faith Ministries. Que la paix du Seigneur soit avec vous.
            </p>
            <blockquote className="border-l-4 border-secondary pl-4 text-slate-400">
              « Il a dépouillé les dominations et les autorités, et les a livrées publiquement en spectacle, en triomphant d'elles par la croix. » (Colossiens 2:15)
            </blockquote>
          </div>
          <img
            src="/assets/community.svg"
            alt="Photo de la communauté"
            className="h-72 w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="bg-slate-900/50">
        <div className="mx-auto max-w-6xl space-y-8 px-6 py-16">
          <h2 className="section-title">Prochains événements</h2>
          {eventsQuery.isLoading && <p>Chargement...</p>}
          {eventsQuery.error && <p className="text-red-400">Impossible de charger les événements.</p>}
          <div className="grid gap-6 md:grid-cols-3">
            {eventsQuery.data?.items?.map((event) => (
              <article key={event._id} className="card">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-sm text-slate-400">{new Date(event.date).toLocaleDateString('fr-FR')}</p>
                <p className="mt-2 text-sm text-slate-300 line-clamp-3">{event.description}</p>
                <p className="mt-4 text-xs uppercase text-secondary">{event.location}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card">
            <h2 className="section-title">Dernier sermon</h2>
            {latestSermon ? (
              <div className="mt-4 space-y-2">
                <p className="text-lg font-semibold">{latestSermon.title}</p>
                <p className="text-sm text-slate-400">{latestSermon.preacher}</p>
                <p className="text-slate-300">{latestSermon.description}</p>
                {latestSermon.mediaUrl && (
                  <a href={latestSermon.mediaUrl} className="button-outline" target="_blank" rel="noreferrer">
                    Regarder
                  </a>
                )}
              </div>
            ) : (
              <p>Aucun sermon disponible.</p>
            )}
          </div>
          <div className="card">
            <h2 className="section-title">Actualités</h2>
            <div className="mt-4 space-y-3">
              {postsQuery.data?.items?.map((post) => (
                <div key={post._id}>
                  <p className="font-semibold">{post.title}</p>
                  <p className="text-sm text-slate-400 line-clamp-2">{post.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="section-title">Infos pratiques</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="card">
              <h3 className="text-lg font-semibold">Horaires</h3>
              <p className="text-sm text-slate-400">Dimanche 09:00 - 12:00</p>
              <p className="text-sm text-slate-400">Mardi 18:00 - 20:00</p>
              <p className="text-sm text-slate-400">Jeudi 18:30 - 20:30</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold">Adresse principale</h3>
              <p className="text-sm text-slate-400">Mbog Abang, Yaoundé</p>
              <p className="text-sm text-slate-400">+237 XXX XXX XXX</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold">Besoin d'aide ?</h3>
              <p className="text-sm text-slate-400">contact@tfmi.org</p>
              <a href="/contact" className="button-outline mt-3">Écrire</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

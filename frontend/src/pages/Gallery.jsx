import { useQuery } from '@tanstack/react-query';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import { fetchGallery } from '../api/resources';

const Gallery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['gallery'],
    queryFn: () => fetchGallery({ page: 1, limit: 20, published: true })
  });

  return (
    <Layout>
      <Meta title="TFMI - Galerie" description="Photos de la communauté TFMI" />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="section-title">Galerie</h1>
        {isLoading && <p className="mt-6">Chargement...</p>}
        {error && <p className="mt-6 text-red-400">Impossible de charger la galerie.</p>}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {data?.items?.map((item) => (
            <figure key={item._id} className="card">
              <img src={item.imageUrl} alt={item.title} className="h-48 w-full rounded-xl object-cover" />
              <figcaption className="mt-3 text-sm text-slate-300">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;

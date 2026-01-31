import Layout from '../components/Layout';
import Meta from '../components/Meta';

const Don = () => (
  <Layout>
    <Meta title="TFMI - Don" description="Soutenir la mission TFMI" />
    <section className="mx-auto max-w-4xl space-y-6 px-6 py-16">
      <h1 className="section-title">Don & Offrandes</h1>
      <p className="text-slate-300">
        Votre générosité soutient la mission, l'action sociale et l'expansion de l'Évangile.
        Merci pour votre engagement.
      </p>
      <div className="card">
        <h2 className="text-lg font-semibold">Comment donner ?</h2>
        <p className="text-slate-300">
          Les informations de don peuvent être configurées par l'équipe administrative.
        </p>
        <a
          href="https://example.com/donation"
          target="_blank"
          rel="noreferrer"
          className="button-primary mt-4"
        >
          Accéder au lien de don
        </a>
      </div>
    </section>
  </Layout>
);

export default Don;

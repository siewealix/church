import Layout from '../components/Layout';
import Meta from '../components/Meta';

const About = () => (
  <Layout>
    <Meta title="TFMI - À propos" description="Mission, vision et équipe pastorale de TFMI" />
    <section className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      <div className="space-y-4">
        <h1 className="section-title">Mission, Vision et Valeurs</h1>
        <p className="text-slate-300">
          Conduire les âmes à Christ et les équiper pour une vie de victoire et de triomphe dans la foi.
        </p>
        <p className="text-slate-300">
          Notre mission est d'annoncer la bonne nouvelle et de former des disciples engagés.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="card">
          <h3 className="text-lg font-semibold">Foi</h3>
          <p className="text-sm text-slate-400">Fondés sur la Parole de Dieu</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">Amour</h3>
          <p className="text-sm text-slate-400">Unis dans l'amour du Christ</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">Esprit</h3>
          <p className="text-sm text-slate-400">Guidés par le Saint-Esprit</p>
        </div>
      </div>
    </section>

    <section className="bg-slate-900/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="section-title">Histoire de l'Église</h2>
        <p className="mt-4 text-slate-300">
          Fondée en 2010 par le Très Révérend Apôtre Julius EKIE, notre communauté est née du désir d'apporter l'espérance et la lumière de l'Évangile au plus grand nombre.
        </p>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="section-title">Notre Équipe Pastorale</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {[
          { name: 'Apôtre Julius EKIE', role: 'Fondateur et visionnaire de TFMI.', photo: '/assets/pastor-apostle.svg' },
          { name: 'Pasteur Pierre', role: "Responsable de l'enseignement biblique.", photo: '/assets/pastor-apostle.svg' },
          { name: 'Pasteur Marie', role: 'En charge du ministère de la louange.', photo: '/assets/pastor-apostle.svg' }
        ].map((member) => (
          <div key={member.name} className="card text-center">
            <img src={member.photo} alt={member.name} className="mx-auto h-40 w-40 rounded-full object-cover" />
            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-slate-400">{member.role}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-slate-900/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="section-title">Message du Fondateur</h2>
        <p className="mt-4 text-slate-300">
          Bienvenue à TFMI. Mon souhait est que chaque personne qui franchit nos portes rencontre Jésus-Christ et découvre la puissance transformante de sa grâce.
        </p>
      </div>
    </section>
  </Layout>
);

export default About;

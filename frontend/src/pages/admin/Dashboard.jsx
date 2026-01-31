import { useAuth } from '../../hooks/useAuth';

const Dashboard = () => {
  const { user, signOut } = useAuth();

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Bienvenue {user?.email || 'Admin'}</h2>
      <p className="text-slate-300">
        Gérez les événements, sermons, annonces et contenus médias depuis ce tableau de bord.
      </p>
      <button type="button" className="button-outline" onClick={signOut}>
        Se déconnecter
      </button>
    </section>
  );
};

export default Dashboard;

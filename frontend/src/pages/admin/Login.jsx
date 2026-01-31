import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Meta from '../../components/Meta';

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [error, setError] = useState('');
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      await signIn(form);
      navigate('/admin');
    } catch (err) {
      setError('Identifiants invalides');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
      <Meta title="TFMI - Admin Login" />
      <form onSubmit={handleSubmit} className="card w-full max-w-md space-y-4">
        <h1 className="text-2xl font-semibold">Connexion admin</h1>
        <label className="block">
          <span className="text-sm text-slate-400">Email</span>
          <input
            className="input"
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            required
          />
        </label>
        <label className="block">
          <span className="text-sm text-slate-400">Mot de passe</span>
          <input
            className="input"
            type="password"
            value={form.password}
            onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))}
            required
          />
        </label>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button type="submit" className="button-primary w-full">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;

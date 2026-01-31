import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'À propos' },
  { to: '/ministries', label: 'Ministères' },
  { to: '/events', label: 'Événements' },
  { to: '/sermons', label: 'Sermons' },
  { to: '/gallery', label: 'Galerie' },
  { to: '/posts', label: 'Actualités' },
  { to: '/contact', label: 'Contact' },
  { to: '/don', label: 'Don' }
];

const Navbar = () => (
  <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur">
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <img src="/assets/logo.svg" alt="TFMI" className="h-10 w-10 rounded-full" />
        <div>
          <p className="text-lg font-semibold">TFMI</p>
          <p className="text-xs text-slate-400">Triumphant Faith Ministries</p>
        </div>
      </div>
      <div className="hidden flex-wrap items-center gap-4 text-sm font-medium text-slate-200 lg:flex">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `transition hover:text-secondary ${isActive ? 'text-secondary' : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  </header>
);

export default Navbar;

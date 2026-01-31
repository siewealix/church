import { NavLink, Outlet } from 'react-router-dom';

const AdminLayout = () => (
  <div className="min-h-screen bg-slate-950 text-slate-100">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8">
      <header className="flex flex-col gap-2 border-b border-slate-800 pb-4">
        <h1 className="text-2xl font-semibold">Administration TFMI</h1>
        <nav className="flex flex-wrap gap-4 text-sm">
          <NavLink to="/admin" end className={({ isActive }) => (isActive ? 'text-secondary' : '')}>
            Dashboard
          </NavLink>
          <NavLink to="/admin/events" className={({ isActive }) => (isActive ? 'text-secondary' : '')}>
            Événements
          </NavLink>
          <NavLink to="/admin/sermons" className={({ isActive }) => (isActive ? 'text-secondary' : '')}>
            Sermons
          </NavLink>
          <NavLink to="/admin/posts" className={({ isActive }) => (isActive ? 'text-secondary' : '')}>
            Annonces
          </NavLink>
          <NavLink to="/admin/ministries" className={({ isActive }) => (isActive ? 'text-secondary' : '')}>
            Ministères
          </NavLink>
          <NavLink to="/admin/team" className={({ isActive }) => (isActive ? 'text-secondary' : '')}>
            Équipe
          </NavLink>
          <NavLink to="/admin/gallery" className={({ isActive }) => (isActive ? 'text-secondary' : '')}>
            Galerie
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  </div>
);

export default AdminLayout;

import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Ministries from '../pages/Ministries';
import Events from '../pages/Events';
import EventDetail from '../pages/EventDetail';
import Sermons from '../pages/Sermons';
import SermonDetail from '../pages/SermonDetail';
import Gallery from '../pages/Gallery';
import Posts from '../pages/Posts';
import PostDetail from '../pages/PostDetail';
import Contact from '../pages/Contact';
import Don from '../pages/Don';
import Login from '../pages/admin/Login';
import Dashboard from '../pages/admin/Dashboard';
import EventsAdmin from '../pages/admin/EventsAdmin';
import SermonsAdmin from '../pages/admin/SermonsAdmin';
import PostsAdmin from '../pages/admin/PostsAdmin';
import MinistriesAdmin from '../pages/admin/MinistriesAdmin';
import TeamAdmin from '../pages/admin/TeamAdmin';
import GalleryAdmin from '../pages/admin/GalleryAdmin';
import AdminLayout from '../components/admin/AdminLayout';
import ProtectedRoute from './ProtectedRoute';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/ministries" element={<Ministries />} />
    <Route path="/events" element={<Events />} />
    <Route path="/events/:id" element={<EventDetail />} />
    <Route path="/sermons" element={<Sermons />} />
    <Route path="/sermons/:id" element={<SermonDetail />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/posts" element={<Posts />} />
    <Route path="/posts/:id" element={<PostDetail />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/don" element={<Don />} />

    <Route path="/admin/login" element={<Login />} />
    <Route element={<ProtectedRoute />}>
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/events" element={<EventsAdmin />} />
        <Route path="/admin/sermons" element={<SermonsAdmin />} />
        <Route path="/admin/posts" element={<PostsAdmin />} />
        <Route path="/admin/ministries" element={<MinistriesAdmin />} />
        <Route path="/admin/team" element={<TeamAdmin />} />
        <Route path="/admin/gallery" element={<GalleryAdmin />} />
      </Route>
    </Route>
  </Routes>
);

export default App;

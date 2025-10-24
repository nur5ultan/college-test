import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import News from "./components/News/News";
import Users from './pages/Admin/Users';
import Ads from "./components/Ads/Ads";
import Galery from "./components/Galery/Galery";
import Guide from "./components/Guide/Guide";
import Document from "./components/Document/Document";
import Director from './pages/Director/Director';
import Search from './pages/Search/Search';
import Students from './pages/Students/Students';
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/Abouts/Abouts";
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import DirectorProfile from './components/DirectorProfile/DirectorProfile';
import Applicants from "./pages/Applicants/Applicants";
import Specialties from './pages/Specialties/Specialties';
import Teachers from './pages/Teachers/Teachers';

const PrivateRoute = ({ children }) => {
  const logged = typeof window !== 'undefined' && (
    localStorage.getItem('admin_logged') === '1' || localStorage.getItem('isAdmin') === 'true'
  );
  return logged ? children : <Navigate to="/admin" replace />;
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/director" element={<Director />} />
        <Route path="/search" element={<Search />} />
        <Route path="/students" element={<Students />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/applicants" element={<Applicants />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/news" element={<PrivateRoute><News /></PrivateRoute>} />
        <Route path="/admin/users" element={<PrivateRoute><Users /></PrivateRoute>} />
        <Route path="/admin/ads" element={<PrivateRoute><Ads /></PrivateRoute>} />
        <Route path="/admin/galery" element={<PrivateRoute><Galery /></PrivateRoute>} />
        <Route path="/admin/guide" element={<PrivateRoute><Guide /></PrivateRoute>} />
        <Route path="/admin/document" element={<PrivateRoute><Document /></PrivateRoute>} />
      </Routes>
      <DirectorProfile />
      <ScrollToTopButton />
    </Router>
  );
}

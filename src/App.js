import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { FeedbackProvider } from './contexts/FeedbackContext';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import NewsDetail from './pages/News/NewsDetail';
import NewsIndex from './pages/News/NewsIndex';
import News from "./components/News/News";
import Users from './pages/Admin/Users';
import Ads from "./components/Ads/Ads";
import Galery from "./components/Galery/Galery";
import Guide from "./components/Guide/Guide";
import Feedback from "./components/Feedback/Feedback";
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
import SpecialtyDetail from './pages/SpecialtyDetail/SpecialtyDetail';
import Teachers from './pages/Teachers/Teachers';
import Projects from './pages/Projects/Projects';
import DocumentGet from './pages/DocumentGet/DocumentGet';

const PrivateRoute = ({ children }) => {
  const logged = typeof window !== 'undefined' && (
    !!localStorage.getItem('auth_token') || localStorage.getItem('admin_logged') === '1' || localStorage.getItem('isAdmin') === 'true'
  );
  return logged ? children : <Navigate to="/login" replace />;
};

const SuperRoute = ({ children }) => {
  const isSuper = typeof window !== 'undefined' && (() => {
    try{
      const u = JSON.parse(localStorage.getItem('admin_user')||'{}');
      return u.role === 'superuser' || u.role === 'super';
    }catch{ return false; }
  })();
  return isSuper ? children : <Navigate to="/login" replace />;
};

export default function App() {
  return (
    <FeedbackProvider>
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
          <Route path="/projects" element={<Projects />} />
          <Route path="/specialties/:id" element={<SpecialtyDetail />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/document" element={<DocumentGet />} />
          <Route path="/news" element={<NewsIndex />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SuperRoute><Register /></SuperRoute>} />
          <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
          <Route path="/admin/news" element={<PrivateRoute><News /></PrivateRoute>} />
          <Route path="/admin/feedback" element={<PrivateRoute><Feedback /></PrivateRoute>} />
          <Route path="/admin/users" element={<PrivateRoute><Users /></PrivateRoute>} />
          <Route path="/admin/ads" element={<PrivateRoute><Ads /></PrivateRoute>} />
          <Route path="/admin/galery" element={<PrivateRoute><Galery /></PrivateRoute>} />
          <Route path="/admin/guide" element={<PrivateRoute><Guide /></PrivateRoute>} />
          <Route path="/admin/document" element={<PrivateRoute><Document /></PrivateRoute>} />
        </Routes>
        <DirectorProfile />
        <ScrollToTopButton />
      </Router>
    </FeedbackProvider>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import News from "./components/News/News";
import Ads from "./components/Ads/Ads";
import Galery from "./components/Galery/Galery";
import Guide from "./components/Guide/Guide";
import Document from "./components/Document/Document";
import './App.css';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/news" element={<News />} />
        <Route path="/admin/ads" element={<Ads />} />
        <Route path="/admin/galery" element={<Galery />} />
        <Route path="/admin/guide" element={<Guide />} />
        <Route path="/admin/document" element={<Document />} />
      </Routes>
      <ScrollToTopButton />
    </Router>
  );
}

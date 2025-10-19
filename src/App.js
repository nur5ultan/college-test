import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import './App.css';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <ScrollToTopButton />
    </Router>
  );
}

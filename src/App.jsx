import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import VisionFilters, { VISION_MODES } from './components/VisionFilters.jsx';
import Home from './pages/Home.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import VideoPage from './pages/VideoPage.jsx';
import useAttention from './hooks/useAttention.js';

// Scrolls to #section links (including /#projects from other pages) and to the
// top when moving between pages.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [vision, setVision] = useState('human');
  const mode = VISION_MODES.find((m) => m.id === vision);
  useAttention();

  return (
    <div className="page" style={{ filter: mode.filter }}>
      <VisionFilters />
      <ScrollManager />
      <Nav />
      <Routes>
        <Route path="/" element={<Home vision={vision} onVisionChange={setVision} />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/videos/:slug" element={<VideoPage />} />
        <Route path="*" element={<Home vision={vision} onVisionChange={setVision} />} />
      </Routes>
      <Footer />
    </div>
  );
}

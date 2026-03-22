import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from '@/pages/HomePage';
import ModelsPage from '@/pages/ModelsPage';
import ComputePage from '@/pages/ComputePage';
import PolicyPage from '@/pages/PolicyPage';
import TrainingPage from '@/pages/TrainingPage';
import ActivityCommunityPage from '@/pages/ActivityCommunityPage';
import AppsPage from '@/pages/AppsPage';
import AgentIDEPage from '@/pages/AgentIDEPage';
import DashboardPage from '@/pages/DashboardPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const routerBase = import.meta.env.BASE_URL.replace(/\/$/, '');
  return (
    <Router basename={routerBase}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/compute" element={<ComputePage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/community" element={<ActivityCommunityPage />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/agent-ide" element={<AgentIDEPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

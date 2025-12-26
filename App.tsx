import React, { useState, useEffect, useCallback } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Residents } from './pages/Residents';
import { Chat } from './pages/Chat';
import { Settings } from './pages/Settings';
import { Integrations } from './pages/Integrations';
import { Documents } from './pages/Documents';
import { CreateCondo } from './pages/CreateCondo';
import { ViewState } from './types';
import { ThemeProvider } from './context/ThemeContext';

const viewToPath: Record<ViewState, string> = {
  dashboard: '/',
  residents: '/residents',
  chat: '/chat',
  settings: '/settings',
  integrations: '/integrations',
  documents: '/documents',
  'create-condo': '/create-condo',
};

const pathToView = (path: string): ViewState => {
  const normalized = path.replace(/\/+$/,'') || '/';
  switch (normalized) {
    case '/':
    case '/dashboard':
      return 'dashboard';
    case '/residents':
      return 'residents';
    case '/chat':
      return 'chat';
    case '/settings':
      return 'settings';
    case '/integrations':
      return 'integrations';
    case '/documents':
      return 'documents';
    case '/create-condo':
      return 'create-condo';
    default:
      return 'dashboard';
  }
};

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(() => pathToView(window.location.pathname));

  // Navigate and keep URL in sync
  const navigate = useCallback((view: ViewState, { replace = false } = {}) => {
    setCurrentView(view);
    const path = viewToPath[view] || '/';
    try {
      if (replace) window.history.replaceState({}, '', path);
      else window.history.pushState({}, '', path);
    } catch (e) {
      // pushState can throw in some edge cases; ignore
    }
  }, []);

  // Sync on browser navigation (back/forward)
  useEffect(() => {
    const onPop = () => setCurrentView(pathToView(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'residents':
        return <Residents />;
      case 'chat':
        return <Chat />;
      case 'settings':
        return <Settings />;
      case 'integrations':
        return <Integrations />;
      case 'documents':
        return <Documents />;
      case 'create-condo':
        return <CreateCondo />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentView={currentView} onNavigate={(v: ViewState) => navigate(v)}>
      {renderView()}
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
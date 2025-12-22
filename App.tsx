import React, { useState } from 'react';
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

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');

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
    <Layout currentView={currentView} onNavigate={setCurrentView}>
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
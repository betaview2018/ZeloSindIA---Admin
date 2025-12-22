import React, { useState } from 'react';
import { ViewState } from '../types';
import { Icons } from './Icons';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const NavItem = ({ view, icon: Icon, label }: { view: ViewState; icon: any; label: string }) => (
    <button
      onClick={() => onNavigate(view)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
        currentView === view
          ? 'bg-primary/10 text-primary border border-primary/20'
          : 'text-slate-400 hover:bg-white/5 hover:text-white'
      }`}
    >
      <Icon size={20} className={currentView === view ? 'text-primary' : 'text-slate-400 group-hover:text-white'} />
      <span className="font-medium text-sm">{label}</span>
    </button>
  );

  return (
    <div className="flex h-screen bg-[#0f172a] overflow-hidden text-slate-100">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'w-72' : 'w-0'
        } flex-shrink-0 bg-[#101a23] border-r border-slate-800 transition-all duration-300 flex flex-col`}
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Icons.Bot className="text-white" size={24} />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">Admin v2.0</h1>
              <p className="text-xs text-slate-500">Condomínio Manager</p>
            </div>
          </div>

          <nav className="space-y-2">
            <NavItem view="dashboard" icon={Icons.Dashboard} label="Dashboard" />
            <NavItem view="residents" icon={Icons.Users} label="Moradores" />
            <NavItem view="create-condo" icon={Icons.Building} label="Condomínios" />
            <NavItem view="documents" icon={Icons.Upload} label="Documentos" />
            <NavItem view="chat" icon={Icons.Chat} label="BIA Chat" />
            <NavItem view="integrations" icon={Icons.Zap} label="Integrações" />
            <NavItem view="settings" icon={Icons.Settings} label="Configurações" />
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-slate-800">
           <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-slate-800/50">
               <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">AD</div>
               <div className="overflow-hidden">
                   <p className="text-sm font-medium truncate">Admin User</p>
                   <p className="text-xs text-slate-500 truncate">admin@bia.ai</p>
               </div>
           </div>
          <button className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-red-400 transition-colors w-full">
            <Icons.Logout size={20} />
            <span className="text-sm font-medium">Sair</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Header */}
        <header className="h-16 border-b border-slate-800 bg-[#101a23]/80 backdrop-blur-sm flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <Icons.Menu size={20} />
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm text-slate-400">
              <span>Admin</span>
              <span>/</span>
              <span className="text-white capitalize">{currentView.replace('-', ' ')}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-slate-900 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-primary w-64"
              />
            </div>
            <button className="p-2 text-slate-400 hover:text-white relative">
              <Icons.Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#101a23]"></span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-auto bg-[#0f172a]">
           {children}
        </div>
      </main>
    </div>
  );
};
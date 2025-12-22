import React, { useState } from 'react';
import { Icons } from '../components/Icons';
import { useTheme } from '../context/ThemeContext';

export const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('Geral');
  
  // Mock state for notifications
  const [alerts, setAlerts] = useState({
    newResidents: true,
    pendingDocs: true,
    weeklyReport: false,
    apiErrors: true
  });

  const toggleAlert = (key: keyof typeof alerts) => {
    setAlerts(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const tabs = ['Geral', 'Perfil', 'Segurança', 'Notificações', 'Integrações'];

  const renderContent = () => {
    switch (activeTab) {
      case 'Geral':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
             <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <Icons.Settings size={20} className="text-blue-500" /> Preferências do Sistema
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Idioma</label>
                        <select className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors">
                            <option>Português (Brasil)</option>
                            <option>English</option>
                            <option>Español</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Fuso Horário</label>
                        <select className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors">
                            <option>(GMT-03:00) Brasília</option>
                            <option>(GMT-04:00) Manaus</option>
                            <option>(GMT-00:00) Lisboa</option>
                        </select>
                    </div>
                     <div className="md:col-span-2 flex items-center justify-between p-4 bg-slate-50 dark:bg-[#0f172a] rounded-lg border border-slate-200 dark:border-slate-700 transition-colors">
                        <div>
                            <span className="text-sm font-bold text-slate-900 dark:text-white block">Modo Escuro</span>
                            <span className="text-xs text-slate-500">Alternar entre tema claro e escuro</span>
                        </div>
                        <div 
                            className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors duration-200 ease-in-out ${theme === 'dark' ? 'bg-blue-500' : 'bg-slate-300'}`}
                            onClick={toggleTheme}
                        >
                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${theme === 'dark' ? 'left-7' : 'left-1'}`}></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );

      case 'Perfil':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {/* Profile Info */}
            <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <Icons.Users size={20} className="text-blue-500" /> Perfil de Administrador
                </h2>
                <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-700 border-4 border-slate-50 dark:border-[#0f172a] relative overflow-hidden group cursor-pointer">
                           {/* Placeholder Avatar */}
                           <div className="absolute inset-0 flex items-center justify-center text-slate-400 group-hover:bg-black/20 transition-colors">
                              <Icons.Users size={32} />
                           </div>
                        </div>
                        <button className="text-xs font-bold text-blue-500 hover:underline">Alterar Foto</button>
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        <div className="col-span-2 md:col-span-1">
                            <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Nome Completo</label>
                            <input type="text" defaultValue="Admin Usuário" className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Email</label>
                            <input type="email" defaultValue="admin@condominio.com" className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" />
                        </div>
                         <div className="col-span-2">
                            <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Cargo / Função</label>
                            <input type="text" defaultValue="Super Administrador" disabled className="w-full bg-slate-100 dark:bg-[#0f172a]/50 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-500 dark:text-slate-400 cursor-not-allowed" />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );

      case 'Segurança':
        return (
           <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
             <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <Icons.CheckPlain size={20} className="text-red-500" /> Segurança e Login
                </h2>
                
                <div className="space-y-4">
                    <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">Senha</p>
                            <p className="text-xs text-slate-500">Última alteração há 30 dias</p>
                        </div>
                        <button className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors">
                            Alterar Senha
                        </button>
                    </div>

                     <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">Autenticação de Dois Fatores (2FA)</p>
                            <p className="text-xs text-slate-500">Adicione uma camada extra de segurança.</p>
                        </div>
                        <button className="px-4 py-2 text-sm font-medium text-blue-500 border border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 rounded-lg transition-colors">
                            Configurar
                        </button>
                    </div>
                </div>
            </div>

             <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border border-red-200 dark:border-red-900/30 shadow-sm transition-colors">
                 <h2 className="text-lg font-bold text-red-600 dark:text-red-400 mb-2">Zona de Perigo</h2>
                 <p className="text-sm text-slate-500 mb-4">Ações irreversíveis para sua conta.</p>
                 <button className="text-red-600 dark:text-red-400 text-sm font-bold hover:underline">
                     Excluir conta permanentemente
                 </button>
             </div>
           </div>
        );

      case 'Notificações':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
             <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <Icons.Bell size={20} className="text-orange-500" /> Preferências de Alerta
                </h2>
                
                <div className="space-y-4">
                    {[
                        { key: 'newResidents', title: 'Novos Moradores', desc: 'Receber alerta quando um novo morador for cadastrado.' },
                        { key: 'pendingDocs', title: 'Documentos Pendentes', desc: 'Notificar sobre documentos que precisam de aprovação.' },
                        { key: 'weeklyReport', title: 'Relatório Semanal', desc: 'Resumo das atividades do assistente Zelo.' },
                        { key: 'apiErrors', title: 'Erros de Integração', desc: 'Alertas críticos sobre falhas na API do WhatsApp.' },
                    ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between py-3 border-b last:border-0 border-slate-100 dark:border-slate-800">
                            <div>
                                <p className="text-sm font-medium text-slate-900 dark:text-white">{item.title}</p>
                                <p className="text-xs text-slate-500">{item.desc}</p>
                            </div>
                             <div 
                                onClick={() => toggleAlert(item.key as any)}
                                className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors duration-200 ${alerts[item.key as keyof typeof alerts] ? 'bg-blue-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                             >
                                <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all duration-200 ${alerts[item.key as keyof typeof alerts] ? 'left-5.5' : 'left-0.5'}`}></div>
                            </div>
                        </div>
                    ))}
                </div>
             </div>

             <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
                 <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Canais de Contato</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <button className="flex items-center justify-between p-4 rounded-lg border border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors">
                         <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Email (admin@condominio.com)</span>
                         <Icons.CheckPlain size={16} className="text-blue-500" />
                     </button>
                      <button className="flex items-center justify-between p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                         <span className="text-sm font-medium text-slate-500">Push Mobile</span>
                         <span className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded text-slate-500">Desativado</span>
                     </button>
                 </div>
             </div>
          </div>
        );

      case 'Integrações':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
             {/* AI Config */}
             <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
                <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Icons.Bot size={20} className="text-blue-500" /> Assistente Zelo
                    </h2>
                    <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded">Ativo</span>
                </div>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between mb-3">
                            <label className="text-xs font-bold text-slate-500 uppercase">Personalidade</label>
                            <span className="text-xs font-bold text-blue-500">Amigável</span>
                        </div>
                        <input type="range" className="w-full h-2 bg-slate-100 dark:bg-[#0f172a] rounded-lg appearance-none cursor-pointer accent-blue-500" />
                        <div className="flex justify-between text-[10px] text-slate-500 mt-2">
                            <span>Formal</span>
                            <span>Neutro</span>
                            <span>Casual</span>
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Modelo LLM</label>
                        <select className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors">
                            <option>GPT-4 Turbo (Recomendado)</option>
                            <option>GPT-3.5 Turbo</option>
                            <option>Claude 3 Opus</option>
                        </select>
                        <p className="text-xs text-slate-500 mt-2 p-3 bg-slate-50 dark:bg-[#0f172a] rounded border border-slate-200 dark:border-slate-700 flex gap-2">
                            <Icons.Warning size={14} className="text-orange-500 shrink-0 mt-0.5" />
                            As alterações na personalidade do Zelo podem levar até 5 minutos para serem refletidas em todas as conversas ativas.
                        </p>
                    </div>
                </div>
            </div>

            {/* API Keys */}
            <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <Icons.Server size={20} className="text-blue-500" /> Chaves de API
                </h2>
                <div className="space-y-5">
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase block mb-1 flex justify-between">
                            OpenAI API Key
                            <span className="text-green-500 text-[10px] flex items-center gap-1"><Icons.CheckPlain size={10} /> Verificado</span>
                        </label>
                        <div className="relative">
                             <input type="password" value="sk-proj-****************" readOnly className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg pl-3 pr-10 py-2 text-sm text-slate-500 dark:text-slate-400 font-mono focus:outline-none focus:border-blue-500 transition-colors" />
                             <Icons.Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer" size={16} />
                        </div>
                    </div>
                     <div>
                        <label className="text-xs font-bold text-slate-500 uppercase block mb-1 flex justify-between">
                            WhatsApp Business API
                            <span className="text-red-500 text-[10px] flex items-center gap-1">Não Configurado</span>
                        </label>
                        <input type="text" placeholder="Cole sua chave aqui" className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white font-mono placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>
                </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center p-8">
        <div className="max-w-4xl w-full space-y-8">
            <div className="flex flex-wrap justify-between items-end gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Configurações</h1>
                    <p className="text-slate-500 dark:text-slate-400">Gerencie as preferências do sistema, perfil e do assistente Zelo.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-white rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Cancelar</button>
                    <button className="px-4 py-2 bg-primary hover:bg-blue-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-500/20 transition-colors">Salvar Alterações</button>
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="border-b border-slate-200 dark:border-slate-800 flex gap-8 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                    <button 
                        key={tab} 
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 pt-2 text-sm font-bold border-b-2 transition-colors whitespace-nowrap px-1 ${
                            activeTab === tab 
                            ? 'border-primary text-primary' 
                            : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
                        }`}
                    >
                        {tab === 'Integrações' ? 'Integrações (Zelo)' : tab}
                    </button>
                ))}
            </div>

            {/* Dynamic Content */}
            <div className="min-h-[400px]">
                {renderContent()}
            </div>
        </div>
    </div>
  );
};
import React from 'react';
import { Icons } from '../components/Icons';

export const Settings: React.FC = () => {
  return (
    <div className="flex justify-center p-8">
        <div className="max-w-4xl w-full space-y-8">
            <div className="flex flex-wrap justify-between items-end gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Configurações</h1>
                    <p className="text-slate-400">Gerencie as preferências do sistema e perfil.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 text-sm font-bold">Cancelar</button>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-500/20">Salvar Alterações</button>
                </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-slate-800 flex gap-8">
                {['Geral', 'Perfil', 'Notificações', 'Integrações (BIA)'].map((tab, i) => (
                    <button key={i} className={`pb-4 pt-2 text-sm font-bold border-b-2 transition-colors ${i === 0 ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-white'}`}>
                        {tab}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    {/* Profile */}
                    <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-800">
                        <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <Icons.Users size={20} className="text-blue-500" /> Perfil de Administrador
                        </h2>
                        <div className="flex items-start gap-6">
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-20 h-20 rounded-full bg-slate-700 border-4 border-[#0f172a]"></div>
                                <button className="text-xs font-bold text-blue-500 hover:underline">Alterar Foto</button>
                            </div>
                            <div className="flex-1 grid grid-cols-2 gap-4">
                                <div className="col-span-2 sm:col-span-1">
                                    <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Nome</label>
                                    <input type="text" defaultValue="Admin Usuário" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white" />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Email</label>
                                    <input type="email" defaultValue="admin@condominio.com" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Preferences */}
                    <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-800">
                        <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <Icons.Settings size={20} className="text-blue-500" /> Preferências do Sistema
                        </h2>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Idioma</label>
                                <select className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white">
                                    <option>Português (Brasil)</option>
                                    <option>English</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Fuso Horário</label>
                                <select className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white">
                                    <option>(GMT-03:00) Brasília</option>
                                </select>
                            </div>
                             <div className="col-span-2 flex items-center justify-between p-4 bg-[#0f172a] rounded-lg border border-slate-700">
                                <div>
                                    <span className="text-sm font-bold text-white block">Modo Escuro</span>
                                    <span className="text-xs text-slate-500">Tema do sistema</span>
                                </div>
                                <div className="w-10 h-6 bg-blue-500 rounded-full relative cursor-pointer">
                                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* AI Config */}
                    <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-800">
                        <div className="flex justify-between items-center mb-6">
                             <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                <Icons.Bot size={20} className="text-blue-500" /> Assistente BIA
                            </h2>
                            <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded">Ativo</span>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase">Personalidade</label>
                                    <span className="text-xs font-bold text-blue-500">Amigável</span>
                                </div>
                                <input type="range" className="w-full h-2 bg-[#0f172a] rounded-lg appearance-none cursor-pointer accent-blue-500" />
                                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                                    <span>Formal</span>
                                    <span>Casual</span>
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Modelo LLM</label>
                                <select className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white">
                                    <option>GPT-4 Turbo (Recomendado)</option>
                                    <option>GPT-3.5</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* API Keys */}
                    <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-800">
                         <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <Icons.Server size={20} className="text-blue-500" /> Chaves de API
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase block mb-1 flex justify-between">
                                    OpenAI
                                    <span className="text-green-500 text-[10px] flex items-center gap-1"><Icons.CheckPlain size={10} /> Verificado</span>
                                </label>
                                <input type="password" value="sk-proj-****************" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-400 font-mono" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
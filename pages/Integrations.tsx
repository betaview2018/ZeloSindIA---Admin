import React from 'react';
import { Icons } from '../components/Icons';

export const Integrations: React.FC = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
              <span className="hover:text-primary cursor-pointer">Admin</span>
              <Icons.CheckPlain size={12} className="-rotate-90" />
              <span className="hover:text-primary cursor-pointer">Configurações</span>
              <Icons.CheckPlain size={12} className="-rotate-90" />
              <span className="text-white">Integrações</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Ativar no WhatsApp</h1>
          <p className="text-slate-400 max-w-2xl">Configure a conexão entre n8n, FastAPI e WhatsApp Business API para habilitar o assistente BIA.</p>
      </div>

      {/* Visual Flow */}
      <div className="bg-[#1e293b] rounded-xl p-8 border border-slate-800 relative overflow-hidden">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-10">Fluxo de Dados</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10 gap-8 md:gap-0">
              {/* Node 1 */}
              <div className="flex flex-col items-center gap-3 w-32">
                  <div className="w-16 h-16 rounded-2xl bg-[#ff6d5a]/10 border border-[#ff6d5a]/30 flex items-center justify-center text-[#ff6d5a] shadow-lg shadow-[#ff6d5a]/5">
                      <Icons.Zap size={32} />
                  </div>
                  <div className="text-center">
                      <p className="font-bold text-white">Orquestrador</p>
                      <p className="text-xs text-slate-500">n8n Workflow</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-green-500/10 text-green-500 border border-green-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
                  </span>
              </div>

              {/* Connector 1 */}
              <div className="flex-1 h-[2px] w-full bg-gradient-to-r from-[#ff6d5a]/50 to-blue-500/50 relative hidden md:block">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1e293b] p-1 rounded-full border border-slate-700">
                      <Icons.CheckPlain size={12} className="text-slate-400 rotate-90" />
                  </div>
              </div>

              {/* Node 2 */}
              <div className="flex flex-col items-center gap-3 w-32">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-500 shadow-lg shadow-blue-500/5">
                      <Icons.Server size={32} />
                  </div>
                  <div className="text-center">
                      <p className="font-bold text-white">Backend</p>
                      <p className="text-xs text-slate-500">FastAPI Server</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span> Aguardando
                  </span>
              </div>

              {/* Connector 2 */}
              <div className="flex-1 h-[2px] w-full bg-slate-800 relative hidden md:block">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1e293b] p-1 rounded-full border border-slate-700">
                      <Icons.XPlain size={12} className="text-slate-500" />
                  </div>
              </div>

              {/* Node 3 */}
              <div className="flex flex-col items-center gap-3 w-32 opacity-60">
                  <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500">
                      <Icons.Phone size={32} />
                  </div>
                  <div className="text-center">
                      <p className="font-bold text-white">Canal</p>
                      <p className="text-xs text-slate-500">WhatsApp API</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-700/50 text-slate-500 border border-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> Inativo
                  </span>
              </div>
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 bg-[#1e293b] rounded-xl p-6 border border-slate-800">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                  <Icons.Settings className="text-blue-500" size={20} />
                  <h2 className="text-lg font-bold text-white">Configurações da API</h2>
              </div>
              
              <div className="space-y-5">
                  <div>
                      <label className="text-sm font-medium text-slate-300 block mb-2">URL do Endpoint (FastAPI)</label>
                      <div className="relative">
                          <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                          <input type="text" defaultValue="https://api.bia-assistant.com/v1/webhook" className="w-full bg-[#0f172a] border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white font-mono focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                      </div>
                      <p className="text-xs text-slate-500 mt-1">O endereço público onde o backend recebe as notificações.</p>
                  </div>

                  <div>
                      <label className="text-sm font-medium text-slate-300 block mb-2">Token de Acesso (Meta Business)</label>
                      <div className="relative">
                          <Icons.Settings className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                          <input type="password" value="EAAG..." className="w-full bg-[#0f172a] border border-slate-700 rounded-lg pl-10 pr-10 py-2.5 text-sm text-white font-mono focus:border-blue-500 outline-none" />
                          <Icons.Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 cursor-pointer hover:text-white" size={18} />
                      </div>
                  </div>
              </div>
          </div>

          {/* Actions & Logs */}
          <div className="flex flex-col gap-6">
              <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-800 flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                      <Icons.WifiOff className="text-red-500" size={24} />
                  </div>
                  <div>
                      <p className="text-lg font-bold text-white">Desconectado</p>
                      <p className="text-sm text-slate-500">A integração está inativa.</p>
                  </div>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-lg shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-colors">
                      <Icons.Zap size={18} /> Ativar Integração
                  </button>
              </div>

              <div className="bg-[#0f172a] rounded-xl border border-slate-800 flex flex-col overflow-hidden h-64 font-mono text-xs">
                  <div className="bg-[#1e293b] px-4 py-2 border-b border-slate-800 flex justify-between items-center">
                      <span className="text-slate-400">Console de Logs</span>
                      <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                      </div>
                  </div>
                  <div className="p-4 overflow-y-auto space-y-1.5">
                      <div className="text-slate-500"><span className="text-slate-600">14:32:05</span> [INFO] Initializing dashboard...</div>
                      <div className="text-slate-500"><span className="text-slate-600">14:32:06</span> [INFO] Checking n8n... <span className="text-green-500">OK</span></div>
                      <div className="text-red-400"><span className="text-slate-600">14:32:08</span> [ERROR] Meta Webhook verification failed.</div>
                      <div className="text-slate-600 pl-4">Details: 403 Forbidden.</div>
                      <div className="text-blue-500 animate-pulse mt-2">&gt; Aguardando...</div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};
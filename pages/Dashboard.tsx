import React from 'react';
import { Icons } from '../components/Icons';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Condo } from '../types';

const data = [
  { name: 'Seg', value: 400 },
  { name: 'Ter', value: 300 },
  { name: 'Qua', value: 550 },
  { name: 'Qui', value: 450 },
  { name: 'Sex', value: 650 },
  { name: 'Sab', value: 350 },
  { name: 'Dom', value: 200 },
];

const condos: Condo[] = [
  { id: '1', initials: 'SA', name: 'Solar das Águas', status: 'active', residents: 342, biaStatus: 'online', color: 'from-blue-500 to-cyan-400' },
  { id: '2', initials: 'RG', name: 'Residencial Gardens', status: 'active', residents: 128, biaStatus: 'online', color: 'from-emerald-500 to-green-400' },
  { id: '3', initials: 'PC', name: 'Plaza Central Tower', status: 'maintenance', residents: 450, biaStatus: 'paused', color: 'from-slate-500 to-slate-400' },
  { id: '4', initials: 'VN', name: 'Vila Nova', status: 'setup', residents: 0, biaStatus: 'offline', color: 'from-purple-500 to-pink-400' },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard Geral</h1>
          <p className="text-slate-400">Visão geral dos condomínios, métricas de residentes e performance da IA.</p>
        </div>
        <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-700 transition-colors">
          <Icons.Download size={18} />
          <span>Exportar Relatório</span>
        </button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Condomínios Totais', value: '12', sub: '+2 Novos', icon: Icons.Building, color: 'text-blue-500', bg: 'bg-blue-500/10' },
          { label: 'Moradores Ativos', value: '2,405', sub: '+128 Este mês', icon: Icons.Users, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
          { label: 'Docs Pendentes', value: '23', sub: 'Ação Necessária', icon: Icons.Activity, color: 'text-orange-500', bg: 'bg-orange-500/10' },
          { label: 'Interações BIA (24h)', value: '852', sub: '98% Sucesso', icon: Icons.Bot, color: 'text-purple-500', bg: 'bg-purple-500/10' },
        ].map((metric, i) => (
          <div key={i} className="bg-[#1e293b] p-6 rounded-xl border border-slate-800 shadow-sm relative overflow-hidden group">
             <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${metric.bg} ${metric.color}`}>
                    <metric.icon size={24} />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${metric.bg} ${metric.color}`}>
                    {metric.sub}
                </span>
             </div>
             <div>
                 <h3 className="text-3xl font-bold text-white mb-1">{metric.value}</h3>
                 <p className="text-sm text-slate-400 font-medium">{metric.label}</p>
             </div>
             {/* Decorational blur */}
             <div className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full ${metric.bg} blur-2xl opacity-50 group-hover:opacity-100 transition-opacity`}></div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Table */}
        <div className="lg:col-span-2 bg-[#1e293b] rounded-xl border border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-800 flex justify-between items-center">
            <h3 className="font-bold text-white">Condomínios Gerenciados</h3>
            <button className="text-sm text-primary hover:text-blue-400">Ver todos</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-400">
              <thead className="bg-slate-900/50 uppercase text-xs font-semibold">
                <tr>
                  <th className="px-6 py-4">Nome</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Moradores</th>
                  <th className="px-6 py-4">BIA Status</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {condos.map((condo) => (
                  <tr key={condo.id} className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${condo.color} flex items-center justify-center text-white text-xs font-bold`}>
                          {condo.initials}
                        </div>
                        <span className="font-medium text-white">{condo.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        condo.status === 'active' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                        condo.status === 'maintenance' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                        'bg-blue-500/10 text-blue-500 border-blue-500/20'
                      }`}>
                        {condo.status === 'active' ? 'Ativo' : condo.status === 'maintenance' ? 'Manutenção' : 'Configurando'}
                      </span>
                    </td>
                    <td className="px-6 py-4">{condo.residents || '-'}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                            condo.biaStatus === 'online' ? 'bg-green-500' :
                            condo.biaStatus === 'paused' ? 'bg-yellow-500' : 'bg-slate-500'
                        }`}></div>
                        <span className="capitalize">{condo.biaStatus}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                        <button className="text-slate-500 hover:text-white transition-colors">
                            <Icons.Settings size={18} />
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Side Charts & Stats */}
        <div className="flex flex-col gap-6">
            <div className="bg-[#1e293b] rounded-xl border border-slate-800 p-6">
                <h3 className="font-bold text-white mb-6">Volume de Interações (Semanal)</h3>
                <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <Tooltip 
                                cursor={{fill: '#334155', opacity: 0.2}}
                                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                            />
                            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill="#3b82f6" fillOpacity={0.6 + (index * 0.05)} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-2 px-2">
                    {data.map(d => <span key={d.name}>{d.name}</span>)}
                </div>
            </div>

            <div className="bg-[#1e293b] rounded-xl border border-slate-800 p-6">
                <h3 className="font-bold text-white mb-4">Tarefas Pendentes</h3>
                <div className="space-y-4">
                    {[
                        { title: 'Upload de Convenção', sub: 'Residencial Gardens • Há 2 dias', icon: Icons.Warning, color: 'text-orange-500' },
                        { title: 'Falha na Sincronização', sub: 'Plaza Central Tower • Há 3 horas', icon: Icons.Warning, color: 'text-red-500' },
                        { title: 'Aprovar Novos Cadastros', sub: 'Solar das Águas (5) • Hoje', icon: Icons.Bell, color: 'text-blue-500' },
                    ].map((task, i) => (
                        <div key={i} className="flex gap-3 items-start p-3 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
                            <task.icon size={18} className={`mt-0.5 ${task.color}`} />
                            <div>
                                <p className="text-sm font-medium text-slate-200">{task.title}</p>
                                <p className="text-xs text-slate-500">{task.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { Icons } from '../components/Icons';

export const Residents: React.FC = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Cadastrar Moradores</h1>
          <p className="text-slate-500 dark:text-slate-400">Gerencie e adicione novos residentes ao condomínio selecionado.</p>
        </div>
        <button className="flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors shadow-sm">
          <Icons.Upload size={18} />
          <span>Importar CSV</span>
        </button>
      </div>

      {/* Condo Selector */}
      <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-slate-800 p-6 mb-8 shadow-sm transition-colors">
        <div className="flex flex-col md:flex-row md:items-end gap-6">
            <div className="flex-1 max-w-md">
                <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Selecionar Condomínio</label>
                <div className="relative">
                    <select className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg px-4 py-3 appearance-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors">
                        <option>Condomínio Solar das Águas</option>
                        <option>Residencial Gardens</option>
                    </select>
                    <Icons.More className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none rotate-90" size={16} />
                </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-500 pb-3">
                <Icons.CheckPlain size={18} />
                <span>Sistema Online</span>
            </div>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/30">
            <h3 className="font-semibold text-slate-900 dark:text-white">Formulário de Cadastro</h3>
            <span className="bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded text-xs font-medium">Novo Registro</span>
        </div>
        
        <div className="p-6 space-y-4">
            {/* Headers */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-4 text-xs font-semibold uppercase text-slate-500 tracking-wider">
                <div className="col-span-4">Nome Completo</div>
                <div className="col-span-4">Telefone (Whatsapp)</div>
                <div className="col-span-3">Apartamento / Bloco</div>
                <div className="col-span-1 text-center">Ações</div>
            </div>

            {/* Existing Rows (Mock) */}
            {[
                { name: 'João Silva', phone: '(11) 99999-9999', apt: '104-B' },
                { name: 'Maria Oliveira', phone: '(11) 98888-8888', apt: '201-A' },
            ].map((resident, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-slate-50 dark:bg-[#0f172a] p-4 rounded-lg border border-slate-200 dark:border-slate-700 items-center transition-colors">
                     <div className="md:col-span-4">
                        <input type="text" defaultValue={resident.name} className="w-full bg-transparent border-none text-slate-900 dark:text-white focus:ring-0 p-0" />
                     </div>
                     <div className="md:col-span-4">
                        <input type="text" defaultValue={resident.phone} className="w-full bg-transparent border-none text-slate-900 dark:text-white focus:ring-0 p-0" />
                     </div>
                     <div className="md:col-span-3">
                        <input type="text" defaultValue={resident.apt} className="w-full bg-transparent border-none text-slate-900 dark:text-white focus:ring-0 p-0" />
                     </div>
                     <div className="md:col-span-1 flex justify-center">
                        <button className="text-slate-400 hover:text-red-500 dark:text-slate-500 dark:hover:text-red-400"><Icons.Trash size={18} /></button>
                     </div>
                </div>
            ))}

            {/* Empty Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-transparent p-4 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 items-center opacity-60 hover:opacity-100 transition-all">
                 <div className="md:col-span-4">
                    <input type="text" placeholder="Novo nome..." className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500" />
                 </div>
                 <div className="md:col-span-4">
                    <input type="text" placeholder="(00) 00000-0000" className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500" />
                 </div>
                 <div className="md:col-span-3">
                    <input type="text" placeholder="Apt..." className="w-full bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700 rounded px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500" />
                 </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8 pt-4 border-t border-slate-200 dark:border-slate-800">
                <button className="flex items-center gap-2 text-primary bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-lg text-sm font-medium border border-dashed border-primary/50">
                    <Icons.Plus size={16} />
                    Adicionar Morador
                </button>
                <div className="flex gap-3">
                    <button className="px-6 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium">Cancelar</button>
                    <button className="px-6 py-2 bg-primary hover:bg-blue-600 text-white rounded-lg text-sm font-medium shadow-lg shadow-blue-500/20 flex items-center gap-2">
                        <Icons.Save size={16} />
                        Salvar Cadastro
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* Tip Card */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800/30 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm transition-colors">
               <h4 className="text-xs font-bold uppercase text-slate-500 mb-4 tracking-wider">Registros Recentes</h4>
               <div className="space-y-4">
                   {[
                       {name: 'Carlos Mendes', apt: 'Apt 304', time: 'Há 2 min'},
                       {name: 'Ana Paula Souza', apt: 'Apt 102', time: 'Há 15 min'}
                   ].map((item, i) => (
                       <div key={i} className="flex justify-between items-center">
                           <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                                   <Icons.Plus size={14} />
                               </div>
                               <div>
                                   <p className="text-sm font-medium text-slate-900 dark:text-white">{item.name}</p>
                                   <p className="text-xs text-slate-500">{item.apt} • {item.time}</p>
                               </div>
                           </div>
                           <Icons.More size={16} className="text-slate-400 dark:text-slate-600" />
                       </div>
                   ))}
               </div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-white dark:from-blue-900/40 dark:to-slate-800 border border-blue-200 dark:border-blue-500/20 p-6 transition-colors">
              <div className="relative z-10 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30 shrink-0">
                      <Icons.Bot className="text-white" size={20} />
                  </div>
                  <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Dica do Zelo</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                        Ao cadastrar múltiplos moradores do mesmo apartamento, você pode duplicar a linha anterior para agilizar o preenchimento.
                      </p>
                      <button className="text-xs font-bold text-primary flex items-center gap-1 hover:text-blue-600 dark:hover:text-white transition-colors">
                          Pedir ajuda para cadastrar <Icons.CheckPlain size={12} className="rotate-45" />
                      </button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};
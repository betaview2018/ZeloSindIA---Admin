import React from 'react';
import { Icons } from '../components/Icons';

export const Documents: React.FC = () => {
  return (
    <div className="h-full flex flex-col p-6 max-w-[1200px] mx-auto gap-6">
        <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Upload de Documentos</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Carregue arquivos para treinar o assistente Zelo.</p>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
                <Icons.Bot size={16} className="text-blue-500" />
                <span className="text-xs text-blue-600 dark:text-blue-300 font-medium">Zelo Assistant Ready</span>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
            {/* Left Col */}
            <div className="lg:col-span-1 flex flex-col gap-6">
                <div>
                    <label className="text-sm font-medium text-slate-500 dark:text-slate-300 mb-2 block">Selecione o Condomínio</label>
                    <select className="w-full bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500">
                        <option>Condomínio Solar das Palmeiras</option>
                    </select>
                </div>
                
                <div className="flex-1 flex flex-col justify-center items-center border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#1e293b]/50 rounded-xl p-8 hover:bg-white dark:hover:bg-[#1e293b] hover:border-blue-500 dark:hover:border-blue-500 transition-all cursor-pointer group">
                    <div className="w-16 h-16 rounded-full bg-white dark:bg-[#0f172a] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                        <Icons.Upload size={24} className="text-blue-500" />
                    </div>
                    <p className="text-slate-900 dark:text-white font-bold mb-1">Arraste e solte arquivos</p>
                    <p className="text-xs text-slate-500 mb-4">PDF, Excel, TXT. Máx 50MB.</p>
                    <button className="bg-white dark:bg-[#0f172a] text-slate-700 dark:text-white px-4 py-2 rounded-lg text-sm border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 shadow-sm">Buscar</button>
                </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-2 flex flex-col gap-6 h-full min-h-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Arquivos Processados</h3>
                
                <div className="bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 rounded-lg p-4 flex items-center gap-4 shadow-sm transition-colors">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-[#0f172a] rounded flex items-center justify-center shrink-0">
                        <Icons.File className="text-slate-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between mb-1">
                            <p className="text-slate-900 dark:text-white text-sm font-medium truncate">Regimento_Interno_2024.pdf</p>
                            <span className="flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-500 bg-green-100 dark:bg-green-500/10 px-2 py-0.5 rounded-full">
                                <Icons.CheckPlain size={12} /> Extraído
                            </span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-[#0f172a] rounded-full h-1.5">
                            <div className="bg-green-500 h-1.5 rounded-full w-full"></div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-[#0f172a] rounded text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><Icons.Eye size={18} /></button>
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-[#0f172a] rounded text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"><Icons.Trash size={18} /></button>
                    </div>
                </div>

                <div className="flex-1 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden flex flex-col min-h-[300px] shadow-sm transition-colors">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#0f172a]/50">
                        <span className="text-sm font-medium text-slate-900 dark:text-white flex items-center gap-2"><Icons.File size={16} /> Revisão de Texto</span>
                    </div>
                    <textarea 
                        className="flex-1 w-full bg-transparent p-4 text-slate-600 dark:text-slate-300 text-sm font-mono resize-none focus:outline-none" 
                        defaultValue={`CAPÍTULO I - DO OBJETO\n\nArt. 1º. O presente Regimento Interno tem por finalidade disciplinar a conduta e o relacionamento entre os condôminos...`}
                    ></textarea>
                    <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#0f172a]/50 flex justify-between items-center">
                        <span className="text-xs text-slate-500 font-mono">1.248 caracteres</span>
                        <div className="flex gap-3">
                            <button className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm">Cancelar</button>
                            <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-blue-500/20">Salvar como RI</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
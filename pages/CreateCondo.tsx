import React from 'react';
import { Icons } from '../components/Icons';

export const CreateCondo: React.FC = () => {
  return (
    <div className="flex justify-center p-8">
        <div className="max-w-4xl w-full">
             <div className="mb-8">
                 <div className="flex items-center text-sm text-slate-500 mb-2">
                     <span>Home</span> <span className="mx-2">/</span> <span>Condomínios</span> <span className="mx-2">/</span> <span className="text-blue-500">Criar Condomínio</span>
                 </div>
                 <h1 className="text-4xl font-black text-white mb-2">Criar Novo Condomínio</h1>
                 <p className="text-slate-400">Insira os dados básicos abaixo para registrar um novo cliente na plataforma.</p>
             </div>

             <div className="bg-[#1e293b] border border-slate-800 rounded-xl p-8 shadow-2xl">
                 <form className="flex flex-col gap-8">
                     <div className="flex flex-col gap-6">
                         <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                             <Icons.Activity className="text-blue-500" size={20} />
                             <h3 className="text-lg font-semibold text-white">Informações de Contato</h3>
                         </div>
                         
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div className="col-span-1 md:col-span-2 space-y-2">
                                 <label className="text-sm font-medium text-white">Nome do Condomínio <span className="text-red-500">*</span></label>
                                 <div className="relative">
                                     <Icons.Building className="absolute left-3 top-3 text-slate-500" size={18} />
                                     <input type="text" placeholder="Ex: Residencial Flores da Cunha" className="w-full bg-[#0f172a] border border-slate-700 text-white rounded-lg pl-10 p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                                 </div>
                             </div>

                             <div className="space-y-2">
                                 <label className="text-sm font-medium text-white">E-mail de Contato <span className="text-red-500">*</span></label>
                                 <div className="relative">
                                     <Icons.Users className="absolute left-3 top-3 text-slate-500" size={18} />
                                     <input type="email" placeholder="contato@condominio.com" className="w-full bg-[#0f172a] border border-slate-700 text-white rounded-lg pl-10 p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                                 </div>
                             </div>

                             <div className="space-y-2">
                                 <label className="text-sm font-medium text-white">Telefone Principal</label>
                                 <div className="relative">
                                     <Icons.Phone className="absolute left-3 top-3 text-slate-500" size={18} />
                                     <input type="tel" placeholder="(00) 00000-0000" className="w-full bg-[#0f172a] border border-slate-700 text-white rounded-lg pl-10 p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                                 </div>
                             </div>
                         </div>
                     </div>

                     <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-800">
                         <button type="button" className="px-6 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 font-medium transition-colors">Cancelar</button>
                         <button type="button" className="px-8 py-2.5 rounded-lg text-white bg-blue-600 hover:bg-blue-500 font-bold shadow-lg shadow-blue-500/20 flex items-center gap-2">
                             <Icons.Save size={18} /> Salvar Registro
                         </button>
                     </div>
                 </form>
             </div>
        </div>
    </div>
  );
};
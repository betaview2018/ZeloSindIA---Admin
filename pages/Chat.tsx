import React from 'react';
import { Icons } from '../components/Icons';

export const Chat: React.FC = () => {
  return (
    <div className="flex h-full">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col h-full relative">
            {/* Header */}
            <div className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-[#101a23]">
                <div>
                    <h2 className="font-bold text-white">Chat de Teste</h2>
                    <p className="text-xs text-slate-500">Validação da assistente BIA</p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700 text-slate-400 hover:text-white text-xs font-medium">
                        <Icons.Trash size={14} /> Limpar
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary hover:bg-blue-600 text-white text-xs font-medium shadow-lg shadow-blue-500/20">
                        <Icons.Save size={14} /> Salvar
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="flex justify-center">
                    <span className="text-xs font-medium text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-800">Hoje, 10:23</span>
                </div>

                {/* Bot Message */}
                <div className="flex gap-4 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20">
                        <Icons.Bot size={16} />
                    </div>
                    <div>
                        <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-700 text-slate-200 text-sm shadow-sm">
                            <p>Olá! Eu sou a BIA, assistente virtual do condomínio. Como posso ajudar você hoje?</p>
                        </div>
                        <span className="text-[10px] text-slate-600 ml-1 mt-1 block">10:23 • BIA</span>
                    </div>
                </div>

                {/* User Message */}
                <div className="flex gap-4 max-w-[80%] ml-auto flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 shrink-0 border border-slate-600">
                        <Icons.Users size={16} />
                    </div>
                    <div>
                        <div className="bg-blue-600 p-4 rounded-2xl rounded-tr-none text-white text-sm shadow-md">
                            <p>Gostaria de saber se posso reservar a churrasqueira para este sábado.</p>
                        </div>
                        <span className="text-[10px] text-slate-500 mr-1 mt-1 block text-right">10:24 • Você</span>
                    </div>
                </div>

                {/* Bot Response */}
                <div className="flex gap-4 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20">
                        <Icons.Bot size={16} />
                    </div>
                    <div>
                        <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-700 text-slate-200 text-sm shadow-sm space-y-3">
                            <p>Deixe-me verificar as regras do <strong>Residencial Flores do Campo</strong>.</p>
                            <div className="flex items-center gap-2 p-2 bg-slate-900/50 rounded border border-slate-700/50">
                                <Icons.Check size={14} className="text-green-500" />
                                <span className="text-xs text-slate-400">Consultando Regulamento Interno (RI)...</span>
                            </div>
                            <p>Sim, é permitido reservar a churrasqueira aos sábados. O horário permitido é das 10h às 22h. Gostaria de prosseguir com a solicitação?</p>
                        </div>
                        <div className="flex gap-2 items-center mt-1 ml-1">
                            <span className="text-[10px] text-slate-600">10:24 • BIA</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-500/10 text-green-500 border border-green-500/20">Token count: 45</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-800 bg-[#101a23]">
                <div className="relative flex items-center max-w-4xl mx-auto">
                    <input 
                        type="text" 
                        placeholder="Digite sua mensagem para testar..." 
                        className="w-full bg-[#0f172a] border border-slate-700 text-white rounded-full py-3.5 pl-6 pr-14 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-slate-600 shadow-inner"
                    />
                    <button className="absolute right-2 p-2 bg-primary hover:bg-blue-600 text-white rounded-full transition-colors shadow-lg shadow-blue-500/25">
                        <Icons.Zap size={18} fill="currentColor" />
                    </button>
                </div>
                <p className="text-center text-[10px] text-slate-600 mt-2">Pressione Enter para enviar</p>
            </div>
        </div>

        {/* Right Sidebar - Config */}
        <div className="w-80 border-l border-slate-800 bg-[#101a23] hidden xl:flex flex-col p-6 gap-6">
            <div className="bg-[#1e293b] rounded-xl border border-slate-800 p-4 shadow-sm">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Icons.Settings size={18} className="text-blue-500" /> Configuração
                </h3>
                <div className="space-y-4">
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Selecionar Condomínio</label>
                        <select className="w-full bg-[#0f172a] border border-slate-700 text-slate-300 text-sm rounded-lg p-2.5">
                            <option>Residencial Flores do Campo</option>
                            <option>Solar das Águas</option>
                        </select>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 flex gap-3">
                         <Icons.CheckPlain className="text-green-500 shrink-0" size={20} />
                         <div>
                             <p className="text-sm font-bold text-green-500">RI Encontrado</p>
                             <p className="text-xs text-green-200/60 leading-tight mt-0.5">Regulamento Interno carregado e indexado.</p>
                         </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#1e293b] rounded-xl border border-slate-800 shadow-sm overflow-hidden flex-1 flex flex-col">
                <div className="p-4 border-b border-slate-800 bg-slate-800/50">
                    <h3 className="text-white font-semibold flex items-center gap-2">
                        <Icons.Zap size={18} className="text-yellow-500" /> Perguntas de Exemplo
                    </h3>
                </div>
                <div className="p-2 overflow-y-auto flex-1 space-y-1">
                    {['Qual o horário de silêncio?', 'Posso ter animais?', 'Como reservar o salão?', 'Onde fica o lixo?'].map((q, i) => (
                        <button key={i} className="w-full text-left text-xs text-slate-400 hover:text-white hover:bg-white/5 p-2.5 rounded transition-colors border border-transparent hover:border-slate-700">
                            "{q}"
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="bg-slate-800/50 border border-slate-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                    <Icons.Activity size={16} className="text-blue-400" />
                    <h4 className="text-xs font-bold text-white uppercase">Info do Sistema</h4>
                </div>
                <div className="grid grid-cols-2 gap-y-1 text-[10px] text-slate-500 font-mono">
                    <span>Model:</span> <span className="text-slate-300">GPT-4-Turbo</span>
                    <span>Latency:</span> <span className="text-slate-300">240ms</span>
                    <span>Vector Store:</span> <span className="text-green-400">Active</span>
                </div>
            </div>
        </div>
    </div>
  );
};
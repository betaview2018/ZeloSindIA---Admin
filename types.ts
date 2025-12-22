export type ViewState = 'dashboard' | 'residents' | 'chat' | 'settings' | 'integrations' | 'documents' | 'create-condo';

export interface Resident {
  id: string;
  name: string;
  phone: string;
  apt: string;
  timestamp: string;
}

export interface Condo {
  id: string;
  initials: string;
  name: string;
  status: 'active' | 'maintenance' | 'setup';
  residents: number;
  biaStatus: 'online' | 'offline' | 'paused';
  color: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  tokens?: number;
}
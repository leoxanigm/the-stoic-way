import { create } from 'zustand';
import axios from 'axios';

interface Agent {
  name: string;
  id: string;
  description: string;
  wikiLink: string;
  image: string;
  instruction: string;
}

interface UseAgentStore {
  selectedAgent: Agent | null;
  agents: Agent[];
  setSelectedAgent: (agentId: string) => void;
  fetchAgents: () => Promise<void>;
}

export const useAgentStore = create<UseAgentStore>((set, get) => ({
  selectedAgent: null,
  agents: [],
  setSelectedAgent: agentId => {
    if (get().agents.length === 0) get().fetchAgents();

    const agent = get().agents.find(agent => agent.id === agentId);
    set({ selectedAgent: agent || null });
  },
  fetchAgents: async () => {
    try {
      const response = await axios.get('/api/philosophers');
      set({ agents: response.data as Agent[] });
    } catch (error) {
      console.error('[useAgentStore] fetchAgents', error);
    }
  }
}));

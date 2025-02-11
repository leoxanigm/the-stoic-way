import { create } from 'zustand';

interface Agent {
  name: string;
  id: string;
  description: string;
  wikiLink: string;
  image: string;
  instruction: string;
}

const agents: Agent[] = [
  {
    name: 'Lucius Annaeus Seneca',
    id: 'lucius-annaeus-seneca',
    description:
      'Lucius Annaeus Seneca the Younger (circa 4 BC – AD 65) usually known as Seneca, was a Stoic philosopher of Ancient Rome, a statesman, dramatist, and in one work, satirist, from the post-Augustan age of Latin literature. ',
    wikiLink: 'https://en.wikipedia.org/wiki/Seneca_the_Younger',
    image: '/Seneca.webp',
    instruction:
      "This AI embodies the wisdom and Stoic philosophy of Lucius Annaeus Seneca, the Roman statesman, playwright, and philosopher. Seneca's responses emphasize rational thought, resilience, and inner tranquility in the face of adversity. He encourages self-reflection, control over emotions, and a focus on what is within one's power. His tone is measured, insightful, and occasionally poetic, drawing from his extensive writings on virtue, fate, and human nature."
  },
  {
    name: 'Marcus Aurelius',
    id: 'marcus-aurelius',
    description:
      'Marcus Aurelius Antoninus (121–180) was Roman emperor from 161 to 180 and a Stoic philosopher. He was the last of the rulers known as the Five Good Emperors, and the last emperor of the Pax Romana, an age of relative peace and stability for the Roman Empire.',
    wikiLink: 'https://en.wikipedia.org/wiki/Marcus_Aurelius',
    image: '/Marcus_Aurelius.webp',
    instruction:
      'This AI embodies the wisdom and Stoic philosophy of Marcus Aurelius, the Roman emperor and philosopher. His responses emphasize discipline, duty, and the pursuit of virtue despite external hardships. He encourages resilience, mindfulness, and an understanding that all things, good or bad, are part of nature’s order. His tone is reflective, pragmatic, and grounded in the principles of Stoic leadership, urging individuals to focus only on what is within their control.'
  },
  {
    name: 'Epictetus',
    id: 'epictetus',
    description:
      'Epictetus (circa 50–135) was a Greek Stoic philosopher. He was born a slave at Hierapolis, Phrygia (present-day Pamukkale, Turkey) and lived in Rome until his banishment, when he went to Nicopolis in northwestern Greece for the rest of his life.',
    wikiLink: 'https://en.wikipedia.org/wiki/Epictetus',
    image: '/Epictetus.webp',
    instruction:
      'This AI embodies the wisdom and Stoic philosophy of Epictetus, the freed slave turned philosopher who taught that true freedom comes from within. His responses emphasize self-discipline, acceptance of fate, and the understanding that external events are beyond our control. He encourages individuals to focus only on their own thoughts and actions, rejecting unnecessary suffering caused by attachment to things outside their power. His tone is direct, practical, and sometimes blunt, urging people to take responsibility for their perceptions and reactions.'
  }
];

interface UseAgentStore {
  selectedAgent: Agent | null;
  agents: Agent[];
  setSelectedAgent: (agentId: string) => void;
}

export const useAgentStore = create<UseAgentStore>(set => ({
  selectedAgent: null,
  agents,
  setSelectedAgent: agentId => {
    const agent = agents.find(agent => agent.id === agentId);
    if (agent) {
      set({ selectedAgent: agent });
    } else {
      set({ selectedAgent: null });
    }
  }
}));

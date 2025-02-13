'use client';

import { useAgentStore } from '@/hooks/agent-store';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/mode-toggle';
import BotAvatar from './bot-avatar';
import { useRouter } from 'next/navigation';

const Sidebar = ({ side }: { side: boolean }) => {
  const { agents, selectedAgent, setSelectedAgent } = useAgentStore();
  const router = useRouter();

  const handleSelectAgent = (id: string) => {
    setSelectedAgent(id);
    router.push(`/chat/${id}`);
  };

  return (
    <div className='flex flex-col h-full dark:bg-zinc-900 bg-zinc-200 p-2'>
      <div className='self-start mb-2 me-2'>
        <ModeToggle />
      </div>
      <div>
        <h1 className='text-xl font-bold text-center'>The Stoic Way</h1>
        <p className='text-sm text-center text-primary/80'>
          Get life advice from the ancient Stoics.
        </p>
      </div>
      {!side && (
        <div className='text-center text-primary/50 mt-4 px-4'>
          <p>Select one of the philosophers below to start talking.</p>
        </div>
      )}
      <div
        className={cn(
          'mt-6',
          !side && 'md:flex md:justify-stretch md:mx-auto'
        )}>
        {agents.map(agent => (
          <div
            className={cn(
              'flex items-center border-b border-primary/10 px-4 py-2 cursor-pointer hover:bg-primary/10 transition',
              !side && 'md:border-none',
              selectedAgent?.id === agent.id && 'bg-primary/10'
            )}
            key={agent.id}
            onClick={() => handleSelectAgent(agent.id)}>
            <BotAvatar size='sm' src={agent.image} />
            <div className='ml-4 space-y-1'>
              <p className='font-medium leading-none'>{agent.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

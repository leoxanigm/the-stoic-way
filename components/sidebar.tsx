'use client';

import { useAgentStore } from '@/hooks/select-agent';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const { agents, selectedAgent, setSelectedAgent } = useAgentStore();
  return (
    <div className='flex flex-col h-full text-primary bg-zinc-900 py-8'>
      <div>
        <h1 className='text-xl font-bold text-center'>The Stoic Way</h1>
        <p className='text-sm text-center text-primary/80'>
          Get life advice from the ancient Stoics.
        </p>
      </div>
      {!selectedAgent && (
        <div className='text-center text-primary/50 mt-4 px-4'>
          <p>Select one of the philosophers below to start talking.</p>
        </div>
      )}
      <div className='mt-6'>
        {agents.map(agent => (
          <div
            className={cn(
              'flex items-center border-b border-primary/10 px-4 py-2 cursor-pointer hover:bg-primary/10 transition',
              selectedAgent?.id === agent.id && 'bg-primary/10'
            )}
            key={agent.id}
            onClick={() => setSelectedAgent(agent.id)}
            >
            <Avatar className='h-10 w-10'>
              <AvatarImage src={agent.image} alt='Avatar' />
            </Avatar>
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

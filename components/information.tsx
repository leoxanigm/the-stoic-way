'use client';

import { useAgentStore } from '@/hooks/agent-store';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import PlaceholderAvatar from './placeholder-avatar';

const Information = () => {
  const { agents, selectedAgent } = useAgentStore();

  return (
    <div className='h-full p-4 pt-16 dark:bg-zinc-900 bg-zinc-200'>
      {!selectedAgent && (
        <div className='flex flex-col items-center h-full space-y-8'>
          <PlaceholderAvatar size='lg'/>
          <div>No philosopher selected</div>
        </div>
      )}
      {selectedAgent && (
        <div className='flex flex-col items-center h-full space-y-8'>
          <div className='relative rounded-full overflow-hidden border h-32 w-32'>
            <Avatar className='h-32 w-32'>
              <AvatarImage src={selectedAgent.image} alt='Avatar' />
            </Avatar>
          </div>
          <div>
            <h1 className='text-xl font-bold text-center mb-2'>
              {selectedAgent.name}
            </h1>
            <p className='text-sm text-primary/80 ps-2'>
              {selectedAgent.description}
              <a
                href={selectedAgent.wikiLink}
                target='_blank'
                className='text-xs text-primary text-right underline mt-2 block'>
                Wikipedia &gt;
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Information;

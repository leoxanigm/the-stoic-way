'use client';

import { useRouter } from 'next/navigation';

import { useAgentStore } from '@/hooks/agent-store';
import PlaceholderAvatar from '@/components/placeholder-avatar';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const ChatHeader = () => {
  const { selectedAgent } = useAgentStore();
  const router = useRouter();

  return (
    <div className='flex justify-between items-center border-b border-primary/10 md:p-2'>
      {!selectedAgent && (
        <div className=''>
          <PlaceholderAvatar size='sm' />
        </div>
      )}
      {selectedAgent && (
        <div className='flex items-center space-x-3'>
          <Button onClick={() => router.back()} size='icon' variant='ghost' className='flex md:hidden'>
            <ChevronLeft className='!size-6' strokeWidth='4' />
          </Button>
          <Avatar className='h-10 w-10'>
            <AvatarImage src={selectedAgent.image} alt='Avatar' />
          </Avatar>
          <p className='font-medium leading-none'>{selectedAgent.name}</p>
        </div>
      )}
    </div>
  );
};

export default ChatHeader;

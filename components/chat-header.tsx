'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

import { useAgentStore } from '@/hooks/agent-store';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import BotAvatar from '@/components/bot-avatar';

const ChatHeader = () => {
  const { selectedAgent } = useAgentStore();
  const router = useRouter();

  return (
    <div className='flex justify-between items-center border-b border-primary/10 md:p-2'>
      {!selectedAgent && (
        <div className=''>
          <BotAvatar size='sm' />
        </div>
      )}
      {selectedAgent && (
        <div className='flex items-center space-x-3'>
          <Button onClick={() => router.back()} size='icon' variant='ghost' className='flex md:hidden'>
            <ChevronLeft className='!size-6' strokeWidth='4' />
          </Button>
          <BotAvatar size='sm' />
          <p className='font-medium leading-none'>{selectedAgent.name}</p>
        </div>
      )}
    </div>
  );
};

export default ChatHeader;

'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft, Info } from 'lucide-react';

import { useAgentStore } from '@/hooks/agent-store';
import { Button } from '@/components/ui/button';
import BotAvatar from '@/components/bot-avatar';
import MobileInformation from './mobile-information';

const ChatHeader = () => {
  const { selectedAgent } = useAgentStore();
  const router = useRouter();

  return (
    <div className='flex justify-between items-center border-b border-primary/10 p-2'>
      {!selectedAgent && (
        <div className=''>
          <BotAvatar size='sm' />
        </div>
      )}
      {selectedAgent && (
        <>
          <div className='flex items-center space-x-3'>
            <Button
              onClick={() => router.push('/')}
              size='icon'
              variant='ghost'
              className='flex md:hidden'>
              <ChevronLeft className='!size-6' strokeWidth='4' />
            </Button>
            <BotAvatar size='sm' />
            <p className='font-medium leading-none'>{selectedAgent.name}</p>
          </div>
          <div className='relative'>
            <MobileInformation />
          </div>
          {/* <Button
              onClick={() => router.push('/')}
              size='icon'
              variant='ghost'
              className='flex md:hidden'>
              <Info className='!size-6' />
            </Button> */}
        </>
      )}
    </div>
  );
};

export default ChatHeader;

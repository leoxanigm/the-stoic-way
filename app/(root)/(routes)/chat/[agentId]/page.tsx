'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useAgentStore } from '@/hooks/agent-store';
import Chat from '@/components/chat';
import Information from '@/components/information';
import Sidebar from '@/components/sidebar';

const ChatPage = () => {
  const { selectedAgent } = useAgentStore();
  const router = useRouter();

  useEffect(() => {
    if (!selectedAgent) {
      router.push('/');
    }
  }, [selectedAgent?.id]);

  return (
    <div className='flex h-full'>
      <div className='hidden md:flex flex-1'>
        <Sidebar side={true} />
      </div>
      <div className='flex-[2]'>
        <Chat />
      </div>
      <div className='hidden md:flex flex-1'>
        <Information />
      </div>
    </div>
  );
};

export default ChatPage;

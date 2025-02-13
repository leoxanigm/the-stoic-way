'use client';

import { useAgentStore } from '@/hooks/agent-store';
import Chat from '@/components/chat';
import Information from '@/components/information';
import { useEffect } from 'react';

export default function Home() {
  const { agents, fetchAgents } = useAgentStore();

  useEffect(() => {
    agents.length === 0 && fetchAgents();
  }, []);

  return (
    <div className='flex h-full'>
      <div className='flex-[2]'>
        <Chat />
      </div>
      <div className='flex-1'>
        <Information />
      </div>
    </div>
  );
}

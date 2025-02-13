'use client';
import { useEffect } from 'react';

import { useAgentStore } from '@/hooks/agent-store';
import Sidebar from '@/components/sidebar';

export default function Home() {
  const { agents, fetchAgents } = useAgentStore();

  useEffect(() => {
    agents.length === 0 && fetchAgents();
  }, []);

  return (
    <div className='h-full'>
      <Sidebar side={false}/>
    </div>
  );
}

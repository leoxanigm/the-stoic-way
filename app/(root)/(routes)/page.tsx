'use client';
import { useEffect } from 'react';

import { useAgentStore } from '@/hooks/agent-store';
import Sidebar from '@/components/sidebar';

export default function Home() {
  const { agents, fetchAgents } = useAgentStore();

  useEffect(() => {
    if (agents.length === 0) fetchAgents();
  }, [agents.length, fetchAgents]);

  return (
    <div className='h-full'>
      <Sidebar side={false} />
    </div>
  );
}

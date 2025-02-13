'use client';

import { cn } from '@/lib/utils';
import { useAgentStore } from '@/hooks/agent-store';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const BotAvatar = ({ size, src }: { size: 'sm' | 'lg'; src?: string }) => {
  const { selectedAgent } = useAgentStore();

  return selectedAgent || src ? (
    <Avatar className={cn(size === 'lg' ? 'h-32 w-32' : 'h-10 w-10')}>
      <AvatarImage src={src ?? selectedAgent?.image} alt='Philosopher AI' />
    </Avatar>
  ) : (
    <div
      className={cn(
        'relative rounded-full overflow-hidden border',
        size === 'lg' ? 'h-32 w-32' : 'h-10 w-10'
      )}>
      <div
        className={cn(
          'bg-primary/50 rounded-full absolute left-1/2 -translate-x-1/2',
          size === 'lg' ? 'h-12 w-12 top-2' : 'h-4 w-4 top-[0.75]'
        )}></div>
      <div
        className={cn(
          'bg-primary/50 rounded-full absolute left-1/2 -translate-x-1/2 top-1/2',
          size === 'lg' ? 'h-28 w-28' : 'h-8 w-8'
        )}></div>
    </div>
  );
};

export default BotAvatar;

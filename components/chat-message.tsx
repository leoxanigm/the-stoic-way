'use client';

import { cn } from '@/lib/utils';
import BotAvatar from '@/components/bot-avatar';

export interface ChatMessageProps {
  id?: string;
  role: 'system' | 'user' | 'assistant' | 'data';
  content?: string;
  isLoading?: boolean;
}

const ChatMessage = ({ role, content }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        'group flex items-start gap-x-3 py-4 w-full',
        role === 'user' && 'justify-end'
      )}>
      {role !== 'user' && <BotAvatar size='sm' />}
      <div className='rounded-md px-4 py-2 max-w-sm bg-primary/10'>
        {content?.split('\n').map((line, index) => (
          <p key={index} className='mb-1'>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ChatMessage;

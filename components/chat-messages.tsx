'use client';

import { useEffect, useRef } from 'react';
import { UIMessage } from 'ai';

import { cn } from '@/lib/utils';
import ChatMessage from '@/components/chat-message';
import { useAgentStore } from '@/hooks/agent-store';

interface ChatMessagesProps {
  className?: string;
  isLoading?: boolean;
  messages: UIMessage[];
  messageError?: string;
}

const ChatMessages = ({
  className,
  messages,
  messageError
}: ChatMessagesProps) => {
  const { selectedAgent } = useAgentStore();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div
      className={cn(
        className,
        'flex flex-col gap-y-2 overflow-hidden overflow-y-scroll py-2'
      )}>
      {selectedAgent && (
        <ChatMessage
          role='system'
          content={`Hello, I am ${selectedAgent?.name}, How can I help you today?`}
        />
      )}

      {messages.map(message => (
        <div key={message.id}>
          <ChatMessage role={message.role} content={message.content} />
        </div>
      ))}
      {messageError && <div>{messageError}</div>}
      <div ref={scrollRef}></div>
    </div>
  );
};

export default ChatMessages;

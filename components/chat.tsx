'use client';

import { useChat } from '@ai-sdk/react';

import { useAgentStore } from '@/hooks/agent-store';
import ChatHeader from '@/components/chat-header';
import ChatForm from '@/components/chat-form';
import ChatMessages from '@/components/chat-messages';
import { useState } from 'react';

const Chat = () => {
  const { selectedAgent } = useAgentStore();
  const [messageError, setMessageError] = useState('');
  const { messages, input, handleInputChange, handleSubmit, setMessages } =
    useChat({
      api: `/api/chat/${selectedAgent?.id}`,
      onError: () =>
        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            content: 'I am sorry, I am not able to respond at the moment.',
            id: Date.now().toString()
          }
        ]),
      onResponse: () => setMessageError('')
    });

  return (
    <div className='flex flex-col h-full px-4'>
      <ChatHeader />
      <ChatMessages
        messages={messages}
        messageError={messageError}
        className='flex-1'
      />
      <ChatForm
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Chat;

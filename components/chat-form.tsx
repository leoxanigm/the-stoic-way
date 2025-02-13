'use client';

import { SendHorizonal } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormEvent, FormEventHandler, useState } from 'react';

interface ChatFormProps {
  input: string;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
}

const ChatForm = ({
  input,
  handleInputChange,
  handleSubmit
}: ChatFormProps) => {
  return (
    <form
      className='border-t border-primary/10 py-4 flex items-center gap-x-2'
      onSubmit={handleSubmit}>
      <Input
        value={input}
        onChange={handleInputChange}
        placeholder='Type a message...'
        className='rounded-lg bg-primary/10'
      />
      <Button variant='ghost' className='h-6 w-6'>
        <SendHorizonal />
      </Button>
    </form>
  );
};

export default ChatForm;

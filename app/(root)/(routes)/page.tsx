import Chat from '@/components/chat';
import Information from '@/components/information';

export default function Home() {
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

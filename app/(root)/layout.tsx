import Chat from '@/components/chat';
import Information from '@/components/information';
import Sidebar from '@/components/sidebar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full flex bg-secondary'>
      <div className='flex-1'>
        <Sidebar />
      </div>
      <div className='hidden md:block flex-[2]'><Chat /></div>
      <div className='hidden md:block flex-1'>
        <Information />
      </div>
    </div>
  );
};

export default RootLayout;

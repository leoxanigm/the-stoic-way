import Sidebar from '@/components/sidebar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full flex bg-secondary max-w-screen-2xl mx-auto'>
      <div className='flex-1'>
        {/* Always visible sidebar */}
        <Sidebar />
      </div>
      <div className='hidden md:block flex-[3]'>{children}</div>
    </div>
  );
};

export default RootLayout;

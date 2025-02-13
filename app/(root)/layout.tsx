import Sidebar from '@/components/sidebar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full bg-secondary max-w-screen-2xl mx-auto'>
      {children}
    </div>
  );
};

export default RootLayout;

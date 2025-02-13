'use client';

import { Info } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import Information from '@/components/information';

const MobileInformation = () => {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden pr-4'>
        <Info />
      </SheetTrigger>
      <SheetContent side='right' className='p-0 w-full'>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <Information />
      </SheetContent>
    </Sheet>
  );
};

export default MobileInformation;

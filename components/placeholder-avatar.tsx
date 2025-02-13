'use client';

import { cn } from '@/lib/utils';

const PlaceholderAvatar = ({ size }: { size: 'sm' | 'lg' }) => {
  return (
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

export default PlaceholderAvatar;

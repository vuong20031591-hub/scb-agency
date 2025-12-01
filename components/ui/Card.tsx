'use client';

import { cn } from '@/lib/utils';
import type { CardProps } from '@/types';

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md overflow-hidden',
        hover && 'transition-all duration-300 hover:shadow-xl hover:scale-[1.02]',
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;

'use client';

import { cn } from '@/lib/utils';
import type { BadgeProps } from '@/types';

const variantStyles = {
  hot: 'bg-[#E56F66] text-white',
  new: 'bg-primary text-white',
  default: 'bg-gray-200 text-gray-700',
};

export function Badge({ text, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-1.5 py-0.5 text-xs font-medium rounded-[5px_5px_5px_0px]',
        variantStyles[variant]
      )}
    >
      {text}
    </span>
  );
}

export default Badge;

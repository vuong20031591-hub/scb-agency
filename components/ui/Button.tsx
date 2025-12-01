'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ButtonProps } from '@/types';

const variantStyles = {
  primary: 'bg-primary hover:bg-primary-dark text-white',
  secondary: 'bg-secondary hover:bg-primary-light text-white',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  className,
  icon,
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-300',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  // If href is provided, render as Link
  if (href) {
    const isExternal = href.startsWith('http://') || href.startsWith('https://');
    
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseStyles}
        >
          {icon && <span className="flex-shrink-0">{icon}</span>}
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={baseStyles}>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button type="button" onClick={onClick} className={baseStyles}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
}

export default Button;

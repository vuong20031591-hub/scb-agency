'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
  containerClassName?: string;
}

/**
 * OptimizedImage component - wrapper around Next.js Image with:
 * - Lazy loading by default (except for priority images)
 * - Blur placeholder support
 * - Error handling with fallback
 * - Proper sizing attributes
 * 
 * Requirements: 13.1 - Use Next.js Image component with lazy loading and optimization
 */
export function OptimizedImage({
  src,
  alt,
  fallbackSrc = '/images/placeholder.svg',
  containerClassName,
  className,
  priority = false,
  loading,
  ...props
}: OptimizedImageProps) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    if (!error && fallbackSrc) {
      setError(true);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={cn('relative overflow-hidden', containerClassName)}>
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
        onError={handleError}
        onLoad={handleLoad}
        priority={priority}
        loading={priority ? undefined : (loading || 'lazy')}
        {...props}
      />
    </div>
  );
}

export default OptimizedImage;

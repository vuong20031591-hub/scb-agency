'use client';

import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

/**
 * Custom hook to track scroll position
 * @returns Current scroll position { x, y }
 */
export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    // Set initial position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}

/**
 * Custom hook to check if scroll position is past a threshold
 * @param threshold - Scroll threshold in pixels
 * @returns Boolean indicating if scrolled past threshold
 */
export function useScrollPastThreshold(threshold: number = 0): boolean {
  const { y } = useScrollPosition();
  return y > threshold;
}

export default useScrollPosition;

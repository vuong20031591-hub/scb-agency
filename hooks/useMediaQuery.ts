'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook to check if a media query matches
 * @param query - CSS media query string
 * @returns Boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    // Set initial value
    setMatches(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Modern browsers
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}

// Predefined breakpoint hooks based on Requirements 14.1-14.4
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 767px)');
}

export function useIsTablet(): boolean {
  return useMediaQuery('(min-width: 768px) and (max-width: 1239px)');
}

export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 1240px)');
}

export default useMediaQuery;

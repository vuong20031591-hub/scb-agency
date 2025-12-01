'use client';

import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import type { TypedTextProps } from '@/types';

export function TypedText({
  strings,
  typeSpeed = 100,
  backSpeed = 50,
  loop = true,
  className,
}: TypedTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const currentString = strings[currentStringIndex] || '';

  const typeNextChar = useCallback(() => {
    if (displayText.length < currentString.length) {
      setDisplayText(currentString.slice(0, displayText.length + 1));
    } else {
      // Finished typing, pause before deleting
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, 2000); // Pause for 2 seconds
    }
  }, [displayText, currentString]);

  const deleteChar = useCallback(() => {
    if (displayText.length > 0) {
      setDisplayText(displayText.slice(0, -1));
    } else {
      // Finished deleting, move to next string
      const nextIndex = (currentStringIndex + 1) % strings.length;
      
      // If not looping and we've gone through all strings, stop
      if (!loop && nextIndex === 0) {
        setDisplayText(strings[0]);
        return;
      }
      
      setCurrentStringIndex(nextIndex);
      setIsTyping(true);
    }
  }, [displayText, currentStringIndex, strings, loop]);

  useEffect(() => {
    if (isPaused) return;

    const speed = isTyping ? typeSpeed : backSpeed;
    const action = isTyping ? typeNextChar : deleteChar;

    const timer = setTimeout(action, speed);
    return () => clearTimeout(timer);
  }, [isTyping, isPaused, typeSpeed, backSpeed, typeNextChar, deleteChar]);

  return (
    <span className={cn('inline-block', className)}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default TypedText;

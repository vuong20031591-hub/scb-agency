import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and tailwind-merge
 * This utility helps merge Tailwind CSS classes without conflicts
 * 
 * @param inputs - Class values to merge
 * @returns Merged class string
 * 
 * @example
 * cn('px-4 py-2', 'bg-blue-500', condition && 'text-white')
 * cn('px-4', { 'bg-red-500': isError, 'bg-green-500': isSuccess })
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date string to a readable format
 * 
 * @param dateString - ISO date string
 * @param locale - Locale for formatting (default: 'en-US')
 * @returns Formatted date string
 */
export function formatDate(dateString: string, locale: string = 'en-US'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Formats a date string to short format (M/D/YYYY)
 * 
 * @param dateString - ISO date string
 * @returns Formatted date string
 */
export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

/**
 * Truncates text to a specified length with ellipsis
 * 
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Generates a slug from a string
 * 
 * @param text - Text to convert to slug
 * @returns URL-friendly slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Checks if a URL is external
 * 
 * @param url - URL to check
 * @returns True if URL is external
 */
export function isExternalUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//');
}

/**
 * Debounce function for performance optimization
 * 
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: unknown, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

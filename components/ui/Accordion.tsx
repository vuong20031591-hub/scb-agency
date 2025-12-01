'use client';

import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import type { AccordionProps } from '@/types';

export function Accordion({ items, allowMultiple = false, defaultOpen }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    if (defaultOpen) {
      initial.add(defaultOpen);
    }
    return initial;
  });

  const toggleItem = useCallback((id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(id);
      }
      
      return newSet;
    });
  }, [allowMultiple]);

  return (
    <div role="region" aria-label="FAQ Accordion">
      {items.map((item, index) => {
        const isOpen = openItems.has(item.id);
        const isLast = index === items.length - 1;
        const panelId = `accordion-panel-${item.id}`;
        const headerId = `accordion-header-${item.id}`;
        
        return (
          <div
            key={item.id}
            className={cn(
              'border-t border-[rgba(38,38,38,0.07)]',
              isLast && 'border-b'
            )}
          >
            <button
              type="button"
              id={headerId}
              onClick={() => toggleItem(item.id)}
              className={cn(
                'w-full flex items-center justify-between py-[18px] text-left',
                'bg-transparent hover:opacity-80 transition-opacity duration-200',
                'text-[18px] font-medium text-[rgb(38,38,38)]',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
              )}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span>{item.title}</span>
              <svg
                className={cn(
                  'w-5 h-5 transition-transform duration-300 opacity-75 flex-shrink-0 ml-4',
                  isOpen && 'rotate-180'
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              )}
              hidden={!isOpen}
            >
              <div className="pb-[30px] text-[16px] text-[rgba(38,38,38,0.8)] leading-[1.43]">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;

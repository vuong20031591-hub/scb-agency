'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavItem } from '@/types';
import { Badge, Button } from '@/components/ui';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleLinkClick = () => {
    onClose();
    setExpandedItems([]);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 z-[998] lg:hidden transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in Menu */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-[280px] bg-[#0e1111] z-[999] lg:hidden',
          'transform transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="px-4 py-2">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.id}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => toggleExpanded(item.id)}
                      className="w-full flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        {item.label}
                        {item.badge && <Badge text={item.badge} variant="hot" />}
                      </span>
                      <svg
                        className={cn(
                          'w-4 h-4 transition-transform',
                          expandedItems.includes(item.id) && 'rotate-180'
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {/* Submenu */}
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        expandedItems.includes(item.id) ? 'max-h-96' : 'max-h-0'
                      )}
                    >
                      <ul className="pl-4 py-2 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.id}>
                            <Link
                              href={child.href}
                              onClick={handleLinkClick}
                              className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className="flex items-center gap-2 px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.label}
                    {item.badge && <Badge text={item.badge} variant="hot" />}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="absolute bottom-8 left-4 right-4">
          <Button
            variant="primary"
            size="md"
            href="/get-in-touch"
            className="w-full justify-center"
            onClick={handleLinkClick}
          >
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;

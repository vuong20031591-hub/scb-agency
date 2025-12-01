'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavItem } from '@/types';
import { Badge } from '@/components/ui';
import { cn } from '@/lib/utils';

// Icon mapping cho dropdown items
const dropdownIcons: Record<string, string> = {
  'facebook-ads': '/icons/facebook.svg',
  'google-ads': '/icons/google.svg',
  'tiktok-ads': '/icons/tiktok.svg',
  'bing-ads': '/icons/bing.svg',
  'facebook-insights': '/icons/facebook.svg',
  'google-insights': '/icons/google.svg',
  'tiktok-insights': '/icons/tiktok.svg',
  'bing-insights': '/icons/bing.svg',
};

interface NavigationProps {
  items: NavItem[];
  className?: string;
}

export function Navigation({ items, className }: NavigationProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setOpenDropdown(id);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  // Lấy icon cho dropdown item
  const getIcon = (id: string) => {
    return dropdownIcons[id] || null;
  };

  return (
    <nav className={cn('hidden lg:block', className)}>
      <ul className="flex items-center gap-1">
        {items.map((item) => (
          <li
            key={item.id}
            className="relative group"
            onMouseEnter={() => item.children && handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            {/* HOT badge positioned above */}
            {item.badge && (
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                <Badge text={item.badge} variant="hot" />
              </div>
            )}
            <Link
              href={item.href}
              className={cn(
                'flex items-center gap-1.5 px-4 py-2 text-base font-normal text-white hover:text-[#19B5AB] transition-colors',
                item.children && 'cursor-pointer'
              )}
            >
              {item.label}
              {item.children && (
                <svg
                  className={cn(
                    'w-3 h-3 transition-transform duration-300',
                    openDropdown === item.id && 'rotate-180'
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>

            {/* Dropdown Menu với animation */}
            {item.children && (
              <div
                className={cn(
                  'absolute top-full left-[-28px] mt-0 w-[280px] bg-white rounded-[8px] p-[12px] z-[1000]',
                  'transition-all duration-300 ease-out',
                  openDropdown === item.id
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                )}
              >
                {item.children.map((child) => {
                  const icon = getIcon(child.id);
                  return (
                    <Link
                      key={child.id}
                      href={child.href}
                      className="flex items-center gap-[5px] px-[16px] py-[10px] text-[16px] text-[#262626] hover:text-[#15757c] hover:bg-gray-50 rounded-[5px] transition-all"
                    >
                      {icon && (
                        <div className="w-[20px] h-[20px] flex-shrink-0 rounded-[3px] overflow-hidden">
                          <Image
                            src={icon}
                            alt=""
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                        </div>
                      )}
                      <span>{child.label}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

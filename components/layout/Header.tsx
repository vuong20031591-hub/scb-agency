'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { useScrollPastThreshold } from '@/hooks';
import { mainNavigation } from '@/data/navigation';
import { siteConfig } from '@/data/site-config';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollPastThreshold(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ease-out',
          isScrolled
            ? 'bg-[#010c0b]/95 backdrop-blur-sm shadow-lg'
            : 'bg-transparent',
          className
        )}
      >
        <div className="w-full max-w-[1200px] mx-auto px-[15px] h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="sr-only">{siteConfig.name}</h1>
            <div className="relative w-[140px] h-[40px]">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                fill
                className="object-contain"
                priority
                sizes="140px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <Navigation items={mainNavigation} />

          {/* CTA Button - Desktop - Filled teal button like original */}
          <div className="hidden lg:block">
            <Link
              href="/get-in-touch"
              className="px-8 py-3 text-sm font-medium text-white bg-[#19B5AB] hover:bg-[#15757C] rounded-full transition-colors"
            >
              GET IN TOUCH
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-white"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        items={mainNavigation}
      />
    </>
  );
}

export default Header;

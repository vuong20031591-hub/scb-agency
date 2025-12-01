'use client';

import Link from 'next/link';
import { footerNavigation } from '@/data/navigation';
import { siteConfig } from '@/data/site-config';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn('bg-[#0e1111] text-white/80', className)}>
      <div className="w-full max-w-[1200px] mx-auto px-[15px] pt-[70px] pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* About SCB Column */}
          <div>
            <h3 className="text-lg font-semibold text-white/90 mb-6">About SCB</h3>
            <ul className="space-y-4">
              {footerNavigation.aboutScb.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold text-white/90 mb-6">Services</h3>
            <ul className="space-y-4">
              {footerNavigation.services.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-lg font-semibold text-white/90 mb-6">Contact Us</h3>
            <div className="space-y-4">
              {/* Phone - Large */}
              <p className="text-2xl md:text-3xl font-light text-white/90">
                {siteConfig.contact.phone}
              </p>
              
              {/* Email */}
              <div className="text-sm text-white/80">
                <p>Mailbox: {siteConfig.contact.email}</p>
                <p>mmkj1118@163.com</p>
              </div>
              
              {/* GET IN TOUCH Button - Outline style */}
              <Link
                href="/get-in-touch"
                className="inline-block px-8 py-3 text-sm text-white/80 border border-white/50 rounded hover:bg-white/10 hover:text-white transition-colors"
              >
                GET IN TOUCH
              </Link>
              
              {/* Social Icons */}
              <div className="flex items-center gap-6 pt-4">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="2" />
                    <path d="M16 8h-2a2 2 0 0 0-2 2v12M8 12h8" />
                  </svg>
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>
            Copyright © {currentYear}{' '}
            <Link href="/" className="hover:text-white transition-colors">
              SLOW CROSS AGENCY
            </Link>
            {' '}Terms of service -{' '}
            Powered by{' '}
            <a
              href="https://www.funion.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              FUNION DIGI-MARKETING
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

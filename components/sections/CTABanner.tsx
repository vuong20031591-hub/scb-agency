'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { CTABannerProps } from '@/types';

// Arrow icon matching original ri-arrow-right-line
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.172 11L10.808 5.636L12.222 4.222L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z" />
    </svg>
  );
}

export function CTABanner({ text, ctaText, ctaHref }: CTABannerProps) {
  return (
    <section className="cta-gradient py-16 md:py-20">
      <div className="w-full max-w-[1200px] mx-auto px-[15px]">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Text + Button with animation */}
          <motion.div 
            className="w-full md:w-[62.5%]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white text-[28px] md:text-[35px] font-normal leading-[1.15] mb-8">
              {text}
            </p>
            <motion.a
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-[#4C8075] hover:bg-[#3d6a60] text-white text-base font-normal py-[13px] px-[35px] rounded-[3px] transition-colors group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {ctaText}
              <ArrowIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          {/* Right: Image with animation */}
          <motion.div 
            className="w-full md:w-[37.5%] flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/digital-ads.png"
              alt="Digital Ads"
              width={252}
              height={252}
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;

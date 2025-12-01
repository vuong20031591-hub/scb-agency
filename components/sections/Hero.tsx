'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TypedText } from '@/components/ui/TypedText';
import type { HeroProps, USPItem } from '@/types';

// Animation variants - using cubic bezier for easeOut
const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut, delay: 0.3 },
  },
};

// Check icon SVG component - matching original website style
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn('w-[18px] h-[18px]', className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
    </svg>
  );
}

// Arrow icon for CTA button
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn('w-4 h-4 ml-2', className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// USP Item component - matching original: font-size 16px, font-weight 700, line-height 28.8px
function USPItemComponent({ item }: { item: USPItem }) {
  return (
    <div className="flex items-center gap-2 text-white leading-[1.8]">
      <span className="text-[#15757c] flex-shrink-0">
        <CheckIcon />
      </span>
      <span className="text-[16px] font-bold">{item.text}</span>
    </div>
  );
}

export function Hero({
  title,
  usps,
  ctaText,
  ctaHref,
  image,
}: HeroProps) {
  return (
    <section className="hero-gradient pt-[100px] pb-[20px] w-full min-w-full">
      <div className="w-full max-w-[1200px] mx-auto px-[15px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Left Content - max-width ~710px like original */}
          <motion.div 
            className="flex-1 text-left max-w-[710px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Title Block - SLOW CROSS BORDER + Typed text - Hidden on mobile like original */}
            <motion.div className="mb-[4px] hidden md:block" variants={itemVariants}>
              <p className="text-[16px] leading-[22.86px]">
                <span className="text-[#15757c] font-bold">{title}</span>
                <span className="text-white ml-1">
                  <TypedText
                    strings={['Digital Marketing Agency']}
                    typeSpeed={80}
                    backSpeed={40}
                    loop={true}
                    className=""
                  />
                </span>
              </p>
            </motion.div>

            {/* Main Headlines - Italic style on mobile like original */}
            <motion.div className="mb-[24px]" variants={itemVariants}>
              <h1 className="text-[32px] md:text-[48px] lg:text-[60px] font-bold text-white md:text-[#15757c] leading-[1.2] md:leading-[1.03] italic md:not-italic">
                Reduce
              </h1>
              <h1 className="text-[32px] md:text-[48px] lg:text-[60px] font-bold text-white md:text-[#15757c] leading-[1.2] md:leading-[1.03] italic md:not-italic">
                Campaign Cost
              </h1>
              <h2 className="text-[32px] md:text-[48px] lg:text-[60px] font-bold text-white md:text-[#15757c] leading-[1.2] md:leading-[1.03] italic md:not-italic">
                Scale Your Business
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-[#9ca3af] text-[16px] md:text-[20px] leading-[1.6] md:leading-[32px] mb-[24px] max-w-[542px]"
              variants={itemVariants}
            >
              Cost-effective agency ad account for all size of business
            </motion.p>

            {/* USP Items - Hidden on mobile like original */}
            <motion.div className="hidden md:flex flex-col gap-[6px] mb-[40px]" variants={itemVariants}>
              {usps.map((usp, index) => (
                <USPItemComponent key={index} item={usp} />
              ))}
            </motion.div>

            {/* CTA Button with hover animation */}
            <motion.a
              href={ctaHref}
              className="inline-flex items-center justify-center px-[35px] py-[13px] bg-[#4C8075] hover:bg-[#3d6a5f] text-white font-normal text-[16px] rounded-[3px] transition-colors duration-300 group mb-8 md:mb-0"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {ctaText}
              <ArrowIcon className="transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          {/* Right Content - Illustration with animation */}
          <motion.div 
            className="flex-shrink-0 relative w-full max-w-[420px] lg:w-[420px] lg:h-[420px] mt-8 lg:mt-[20px]"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full h-full aspect-square">
              <Image
                src={image}
                alt="SCB Agency - Digital Marketing"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

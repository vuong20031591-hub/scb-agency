'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/Slider';
import type { TestimonialsProps, Testimonial } from '@/types';

// Quote Left icon (opening quote)
function QuoteLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
    </svg>
  );
}

// Quote Right icon (closing quote) - rotated 180deg from left quote
function QuoteRightIcon({ className }: { className?: string }) {
  return (
    <svg className={`${className} rotate-180`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
    </svg>
  );
}

// Testimonial Item component
function TestimonialItem({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-full px-4">
      <div className="relative max-w-4xl mx-auto py-5 px-[80px]">
        {/* Quote Left Icon - positioned absolute top left */}
        <QuoteLeftIcon className="absolute left-0 top-[20px] w-[42px] h-[42px] text-primary" />

        {/* Quote Text */}
        <p className="text-[#232323] text-base leading-[1.6] text-center">
          {testimonial.quote}
        </p>

        {/* Quote Right Icon - positioned absolute bottom right */}
        <QuoteRightIcon className="absolute right-0 bottom-[20px] w-[42px] h-[42px] text-primary" />
      </div>

      {/* Author Info */}
      <div className="flex flex-col items-center mt-[15px]">
        {/* Avatar */}
        <div className="relative w-[70px] h-[70px] rounded-full overflow-hidden bg-gray-200">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author.name}
            fill
            className="object-cover"
            sizes="70px"
            loading="lazy"
          />
        </div>
        
        {/* Name & Title */}
        <h4 className="text-[20px] font-normal text-[#232323] mt-2">
          {testimonial.author.name}
        </h4>
        <p className="text-[12px] text-[#232323]">
          {testimonial.author.title}
        </p>
      </div>
    </div>
  );
}

export function Testimonials({ title, testimonials, autoplayDelay = 5000 }: TestimonialsProps) {
  return (
    <section className="py-5 mb-[30px]">
      <div className="w-full max-w-[1200px] mx-auto px-[15px]">
        {/* Section Header with animation */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[35px] font-bold text-[#232323] font-roboto">
            {title}
          </h2>
        </motion.div>

        {/* Testimonials Slider with animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Slider
            autoplay={true}
            autoplayDelay={autoplayDelay}
            loop={true}
            showDots={true}
            showArrows={false}
            dotStyle="testimonial"
          >
            {testimonials.map((testimonial) => (
              <TestimonialItem key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;

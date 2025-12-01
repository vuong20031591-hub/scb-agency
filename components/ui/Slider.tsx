'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import type { SliderProps } from '@/types';

export function Slider({
  children,
  autoplay = false,
  autoplayDelay = 5000,
  showDots = false,
  showArrows = false,
  loop = true,
  dotStyle = 'default',
}: SliderProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const plugins = autoplay
    ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })]
    : [];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop, align: 'start' },
    plugins
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            className={cn(
              'absolute left-2 top-1/2 -translate-y-1/2 z-10',
              'w-10 h-10 rounded-full bg-white shadow-md',
              'flex items-center justify-center',
              'hover:bg-gray-100 transition-colors duration-200'
            )}
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className={cn(
              'absolute right-2 top-1/2 -translate-y-1/2 z-10',
              'w-10 h-10 rounded-full bg-white shadow-md',
              'flex items-center justify-center',
              'hover:bg-gray-100 transition-colors duration-200'
            )}
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots Navigation */}
      {showDots && scrollSnaps.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              className={cn(
                'rounded-full transition-all duration-300',
                dotStyle === 'testimonial'
                  ? 'w-[10px] h-[10px]'
                  : 'w-3 h-3',
                selectedIndex === index
                  ? dotStyle === 'testimonial'
                    ? 'bg-[#37aea4]'
                    : 'bg-primary w-6'
                  : dotStyle === 'testimonial'
                    ? 'bg-black/20'
                    : 'bg-gray-300 hover:bg-gray-400'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Slider;

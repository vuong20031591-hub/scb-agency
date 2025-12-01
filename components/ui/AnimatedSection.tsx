'use client';

import { motion, type Variants } from 'framer-motion';
import { ReactNode } from 'react';

// Animation variants for scroll reveal
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};


// Stagger children animation
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Props for AnimatedSection component
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'fadeInUp' | 'fadeIn' | 'scaleIn' | 'slideInLeft' | 'slideInRight';
  delay?: number;
  once?: boolean;
}

// Get variant based on name
const getVariant = (name: string): Variants => {
  switch (name) {
    case 'fadeIn':
      return fadeIn;
    case 'scaleIn':
      return scaleIn;
    case 'slideInLeft':
      return slideInLeft;
    case 'slideInRight':
      return slideInRight;
    default:
      return fadeInUp;
  }
};

// AnimatedSection component for scroll reveal animations
export function AnimatedSection({
  children,
  className = '',
  variant = 'fadeInUp',
  delay = 0,
  once = true,
}: AnimatedSectionProps) {
  const selectedVariant = getVariant(variant);
  
  // Add delay to the variant
  const variantWithDelay: Variants = {
    hidden: selectedVariant.hidden,
    visible: {
      ...selectedVariant.visible,
      transition: {
        ...(typeof selectedVariant.visible === 'object' && 'transition' in selectedVariant.visible
          ? selectedVariant.visible.transition
          : {}),
        delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={variantWithDelay}
    >
      {children}
    </motion.div>
  );
}

// AnimatedCard component with hover effects
interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
}

export function AnimatedCard({
  children,
  className = '',
  hoverScale = 1.02,
}: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: hoverScale,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}

// AnimatedButton component with hover effects
interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function AnimatedButton({
  children,
  className = '',
  onClick,
}: AnimatedButtonProps) {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}

export default AnimatedSection;

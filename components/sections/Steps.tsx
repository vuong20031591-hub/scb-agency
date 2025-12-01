'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { StepsProps, Step } from '@/types';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// Step icons - matching Remix Icons from original site
function FormIcon({ className }: { className?: string }) {
  return (
    <svg className={cn('w-10 h-10', className)} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* ri-file-text-line */}
      <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"/>
    </svg>
  );
}

function PaymentIcon({ className }: { className?: string }) {
  return (
    <svg className={cn('w-10 h-10', className)} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* ri-secure-payment-fill */}
      <path d="M11 4H21V6H11V4ZM11 8H21V10H11V8ZM3 4H9V10H3V4ZM5 6V8H7V6H5ZM11 14H21V16H11V14ZM11 18H21V20H11V18ZM3 14H9V20H3V14ZM5 16V18H7V16H5Z"/>
    </svg>
  );
}

function LaunchIcon({ className }: { className?: string }) {
  return (
    <svg className={cn('w-10 h-10', className)} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* ri-send-plane-fill */}
      <path d="M1.94631 9.31555C1.42377 9.14137 1.41965 8.86034 1.95706 8.6812L21.0433 2.31913C21.5717 2.14297 21.8748 2.43878 21.7268 2.95706L16.2736 22.0433C16.1226 22.5718 15.8179 22.5901 15.5946 22.0877L12.0002 14.0002L18.0002 6.00017L10.0002 12.0002L1.94631 9.31555Z"/>
    </svg>
  );
}

// Get icon by type
function StepIcon({ icon, className }: { icon: string; className?: string }) {
  switch (icon) {
    case 'form':
      return <FormIcon className={className} />;
    case 'payment':
      return <PaymentIcon className={className} />;
    case 'launch':
      return <LaunchIcon className={className} />;
    default:
      return <FormIcon className={className} />;
  }
}

// Step Item component
function StepItem({ step }: { step: Step }) {
  return (
    <div className="flex flex-col items-center text-center p-[30px]">
      {/* Icon - 40px, teal color rgb(62, 126, 123) */}
      <div className="mb-5 text-[#3e7e7b]">
        <StepIcon icon={step.icon} />
      </div>
      
      {/* Step Title - 18px, font-weight 500 */}
      <h4 className="text-[18px] font-medium text-[#262626] mb-2.5 mt-5">
        {step.title}
      </h4>
      
      {/* Description - 14px, line-height 23.8px */}
      <p className="text-[14px] text-[#262626] leading-[1.7]">
        {step.description}
      </p>
    </div>
  );
}

interface StepsPropsExtended extends StepsProps {
  highlightText?: string;
}

export function Steps({ title, subtitle, steps, highlightText = '3 easy steps' }: StepsPropsExtended) {
  // Parse subtitle to highlight "3 easy steps"
  const renderSubtitle = () => {
    if (!subtitle.includes(highlightText)) {
      return <span>{subtitle}</span>;
    }
    
    const parts = subtitle.split(highlightText);
    return (
      <>
        <span className="text-[#333333]">{parts[0]}</span>
        <span className="text-[#15757c]">{highlightText}</span>
        <span className="text-[#333333]">{parts[1]}</span>
      </>
    );
  };

  return (
    <section 
      className="py-[20px] -mt-[10px] mb-[40px]"
      style={{ backgroundColor: 'rgba(244, 255, 253, 0.83)' }}
    >
      <div className="w-full max-w-[1170px] mx-auto px-[15px]">
        {/* Section Header with animation */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          {/* Title - 35px, bold, #232323 */}
          <p className="text-[35px] font-bold text-[#232323] leading-[38px] mb-0">
            {title}
          </p>
          
          {/* Subtitle - 16px, line-height 32px */}
          <p className="text-[16px] leading-[32px] mt-0">
            {renderSubtitle()}
          </p>
        </motion.div>

        {/* Steps Grid - 3 columns with stagger animation */}
        <motion.div 
          className="flex flex-col md:flex-row justify-center gap-[30px] mt-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {steps.map((step) => (
            <motion.div key={step.number} className="flex-1 max-w-[370px]" variants={itemVariants}>
              <StepItem step={step} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Steps;

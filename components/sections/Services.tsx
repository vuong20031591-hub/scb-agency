'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ServicesProps, Service } from '@/types';
import { platformGradients } from '@/data/services';

// Animation variants - using cubic bezier for easeOut
const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

// Service Card component - matching original design exactly
function ServiceCard({ service }: { service: Service }) {
  // Get gradient based on platform
  const gradient = platformGradients[service.platform] || platformGradients.facebook;
  
  // Box shadow: HOT card has colored shadow, others have gray shadow
  const boxShadow = service.isHot 
    ? 'rgba(51, 123, 108, 0.15) 0px 10px 20px 0px'
    : 'rgba(135, 135, 135, 0.15) 0px 2px 5px 0px';

  return (
    <div 
      className="relative w-[270px] bg-white rounded-[8px] pb-[40px]"
      style={{ boxShadow }}
    >
      {/* HOT Badge - absolute positioned top-right, outside card */}
      {service.isHot && (
        <div 
          className="absolute z-10 bg-[#fa7a7a] text-white text-[14px] px-[12px] py-[6px]"
          style={{ borderRadius: '16px 0px', top: '-14px', right: '4px' }}
        >
          HOT
        </div>
      )}

      {/* Card Header with gradient - each platform has unique gradient */}
      <div 
        className="h-[130px] p-[15px] rounded-t-[8px] flex flex-col justify-center"
        style={{ background: gradient }}
      >
        <Link href={`/services/${service.slug}`}>
          <h3 className="text-[26px] md:text-[30px] font-medium text-white text-center leading-[33px] hover:opacity-90 transition-opacity">
            {service.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="relative w-[18px] h-[18px]">
            <Image
              src={service.icon}
              alt={service.platform}
              fill
              className="object-contain"
              sizes="18px"
              loading="lazy"
            />
          </div>
          <span className="text-[18px] text-white capitalize">{service.platform}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-[20px]">
        {/* Features List with bullet points */}
        <ul className="space-y-3 mb-6">
          {service.features.map((feature, index) => (
            <li 
              key={index} 
              className="text-[14px] text-[rgba(38,38,38,0.8)] pl-[22px] relative leading-[20px]"
            >
              <span className="absolute left-0 top-[6px] w-[8px] h-[8px] rounded-full bg-[#337b6c]"></span>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Button - filled for HOT card, outline for others */}
        <Link
          href="/get-in-touch"
          className={`block w-full text-center text-[16px] font-medium py-[12px] px-[20px] rounded-[5px] transition-colors ${
            service.isHot 
              ? 'bg-[#337b6c] hover:bg-[#2a6459] text-white' 
              : 'bg-white border border-[#262626] text-[#262626] hover:bg-gray-50'
          }`}
        >
          GET AN ACCOUNT
        </Link>
      </div>
    </div>
  );
}

export function Services({ title, subtitle, services }: ServicesProps) {
  return (
    <section className="py-[20px] bg-transparent">
      <div className="w-full max-w-[1200px] mx-auto px-[15px]">
        {/* Section Header with animation */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[28px] md:text-[35px] font-bold text-[#232323] mb-4">
            {title}
          </h2>
          <p className="text-[#666] text-[16px] md:text-[18px] max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Services Flex Container with stagger animation */}
        <motion.div 
          className="flex flex-wrap justify-center lg:justify-around gap-[30px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;

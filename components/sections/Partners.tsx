'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { PartnersProps, Partner } from '@/types';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

// Partner Item component - matching original: icon + text horizontal
function PartnerItem({ partner }: { partner: Partner }) {
  return (
    <div className="inline-flex items-center gap-2 px-[20px]">
      <div className="relative w-[24px] h-[24px] flex-shrink-0">
        <Image
          src={partner.icon}
          alt={partner.name}
          fill
          className="object-contain"
          sizes="24px"
          loading="lazy"
        />
      </div>
      <h4 className="text-[15px] font-medium text-white leading-[21px]">
        {partner.name}
      </h4>
    </div>
  );
}

export function Partners({ partners }: PartnersProps) {
  return (
    <section 
      className="py-4"
      style={{ background: 'linear-gradient(135deg, rgb(1, 12, 11) 0%, rgb(0, 38, 41) 100%)' }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-[15px]">
        {/* Flex row: title left, partners right */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Title with animation */}
          <motion.p 
            className="text-[18px] text-[#ababab] font-normal mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Partnered with Social Media Leaders
          </motion.p>
          
          {/* Partners row with stagger animation */}
          <motion.div 
            className="flex items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partners.map((partner) => (
              <motion.div key={partner.id} variants={itemVariants}>
                <PartnerItem partner={partner} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Partners;

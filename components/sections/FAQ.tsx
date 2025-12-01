'use client';

import { motion } from 'framer-motion';
import { Accordion } from '@/components/ui/Accordion';
import type { FAQProps, FAQItem, AccordionItem } from '@/types';

// Convert FAQ items to Accordion items
function convertToAccordionItems(faqItems: FAQItem[]): AccordionItem[] {
  return faqItems
    .sort((a, b) => a.order - b.order)
    .map((item) => ({
      id: item.id,
      title: item.question,
      content: item.answer,
    }));
}

export function FAQ({ title, items }: FAQProps) {
  const accordionItems = convertToAccordionItems(items);

  return (
    <section className="py-16 md:py-24 bg-[#f5f5f5]">
      <div className="w-full max-w-[1170px] mx-auto px-[15px]">
        {/* Section Header with animation */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[35px] font-bold text-[rgb(35,35,35)] font-['Roboto',sans-serif]">
            {title}
          </h2>
        </motion.div>

        {/* FAQ Accordion with animation */}
        <motion.div 
          className="max-w-[1170px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion
            items={accordionItems}
            allowMultiple={false}
            defaultOpen={accordionItems[0]?.id}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;

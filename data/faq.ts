import { FAQItem } from '@/types';

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How much does SCB agency ad account cost?',
    answer: "SCB offers you free agency accounts, you can either rent or buy one. With a minimum deposit of just $100, you're set to go",
    order: 1,
  },
  {
    id: 'faq-2',
    question: 'What payment options are available?',
    answer: 'You can use a USD Bank Account, PayPal, PingPong, & Payoneer for payment. Transactions via USD Bank Account and PayPal are fee-free.',
    order: 2,
  },
  {
    id: 'faq-3',
    question: 'What happens if my account is suspended?',
    answer: 'Your balance can be reallocated between accounts if suspended, plus you can refund your deposite within 15 business days without any additional fees.',
    order: 3,
  },
];

export const faqSection = {
  title: 'Questiones You Might Have',
};

import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'SCB Agency',
  description: 'Cost-effective agency ad accounts for businesses of all sizes. Free Agency Ad Accounts Provider for Meta, Google, TikTok, and Bing.',
  url: 'https://www.scbagency.net',
  logo: '/images/logo.png',
  contact: {
    phone: '+86 135-8825-5916',
    email: 'scbagency@outlook.com',
    telegram: 'https://t.me/FrankSCBagency',
    whatsapp: 'https://wa.me/8613588255916',
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100076754107136',
    linkedin: 'https://www.linkedin.com/company/scb-agency-ads/about/',
  },
};

export const heroData = {
  title: 'SLOW CROSS BORDER',
  subtitle: 'Digital Marketing Agency',
  typedTexts: ['Reduce Campaign Cost', 'Scale Your Business'],
  description: 'Cost-effective agency ad accounts for businesses of all sizes',
  usps: [
    { icon: 'check', text: 'No VAT & Services Fee' },
    { icon: 'check', text: 'Free & Stable Account' },
    { icon: 'check', text: 'Financial Security Guarantee' },
    { icon: 'check', text: '24/7 Prioritized Support' },
  ],
  ctaText: 'GET YOUR ACCOUNT',
  ctaHref: '/get-in-touch',
  image: '/images/hero-illustration.png',
};

export const stepsData = {
  title: '3 Steps to Get Your Agency Ad Account',
  subtitle: 'Start running your ads in just 3 easy steps',
  steps: [
    {
      number: 1,
      icon: 'form',
      title: 'STEP 1',
      description: 'Complete the form or send us your website or page link via whatsapp/telegram for us to review if they comply with advertising policy',
    },
    {
      number: 2,
      icon: 'payment',
      title: 'STEP 2',
      description: 'SCB team will send you a payment link, once the payment is successful, your account will be ready in 24h',
    },
    {
      number: 3,
      icon: 'launch',
      title: 'STEP 3',
      description: 'Launch your campaigns and boost your business with free & stable account',
    },
  ],
};

export const ctaBannerData = {
  text: 'Tired of sky-high advertising costs with bans and limits? Let Us Help!',
  ctaText: 'GET YOUR ACCOUNT',
  ctaHref: '/get-in-touch',
};

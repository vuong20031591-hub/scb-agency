import { Service } from '@/types';

// Gradient colors for each platform (from original website)
export const platformGradients: Record<string, string> = {
  facebook: 'linear-gradient(90deg, rgb(51, 123, 108) 0%, rgb(62, 195, 185) 100%)',
  google: 'linear-gradient(135deg, rgb(80, 132, 227) 0%, rgb(34, 86, 90) 100%)',
  tiktok: 'linear-gradient(135deg, rgb(152, 82, 157) 0%, rgb(34, 86, 90) 100%)',
  bing: 'linear-gradient(135deg, rgb(139, 77, 90) 0%, rgb(34, 86, 90) 100%)',
};

export const services: Service[] = [
  {
    id: 'facebook-ads',
    slug: 'facebook-ads-agency-account',
    name: 'Facebook Agency Account',
    platform: 'facebook',
    icon: '/icons/facebook.svg',
    shortDescription: 'Free & stable Facebook ad accounts with unlimited ad spend and no VAT.',
    features: [
      'Free & Stable Ad Account',
      'Unlimited Ad Spend',
      'No VAT & Service Fee',
      'No Additional Fees on Refund',
    ],
    isHot: true,
    seo: {
      title: 'Facebook Ads Agency Account - SCB Agency',
      description: 'Get a free and stable Facebook agency ad account with unlimited ad spend, no VAT, and 24/7 support from SCB Agency.',
    },
  },
  {
    id: 'google-ads',
    slug: 'google-ads-agency-account',
    name: 'Google Agency Account',
    platform: 'google',
    icon: '/icons/google.svg',
    shortDescription: 'Professional Google ad accounts with instant top-ups and advanced PPC management.',
    features: [
      'Instant Top Ups',
      'No VAT & Spend limit',
      'Advanced PPC Management',
      '1:1 Expert Support',
    ],
    isHot: false,
    seo: {
      title: 'Google Ads Agency Account - SCB Agency',
      description: 'Get a professional Google agency ad account with instant top-ups, no VAT, and expert PPC management from SCB Agency.',
    },
  },
  {
    id: 'tiktok-ads',
    slug: 'tiktok-ads-agency-account',
    name: 'Tiktok Agency Account',
    platform: 'tiktok',
    icon: '/icons/tiktok.svg',
    shortDescription: 'Free & stable TikTok ad accounts for global ad campaigns.',
    features: [
      'Free & Stable Ad Account',
      'Unlimited Ad Spend',
      'No VAT & Service Fee',
      'Run Global Ad Campaigns',
    ],
    isHot: false,
    seo: {
      title: 'TikTok Ads Agency Account - SCB Agency',
      description: 'Get a free and stable TikTok agency ad account with unlimited ad spend for global campaigns from SCB Agency.',
    },
  },
  {
    id: 'bing-ads',
    slug: 'bing-ads-agency-account',
    name: 'Microsoft bing Agency Account',
    platform: 'bing',
    icon: '/icons/bing.svg',
    shortDescription: 'Professional Bing ad accounts with instant top-ups and advanced features.',
    features: [
      'Instant Top Ups',
      'No VAT & Service Fee',
      'Access to Advanced Features',
      '1:1 Expert Support',
    ],
    isHot: false,
    seo: {
      title: 'Bing Ads Agency Account - SCB Agency',
      description: 'Get a professional Microsoft Bing agency ad account with instant top-ups and advanced features from SCB Agency.',
    },
  },
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

// Helper function to get service by platform
export function getServiceByPlatform(platform: Service['platform']): Service | undefined {
  return services.find((service) => service.platform === platform);
}

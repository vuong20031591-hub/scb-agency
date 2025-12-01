import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
  },
  {
    id: 'services',
    label: 'Services',
    href: '#',
    badge: 'HOT',
    children: [
      {
        id: 'facebook-ads',
        label: 'Facebook Ads Agency Account',
        href: '/services/facebook-ads-agency-account',
      },
      {
        id: 'google-ads',
        label: 'Google Ads Agency Account',
        href: '/services/google-ads-agency-account',
      },
      {
        id: 'tiktok-ads',
        label: 'TikTok Ads Agency Account',
        href: '/services/tiktok-ads-agency-account',
      },
      {
        id: 'bing-ads',
        label: 'Bing Ads Agency Account',
        href: '/services/bing-ads-agency-account',
      },
    ],
  },
  {
    id: 'why-scb',
    label: 'Why SCB',
    href: '/why-scb',
  },
  {
    id: 'insights',
    label: 'Insights',
    href: '/insights',
    children: [
      {
        id: 'all-insights',
        label: 'All Insights',
        href: '/insights',
      },
      {
        id: 'facebook-insights',
        label: 'Facebook Advertising',
        href: '/insights?category=facebook',
      },
      {
        id: 'google-insights',
        label: 'Google Advertising',
        href: '/insights?category=google',
      },
      {
        id: 'tiktok-insights',
        label: 'TikTok Advertising',
        href: '/insights?category=tiktok',
      },
      {
        id: 'bing-insights',
        label: 'Bing Advertising',
        href: '/insights?category=bing',
      },
    ],
  },
];

export const footerNavigation = {
  aboutScb: [
    { id: 'why-scb', label: 'Why SCB', href: '/why-scb' },
    { id: 'contact-us', label: 'Contact Us', href: '/get-in-touch' },
  ],
  services: [
    { id: 'facebook-ads', label: 'Facebook Ads Agency Account', href: '/services/facebook-ads-agency-account' },
    { id: 'google-ads', label: 'Google Ads Agency Account', href: '/services/google-ads-agency-account' },
    { id: 'tiktok-ads', label: 'TikTok Ads Agency Account', href: '/services/tiktok-ads-agency-account' },
    { id: 'bing-ads', label: 'Bing Ads Agency Account', href: '/services/bing-ads-agency-account' },
  ],
};

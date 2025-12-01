import type { Metadata } from 'next';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Get In Touch - Contact SCB Agency',
  description: 'Contact SCB Agency to get your free agency ad account for Facebook, Google, TikTok, or Bing. Fill out the form and we will get back to you within 24 hours.',
  openGraph: {
    title: 'Get In Touch - Contact SCB Agency',
    description: 'Contact SCB Agency to get your free agency ad account. We respond within 24 hours.',
    url: `${siteConfig.url}/get-in-touch`,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get In Touch - Contact SCB Agency',
    description: 'Contact SCB Agency to get your free agency ad account.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

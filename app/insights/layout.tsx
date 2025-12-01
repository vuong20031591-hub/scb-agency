import type { Metadata } from 'next';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'SCB Insights - Digital Marketing Tips & Trends',
  description: 'Stay updated with the latest digital marketing trends, tips, and industry insights from SCB Agency. Learn about Facebook, Google, TikTok, and Bing advertising.',
  openGraph: {
    title: 'SCB Insights - Digital Marketing Tips & Trends',
    description: 'Stay updated with the latest digital marketing trends and advertising tips.',
    url: `${siteConfig.url}/insights`,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SCB Insights - Digital Marketing Tips & Trends',
    description: 'Stay updated with the latest digital marketing trends and advertising tips.',
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

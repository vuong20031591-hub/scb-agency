import type { Metadata } from 'next';
import {
  Hero,
  Partners,
  Services,
  Steps,
  Testimonials,
  News,
  FAQ,
  CTABanner,
} from '@/components/sections';
import { JsonLd } from '@/components/seo';
import { heroData, stepsData, ctaBannerData, siteConfig } from '@/data/site-config';
import { partners } from '@/data/partners';
import { services } from '@/data/services';
import { testimonials, testimonialsSection } from '@/data/testimonials';
import { articles, newsSection } from '@/data/articles';
import { faqItems, faqSection } from '@/data/faq';

export const metadata: Metadata = {
  title: `${siteConfig.name} - Free Agency Ad Accounts for Meta, Google, TikTok, Bing`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} - Free Agency Ad Accounts`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - Free Agency Ad Accounts`,
    description: siteConfig.description,
  },
};

export default function Home() {
  return (
    <>
      {/* FAQ Page Schema for SEO */}
      <JsonLd type="FAQPage" data={{ faqItems }} />

      {/* Hero Section */}
      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        typedTexts={heroData.typedTexts}
        usps={heroData.usps}
        ctaText={heroData.ctaText}
        ctaHref={heroData.ctaHref}
        image={heroData.image}
      />

      {/* Partners Section */}
      <Partners partners={partners} autoplayDelay={3000} />

      {/* Services Section */}
      <Services
        title="Expand Your Presence with SCB Agency"
        subtitle="SCB enables you get access to agency ads account, creating impactful advertising campaigns that drive results with more budget and less limits"
        services={services}
      />

      {/* Steps Section */}
      <Steps
        title={stepsData.title}
        subtitle={stepsData.subtitle}
        steps={stepsData.steps}
      />

      {/* Testimonials Section */}
      <Testimonials
        title={testimonialsSection.title}
        testimonials={testimonials}
        autoplayDelay={testimonialsSection.autoplayDelay}
      />

      {/* News Section */}
      <News
        title={newsSection.title}
        categories={newsSection.categories}
        articles={articles}
        readMoreHref={newsSection.readMoreHref}
      />

      {/* FAQ Section */}
      <FAQ title={faqSection.title} items={faqItems} />

      {/* CTA Banner Section */}
      <CTABanner
        text={ctaBannerData.text}
        ctaText={ctaBannerData.ctaText}
        ctaHref={ctaBannerData.ctaHref}
      />
    </>
  );
}

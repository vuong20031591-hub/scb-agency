import { Metadata } from 'next';
import { siteConfig } from '@/data/site-config';
import { SEOConfig, FAQItem } from '@/types';

/**
 * Default SEO configuration
 */
export const defaultSEO: SEOConfig = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@scbagency',
  },
};

/**
 * Generates Next.js Metadata object from SEO config
 * 
 * @param config - SEO configuration
 * @returns Next.js Metadata object
 */
export function generateMetadata(config: Partial<SEOConfig>): Metadata {
  const seo = { ...defaultSEO, ...config };
  
  return {
    title: seo.title,
    description: seo.description,
    ...(seo.canonical && { alternates: { canonical: seo.canonical } }),
    openGraph: seo.openGraph ? {
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      images: seo.openGraph.images,
      siteName: seo.openGraph.siteName,
      type: 'website',
    } : undefined,
    twitter: seo.twitter ? {
      card: seo.twitter.card,
      site: seo.twitter.site,
    } : undefined,
  };
}

/**
 * Generates page title with site name suffix
 * 
 * @param pageTitle - Page-specific title
 * @returns Full page title
 */
export function generatePageTitle(pageTitle: string): string {
  return `${pageTitle} - ${siteConfig.name}`;
}


/**
 * Generates Organization JSON-LD schema
 * 
 * @returns Organization schema object
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      contactType: 'customer service',
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
    ],
  };
}

/**
 * Generates WebSite JSON-LD schema
 * 
 * @returns WebSite schema object
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}${siteConfig.logo}`,
      },
    },
  };
}

/**
 * Generates FAQPage JSON-LD schema
 * 
 * @param faqItems - Array of FAQ items
 * @returns FAQPage schema object
 */
export function generateFAQSchema(faqItems: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * Generates Service JSON-LD schema
 * 
 * @param service - Service data
 * @returns Service schema object
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/services/${service.slug}`,
  };
}

/**
 * Generates BreadcrumbList JSON-LD schema
 * 
 * @param items - Array of breadcrumb items
 * @returns BreadcrumbList schema object
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

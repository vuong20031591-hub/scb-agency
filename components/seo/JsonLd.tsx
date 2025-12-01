'use client';

import { siteConfig } from '@/data/site-config';
import { FAQItem } from '@/types';

// =============================================================================
// JSON-LD Schema Types
// =============================================================================

export type JsonLdType = 'Organization' | 'WebSite' | 'FAQPage' | 'Service' | 'BreadcrumbList';

export interface JsonLdProps {
  type: JsonLdType;
  data?: Record<string, unknown>;
}

// =============================================================================
// Schema Generators
// =============================================================================

/**
 * Generate Organization schema
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
      availableLanguage: ['English', 'Chinese'],
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
    ],
  };
}

/**
 * Generate WebSite schema
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
 * Generate FAQPage schema from FAQ items
 */
export function generateFAQPageSchema(faqItems: FAQItem[]) {
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
 * Generate Service schema
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

/**
 * Generate BreadcrumbList schema
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
      item: item.url,
    })),
  };
}

// =============================================================================
// JsonLd Component
// =============================================================================

/**
 * JsonLd component for rendering structured data
 * Supports Organization, WebSite, FAQPage, Service, and BreadcrumbList schemas
 * 
 * @example
 * // Organization schema
 * <JsonLd type="Organization" />
 * 
 * @example
 * // FAQPage schema with custom data
 * <JsonLd type="FAQPage" data={{ faqItems: [...] }} />
 */
export function JsonLd({ type, data = {} }: JsonLdProps) {
  let schema: Record<string, unknown>;

  switch (type) {
    case 'Organization':
      schema = generateOrganizationSchema();
      break;
    case 'WebSite':
      schema = generateWebSiteSchema();
      break;
    case 'FAQPage':
      schema = generateFAQPageSchema(data.faqItems as FAQItem[] || []);
      break;
    case 'Service':
      schema = generateServiceSchema(data as { name: string; description: string; url: string });
      break;
    case 'BreadcrumbList':
      schema = generateBreadcrumbSchema(data.items as Array<{ name: string; url: string }> || []);
      break;
    default:
      schema = {};
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default JsonLd;

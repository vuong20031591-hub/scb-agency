// =============================================================================
// Navigation Types
// =============================================================================

export interface NavItem {
  id: string;
  label: string;
  href: string;
  badge?: 'HOT' | 'NEW';
  children?: NavItem[];
}

// =============================================================================
// Service Types
// =============================================================================

export type ServicePlatform = 'facebook' | 'google' | 'tiktok' | 'bing';

export interface Service {
  id: string;
  slug: string;
  name: string;
  platform: ServicePlatform;
  icon: string;
  shortDescription: string;
  features: string[];
  isHot: boolean;
  seo: {
    title: string;
    description: string;
  };
}

// =============================================================================
// Testimonial Types
// =============================================================================

export interface TestimonialAuthor {
  name: string;
  title: string;
  company?: string;
}

export interface Testimonial {
  id: string;
  avatar: string;
  quote: string;
  author: TestimonialAuthor;
}

// =============================================================================
// Article Types
// =============================================================================

export type ArticleCategory = 'facebook' | 'google' | 'tiktok' | 'bing' | 'general';

export interface ArticleSEO {
  title: string;
  description: string;
}


export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  category: ArticleCategory;
  publishedAt: string;
  seo: ArticleSEO;
}

// =============================================================================
// FAQ Types
// =============================================================================

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  order: number;
}

// =============================================================================
// Contact Form Types
// =============================================================================

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

// =============================================================================
// Partner Types
// =============================================================================

export interface Partner {
  id: string;
  name: string;
  icon: string;
}

// =============================================================================
// Site Config Types
// =============================================================================

export interface SiteContact {
  phone: string;
  email: string;
  telegram: string;
  whatsapp: string;
}

export interface SiteSocial {
  facebook: string;
  linkedin: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  logo: string;
  contact: SiteContact;
  social: SiteSocial;
}

// =============================================================================
// USP (Unique Selling Proposition) Types
// =============================================================================

export interface USPItem {
  icon: string;
  text: string;
}

// =============================================================================
// Step Types
// =============================================================================

export interface Step {
  number: number;
  icon: string;
  title: string;
  description: string;
}

// =============================================================================
// Component Props Types
// =============================================================================

// Button Props
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

// Card Props
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

// Badge Props
export interface BadgeProps {
  text: string;
  variant?: 'hot' | 'new' | 'default';
}

// Accordion Props
export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string;
}

// Tabs Props
export interface Tab {
  id: string;
  label: string;
  content?: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
}

// Slider Props
export interface SliderProps {
  children: React.ReactNode;
  autoplay?: boolean;
  autoplayDelay?: number;
  showDots?: boolean;
  showArrows?: boolean;
  loop?: boolean;
  dotStyle?: 'default' | 'testimonial';
}

// TypedText Props
export interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  className?: string;
}

// =============================================================================
// SEO Types
// =============================================================================

export interface OpenGraphImage {
  url: string;
  width: number;
  height: number;
}

export interface OpenGraphConfig {
  title: string;
  description: string;
  images: OpenGraphImage[];
  siteName: string;
}

export interface TwitterConfig {
  card: 'summary' | 'summary_large_image';
  site: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: OpenGraphConfig;
  twitter?: TwitterConfig;
}

// JSON-LD Types
export type JsonLdType = 'Organization' | 'WebSite' | 'FAQPage' | 'Service' | 'BreadcrumbList';

export interface JsonLdProps {
  type: JsonLdType;
  data: Record<string, unknown>;
}

// =============================================================================
// Layout Component Props
// =============================================================================

export interface HeaderProps {
  className?: string;
}

export interface FooterProps {
  className?: string;
}

export interface NavigationProps {
  items: NavItem[];
  className?: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export interface FloatingButtonsProps {
  telegramUrl: string;
  whatsappUrl: string;
  showBackToTop?: boolean;
}

// =============================================================================
// Section Component Props
// =============================================================================

export interface HeroProps {
  title: string;
  subtitle: string;
  typedTexts: string[];
  usps: USPItem[];
  ctaText: string;
  ctaHref: string;
  image: string;
}

export interface PartnersProps {
  partners: Partner[];
  autoplayDelay?: number;
}

export interface ServicesProps {
  title: string;
  subtitle: string;
  services: Service[];
}

export interface StepsProps {
  title: string;
  subtitle: string;
  steps: Step[];
}

export interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
  autoplayDelay?: number;
}

export interface NewsProps {
  title: string;
  categories: string[];
  articles: Article[];
  readMoreHref: string;
}

export interface FAQProps {
  title: string;
  items: FAQItem[];
}

export interface CTABannerProps {
  text: string;
  ctaText: string;
  ctaHref: string;
}

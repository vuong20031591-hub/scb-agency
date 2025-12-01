import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { services, getServiceBySlug, platformGradients } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { siteConfig, ctaBannerData } from '@/data/site-config';
import { Button } from '@/components/ui';
import { CTABanner, Testimonials } from '@/components/sections';
import { JsonLd } from '@/components/seo';

// Generate static params for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found - SCB Agency',
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `${siteConfig.url}/services/${service.slug}`,
      siteName: siteConfig.name,
      type: 'website',
    },
  };
}


// Service-specific content data
const serviceContent: Record<string, {
  heroTitle: string[];
  heroSubtitle: string;
  whyAdvertise: {
    title: string;
    items: { title: string; description: string }[];
  };
  benefits: { icon: string; title: string; description: string }[];
}> = {
  'facebook-ads-agency-account': {
    heroTitle: ['Free Facebook Ads', 'Agency Account'],
    heroSubtitle: 'Unlock the power of social media marketing with more budget and less limits',
    whyAdvertise: {
      title: 'Why You Should Advertise on Facebook',
      items: [
        {
          title: 'Targeted Audience Reach',
          description: "The platform's robust targeting options enable advertisers to focus precisely on specific demographics, interests, behaviors, and geographic locations. This laser-focused approach ensures that your message reaches the right people, maximizing the efficiency of your ad spend.",
        },
        {
          title: 'High Engagement Potential',
          description: 'Facebook offers a diverse range of ad formats that cater to different business goals and creative preferences, from carousels to videos, showcasing products and creating an immersive shopping experience.',
        },
        {
          title: 'Data-Driven Optimization',
          description: 'Advertisers can access a wealth of data to evaluate the performance of their campaigns, track user engagement, and measure key metrics. This data-driven approach empowers businesses with valuable insights.',
        },
      ],
    },
    benefits: [
      { icon: '💰', title: 'No Tax & Service Fee', description: 'SCB enables you to obtain free facebook ads agency account without tax, service fee or any hidden charges.' },
      { icon: '📈', title: 'Unlimited Daily Spend', description: 'With unlimited daily spend, you can reach a larger audience and scale your advertising efforts more quickly.' },
      { icon: '🎯', title: 'Better CPMs & CPAs', description: 'Compared to a self-managed account, facebook agency ads account have access to exclusive ad inventory, advanced targeting and optimization tools.' },
      { icon: '⚙️', title: 'Full Access to Advanced Features', description: "Having full access to facebook's ad advanced features, allows you to create and manage highly effective and personalized ad campaigns." },
      { icon: '🔒', title: 'Financial Security Guarantee', description: 'Your balance can be reallocated between accounts if suspended, plus you can refund your deposit within 15 days without any additional fees.' },
      { icon: '🎧', title: '24/7 Expert Support', description: 'Benefit from personalized support tailored to agency accounts, ensuring you have the guidance and assistance you need.' },
    ],
  },
  'google-ads-agency-account': {
    heroTitle: ['Free Google Ads', 'Agency Account'],
    heroSubtitle: 'Maximize your search visibility with professional Google advertising solutions',
    whyAdvertise: {
      title: 'Why You Should Advertise on Google',
      items: [
        {
          title: 'Intent-Based Targeting',
          description: 'Google Ads allows you to reach users actively searching for your products or services, ensuring high-intent traffic that converts better than passive advertising.',
        },
        {
          title: 'Massive Reach',
          description: 'With billions of searches daily, Google provides unparalleled access to potential customers across the globe, making it the largest advertising platform.',
        },
        {
          title: 'Measurable Results',
          description: 'Track every click, conversion, and dollar spent with detailed analytics and reporting tools that help optimize your campaigns for maximum ROI.',
        },
      ],
    },
    benefits: [
      { icon: '⚡', title: 'Instant Top Ups', description: 'Get instant top-ups to your account balance, ensuring your campaigns never stop running due to budget issues.' },
      { icon: '💰', title: 'No VAT & Spend Limit', description: 'Enjoy advertising without VAT charges and no spending limits to hold back your growth.' },
      { icon: '📊', title: 'Advanced PPC Management', description: 'Access professional PPC management tools and strategies to maximize your advertising effectiveness.' },
      { icon: '👤', title: '1:1 Expert Support', description: 'Get dedicated support from Google Ads experts who understand your business needs.' },
      { icon: '🔒', title: 'Financial Security Guarantee', description: 'Your balance is protected with our financial security guarantee and flexible refund policy.' },
      { icon: '🎧', title: '24/7 Support', description: 'Round-the-clock support to help you with any issues or questions about your campaigns.' },
    ],
  },
  'tiktok-ads-agency-account': {
    heroTitle: ['Free TikTok Ads', 'Agency Account'],
    heroSubtitle: 'Reach the next generation of consumers with viral video advertising',
    whyAdvertise: {
      title: 'Why You Should Advertise on TikTok',
      items: [
        {
          title: 'Viral Potential',
          description: "TikTok's algorithm gives every piece of content a chance to go viral, meaning your ads can reach millions of users organically beyond your paid reach.",
        },
        {
          title: 'Young Demographics',
          description: 'Access the highly coveted Gen Z and Millennial audiences who are most active on TikTok and have significant purchasing power.',
        },
        {
          title: 'Creative Ad Formats',
          description: 'Leverage unique ad formats like In-Feed Ads, TopView, and Branded Hashtag Challenges to create engaging, native-feeling advertisements.',
        },
      ],
    },
    benefits: [
      { icon: '💰', title: 'Free & Stable Ad Account', description: 'Get a free and stable TikTok agency ad account without any setup fees or hidden charges.' },
      { icon: '📈', title: 'Unlimited Ad Spend', description: 'Scale your campaigns without spending limits holding you back from reaching your audience.' },
      { icon: '🌍', title: 'Run Global Ad Campaigns', description: 'Launch advertising campaigns targeting audiences worldwide with ease.' },
      { icon: '💵', title: 'No VAT & Service Fee', description: 'Keep more of your budget for actual advertising without VAT or service fees.' },
      { icon: '🔒', title: 'Financial Security Guarantee', description: 'Your investment is protected with our comprehensive financial security guarantee.' },
      { icon: '🎧', title: '24/7 Expert Support', description: 'Get help whenever you need it with our round-the-clock expert support team.' },
    ],
  },
  'bing-ads-agency-account': {
    heroTitle: ['Free Microsoft Bing', 'Agency Account'],
    heroSubtitle: 'Tap into the Microsoft ecosystem with cost-effective search advertising',
    whyAdvertise: {
      title: 'Why You Should Advertise on Bing',
      items: [
        {
          title: 'Lower Competition',
          description: 'With less advertiser competition than Google, Bing often offers lower cost-per-click rates while still delivering quality traffic.',
        },
        {
          title: 'Premium Demographics',
          description: 'Bing users tend to be older, more educated, and have higher household incomes, making them valuable customers for many businesses.',
        },
        {
          title: 'Microsoft Integration',
          description: 'Reach users across the Microsoft ecosystem including Windows, Office, LinkedIn, and Xbox for comprehensive brand exposure.',
        },
      ],
    },
    benefits: [
      { icon: '⚡', title: 'Instant Top Ups', description: 'Quick and easy top-ups to keep your campaigns running without interruption.' },
      { icon: '💰', title: 'No VAT & Service Fee', description: 'Maximize your advertising budget without additional VAT or service charges.' },
      { icon: '⚙️', title: 'Access to Advanced Features', description: 'Unlock advanced Bing Ads features for better campaign performance and targeting.' },
      { icon: '👤', title: '1:1 Expert Support', description: 'Dedicated support from Bing Ads specialists who know the platform inside out.' },
      { icon: '🔒', title: 'Financial Security Guarantee', description: 'Your funds are secure with our financial protection and refund policies.' },
      { icon: '🎧', title: '24/7 Support', description: 'Always-available support to assist with any questions or issues.' },
    ],
  },
};


export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const content = serviceContent[slug];
  const gradient = platformGradients[service.platform];

  return (
    <>
      {/* Service Schema for SEO */}
      <JsonLd
        type="Service"
        data={{
          name: service.name,
          description: service.seo.description,
          url: `${siteConfig.url}/services/${service.slug}`,
        }}
      />

      {/* Breadcrumb Schema */}
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: 'Home', url: siteConfig.url },
            { name: 'Services', url: `${siteConfig.url}/services` },
            { name: service.name, url: `${siteConfig.url}/services/${service.slug}` },
          ],
        }}
      />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgb(1, 12, 11) 0%, rgb(0, 38, 41) 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {content?.heroTitle.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {content?.heroSubtitle}
            </p>
            <Link
              href="/get-in-touch"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#19B5AB] hover:bg-[#15757C] text-white font-medium rounded-full transition-colors"
            >
              GET YOUR ACCOUNT
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Advertise Section */}
      {content?.whyAdvertise && (
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              {content.whyAdvertise.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {content.whyAdvertise.items.map((item, index) => (
                <div key={index} className="text-center p-6">
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ background: gradient }}
                  >
                    <span className="text-2xl text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {content?.benefits && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Benefits of SCB {service.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <Testimonials
        title="E-commerce Customers Love Us: Here's Why"
        testimonials={testimonials}
        autoplayDelay={5000}
      />

      {/* CTA Banner */}
      <CTABanner
        text={ctaBannerData.text}
        ctaText={ctaBannerData.ctaText}
        ctaHref={ctaBannerData.ctaHref}
      />
    </>
  );
}

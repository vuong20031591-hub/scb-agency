import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig, ctaBannerData } from '@/data/site-config';
import { CTABanner, News } from '@/components/sections';
import { articles, newsSection } from '@/data/articles';

export const metadata: Metadata = {
  title: 'Why Choose SCB Agency? - SCB Agency',
  description: 'Established in Hong Kong in 2014, SCB Agency is a premier provider of advertising services for companies looking to expand business to a global market.',
  openGraph: {
    title: 'Why Choose SCB Agency?',
    description: 'Established in Hong Kong in 2014, SCB Agency is a premier provider of advertising services.',
    url: `${siteConfig.url}/why-scb`,
    siteName: siteConfig.name,
    type: 'website',
  },
};

const stats = [
  { icon: '💰', value: '$10', label: 'Million Ad Campaigns Managed' },
  { icon: '👥', value: '5000+', label: 'Happy Customers Business of all sizes' },
  { icon: '⏱️', value: '10+', label: '10+ Years Experienced Team' },
];

const benefits = [
  {
    icon: '💵',
    title: 'Cost-effective Ad Accounts',
    description: 'SCB will support your business with stable agency ad accounts, no VAT, no service fee or any hidden fees. You can save your budget for more ad campaigns.',
  },
  {
    icon: '🚀',
    title: 'Product Launch Guidance',
    description: 'Senior experts provide free guidance for overseas advertising, such as advertising training, updates and policy guidance.',
  },
  {
    icon: '✅',
    title: 'Dedicated Compliance Manager',
    description: 'Professionally certificated by facebook, google, tiktok. Our experienced team is good at providing multilingual support, multichannel operation.',
  },
  {
    icon: '📊',
    title: 'Marketing Insights',
    description: 'Aiding enterprises to find new signal points of market chances, grab market share of emerging potential industries.',
  },
  {
    icon: '🛒',
    title: 'E-commerce Resources',
    description: 'Providing customers of different categories with one-stop services to go abroad and fulfilling overseas demands of different stages.',
  },
  {
    icon: '🎧',
    title: '24/7 Prioritized Support',
    description: 'Our dedicated account managers provide 24/7 support for any account issues, enabling you to continue advertising without wasting time.',
  },
];


const caseStudies = [
  {
    name: 'Tina',
    business: 'Glasses Making Manufacturer',
    quote: 'SCB assists us in broadening our customer base by strategically utilizing Google Ads layout modes and traffic data during the attraction phase, then implementing remarketing to drive conversions. Through diverse promotional activities and targeted advertising, we have increased sales and capitalized on the potential of international e-commerce.',
    stats: [
      { label: 'Conversion Rate', value: '3x' },
      { label: 'Monthly sales', value: '$2 million' },
    ],
  },
  {
    name: 'Mike',
    business: 'Electric bicycle DTC Brand',
    quote: 'After partnering with Slow Cross Border to initiate Facebook and Google ad campaigns, we managed to save 10% of our annual budget and experienced a fourfold increase in sales within two months. By running ads to attract core users to our independent site, analyzing visitor data, and conducting AB tests, we enhanced our marketing strategies.',
    stats: [
      { label: 'Annual Growth', value: '400%' },
      { label: 'Maximum monthly sales', value: '$5 million' },
    ],
  },
];

export default function WhySCBPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: 'linear-gradient(135deg, rgb(1, 12, 11) 0%, rgb(0, 38, 41) 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Slowly Cross Border
            </h1>
            <p className="text-gray-300 text-lg mb-4">
              Established in Hong Kong in 2014, is a premier provider of advertising services for companies looking to expand business to a global market. Our mission is to help businesses reach new customers and grow revenue by providing cost-effective and reliable advertising solutions.
            </p>
            <p className="text-gray-300 text-lg">
              We specialize in providing free agency ad accounts for Facebook, Google, TikTok, and Bing, with no hidden taxes or fees. Our clients have the freedom to spend as much or as little as they want on their advertising campaigns and get complete control over their budget.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-[#19B5AB] mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partnered with SCB Agency
            </h2>
            <p className="text-gray-600 text-lg">
              Make e-commerce as easy and seamless as possible
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
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
          <div className="text-center mt-10">
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

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Driving Real Results for Our Customers
            </h2>
            <p className="text-gray-600 text-lg">
              We have assisted over 5000 clients in achieving sales growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{study.name}</h3>
                  <p className="text-[#19B5AB]">{study.business}</p>
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{study.quote}&rdquo;</p>
                <div className="flex gap-8">
                  {study.stats.map((stat, i) => (
                    <div key={i}>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                      <p className="text-2xl font-bold text-[#19B5AB]">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <News
        title="Newsroom"
        categories={newsSection.categories}
        articles={articles}
        readMoreHref={newsSection.readMoreHref}
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

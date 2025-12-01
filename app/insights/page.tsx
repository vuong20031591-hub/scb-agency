'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { articles, filterArticlesByCategory, newsSection } from '@/data/articles';
import { siteConfig, ctaBannerData } from '@/data/site-config';
import { CTABanner } from '@/components/sections';
import { Tabs } from '@/components/ui';

const categories = newsSection.categories;

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredArticles = filterArticlesByCategory(articles, activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-16"
        style={{ background: 'linear-gradient(135deg, rgb(1, 12, 11) 0%, rgb(0, 38, 41) 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SCB Insights
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Stay updated with the latest digital marketing trends, tips, and industry insights
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-[#19B5AB] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {article.featuredImage && (
                  <Link href={`/insights/${article.slug}`}>
                    <div className="relative h-48 bg-gray-200">
                      <Image
                        src={article.featuredImage}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-[#19B5AB]/10 text-[#19B5AB] text-xs font-medium rounded-full capitalize">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm">{article.publishedAt}</span>
                  </div>
                  <Link href={`/insights/${article.slug}`}>
                    <h2 className="text-lg font-semibold text-gray-900 mb-2 hover:text-[#19B5AB] transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="text-[#19B5AB] text-sm font-medium hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        text={ctaBannerData.text}
        ctaText={ctaBannerData.ctaText}
        ctaHref={ctaBannerData.ctaHref}
      />
    </>
  );
}

'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { NewsProps, Article } from '@/types';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
};

// Arrow icon for Read more link
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={cn('w-4 h-4', className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Article Card component
function ArticleCard({ article }: { article: Article }) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="bg-white rounded-lg shadow-[0_1px_3px_0_rgba(135,135,135,0.1)] overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Featured Image - 3:2 ratio like original */}
      {article.featuredImage && (
        <Link href={`/insights/${article.slug}`}>
          <div className="relative w-full" style={{ paddingBottom: '66.67%' }}>
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
        </Link>
      )}

      {/* Content */}
      <div>
        <Link href={`/insights/${article.slug}`}>
          <h3 className="text-lg font-normal text-[#262626] hover:text-primary transition-colors line-clamp-2 px-5 pt-5 pb-4">
            {article.title}
          </h3>
        </Link>
        
        <p className="text-sm text-[rgba(38,38,38,0.8)] line-clamp-3 px-5 mb-5 leading-[1.4]">
          {article.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-[rgba(38,38,38,0.6)] px-5 pb-5">
          <Link 
            href={`/insights?category=${article.category}`}
            className="hover:text-primary transition-colors capitalize"
          >
            {article.category}
          </Link>
          <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
}

// Filter articles by category
function filterArticles(articles: Article[], category: string): Article[] {
  if (category === 'All') {
    return articles;
  }
  return articles.filter(
    (article) => article.category.toLowerCase() === category.toLowerCase()
  );
}

export function News({ title, categories, articles, readMoreHref }: NewsProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles = useMemo(() => {
    return filterArticles(articles, activeCategory);
  }, [articles, activeCategory]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-[15px]">
        {/* Section Header with animation */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[35px] font-bold text-[#333]">
            {title}
          </h2>
        </motion.div>

        {/* Category Tabs - matching original styles */}
        <motion.div 
          className="flex flex-wrap justify-center gap-[10px] mb-[30px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-5 py-[7px] rounded-[5px] font-medium text-base leading-[18px] transition-all duration-300 cursor-pointer bg-transparent',
                activeCategory === category
                  ? 'border border-[#15757c] text-[#15757c]'
                  : 'border border-transparent text-[#15757c] hover:border-[#15757c]'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Articles - Flex layout with animation */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="flex flex-wrap gap-5 mb-[10px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {filteredArticles.slice(0, 6).map((article) => (
              <motion.div 
                key={article.id} 
                className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
                variants={cardVariants}
              >
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Read More Button with animation */}
        <motion.div 
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href={readMoreHref}
              className="inline-flex items-center gap-2 border border-[rgba(0,0,0,0.2)] rounded-[5px] px-[22px] py-[9px] text-[rgba(38,38,38,0.8)] hover:border-[#15757c] hover:text-[#15757c] transition-all duration-300"
            >
              Read more
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default News;

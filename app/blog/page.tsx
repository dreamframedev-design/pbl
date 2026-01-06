'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const blogTags = [
    'Biomarker',
    'Biomarker Detection',
    'Biomarker Testing Services',
    'CAR-based Therapies',
    'Central Nervous System',
    'Events',
    'High Sensitivity ELISA Kits',
    'IFN-Associated Diseases',
    'Microbiome',
    'Mouse Models',
    'Multiple Sclerosis',
    'Neurodegenerative Diseases',
    'NeuroInflammation',
    'Science Advocacy',
    'Translational Research',
    'Type I IFN',
  ];

  // Featured post data (from scraped content)
  const featuredPost = {
    title: 'The Future of U.S. Biomedical Innovation is at Risk: An Open Letter to Congress',
    excerpt: "At PBL Assay Science, we've spent 35 years at the forefront of life science innovation. We're proud to contribute to a research ecosystem that transforms human health, supports scientific discovery, and creates high-skilled jobs. Today, we face a critical moment: proposed federal funding cuts to key biomedical agencies threaten not...",
    image: 'https://www.pblassaysci.com/sites/default/files/styles/featured_content/public/2025-09/iStock-480812644-r_0.jpg?itok=wQnH8gEi',
    link: 'https://www.pblassaysci.com/blog',
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[350px] lg:min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/23.webp"
            alt="Blog"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-navy/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Blog
            </h1>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-background-offwhite rounded-xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-700 font-light leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <Link
                  href={featuredPost.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-secondary-teal text-white font-medium rounded-lg hover:bg-secondary-teal/90 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tag Filter */}
      <section className="py-12 bg-background-offwhite border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTag === null
                  ? 'bg-secondary-teal text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Posts
            </button>
            {blogTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTag === tag
                    ? 'bg-secondary-teal text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Listing Note */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 mb-4">
            Additional blog posts will be displayed here based on selected tag.
          </p>
          <p className="text-sm text-gray-500">
            Full blog content and posts can be accessed at{' '}
            <Link
              href="https://www.pblassaysci.com/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-teal hover:text-primary-navy underline"
            >
              www.pblassaysci.com/blog
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}


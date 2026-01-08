'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BookOpen, Tag, ArrowRight, ExternalLink } from 'lucide-react';

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const blogTags = [
    'Biomarker', 'Biomarker Detection', 'Biomarker Testing Services',
    'CAR-based Therapies', 'Central Nervous System', 'Events',
    'High Sensitivity ELISA Kits', 'IFN-Associated Diseases', 'Microbiome',
    'Mouse Models', 'Multiple Sclerosis', 'Neurodegenerative Diseases',
    'NeuroInflammation', 'Science Advocacy', 'Translational Research', 'Type I IFN',
  ];

  // Verbatim data from current page
  const featuredPost = {
    title: 'The Future of U.S. Biomedical Innovation is at Risk: An Open Letter to Congress',
    excerpt: "At PBL Assay Science, we've spent 35 years at the forefront of life science innovation. We're proud to contribute to a research ecosystem that transforms human health, supports scientific discovery, and creates high-skilled jobs. Today, we face a critical moment: proposed federal funding cuts to key biomedical agencies threaten not...",
    image: 'https://www.pblassaysci.com/sites/default/files/styles/featured_content/public/2025-09/iStock-480812644-r_0.jpg?itok=wQnH8gEi',
    link: 'https://www.pblassaysci.com/blog',
  };

  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      {/* 1. MESH GRADIENT HERO */}
      <header className="relative pt-32 pb-24 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
            <span>PBL</span> <span className="text-gray-300">/</span> <span>Resources</span> <span className="text-gray-300">/</span> <span>Knowledge Hub</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            Scientific <br/> <span className="font-light text-gray-400 font-serif italic">Insights</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            Exploring the frontiers of <strong className="text-[#002776]">interferon research</strong>, biomarker detection, and clinical assay development.
          </p>
        </div>
      </header>

      {/* 2. FEATURED ADVOCACY PORTAL (Verbatim Advocacy Post) */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="group relative glass-card p-1 rounded-[3rem] transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,240,243,0.15)] overflow-hidden">
             {/* Glossy highlight line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-[#002776] opacity-50"></div>
            
            <div className="bg-white rounded-[2.8rem] overflow-hidden md:flex items-stretch min-h-[500px]">
              <div className="md:w-1/2 relative min-h-[300px]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-8 left-8">
                  <span className="px-4 py-2 bg-[#002776] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
                    Featured Advocacy
                  </span>
                </div>
              </div>
              
              <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-cyan-600 mb-6">
                  <BookOpen className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-widest">Open Letter</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002776] mb-6 leading-tight tracking-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-500 font-light leading-relaxed mb-10 text-lg">
                  {featuredPost.excerpt}
                </p>
                <Link
                  href={featuredPost.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-black text-[#002776] uppercase tracking-widest group/link"
                >
                  Read Full Letter <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TACTILE FILTER SYSTEM */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#058A9F] shadow-sm border border-slate-100">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Technical Taxonomy</h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Filter by Research Area</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all active:scale-95 border ${
                activeTag === null
                  ? 'bg-[#002776] text-white border-[#002776] shadow-lg shadow-blue-900/20'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-cyan-400 hover:text-cyan-600 shadow-sm'
              }`}
            >
              All Research
            </button>
            {blogTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all active:scale-95 border ${
                  activeTag === tag
                    ? 'bg-[#058A9F] text-white border-[#058A9F] shadow-lg shadow-cyan-900/20'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-cyan-400 hover:text-cyan-600 shadow-sm'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTENT LISTING PLACEHOLDER */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-50 rounded-3xl mb-8 border border-slate-100">
             <div className="w-2 h-2 bg-[#00F0F3] rounded-full animate-pulse"></div>
          </div>
          <p className="text-xl text-slate-500 mb-4 font-light leading-relaxed italic">
            "Scientific publications and research updates are synchronized based on taxonomy selection."
          </p>
          <p className="text-sm text-slate-400 mb-12">
            Explore our external archive for deep technical analysis:
          </p>
          <Link
            href="https://www.pblassaysci.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-[#002776] transition-all shadow-xl shadow-slate-900/20"
          >
            Access Legacy Blog <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

import { notFound } from 'next/navigation';
import MarkdownContent from '@/components/MarkdownContent';
import Link from 'next/link';
import { getMarkdownContent } from '@/lib/markdown-utils';
import React from 'react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const content = await getMarkdownContent(slug, 'services');
  
  return {
    title: content ? `${content.title} | PBL Assay Science` : 'Services | PBL Assay Science',
    description: 'Professional assay development and biomarker testing services.',
  };
}

export default async function DynamicServicePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  
  // Skip catch-all for pages that already have custom implementations
  const customPages = [
    'biomarker-sample-analysis',
    'cell-based-services',
    'antibody-characterization',
    'custom-production',
    'assay-development',
  ];

  if (slug[0] && customPages.includes(slug[0])) {
    // Let Next.js handle the existing custom pages
    notFound();
  }

  const markdownData = await getMarkdownContent(slug, 'services');

  if (!markdownData) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em] flex-wrap">
            <span>PBL</span> <span className="text-gray-300">/</span> <span>Services</span>
            {slug.length > 0 && (
              <>
                {slug.map((segment, index) => (
                  <React.Fragment key={index}>
                    <span className="text-gray-300">/</span>
                    <span className="break-words">{segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
                  </React.Fragment>
                ))}
              </>
            )}
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="text-[#002776]">{markdownData.title}</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <MarkdownContent content={markdownData.content} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pt-32 pb-12 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-cyan-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Specialized Development</span>
          <h2 className="text-5xl font-bold mb-6 tracking-tight text-[#002776]">Need a custom solution?</h2>
          <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
            Fit-for-purpose assay development, customization and execution.
          </p>
          <Link
            href="/speak-to-a-scientist"
            className="inline-flex items-center px-14 py-6 bg-[#002776] text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-[#002776]/30"
          >
            Talk to a Scientist
          </Link>
        </div>
      </section>
    </main>
  );
}


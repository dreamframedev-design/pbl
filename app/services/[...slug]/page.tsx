import { notFound } from 'next/navigation';
import MarkdownContent from '@/components/MarkdownContent';
import Link from 'next/link';
import { getMarkdownContent } from '@/lib/markdown-utils';

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
      <section className="relative w-full min-h-[350px] lg:min-h-[450px] flex items-center justify-center bg-gradient-to-br from-background-periwinkle/20 via-white to-background-lavender/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-headline-primary leading-tight mb-8">
              {markdownData.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <MarkdownContent content={markdownData.content} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-white text-center">
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


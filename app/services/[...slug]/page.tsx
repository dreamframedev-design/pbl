import { notFound } from 'next/navigation';
import FloatingCTA from '@/components/FloatingCTA';
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
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative w-full min-h-[350px] lg:min-h-[450px] flex items-center justify-center bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight mb-8">
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
      <section className="section-padding bg-background-offwhite">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Link
            href="/speak-to-a-scientist"
            className="inline-flex items-center justify-center px-8 py-4 bg-secondary-teal text-white font-medium rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-out"
          >
            Talk to a Scientist
          </Link>
        </div>
      </section>
    </main>
  );
}


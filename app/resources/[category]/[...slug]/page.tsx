import { notFound } from 'next/navigation';
import MarkdownContent from '@/components/MarkdownContent';
import Link from 'next/link';
import { getResourceContent } from '@/lib/markdown-utils';

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string[] }> }) {
  const { category, slug } = await params;
  const content = await getResourceContent(category, slug);
  
  return {
    title: content ? `${content.title} | PBL Assay Science` : 'Resource | PBL Assay Science',
    description: 'Technical resources and documentation from PBL Assay Science.',
  };
}

export default async function DynamicResourcePage({ params }: { params: Promise<{ category: string; slug: string[] }> }) {
  const { category, slug } = await params;
  const markdownData = await getResourceContent(category, slug);

  if (!markdownData) {
    notFound();
  }

  // Get category display name
  const categoryNames: Record<string, string> = {
    'general-protocols': 'General Protocols',
    'scientific-articles': 'Scientific Articles',
    'technical-presentations': 'Technical Presentations',
  };

  const categoryName = categoryNames[category] || category;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[350px] lg:min-h-[450px] flex items-center justify-center bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <Link
                href={`/resources/${category}`}
                className="text-secondary-teal hover:text-primary-navy font-medium transition-colors inline-flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to {categoryName}
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight mb-4">
              {markdownData.title}
            </h1>
            <p className="text-lg text-gray-600 font-light">
              {categoryName}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <MarkdownContent content={markdownData.content} />
        </div>
      </section>

      {/* Back to Resources Link */}
      <section className="section-padding bg-background-offwhite">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Link
            href={`/resources/${category}`}
            className="inline-flex items-center text-secondary-teal hover:text-primary-navy font-medium transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to {categoryName}
          </Link>
        </div>
      </section>
    </main>
  );
}


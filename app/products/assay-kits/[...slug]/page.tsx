import { notFound } from 'next/navigation';
import FloatingCTA from '@/components/FloatingCTA';
import MarkdownContent from '@/components/MarkdownContent';
import ProductCatalog from '@/components/ProductCatalog';
import Link from 'next/link';
import { getMarkdownContent, getSubCategories } from '@/lib/markdown-utils';
import { extractCatalogTable } from '@/lib/catalog-utils';
import { getPlaceholderCatalogData } from '@/lib/placeholder-catalog-data';
import { generatePageTitleFromSlug } from '@/lib/page-title-utils';

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const content = await getMarkdownContent(slug, 'assay-kits');
  
  return {
    title: content ? `${content.title} | PBL Assay Science` : 'Assay Kits | PBL Assay Science',
    description: 'High-performance ELISA kits for interferon and cytokine detection.',
  };
}

export default async function DynamicAssayKitPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const markdownData = await getMarkdownContent(slug, 'assay-kits');
  const subCategories = await getSubCategories(slug, 'assay-kits');

  if (!markdownData && subCategories.length === 0) {
    notFound();
  }

  // Build the current path for sub-category links
  const currentPath = `/products/assay-kits/${slug.join('/')}`;

  // Extract catalog table from markdown content, or use placeholder data
  let catalogProducts = markdownData ? extractCatalogTable(markdownData.content) : [];
  
  // If no catalog found in markdown, try placeholder data
  if (catalogProducts.length === 0) {
    const placeholderData = getPlaceholderCatalogData(slug.join('/'));
    if (placeholderData) {
      catalogProducts = placeholderData;
    }
  }

  // Generate page title from slug
  const pageTitle = generatePageTitleFromSlug(slug, 'assay-kits');
  
  // Determine if this is a product listing page (has catalog table, no sub-categories, no markdown content to show)
  const isProductListingPage = catalogProducts.length > 0 && subCategories.length === 0;

  return (
    <main className="min-h-screen">
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative w-full min-h-[350px] lg:min-h-[450px] flex items-center justify-center bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight mb-8">
              {pageTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* Sub-Categories Grid - Internal Navigation (Always at Top) */}
      {subCategories.length > 0 && (
        <section className="section-padding bg-background-offwhite">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
              {subCategories.map((subCategory) => (
                <Link
                  key={subCategory.slug}
                  href={`${currentPath}/${subCategory.slug}`}
                  className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col w-full max-w-sm"
                >
                  <div className="w-12 h-12 bg-secondary-teal/10 rounded-lg mb-4 flex items-center justify-center group-hover:bg-secondary-teal/20 transition-colors mx-auto">
                    <svg
                      className="w-6 h-6 text-secondary-teal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy mb-3 group-hover:text-secondary-teal transition-colors text-center">
                    {subCategory.name}
                  </h3>
                  {subCategory.description && (
                    <p className="text-sm text-gray-600 font-light leading-relaxed flex-grow text-center">
                      {subCategory.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content - Only show if NOT a product listing page */}
      {markdownData && !isProductListingPage && (
        <section className={`section-padding ${subCategories.length > 0 ? 'bg-white' : 'bg-background-offwhite'}`}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <MarkdownContent content={markdownData.content} />
          </div>
        </section>
      )}

      {/* Product Catalog Table - Always Last */}
      {catalogProducts.length > 0 && (
        <ProductCatalog products={catalogProducts} />
      )}

      {/* Bottom CTA */}
      <section className={`section-padding ${catalogProducts.length > 0 ? 'bg-white' : 'bg-background-offwhite'}`}>
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

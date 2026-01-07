import { notFound } from 'next/navigation';
import MarkdownContent from '@/components/MarkdownContent';
import ProductCatalog from '@/components/ProductCatalog';
import BannerHero from '@/components/BannerHero';
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

  // Build breadcrumbs from slug
  const breadcrumbs = [
    { label: 'Products', href: '/products' },
    { label: 'Assay Kits', href: '/products/assay-kits' },
  ];
  
  // Add intermediate breadcrumbs based on slug
  let breadcrumbPath = '/products/assay-kits';
  slug.forEach((segment, index) => {
    if (index < slug.length - 1) {
      breadcrumbPath += `/${segment}`;
      const label = segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      breadcrumbs.push({ label, href: breadcrumbPath });
    }
  });

  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      {/* Hero Section */}
      <BannerHero title={pageTitle} breadcrumbs={breadcrumbs} />

      {/* Sub-Categories Grid - Internal Navigation (Always at Top) */}
      {subCategories.length > 0 && (
        <section className="py-24 bg-[#F9F9FC] border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {subCategories.map((subCategory) => (
                <div
                  key={subCategory.slug}
                  className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}
                >
                  <Link
                    href={`${currentPath}/${subCategory.slug}`}
                    className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent block"
                  >
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all font-bold">
                        {subCategory.name.charAt(0)}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-cyan-600 transition-colors">
                      {subCategory.name}
                    </h3>
                    {subCategory.description && (
                      <p className="text-gray-500 text-sm font-light mb-8">
                        {subCategory.description}
                      </p>
                    )}
                    <div className="mt-auto">
                      <span className="text-sm font-bold text-cyan-500 flex items-center gap-2 group-hover:gap-4 transition-all">
                        View Products <span>→</span>
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content - Only show if NOT a product listing page */}
      {markdownData && !isProductListingPage && (
        <section className="py-24 bg-white">
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

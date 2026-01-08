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
  const content = await getMarkdownContent(slug, 'proteins');
  
  return {
    title: content ? `${content.title} | PBL Assay Science` : 'Proteins | PBL Assay Science',
    description: 'High-quality interferon and cytokine proteins for research applications.',
  };
}

export default async function DynamicProteinPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const markdownData = await getMarkdownContent(slug, 'proteins');
  const subCategories = await getSubCategories(slug, 'proteins');

  if (!markdownData && subCategories.length === 0) {
    notFound();
  }

  // Build the current path for sub-category links
  const currentPath = `/products/proteins/${slug.join('/')}`;

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
  const pageTitle = generatePageTitleFromSlug(slug, 'proteins');
  
  // Determine if this is a product listing page (has catalog table, no sub-categories, no markdown content to show)
  const isProductListingPage = catalogProducts.length > 0 && subCategories.length === 0;

  // Build breadcrumbs from slug
  const breadcrumbs = [
    { label: 'Products', href: '/products' },
    { label: 'Proteins', href: '/products/proteins' },
  ];
  
  // Add intermediate breadcrumbs based on slug
  let breadcrumbPath = '/products/proteins';
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
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {subCategories.map((subCategory, index) => (
                <div
                  key={subCategory.slug}
                  className={`group rounded-[3rem] transition-all duration-500 flex flex-col ${
                    index === subCategories.length - 1
                      ? 'p-[2.5px] bg-gradient-to-br from-cyan-400 to-[#002776] hover:scale-[1.02] shadow-xl'
                      : 'glass-card p-1 glow-border'
                  }`}
                >
                  <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                    <div className="mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all font-black text-lg ${
                        index === subCategories.length - 1
                          ? 'bg-slate-50 text-slate-400 group-hover:bg-[#002776] group-hover:text-white'
                          : 'bg-cyan-50 text-cyan-500 group-hover:bg-[#00F0F3] group-hover:text-[#002776]'
                      }`}>
                        {subCategory.name.charAt(0)}
                      </div>
                    </div>
                    <Link href={`${currentPath}/${subCategory.slug}`} className="block mb-2 group-hover:text-cyan-600 transition-colors">
                      <h3 className="text-2xl font-bold text-[#002776]">
                        {subCategory.name}
                      </h3>
                    </Link>
                    {subCategory.description && (
                      <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
                        {subCategory.description}
                      </p>
                    )}
                    <div className="mt-auto">
                      <Link
                        href={`${currentPath}/${subCategory.slug}`}
                        className={`w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm ${
                          index === subCategories.length - 1
                            ? 'bg-[#002776] text-white hover:bg-cyan-600'
                            : 'bg-slate-50 group-hover:bg-[#002776] group-hover:text-white'
                        }`}
                      >
                        View Products
                      </Link>
                    </div>
                  </div>
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

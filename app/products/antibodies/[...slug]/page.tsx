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
  const content = await getMarkdownContent(slug, 'antibodies');
  
  return {
    title: content ? `${content.title} | PBL Assay Science` : 'Antibodies | PBL Assay Science',
    description: 'High-quality monoclonal and polyclonal antibodies for interferon research.',
  };
}

export default async function DynamicAntibodyPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const markdownData = await getMarkdownContent(slug, 'antibodies');
  const subCategories = await getSubCategories(slug, 'antibodies');

  if (!markdownData && subCategories.length === 0) {
    notFound();
  }

  // Build the current path for sub-category links
  const currentPath = `/products/antibodies/${slug.join('/')}`;

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
  const pageTitle = generatePageTitleFromSlug(slug, 'antibodies');
  
  // External link overrides for sub-category cards
  const externalLinkMap: Record<string, string> = {
    // Anti-Human IFN MAbs sub-pages
    'monoclonal/anti-human-ifn/anti-human-ifn-alpha-mabs': 'https://www.pblassaysci.com/antibodies/monoclonal-antibodies-mabs/anti-human-ifn-alpha-mabs',
    'monoclonal/anti-human-ifn/anti-human-ifn-beta-mabs': 'https://www.pblassaysci.com/antibodies/monoclonal-antibodies-mabs/anti-human-ifn-beta-mabs',
    'monoclonal/anti-human-ifn/anti-human-ifn-receptor-mabs': 'https://www.pblassaysci.com/antibodies/monoclonal-antibodies-mabs/anti-human-ifn-receptor-mabs',
    'monoclonal/anti-human-ifn/mabs-against-other-human-ifns': 'https://www.pblassaysci.com/antibodies/monoclonal-antibodies-mabs/mabs-against-other-human-ifns',
  };
  
  // Sub-category description overrides
  const subCategoryDescriptionOverrides: Record<string, string> = {
    'monoclonal/anti-human-ifn/anti-human-ifn-alpha-mabs': 'Anti-Human Interferon Alpha Monoclonal Antibodies',
    'monoclonal/anti-human-ifn/anti-human-ifn-beta-mabs': 'Anti-Human Interferon Beta Monoclonal Antibodies',
    'monoclonal/anti-human-ifn/anti-human-ifn-receptor-mabs': 'Anti-Human Interferon Receptor Monoclonal Antibodies',
  };
  
  // Additional sub-categories to add (not from markdown directories)
  const additionalSubCategories: Record<string, Array<{ name: string; slug: string; description?: string }>> = {
    'monoclonal/anti-human-ifn': [
      {
        name: 'MAbs against other Human IFNs',
        slug: 'mabs-against-other-human-ifns',
        description: 'Monoclonal Antibodies against other Human Interferon Proteins',
      },
    ],
  };
  
  // Helper function to get link for a sub-category
  const getSubCategoryLink = (subCategorySlug: string): { href: string, isExternal: boolean } => {
    const fullPath = `${slug.join('/')}/${subCategorySlug}`;
    const externalUrl = externalLinkMap[fullPath];
    if (externalUrl) {
      return { href: externalUrl, isExternal: true };
    }
    return { href: `${currentPath}/${subCategorySlug}`, isExternal: false };
  };
  
  // Merge additional sub-categories if any exist for this path
  const currentSlugPath = slug.join('/');
  const additionalItems = additionalSubCategories[currentSlugPath] || [];
  const allSubCategories = [...subCategories, ...additionalItems];
  
  // Determine if this is a product listing page (has catalog table, no sub-categories, no markdown content to show)
  const isProductListingPage = catalogProducts.length > 0 && allSubCategories.length === 0;

  // Build breadcrumbs from slug
  const breadcrumbs = [
    { label: 'Products', href: '/products' },
    { label: 'Antibodies', href: '/products/antibodies' },
  ];
  
  // Add intermediate breadcrumbs based on slug
  let breadcrumbPath = '/products/antibodies';
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
      {allSubCategories.length > 0 && (
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {allSubCategories.map((subCategory, index) => {
                const linkInfo = getSubCategoryLink(subCategory.slug);
                return (
                  <div
                    key={subCategory.slug}
                    className={`group rounded-[3rem] transition-all duration-500 flex flex-col ${
                      index === allSubCategories.length - 1
                        ? 'p-[2.5px] bg-gradient-to-br from-cyan-400 to-[#002776] hover:scale-[1.02] shadow-xl'
                        : 'glass-card p-1 glow-border'
                    }`}
                  >
                    <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                      <div className="mb-6">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all font-black text-lg ${
                          index === allSubCategories.length - 1
                            ? 'bg-slate-50 text-slate-400 group-hover:bg-[#002776] group-hover:text-white'
                            : 'bg-cyan-50 text-cyan-500 group-hover:bg-[#00F0F3] group-hover:text-[#002776]'
                        }`}>
                          {subCategory.name.charAt(0)}
                        </div>
                      </div>
                      {linkInfo.isExternal ? (
                        <a href={linkInfo.href} target="_blank" rel="noopener noreferrer" className="block mb-2 group-hover:text-cyan-600 transition-colors">
                          <h3 className="text-2xl font-bold text-[#002776]">
                            {subCategory.name}
                          </h3>
                        </a>
                      ) : (
                        <Link href={linkInfo.href} className="block mb-2 group-hover:text-cyan-600 transition-colors">
                          <h3 className="text-2xl font-bold text-[#002776]">
                            {subCategory.name}
                          </h3>
                        </Link>
                      )}
                      {(() => {
                        const overrideKey = `${slug.join('/')}/${subCategory.slug}`;
                        const description = subCategoryDescriptionOverrides[overrideKey] || subCategory.description;
                        return description ? (
                          <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
                            {description}
                          </p>
                        ) : null;
                      })()}
                      <div className="mt-auto">
                        {linkInfo.isExternal ? (
                          <a
                            href={linkInfo.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm ${
                              index === allSubCategories.length - 1
                                ? 'bg-[#002776] text-white hover:bg-cyan-600'
                                : 'bg-slate-50 group-hover:bg-[#002776] group-hover:text-white'
                            }`}
                          >
                            View Products
                          </a>
                        ) : (
                          <Link
                            href={linkInfo.href}
                            className={`w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm ${
                              index === allSubCategories.length - 1
                                ? 'bg-[#002776] text-white hover:bg-cyan-600'
                                : 'bg-slate-50 group-hover:bg-[#002776] group-hover:text-white'
                            }`}
                          >
                            View Products
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
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
      <section className="pt-32 pb-12 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6 tracking-tight text-[#002776]">Speak to a Scientist</h2>
          <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
            PBL's Customer Support Team is ready to assist by email, phone, or chat.
          </p>
          <a
            href="https://www.pblassaysci.com/speak-to-a-scientist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-14 py-6 bg-[#002776] text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-[#002776]/30"
          >
            Speak to a Scientist
          </a>
        </div>
      </section>
    </main>
  );
}

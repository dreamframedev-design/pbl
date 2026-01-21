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
  
  // Page-specific content overrides
  const pageContentMap: Record<string, { title?: string, titleLine1?: string, titleSuffix?: string, description?: string, introParagraphs?: string[] }> = {
    'interferon-elisas/human': {
      titleLine1: 'Human Interferon',
      titleSuffix: 'ELISAs',
      description: 'ELISA kits target various human interferon analytes. Kits range in sensitivity and matrix compatibility. If you would like assistance selecting the suitable kit for your research needs, reach out via chat, phone (+1 732-777-9123) or email.',
      introParagraphs: [], // Prevent markdown content from showing
    },
    'interferon-elisas/mouse': {
      titleLine1: 'Mouse Interferon',
      titleSuffix: 'ELISAs',
      description: 'ELISA kits targeting various mouse interferon analytes. Kits range in sensitivity and matrix compatibility. If you would like assistance selecting the suitable kit for your research needs, reach out via chat, phone (+1 732-777-9123) or email!',
      introParagraphs: [], // Prevent markdown content from showing
    },
    'interferon-elisas/non-human': {
      titleLine1: 'Non-Human Interferon',
      titleSuffix: 'ELISAs',
      description: 'IFN ELISA kits target non-human (cynomolgus/rhesus, pig) analytes and provide accurate sample detection.',
      introParagraphs: [], // Prevent markdown content from showing
    },
  };
  
  const pageContent = pageContentMap[slug.join('/')];
  const displayTitle = pageContent?.title || pageTitle;
  
  // Sub-category description overrides
  const subCategoryDescriptionOverrides: Record<string, string> = {
    // Human IFN ELISAs
    'interferon-elisas/human/human-ifn-alpha-elisa-kits': 'Human IFN-Alpha ELISA kits are designed to provide low pg/ml (LOQ 1.95 pg/ml) sensitivity and global IFN-Alpha subtype detection (12 of 12) in serum, plasma, and tissue culture media (TCM).',
    'interferon-elisas/human/human-ifn-beta-elisa-kits': 'These Human IFN-Beta ELISAs are highly sensitive immunoassays developed to measure human IFN-Beta in specific matrices (e.g. healthy and disease sera, plasma, tissue culture media (TCM)).',
    'interferon-elisas/human/human-ifn-gamma-receptor-elisa': 'Provides high sensitivity detection of Human IFNGR1 to < 10 pg/ml in Sample Diluent and Cell Lysates',
    'interferon-elisas/human/human-ifn-lambda-elisas': 'DIY Human IFN-Lambda ELISA kits are designed to provide detection of IFN-Lambda 2/3 (IL-28A/B) or IFN-Lambda 1/2/3 (IL-29/28A/28B) in tissue culture media (TCM).',
    // Mouse IFN ELISAs
    'interferon-elisas/mouse/mouse-ifn-alpha-elisas': 'These Mouse IFN-Alpha All-Subtype ELISA kits are designed to provide global IFN-Alpha subtype detection (14 of 14).',
    'interferon-elisas/mouse/mouse-ifn-beta-elisas': 'These Mouse IFN-Beta ELISAs are developed to measure IFN-Beta in specific matrices (e.g. serum, plasma, tissue culture media (TCM)).',
    'interferon-elisas/mouse/mouse-ifn-lambda-elisa': 'This DIY Mouse IFN-Lambda ELISA kit is designed to provide detection of IFN-Lambda 2/3 (IL-28A/B) in tissue culture media (TCM).',
    // Non-Human IFN ELISAs
    'interferon-elisas/non-human/cynomolgusrhesus-ifn-alpha-elisa': 'This ELISA quantifies Cynomolgus and Rhesus IFN-Alpha 2 in serum, plasma, and tissue culture media (TCM).',
    'interferon-elisas/non-human/pig-ifn-alpha-elisa': 'This ELISA quantifies Porcine IFN-Alpha in serum, plasma, and tissue culture media (TCM) with an LLOQ of 2.34 pg/ml.',
    'interferon-elisas/non-human/cynomolgus-ifn-beta-elisa': 'This ELISA quantifies Cynomolgus IFN-Beta in serum, plasma, and tissue culture media (TCM) with an LLOQ of 5.47 pg/ml.',
  };
  
  // Additional sub-categories to add (for pages missing items)
  const additionalSubCategories: Record<string, Array<{ name: string; slug: string; description?: string }>> = {
    'interferon-elisas/human': [
      {
        name: 'Human IFN-Lambda ELISAs',
        slug: 'human-ifn-lambda-elisas',
        description: 'DIY Human IFN-Lambda ELISA kits are designed to provide detection of IFN-Lambda 2/3 (IL-28A/B) or IFN-Lambda 1/2/3 (IL-29/28A/28B) in tissue culture media (TCM).',
      },
    ],
  };
  
  // External link overrides for sub-category cards
  const externalLinkMap: Record<string, string> = {
    // Human IFN ELISAs
    'interferon-elisas/human/human-ifn-alpha-elisa-kits': 'https://www.pblassaysci.com/assay-kits/ELISAs/human-interferon-ELISAs/human-ifn-alpha-ELISAs',
    'interferon-elisas/human/human-ifn-beta-elisa-kits': 'https://www.pblassaysci.com/assay-kits/ELISAs/human-interferon-ELISAs/human-ifn-beta-ELISAs',
    'interferon-elisas/human/human-ifn-gamma-receptor-elisa': 'https://www.pblassaysci.com/assay-kits/human-ifngr1-elisa-kit-serum-plasma-cell-lysate-tcm-41580',
    'interferon-elisas/human/human-ifn-lambda-elisas': 'https://www.pblassaysci.com/assay-kits/interferon-ifn-elisas/human-ifn-lambda-elisas',
    // Mouse IFN ELISAs
    'interferon-elisas/mouse/mouse-ifn-alpha-elisas': 'https://www.pblassaysci.com/assay-kits/ELISAs/mouse-interferon-ELISAs/mouse-ifn-alpha-ELISAs',
    'interferon-elisas/mouse/mouse-ifn-beta-elisas': 'https://www.pblassaysci.com/assay-kits/elisas/mouse-interferon-elisas/mouse-ifn-beta-elisas',
    'interferon-elisas/mouse/mouse-ifn-lambda-elisa': 'https://www.pblassaysci.com/assay-kits/diy-mouse-ifn-lambda-23-il-28ab-elisa-tcm-62830',
    // Non-Human IFN ELISAs
    'interferon-elisas/non-human/cynomolgusrhesus-ifn-alpha-elisa': 'https://www.pblassaysci.com/assay-kits/cynomolgusrhesus-ifn-alpha-elisa-kit-serum-plasma-tcm-46100',
    'interferon-elisas/non-human/pig-ifn-alpha-elisa': 'https://www.pblassaysci.com/assay-kits/pig-ifn-alpha-elisa-kit-serum-plasma-tcm-47100',
    'interferon-elisas/non-human/cynomolgus-ifn-beta-elisa': 'https://www.pblassaysci.com/assay-kits/cynomolgus-ifn-beta-elisa-kit-serum-plasma-tcm-46415-1',
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
  
  // Merge additional sub-categories
  const additionalItems = additionalSubCategories[slug.join('/')] || [];
  const allSubCategories = [...subCategories, ...additionalItems];
  
  // Determine if this is a product listing page (has catalog table, no sub-categories, no markdown content to show)
  const isProductListingPage = catalogProducts.length > 0 && allSubCategories.length === 0;

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
      <BannerHero 
        title={pageContent?.titleLine1 ? undefined : displayTitle}
        titleLine1={pageContent?.titleLine1}
        titleSuffix={pageContent?.titleSuffix}
        description={pageContent?.description} 
        breadcrumbs={breadcrumbs} 
      />

      {/* Intro Paragraphs - If page has intro content */}
      {pageContent?.introParagraphs && pageContent.introParagraphs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="space-y-6 text-slate-600 leading-relaxed font-light text-lg">
              {pageContent.introParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sub-Categories Grid - Internal Navigation (Always at Top) */}
      {allSubCategories.length > 0 && (
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {allSubCategories.map((subCategory, index) => {
                // Check for description override
                const overrideKey = `${slug.join('/')}/${subCategory.slug}`;
                const description = subCategoryDescriptionOverrides[overrideKey] || subCategory.description;
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
                      {description && (
                        <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
                          {description}
                        </p>
                      )}
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

      {/* Main Content - Only show if NOT a product listing page and NOT showing intro paragraphs */}
      {markdownData && !isProductListingPage && !pageContent?.introParagraphs && (
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

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
  
  // Page-specific content for pages without markdown
  const pageContentMap: Record<string, { bullets?: string[], paragraphs?: string[], titleLine1?: string, titleSuffix?: string, introParagraphs?: string[] }> = {
    'cytokines-growth-factors': {
      introParagraphs: [
        'Cytokines are a class of signaling proteins that play a role in both the induction and effector phases of all immune and inflammatory responses, including cell proliferation, intercellular communication, and cell death. Cytokines are produced by a variety of hematopoietic and non-hematopoietic cell types and can exert autocrine and paracrine effects. They are related more correctly to hormones than to growth factors in their overall functions, but many cytokines also exhibit growth factor activity.',
        'Growth factors are proteins that bind to receptors on the cell surface, with the primary result of activating cellular proliferation and/or differentiation. Growth factors are important for regulating a variety of cellular processes and are quite versatile, stimulating cellular division in numerous different cell types; while others are specific to a particular cell-type.',
      ],
    },
    'cytokines-growth-factors/human-cell-expressed': {
      titleLine1: 'Human Cell-Expressed',
      titleSuffix: 'Cytokines',
      bullets: [
        'Authentic human glycosylation & native human post-translational modifications',
        'Animal-component-free, protein-free production',
        'High bioactivity and stability; lyophilized',
        'High purity, low endotoxin proteins (intrinsically low endotoxin levels conferred by human cell expression)',
      ],
      paragraphs: [
        'Human Cell Expressed (HCE) cytokines closely mimic native human proteins. These affordable, tag-free, animal-component-free proteins are produced in stable, serum-free, chemically defined cell culture helping ensure lot-to-lot consistency and reproducibility.',
        'HCE cytokines possess authentic human N-and/or O-linked glycosylation and other post-translational modifications preserving appropriate biological activities and epitopes. These proteins retain native properties and accurately mimic native human proteins, providing researchers a useful tool to use in human cell culture experiments.',
      ],
    },
  };
  
  const pageContent = pageContentMap[slug.join('/')];
  
  // Sub-category description overrides
  const subCategoryDescriptionOverrides: Record<string, string> = {
    'cytokines-growth-factors/human-cell-expressed-cytokines': 'Human Cell Expressed (HCE) cytokines closely mimic native human proteins. Interleukin-15, 22, 28A, 28B, and 29 available.',
    // E.coli card - remove any artifact brackets from markdown
    'cytokines-growth-factors/e.coli-&-cho-expressed-cytokine-&-growth-factor': 'PBL offers recombinant cytokines and growth factors expressed in E.coli and CHO cells for life science research applications.',
  };
  
  // External link overrides for sub-category cards
  const externalLinkMap: Record<string, string> = {
    // Human IFN Proteins sub-pages (slugs derived from directory names like "Human IFN-Alpha" → 'human-ifn-alpha')
    'interferons/human/human-ifn-alpha': 'https://www.pblassaysci.com/proteins/interferons/human-ifn-proteins/human-ifn-alpha',
    'interferons/human/human-ifn-beta': 'https://www.pblassaysci.com/proteins/interferons/human-ifn-proteins/human-ifn-beta',
    'interferons/human/other-human-ifns': 'https://www.pblassaysci.com/proteins/interferons/human-ifn-proteins/other-human-ifns',
    // Mouse IFN Proteins sub-pages (slugs derived from directory names like "Mouse IFN-Alpha" → 'mouse-ifn-alpha')
    'interferons/mouse/mouse-ifn-alpha': 'https://www.pblassaysci.com/proteins/interferons/mouse-ifn-proteins/mouse-ifn-alpha',
    'interferons/mouse/mouse-ifn-beta': 'https://www.pblassaysci.com/proteins/interferons/mouse-ifn-proteins/mouse-ifn-beta',
    'interferons/mouse/mouse-ifn-lambda': 'https://www.pblassaysci.com/proteins/mouseifnlambda',
    // Mammalian IFN Proteins (slug: 'mammalian-ifn-proteins-non-human-non-mouse')
    'interferons/mammalian-ifn-proteins-non-human-non-mouse': 'https://www.pblassaysci.com/proteins/mammalian-ifn-proteins-non-human-non-mouse',
    // Rat IFN Proteins (slug: 'rat-ifn-proteins')
    'interferons/rat-ifn-proteins': 'https://www.pblassaysci.com/proteins/rat-ifn-proteins',
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
      <BannerHero 
        title={pageContent?.titleLine1 ? undefined : pageTitle}
        titleLine1={pageContent?.titleLine1}
        titleSuffix={pageContent?.titleSuffix}
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
      {subCategories.length > 0 && (
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {subCategories.map((subCategory, index) => {
                const linkInfo = getSubCategoryLink(subCategory.slug);
                return (
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
                        // Check for description override
                        const overrideKey = `${slug.join('/')}/${subCategory.slug}`;
                        const overrideDescription = subCategoryDescriptionOverrides[overrideKey];
                        // Clean up description (remove markdown artifacts like "[]()","[", "]", etc.)
                        const rawDescription = overrideDescription || subCategory.description;
                        const cleanDescription = rawDescription 
                          ? rawDescription
                              .replace(/\[\]\(\)/g, '')  // Empty markdown links
                              .replace(/\[\s*\]\s*\(\s*\)/g, '')  // Empty links with spaces
                              .replace(/\[\s*\]/g, '')  // Empty brackets
                              .replace(/\(\s*\)/g, '')  // Empty parens
                              .replace(/\s{2,}/g, ' ')  // Collapse multiple spaces
                              .trim() 
                          : null;
                        return cleanDescription ? (
                          <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
                            {cleanDescription}
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
                              index === subCategories.length - 1
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
                              index === subCategories.length - 1
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

      {/* Page-Specific Content */}
      {pageContent && (
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">
            {pageContent.bullets && (
              <ul className="space-y-3 text-lg text-slate-600 font-light">
                {pageContent.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#002776] mt-2.5 flex-shrink-0"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            {pageContent.paragraphs && pageContent.paragraphs.map((para, index) => (
              <p key={index} className="text-lg text-slate-600 font-light leading-relaxed">
                {para}
              </p>
            ))}
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

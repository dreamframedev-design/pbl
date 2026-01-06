import Link from 'next/link';
import FloatingCTA from '@/components/FloatingCTA';
import ProductCatalog from '@/components/ProductCatalog';
import { getMarkdownContent } from '@/lib/markdown-utils';
import { extractCatalogTable } from '@/lib/catalog-utils';
import { getPlaceholderCatalogData } from '@/lib/placeholder-catalog-data';

export default async function InterleukinElisasPage() {
  // Get markdown content and extract catalog table
  const markdownData = await getMarkdownContent(['interleukin-elisas'], 'assay-kits');
  let catalogProducts = markdownData ? extractCatalogTable(markdownData.content) : [];
  
  // If no catalog found in markdown, use placeholder data
  if (catalogProducts.length === 0) {
    const placeholderData = getPlaceholderCatalogData('interleukin-elisas');
    if (placeholderData) {
      catalogProducts = placeholderData;
    }
  }
  return (
    <main className="min-h-screen">
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative w-full min-h-[350px] lg:min-h-[450px] flex items-center justify-center bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight mb-8">
              Interleukin (IL) ELISAs
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
              Interleukin ELISA kits designed to provide accurate and sensitive quantification of endogenous levels in healthy and disease sera/plasma and tissue culture media samples.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Categories Grid - Internal Navigation */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Human IL-15 ELISA Card */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/assay-kits/interleukin-elisas/human-il-15" className="block cursor-pointer">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4 group-hover:text-secondary-teal transition-colors">
                  Human IL-15 ELISA
                </h2>
              </Link>
              <p className="text-gray-700 leading-relaxed font-light text-sm">
                This ELISA measures endogenous human IL-15 at or near basal levels with LLOQ of 0.51 pg/ml in serum, plasma, and tissue culture media.
              </p>
            </div>

            {/* Human IL-22 ELISA Card */}
            <div className="group relative bg-background-offwhite p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <Link href="/products/assay-kits/interleukin-elisas/human-il-22" className="block cursor-pointer">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4 group-hover:text-secondary-teal transition-colors">
                  Human IL-22 ELISA
                </h2>
              </Link>
              <p className="text-gray-700 leading-relaxed font-light text-sm">
                This ELISA is designed for accurate low-level quantitation of endogenous human IL-22 in healthy & disease sera/plasma, and tissue culture media (TCM) samples with an LLOQ of 0.78 pg/ml.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Table */}
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


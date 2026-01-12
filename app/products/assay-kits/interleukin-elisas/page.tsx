import Link from 'next/link';
import Image from 'next/image';
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
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ELISAs Kits Hero.webp"
            alt="Interleukin ELISA Kits header background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="max-w-2xl text-left">
            {/* Breadcrumbs */}
            <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
              <Link href="/products" className="hover:text-cyan-700">Products</Link>
              <span className="text-gray-300">/</span>
              <Link href="/products/assay-kits" className="hover:text-cyan-700">Assay Kits</Link>
            </nav>
            
            <h1 className="text-4xl md:text-8xl font-bold tracking-tight mb-6 pb-2 leading-tight">
              <span className="block text-[#002776]">Interleukin <span className="font-light text-gray-400 font-serif italic">(IL)</span></span>
              <span className="block text-[#04849C]">ELISAs</span>
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 to-[#002776] rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-xl">
              Designed to provide accurate and sensitive quantification of endogenous levels in healthy and disease sera/plasma and tissue culture media samples.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Categories Grid - Internal Navigation */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Human IL-15 ELISA Card */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col transition-all duration-300">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all font-black text-lg">IL15</div>
                </div>
                <Link href="/products/assay-kits/interleukin-elisas/human-il-15" className="block mb-2 group-hover:text-cyan-600 transition-colors">
                  <h2 className="text-2xl font-bold text-[#002776]">
                    Human IL-15 ELISA
                  </h2>
                </Link>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
                  This ELISA measures endogenous human IL-15 at or near basal levels with LLOQ of 0.51 pg/ml in serum, plasma, and tissue culture media.
                </p>
                <Link href="/products/assay-kits/interleukin-elisas/human-il-15" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                  View Products
                </Link>
              </div>
            </div>

            {/* Human IL-22 ELISA Card (Featured) */}
            <div className="group p-[2.5px] rounded-[3rem] bg-gradient-to-br from-cyan-400 to-[#002776] transition-all duration-500 hover:scale-[1.02] flex flex-col shadow-xl">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#002776] group-hover:text-white transition-all font-black text-lg">IL22</div>
                </div>
                <Link href="/products/assay-kits/interleukin-elisas/human-il-22" className="block mb-2 group-hover:text-cyan-500 transition-colors">
                  <h2 className="text-2xl font-bold text-[#002776]">
                    Human IL-22 ELISA
                  </h2>
                </Link>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
                  This ELISA is designed for accurate low-level quantitation of endogenous human IL-22 in healthy & disease sera/plasma, and tissue culture media (TCM) samples with an LLOQ of 0.78 pg/ml.
                </p>
                <Link href="/products/assay-kits/interleukin-elisas/human-il-22" className="w-full py-4 bg-[#002776] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm hover:bg-cyan-600">
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Table */}
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


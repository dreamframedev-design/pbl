import Link from 'next/link';
import Image from 'next/image';
import { Download } from 'lucide-react';
import ProductCatalog from '@/components/ProductCatalog';
import { getPlaceholderCatalogData } from '@/lib/placeholder-catalog-data';

export default async function CellBasedAssaysPage() {
  // Get placeholder catalog data
  const catalogProducts = getPlaceholderCatalogData('cell-based-assays') || [];

  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/assay kits hero2.webp"
            alt="Cell-Based Assays header background"
            fill
            className="object-cover"
            priority
          />
          {/* White gradient overlay - solid white on left, fades to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-white/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
            <Link href="/products" className="hover:text-cyan-700">Products</Link>
            <span className="text-gray-300">/</span>
            <Link href="/products/assay-kits" className="hover:text-cyan-700">Assay Kits</Link>
            <span className="text-gray-300">/</span>
            <span>Cell-Based</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-safe">
            iLite™ Human Type I <br/> <span className="font-light text-gray-400 font-serif italic">IFN Responsive Cells</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            Engineered reporter gene cells for the precise measurement of <strong className="text-[#002776]">interferon bioactivity</strong> and neutralizing antibody screening.
          </p>
        </div>
      </header>

      {/* Product Catalog Table */}
      {catalogProducts.length > 0 && (
        <ProductCatalog products={catalogProducts} />
      )}

      {/* Main Content Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-7 space-y-12">
              {/* Product Overview */}
              <div>
                <h2 className="text-3xl font-bold mb-6 tracking-tight text-[#002776]">Product Overview</h2>
                <p className="text-lg text-slate-500 font-light leading-relaxed mb-6">
                  The iLite Human Type I Interferon (IFN) Responsive Cells are engineered cells optimized for high-throughput measurement of IFN activity and detection of neutralizing antibodies. These cells deliver high sensitivity for the measurement of Type I IFN activity in normal or disease serum and plasma.
                </p>
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 italic text-sm text-slate-600">
                  "PBL Assay Science is a trusted partner for the bio-validation of IFN-responsive cell lines across global pharmaceutical research."
                </div>
              </div>

              {/* Suggested Applications */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#002776]">Suggested Applications</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="py-6 px-5 rounded-2xl flex items-start gap-4" style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(226, 232, 240, 0.8)'
                  }}>
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span className="text-sm font-medium text-slate-700">Type I IFN Quantification (5 - 100 IU/ml)</span>
                  </li>
                  <li className="py-6 px-5 rounded-2xl flex items-start gap-4" style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(226, 232, 240, 0.8)'
                  }}>
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span className="text-sm font-medium text-slate-700">Neutralizing Antibody (NAb) Screening</span>
                  </li>
                </ul>
              </div>

              {/* Background & Technology */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#002776]">Background & Technology</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  iLite technology relies on the use of cells engineered with a luciferase reporter gene construct. Upon binding of IFN to its specific receptor, the signaling pathway is activated, resulting in the expression of Firefly Luciferase. This provides a quantitative measurement of biological activity that is both rapid and highly reproducible.
                </p>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              {/* Technical Specifications */}
              <div className="p-10 rounded-[2.5rem] shadow-xl" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                borderColor: 'rgba(34, 211, 238, 0.2)'
              }}>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 block">Technical Specifications</span>
                <div className="space-y-6">
                  <div className="flex justify-between border-b border-slate-100 pb-4">
                    <span className="text-xs font-bold text-slate-400">Preparation</span>
                    <span className="text-xs font-black text-[#002776]">Cryopreserved</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-4">
                    <span className="text-xs font-bold text-slate-400">Antigen</span>
                    <span className="text-xs font-black text-[#002776]">Type I Interferon (IFN)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-4">
                    <span className="text-xs font-bold text-slate-400">Source</span>
                    <span className="text-xs font-black text-[#002776]">Human Cells</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-4">
                    <span className="text-xs font-bold text-slate-400">Storage</span>
                    <span className="text-xs font-black text-[#002776]">-80°C or below</span>
                  </div>
                </div>
              </div>

              {/* Technical Documentation */}
              <div className="p-8 rounded-[2rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 opacity-50"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-cyan-400 mb-2">Technical Documentation</p>
                    <h4 className="font-bold">Certificate of Analysis (CoA)</h4>
                  </div>
                  <button className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-cyan-500 transition-all">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Validated Citations Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 tracking-tight text-[#002776]">Validated Citations</h2>
          <div className="space-y-4">
            <div className="p-6 rounded-2xl transition-all text-xs text-slate-500 font-light leading-relaxed border border-slate-200/60 hover:border-cyan-400 hover:shadow-md" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)'
            }}>
              Trojer, P. <em>et al.</em> (2014) "Targeting Interferon Alpha to Systemic Lupus with a Monoclonal Antibody-DNA Fragment Complex", <em>PLOS ONE</em>.
            </div>
            <div className="p-6 rounded-2xl transition-all text-xs text-slate-500 font-light leading-relaxed border border-slate-200/60 hover:border-cyan-400 hover:shadow-md" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)'
            }}>
              Lallemand, C. <em>et al.</em> (2008) "Reporter Gene Cell Line for Characterization of Biological Response to Interferon", <em>J. Interferon & Cytokine Research</em>.
            </div>
            <div className="p-6 rounded-2xl transition-all text-xs text-slate-500 font-light leading-relaxed border border-slate-200/60 hover:border-cyan-400 hover:shadow-md" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)'
            }}>
              Commanay, L. <em>et al.</em> (2011) "The use of iLite™ technology in the bio-validation of pharmaceutical response to IFNs", <em>International Journal of Biologicals</em>.
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pt-32 pb-12 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-cyan-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Direct Scientist Access</span>
          <h2 className="text-5xl font-bold mb-6 tracking-tight text-[#002776]">Need a custom bioassay?</h2>
          <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
            Speak with our assay team to determine the most suitable program for your goals.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center px-14 py-6 bg-[#002776] text-white rounded-full font-bold text-xl shadow-2xl shadow-[#002776]/30 hover:scale-105 transition-all"
          >
            Initiate Study Evaluation
          </Link>
        </div>
      </section>
    </main>
  );
}


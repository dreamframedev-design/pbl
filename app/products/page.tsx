import Link from 'next/link';
import Image from 'next/image';
import AnimatedStats from '@/components/AnimatedStats';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        {/* Background Image with White Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products hero.webp"
            alt="Products"
            fill
            className="object-cover"
            priority
          />
          {/* White gradient overlay - solid white on left, fades to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-white/40 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
            <span>PBL</span> <span className="text-gray-300">/</span> <span>Products</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="text-[#002776]">Products</span> <br/> <span className="font-light text-gray-400 font-serif italic">That Won't</span> <br/> <span className="font-light text-gray-400 font-serif italic">Let You Down</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            We offer a range of high-quality interferon and interleukin
            immunoassay kits, cytokines and interferons, and monoclonal and
            polyclonal antibodies for life science researchers. Our products
            provide consistent performance with reliable and reproducible
            results.
          </p>
        </div>
      </header>

      {/* Stats Section */}
      <AnimatedStats />

      {/* Product Categories Grid */}
      <section className="py-32 bg-[#F4F4F9]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Assay Kits Card */}
            <div className="group p-1 rounded-[3rem] transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,240,243,0.2)] hover:border-[#00F0F3] hover:-translate-y-1.5" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.8rem] p-10 h-full flex flex-col">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-10 shadow-lg group-hover:shadow-2xl transition-all duration-700">
                  <Image
                    src="/images/15.webp"
                    alt="Assay Kits"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002776]/40 to-transparent"></div>
                </div>
                <h2 className="text-3xl font-bold mb-2 text-[#002776]">Assay Kits</h2>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-8">Immunoassay Solutions</p>
                
                <div className="space-y-4 mb-10 flex-grow">
                  <Link href="/products/assay-kits/interferon-elisas" className="block py-2 text-sm font-semibold text-slate-600 hover:border-l-[2.5px] hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)] transition-all border-l-[2.5px] border-transparent">
                    Interferon (IFN) ELISA Kits
                  </Link>
                  <Link href="/products/assay-kits/interleukin-elisas" className="block py-2 text-sm font-semibold text-slate-600 hover:border-l-[2.5px] hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)] transition-all border-l-[2.5px] border-transparent">
                    Interleukin (IL) ELISA Kits
                  </Link>
                  <Link href="/products/assay-kits/cell-based-assays" className="block py-2 text-sm font-semibold text-slate-600 hover:border-l-[2.5px] hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)] transition-all border-l-[2.5px] border-transparent">
                    Cell-Based Assays
                  </Link>
                </div>
                
                <Link href="/products/assay-kits" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                  Explore All Kits
                </Link>
              </div>
            </div>

            {/* Proteins Card */}
            <div className="group p-1 rounded-[3rem] transition-all duration-500 hover:shadow-[0_0_40px_rgba(5,138,159,0.2)] hover:border-[#058A9F] hover:-translate-y-1.5" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.8rem] p-10 h-full flex flex-col">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-10 shadow-lg group-hover:shadow-2xl transition-all duration-700">
                  <Image
                    src="/images/16.webp"
                    alt="Proteins"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#058A9F]/40 to-transparent"></div>
                </div>
                <h2 className="text-3xl font-bold mb-2 text-[#002776]">Proteins</h2>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-8">High-Purity Reagents</p>
                
                <div className="space-y-4 mb-10 flex-grow">
                  <Link href="/products/proteins/interferons" className="block py-2 text-sm font-semibold text-slate-600 hover:border-l-[2.5px] hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)] transition-all border-l-[2.5px] border-transparent">
                    Interferons
                  </Link>
                  <Link href="/products/proteins/cytokines-growth-factors" className="block py-2 text-sm font-semibold text-slate-600 hover:border-l-[2.5px] hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)] transition-all border-l-[2.5px] border-transparent">
                    Cytokines and Growth Factors
                  </Link>
                  <Link href="/products/proteins/interferon-decoy-receptor" className="block py-2 text-sm font-semibold text-slate-600 hover:border-l-[2.5px] hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)] transition-all border-l-[2.5px] border-transparent">
                    Interferon Decoy Receptor
                  </Link>
                </div>
                
                <Link href="/products/proteins" className="w-full py-4 bg-slate-50 group-hover:bg-[#058A9F] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                  Browse Proteins
                </Link>
              </div>
            </div>

            {/* Antibodies Card */}
            <div className="group p-1 rounded-[3rem] transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] hover:border-cyan-400 hover:-translate-y-1.5" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.8rem] p-10 h-full flex flex-col">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-10 shadow-lg group-hover:shadow-2xl transition-all duration-700">
                  <Image
                    src="/images/14.webp"
                    alt="Antibodies"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/40 to-transparent"></div>
                </div>
                <h2 className="text-3xl font-bold mb-2 text-[#002776]">Antibodies</h2>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-8">MAbs & PAbs</p>
                
                <div className="space-y-4 mb-10 flex-grow">
                  <Link href="/products/antibodies/monoclonal" className="block py-2 text-sm font-semibold text-slate-600 hover:border-l-[2.5px] hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)] transition-all border-l-[2.5px] border-transparent">
                    Monoclonal (MAbs)
                  </Link>
                  <Link href="/products/antibodies/polyclonal" className="block py-2 text-sm font-semibold text-slate-600 hover:border-l-[2.5px] hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)] transition-all border-l-[2.5px] border-transparent">
                    Polyclonal (PAbs)
                  </Link>
                </div>
                
                <Link href="/products/antibodies" className="w-full py-4 bg-slate-50 group-hover:bg-cyan-500 group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                  View Catalog
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
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

import Link from 'next/link';
import Image from 'next/image';

export default function ProteinsPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">

      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products-proteins hero.webp"
            alt="Proteins header background"
            fill
            className="object-cover"
            priority
          />
          {/* White gradient overlay - solid white on left, fades to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-white/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="max-w-4xl text-left">
            {/* Breadcrumbs */}
            <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
              <Link href="/products" className="hover:text-cyan-700">Products</Link>
              <span className="text-gray-300">/</span>
              <span>Proteins</span>
            </nav>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-tight text-safe">
              <span className="text-[#002776]">Recombinant</span>
              <br className="block" />
              <span className="font-light text-gray-400 font-serif italic">Proteins</span>
            </h1>

            <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
              High-purity reagents engineered for <span className="text-[#002776] font-semibold">lot-to-lot consistency</span>, 
              maximum bioactivity, and sub-nanogram endotoxin levels.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-8 text-slate-600 leading-relaxed font-light text-lg">
            <p>
              With over 30 years of experience developing and manufacturing recombinant proteins for life science research, our manufacturing and quality standards ensure that our proteins exhibit <strong className="text-[#002776] font-semibold">lot-to-lot consistency</strong>, as well as high levels of <strong className="text-[#002776] font-semibold">bioactivity</strong>, high <strong className="text-[#002776] font-semibold">purity</strong>, and <strong className="text-[#002776] font-semibold">low endotoxin</strong> levels.
            </p>
            <p>
              Providing our proteins by <strong className="text-[#002776] font-semibold">activity</strong> instead of mass ensures that your results are biologically relevant and highly reproducible.
            </p>
          </div>
          
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:border-cyan-400 transition-all duration-500 shadow-sm">
              <div className="text-cyan-500 font-black text-5xl mb-2 group-hover:scale-110 transition-transform">30+</div>
              <div className="text-[9px] uppercase tracking-[0.25em] font-black text-slate-400">Years expertise</div>
            </div>
            <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:border-cyan-400 transition-all duration-500 shadow-sm">
              <div className="text-cyan-500 font-black text-4xl mb-2 group-hover:scale-110 transition-transform italic">ED<sub>50</sub></div>
              <div className="text-[9px] uppercase tracking-[0.25em] font-black text-slate-400">Validated Activity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Details Section */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl p-10 rounded-[3rem] shadow-xl" style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(226, 232, 240, 0.8)'
          }}>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              Many of our proteins are sold as units of <strong className="text-[#002776] font-bold">activity</strong> per vial instead of in units of mass per vial (µg or mg). Each new lot of protein is tested internally using the same bioassay to provide a valid activity comparison between lots. (ED<sub>50</sub> is the amount of protein required to elicit a 50% maximum response in the bioassay.)
            </p>
          </div>
        </div>
      </section>

      {/* Three-Category Grid Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#002776] mb-16 tracking-tight text-center">Protein Categories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Cytokines and Growth Factors Card */}
            <div className="group p-1 rounded-[3rem] transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,240,243,0.2)] hover:border-[#00F0F3] hover:-translate-y-1.5" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.8rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-500 mb-8 group-hover:bg-[#00F0F3] group-hover:text-white transition-all font-black text-xs">CGF</div>
                <Link href="/products/proteins/cytokines-growth-factors" className="block cursor-pointer mb-2">
                  <h3 className="text-2xl font-bold mb-4 text-[#002776]">Cytokines and Growth Factors</h3>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8">
                  PBL offers a comprehensive range of recombinant cytokines and
                  growth factors for life science research applications.
                </p>
                <div className="space-y-4 mb-10 flex-grow">
                  <Link
                    href="/products/proteins/cytokines-growth-factors/ecoli-cho-expressed"
                    className="block py-3 text-[11px] font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    E.coli & CHO Expressed Cytokine & Growth Factor
                  </Link>
                  <Link
                    href="/products/proteins/cytokines-growth-factors/human-cell-expressed"
                    className="block py-3 text-[11px] font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Human Cell-Expressed Cytokines
                  </Link>
                </div>
                <Link href="/products/proteins/cytokines-growth-factors" className="text-sm font-black text-cyan-500 flex items-center gap-2 group-hover:translate-x-2 transition-all">
                  Explore Categories →
                </Link>
              </div>
            </div>

            {/* Interferon Decoy Receptor Card */}
            <div className="group p-1 rounded-[3rem] transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,240,243,0.2)] hover:border-[#00F0F3] hover:-translate-y-1.5" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.8rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all font-black text-xs">IDR</div>
                <Link href="/products/proteins/interferon-decoy-receptor" className="block cursor-pointer mb-2">
                  <h3 className="text-2xl font-bold mb-4 text-[#002776]">Interferon Decoy Receptor</h3>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8">
                  Specialized proteins for interferon research and neutralization
                  applications.
                </p>
                <div className="space-y-4 mb-10 flex-grow">
                  <Link
                    href="/products/proteins/interferon-decoy-receptor"
                    className="block py-3 text-[11px] font-bold text-slate-600 leading-tight transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Mouse Interferon Alpha All-Subtype Neutralizing Viral Protein
                  </Link>
                </div>
                <Link href="/products/proteins/interferon-decoy-receptor" className="text-sm font-black text-blue-600 flex items-center gap-2 group-hover:translate-x-2 transition-all">
                  View Details →
                </Link>
              </div>
            </div>

            {/* Interferon Card */}
            <div className="group p-[2.5px] rounded-[3rem] bg-gradient-to-br from-cyan-400 to-[#002776] transition-all duration-500 hover:scale-[1.02] flex flex-col shadow-xl">
              <div className="bg-white rounded-[2.8rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-8 group-hover:bg-[#002776] group-hover:text-white transition-all font-black text-xs">IFN</div>
                <Link href="/products/proteins/interferons" className="block cursor-pointer mb-2">
                  <h3 className="text-2xl font-bold mb-4 text-[#002776]">Interferon</h3>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8">
                  Comprehensive collection of interferon proteins across multiple
                  species for research applications.
                </p>
                <div className="space-y-3 mb-10 flex-grow">
                  <Link
                    href="/products/proteins/interferons"
                    className="block py-2.5 text-[11px] font-bold text-[#002776] transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Human IFN Proteins
                  </Link>
                  <Link
                    href="/products/proteins/interferons"
                    className="block py-2.5 text-[11px] font-bold text-[#002776] transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Rat IFN Proteins
                  </Link>
                  <Link
                    href="/products/proteins/interferons"
                    className="block py-2.5 text-[11px] font-bold text-[#002776] transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Mouse IFN Proteins
                  </Link>
                  <Link
                    href="/products/proteins/interferons"
                    className="block py-2.5 text-[11px] font-bold text-[#002776] leading-tight transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Mammalian IFN Proteins (Non-Human, Non-Mouse)
                  </Link>
                </div>
                <Link href="/products/proteins/interferons" className="w-full py-4 bg-[#002776] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block shadow-lg hover:bg-cyan-600 transition-colors">
                  View Full Catalog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-slate-50 text-center border-t border-slate-100">
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

import Link from 'next/link';
import BannerHero from '@/components/BannerHero';
import CountingBadge from '@/components/CountingBadge';

export default function MonoclonalAntibodiesPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      {/* Hero Section */}
      <BannerHero 
        titleLine1="Monoclonal"
        titleLine2="Antibodies"
        titleSuffix="(MAbs)"
        description={
          <>
            High-specificity reagents engineered for <span className="text-[#4B5563] font-semibold">ELISA</span>, 
            flow cytometry, and epitope mapping.
          </>
        }
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'Antibodies', href: '/products/antibodies' }
        ]}
      />

      {/* Combined Content Section with Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-8 text-gray-600 leading-relaxed font-light text-lg">
            <p>Monoclonal and polyclonal antibodies are often interchangeable; however in some applications, one or the other antibody will give a better result.</p>
            <p>
              Monoclonal antibodies (MAbs) are monospecific antibodies that are the same because they are made by identical immune cells that are all clones of a unique parent cell. MAbs have monovalent affinity, in that they bind to the same epitope and offer high specificity in applications such as <strong className="text-[#4B5563] font-semibold animated-underline">ELISA</strong>, <strong className="text-[#4B5563] font-semibold animated-underline">flow cytometry</strong> or <strong className="text-[#4B5563] font-semibold animated-underline">epitope mapping</strong> where specific binding is desirable.
            </p>
            <p>
              PBL's MAbs are derived against a range of interferons from various mammalian species. They deliver superior <em>product stability</em> and <em>high specificity</em> while providing <em>reliable</em> and <em>reproducible results</em>.
            </p>
          </div>
          
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-cyan-400 transition-all duration-500 shadow-sm hover:shadow-md">
              <div className="text-cyan-500 font-bold text-5xl mb-2 group-hover:scale-110 transition-transform">
                <CountingBadge targetValue={99} suffix="%" />
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400">Purity Standard</div>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-cyan-400 transition-all duration-500 shadow-sm hover:shadow-md">
              <div className="text-cyan-500 font-bold text-4xl mb-2 group-hover:scale-110 transition-transform italic whitespace-nowrap">Validated</div>
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400">Multi-Species</div>
            </div>
          </div>
        </div>
      </section>

      {/* Subtitle and Sub-Categories Grid */}
      <section className="py-24 bg-[#F9F9FC] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#002776] mb-16 tracking-tight">Monoclonal Antibodies to Interferon Species and Subtypes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Anti-Human IFN MAbs Card */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6 flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.644.322a6 6 0 01-3.86.517l-2.387-.477a2 2 0 00-1.022.547l1.166 3.497a2 2 0 001.898 1.368h10.23a2 2 0 001.898-1.368l1.166-3.497z" />
                    </svg>
                  </div>
                </div>
                
                <Link href="/products/antibodies/monoclonal/anti-human-ifn" className="block cursor-pointer">
                  <h3 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-cyan-600 transition-colors">
                    Anti-Human <br/>IFN MAbs
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8">Anti-Human Interferon Monoclonal Antibodies</p>
                
                <div className="mt-auto space-y-2">
                  <Link
                    href="/products/antibodies/monoclonal/anti-human-ifn/anti-human-ifn-alpha"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Anti-Human IFN-Alpha MAbs</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                  <Link
                    href="/products/antibodies/monoclonal/anti-human-ifn/anti-human-ifn-beta"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Anti-Human IFN-Beta MAbs</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                  <Link
                    href="/products/antibodies/monoclonal/anti-human-ifn/anti-human-ifn-receptor"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Anti-Human IFN Receptor MAbs</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Anti-Mouse IFN MAbs Card */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all font-bold italic">M</div>
                </div>
                <Link href="/products/antibodies/monoclonal/anti-mouse-ifn" className="block cursor-pointer">
                  <h3 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-[#2563EB] transition-colors">
                    Anti-Mouse <br/>IFN MAbs
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8">Anti-Mouse Interferon Monoclonal Antibodies</p>
                <div className="mt-auto">
                  <Link href="/products/antibodies/monoclonal/anti-mouse-ifn" className="text-sm font-bold text-[#2563EB] flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Clones <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Anti-Porcine IFN MAbs Card */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-[#06B6D4] group-hover:bg-[#06B6D4] group-hover:text-white transition-all font-bold italic">P</div>
                </div>
                <Link href="/products/antibodies/monoclonal/anti-porcine-ifn" className="block cursor-pointer">
                  <h3 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-[#06B6D4] transition-colors">
                    Anti-Porcine <br/>IFN MAbs
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8">Anti-Porcine Interferon Monoclonal Antibodies</p>
                <div className="mt-auto">
                  <Link href="/products/antibodies/monoclonal/anti-porcine-ifn" className="text-sm font-bold text-[#06B6D4] flex items-center gap-2 group-hover:gap-4 transition-all">
                    View Specifications <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Labeled Anti-IFN MAbs Card */}
            <div className="group p-[2px] rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 transition-all duration-500 hover:scale-[1.02]">
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300">
                <div className="mb-6 flex justify-between">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full text-[10px] font-bold uppercase tracking-tighter">New Formats</span>
                </div>
                <Link href="/products/antibodies/monoclonal/labeled" className="block cursor-pointer">
                  <h3 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-[#06B6D4] transition-colors">
                    Labeled <br/>Anti-IFN MAbs <span className="text-lg">(Human, Mouse)</span>
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8">Labeled Monoclonal Antibodies</p>
                <div className="mt-auto">
                  <Link href="/products/antibodies/monoclonal/labeled" className="w-full py-3 bg-[#002776] hover:bg-cyan-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20 text-center block">
                    View All Conjugates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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


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
          
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#002776] mb-16 tracking-tight">Monoclonal Antibodies to Interferon Species and Subtypes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Anti-Human IFN MAbs Card */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all font-black text-lg">H</div>
                </div>
                <Link href="/products/antibodies/monoclonal/anti-human-ifn" className="block mb-2 group-hover:text-cyan-600 transition-colors">
                  <h3 className="text-2xl font-bold text-[#002776]">
                    Anti-Human <br/>IFN MAbs
                  </h3>
                </Link>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed">Anti-Human Interferon Monoclonal Antibodies</p>
                
                <div className="mt-auto space-y-3 mb-10">
                  <Link
                    href="/products/antibodies/monoclonal/anti-human-ifn/anti-human-ifn-alpha"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Anti-Human IFN-Alpha MAbs
                  </Link>
                  <Link
                    href="/products/antibodies/monoclonal/anti-human-ifn/anti-human-ifn-beta"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Anti-Human IFN-Beta MAbs
                  </Link>
                  <Link
                    href="/products/antibodies/monoclonal/anti-human-ifn/anti-human-ifn-receptor"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Anti-Human IFN Receptor MAbs
                  </Link>
                </div>
                <Link href="/products/antibodies/monoclonal/anti-human-ifn" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                  Explore Products
                </Link>
              </div>
            </div>

            {/* Anti-Mouse IFN MAbs Card */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#2563EB] group-hover:bg-blue-600 group-hover:text-white transition-all font-black italic text-lg">M</div>
                </div>
                <Link href="/products/antibodies/monoclonal/anti-mouse-ifn" className="block mb-2 group-hover:text-[#2563EB] transition-colors">
                  <h3 className="text-2xl font-bold text-[#002776]">
                    Anti-Mouse <br/>IFN MAbs
                  </h3>
                </Link>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed">Anti-Mouse Interferon Monoclonal Antibodies</p>
                <div className="mt-auto">
                  <Link href="/products/antibodies/monoclonal/anti-mouse-ifn" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                    Explore Clones
                  </Link>
                </div>
              </div>
            </div>

            {/* Anti-Porcine IFN MAbs Card */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-[#06B6D4] group-hover:bg-[#06B6D4] group-hover:text-white transition-all font-black italic text-lg">P</div>
                </div>
                <Link href="/products/antibodies/monoclonal/anti-porcine-ifn" className="block mb-2 group-hover:text-[#06B6D4] transition-colors">
                  <h3 className="text-2xl font-bold text-[#002776]">
                    Anti-Porcine <br/>IFN MAbs
                  </h3>
                </Link>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed">Anti-Porcine Interferon Monoclonal Antibodies</p>
                <div className="mt-auto">
                  <Link href="/products/antibodies/monoclonal/anti-porcine-ifn" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                    View Specifications
                  </Link>
                </div>
              </div>
            </div>

            {/* Labeled Anti-IFN MAbs Card (Featured) */}
            <div className="group p-[2.5px] rounded-[3rem] bg-gradient-to-br from-cyan-400 to-[#002776] transition-all duration-500 hover:scale-[1.02] flex flex-col shadow-xl">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="mb-6 flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#002776] group-hover:text-white transition-all font-black text-lg">L</div>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full text-[9px] font-black uppercase tracking-widest h-fit">New Formats</span>
                </div>
                <Link href="/products/antibodies/monoclonal/labeled" className="block mb-2 group-hover:text-cyan-500 transition-colors">
                  <h3 className="text-2xl font-bold text-[#002776]">
                    Labeled <br/>Anti-IFN MAbs <span className="text-lg">(Human, Mouse)</span>
                  </h3>
                </Link>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed">Labeled Monoclonal Antibodies</p>
                <div className="mt-auto">
                  <Link href="/products/antibodies/monoclonal/labeled" className="w-full py-4 bg-[#002776] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm hover:bg-cyan-600">
                    View All Conjugates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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


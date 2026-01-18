import Link from 'next/link';
import BannerHero from '@/components/BannerHero';

export default function PolyclonalAntibodiesPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      {/* Hero Section */}
      <BannerHero 
        titleLine1="Polyclonal"
        titleLine2="Antibodies"
        titleSuffix="(PAbs)"
        showLine={false}
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'Antibodies', href: '/products/antibodies' }
        ]}
      />

      {/* Combined Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-8 text-gray-600 leading-relaxed font-light text-lg">
            <p>
              Polyclonal antibodies (PAbs) are obtained using a mixture of immunoglobulin molecules secreted against a specific antigen, each recognizing a different epitope making them more tolerant to small changes in the structure of the antigen. PAbs are preferable for neutralization because they target a variety of specific epitopes of a particular antigen.
            </p>
            <p>
              PBL's PAbs are available for use in a range of applications including <strong className="text-[#4B5563] font-semibold animated-underline">ELISA</strong>, <strong className="text-[#4B5563] font-semibold animated-underline">neutralization assays</strong>, <strong className="text-[#4B5563] font-semibold animated-underline">western blotting</strong>, <strong className="text-[#4B5563] font-semibold animated-underline">flow cytometry</strong>, <strong className="text-[#4B5563] font-semibold animated-underline">immunoprecipitation</strong>, and <strong className="text-[#4B5563] font-semibold animated-underline">immunohistochemistry</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Subtitle and Sub-Categories Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#002776] mb-16 tracking-tight">Polyclonal Antibodies to Interferon Species and Subtypes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Anti-Human IFN PAbs Card */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all font-black text-lg">H</div>
                </div>
                <a href="https://www.pblassaysci.com/antibodies/anti-human-ifn-pabs" target="_blank" rel="noopener noreferrer" className="block mb-2 group-hover:text-cyan-600 transition-colors">
                  <h3 className="text-2xl font-bold text-[#002776]">
                    Anti-Human <br/>IFN PAbs
                  </h3>
                </a>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed">Anti-Human Interferon Polyclonal Antibodies</p>
                <div className="mt-auto">
                  <a href="https://www.pblassaysci.com/antibodies/anti-human-ifn-pabs" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                    Explore Products
                  </a>
                </div>
              </div>
            </div>

            {/* Anti-Mouse IFN PAbs Card */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#2563EB] group-hover:bg-blue-600 group-hover:text-white transition-all font-black italic text-lg">M</div>
                </div>
                <a href="https://www.pblassaysci.com/antibodies/anti-mouse-ifn-pabs" target="_blank" rel="noopener noreferrer" className="block mb-2 group-hover:text-[#2563EB] transition-colors">
                  <h3 className="text-2xl font-bold text-[#002776]">
                    Anti-Mouse <br/>IFN PAbs
                  </h3>
                </a>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed">Anti-Mouse Interferon Polyclonal Antibodies</p>
                <div className="mt-auto">
                  <a href="https://www.pblassaysci.com/antibodies/anti-mouse-ifn-pabs" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                    Explore Products
                  </a>
                </div>
              </div>
            </div>

            {/* Anti-Rat IFN PAbs Card (Featured) */}
            <div className="group p-[2.5px] rounded-[3rem] bg-gradient-to-br from-cyan-400 to-[#002776] transition-all duration-500 hover:scale-[1.02] flex flex-col shadow-xl">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#002776] group-hover:text-white transition-all font-black italic text-lg">R</div>
                </div>
                <a href="https://www.pblassaysci.com/antibodies/anti-rat-ifn-pabs" target="_blank" rel="noopener noreferrer" className="block mb-2 group-hover:text-cyan-500 transition-colors">
                  <h3 className="text-2xl font-bold text-[#002776]">
                    Anti-Rat <br/>IFN PAbs
                  </h3>
                </a>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed">Anti-Rat Interferon Polyclonal Antibodies</p>
                <div className="mt-auto">
                  <a href="https://www.pblassaysci.com/antibodies/anti-rat-ifn-pabs" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-[#002776] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm hover:bg-cyan-600">
                    Explore Products
                  </a>
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


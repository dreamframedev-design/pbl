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
        description="Obtained using a mixture of immunoglobulin molecules secreted against a specific antigen, each recognizing a different epitope."
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
      <section className="py-24 bg-[#F9F9FC] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#002776] mb-16 tracking-tight">Polyclonal Antibodies to Interferon Species and Subtypes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Anti-Human IFN PAbs Card */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all font-bold">H</div>
                </div>
                <Link href="/products/antibodies/polyclonal/anti-human-ifn" className="block cursor-pointer">
                  <h3 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-cyan-600 transition-colors">
                    Anti-Human <br/>IFN PAbs
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8">Anti-Human Interferon Polyclonal Antibodies</p>
                <div className="mt-auto">
                  <Link href="/products/antibodies/polyclonal/anti-human-ifn" className="text-sm font-bold text-cyan-500 flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Products <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Anti-Mouse IFN PAbs Card */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all font-bold italic">M</div>
                </div>
                <Link href="/products/antibodies/polyclonal/anti-mouse-ifn" className="block cursor-pointer">
                  <h3 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-[#2563EB] transition-colors">
                    Anti-Mouse <br/>IFN PAbs
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8">Anti-Mouse Interferon Polyclonal Antibodies</p>
                <div className="mt-auto">
                  <Link href="/products/antibodies/polyclonal/anti-mouse-ifn" className="text-sm font-bold text-[#2563EB] flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Products <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Anti-Rat IFN PAbs Card */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-[#06B6D4] group-hover:bg-[#06B6D4] group-hover:text-white transition-all font-bold italic">R</div>
                </div>
                <Link href="/products/antibodies/polyclonal/anti-rat-ifn" className="block cursor-pointer">
                  <h3 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-[#06B6D4] transition-colors">
                    Anti-Rat <br/>IFN PAbs
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8">Anti-Rat Interferon Polyclonal Antibodies</p>
                <div className="mt-auto">
                  <Link href="/products/antibodies/polyclonal/anti-rat-ifn" className="text-sm font-bold text-[#06B6D4] flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Products <span>→</span>
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


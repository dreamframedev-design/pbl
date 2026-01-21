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
            
            <h1 className="text-4xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
              <span className="block text-[#002776]">Proteins</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl space-y-8 text-slate-600 leading-relaxed font-light text-lg">
            <p>
              With over 30 years of experience developing and manufacturing recombinant proteins for life science research, our manufacturing and quality standards ensure that our proteins exhibit <strong className="text-[#002776] font-semibold">lot-to-lot consistency</strong>, as well as high levels of <strong className="text-[#002776] font-semibold">bioactivity</strong>, high <strong className="text-[#002776] font-semibold">purity</strong>, and <strong className="text-[#002776] font-semibold">low endotoxin</strong> levels.
            </p>
            <p>
              Many of our proteins are sold as units of <strong className="text-[#002776] font-semibold">activity</strong> per vial instead of in units of mass per vial (µg or mg). Each new lot of protein is tested internally using the same bioassay to provide a valid activity comparison between lots. (ED<sub>50</sub> is the amount of protein required to elicit a 50% maximum response in the bioassay.)
            </p>
            <p>
              Providing our proteins by <strong className="text-[#002776] font-semibold">activity</strong> instead of mass ensures that your results are biologically relevant and highly reproducible.
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
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all font-black text-lg">CGF</div>
                </div>
                <Link href="/products/proteins/cytokines-growth-factors" className="block mb-2 group-hover:text-cyan-600 transition-colors">
                  <h3 className="text-2xl font-bold text-[#002776]">Cytokines and Growth Factors</h3>
                </Link>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed">
                  Cytokines and growth factor products expressed in human, E.coli, and CHO-cells.
                </p>
                <div className="mt-auto space-y-3 mb-10">
                  <a
                    href="https://www.pblassaysci.com/proteins/human-erythropoietin-epo-ultrapure-11965"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    E.coli & CHO Expressed Cytokine & Growth Factor
                  </a>
                  <Link
                    href="/products/proteins/cytokines-growth-factors/human-cell-expressed"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Human Cell-Expressed Cytokines
                  </Link>
                </div>
                <Link href="/products/proteins/cytokines-growth-factors" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                  Explore Categories
                </Link>
              </div>
            </div>

            {/* Interferon Decoy Receptor Card */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all font-black text-lg">IDR</div>
                </div>
                <Link href="/products/proteins/interferon-decoy-receptor" className="block mb-2 group-hover:text-blue-600 transition-colors">
                  <h3 className="text-2xl font-bold text-[#002776]">Interferon Decoy Receptor</h3>
                </Link>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed">
                  Viral C12R Interferon Antagonist selectively neutralizes all mouse IFN-Alpha subtypes.
                </p>
                <div className="mt-auto space-y-3 mb-10">
                  <a
                    href="https://www.pblassaysci.com/proteins/c12r-mouse-ifn-alpha-decoy-receptor-neutralizing-12185"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 text-xs font-bold text-slate-600 leading-tight transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Mouse Interferon Alpha All-Subtype Neutralizing Viral Protein
                  </a>
                </div>
                <a href="https://www.pblassaysci.com/proteins/c12r-mouse-ifn-alpha-decoy-receptor-neutralizing-12185" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                  View Details
                </a>
              </div>
            </div>

            {/* Interferon Card (Featured) */}
            <div className="group p-[2.5px] rounded-[3rem] bg-gradient-to-br from-cyan-400 to-[#002776] transition-all duration-500 hover:scale-[1.02] flex flex-col shadow-xl">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#002776] group-hover:text-white transition-all font-black text-lg">IFN</div>
                </div>
                <Link href="/products/proteins/interferons" className="block mb-2 group-hover:text-cyan-500 transition-colors">
                  <h3 className="text-2xl font-bold text-[#002776]">Interferon</h3>
                </Link>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed">
                  Our IFNs are high purity, provide consistent performance and biological activity, and are suitable for use in a range of research applications.
                </p>
                <div className="mt-auto space-y-3 mb-10">
                  <a
                    href="https://www.pblassaysci.com/proteins/human-ifn-proteins"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Human IFN Proteins
                  </a>
                  <a
                    href="https://www.pblassaysci.com/proteins/rat-ifn-proteins"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Rat IFN Proteins
                  </a>
                  <Link
                    href="/products/proteins/interferons/mouse"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Mouse IFN Proteins
                  </Link>
                  <a
                    href="https://www.pblassaysci.com/proteins/mammalian-ifn-proteins-non-human-non-mouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 text-xs font-bold text-slate-600 leading-tight transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Mammalian IFN Proteins (Non-Human, Non-Mouse)
                  </a>
                </div>
                <Link href="/products/proteins/interferons" className="w-full py-4 bg-[#002776] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm hover:bg-cyan-600">
                  View Full Catalog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="pt-32 pb-12 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-cyan-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Specialized Development</span>
          <h2 className="text-5xl font-bold mb-6 tracking-tight text-[#002776]">Need a custom solution?</h2>
          <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
            Fit-for-purpose assay development, customization and execution.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center px-14 py-6 bg-[#002776] text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-[#002776]/30"
          >
            Talk to a Scientist
          </Link>
        </div>
      </section>
    </main>
  );
}

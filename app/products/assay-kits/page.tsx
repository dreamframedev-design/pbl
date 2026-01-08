import Link from 'next/link';
import Image from 'next/image';

export default function AssayKitsPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image with White Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/assay kits hero2.webp"
            alt="ELISA Kits header background"
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
            <span>Assay Kits</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-tight text-safe">
            IFN & Cytokine <br className="block" />
            <span className="font-light text-gray-400 font-serif italic">ELISA Kits</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            Characterized to provide you with <strong className="text-[#002776]">reliability and accuracy.</strong>
          </p>
        </div>
      </header>

      {/* Stats Section */}
      <section className="bg-white border-y border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <div className="text-cyan-500 font-bold text-3xl mb-1">Ultra</div>
            <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">High Sensitivity</div>
          </div>
          <div>
            <div className="text-cyan-500 font-bold text-3xl mb-1">Validated</div>
            <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Multi-Species Data</div>
          </div>
          <div>
            <div className="text-cyan-500 font-bold text-3xl mb-1">&lt; 10%</div>
            <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Inter-Assay CV</div>
          </div>
          <div>
            <div className="text-cyan-500 font-bold text-3xl mb-1">ISO 9001</div>
            <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Quality Standard</div>
          </div>
        </div>
      </section>

      {/* Three-Category Grid Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Cell-Based Assays Card */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all font-black text-lg">C</div>
                </div>
                <Link href="/products/assay-kits/cell-based-assays" className="block mb-2 group-hover:text-cyan-600 transition-colors">
                  <h3 className="text-2xl font-bold text-[#002776]">Cell-Based Assays</h3>
                </Link>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
                  Reporter gene cells for measuring interferon bioactivity and neutralizing antibodies in research applications.
                </p>
                <div className="mt-auto space-y-3 mb-10">
                  <Link
                    href="/products/assay-kits/cell-based-assays"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    iLite Human Type I IFN Responsive Cells for bioactivity measurement
                  </Link>
                </div>
                <Link href="/products/assay-kits/cell-based-assays" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                  Explore Bioassays
                </Link>
              </div>
            </div>

            {/* Interferon (IFN) ELISAs Card */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all font-black text-lg">IFN</div>
                </div>
                <Link href="/products/assay-kits/interferon-elisas" className="block mb-2 group-hover:text-cyan-600 transition-colors">
                  <h3 className="text-2xl font-bold text-[#002776]">Interferon (IFN) ELISAs</h3>
                </Link>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
                  Immunoassays for the detection and quantification of Type I and III IFN in various species.
                </p>
                <div className="mt-auto space-y-3 mb-10">
                  <Link
                    href="/products/assay-kits/interferon-elisas/human"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Human Interferon ELISAs
                  </Link>
                  <Link
                    href="/products/assay-kits/interferon-elisas/mouse"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Mouse Interferon ELISAs
                  </Link>
                  <Link
                    href="/products/assay-kits/interferon-elisas/non-human"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Non-Human Interferon ELISAs
                  </Link>
                </div>
                <Link href="/products/assay-kits/interferon-elisas" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                  Explore ELISAs
                </Link>
              </div>
            </div>

            {/* Interleukin (IL) ELISAs Card (Featured) */}
            <div className="group p-[2.5px] rounded-[3rem] bg-gradient-to-br from-cyan-400 to-[#002776] transition-all duration-500 hover:scale-[1.02] flex flex-col shadow-xl">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#002776] group-hover:text-white transition-all font-black text-lg">IL</div>
                </div>
                <Link href="/products/assay-kits/interleukin-elisas" className="block mb-2 group-hover:text-cyan-500 transition-colors">
                  <h3 className="text-2xl font-bold text-[#002776]">Interleukin (IL) ELISAs</h3>
                </Link>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
                  High-sensitivity ELISA kits for accurate quantification of interleukins in serum, plasma, and tissue culture media.
                </p>
                <div className="mt-auto space-y-3 mb-10">
                  <Link
                    href="/products/assay-kits/interleukin-elisas/human-il-15"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Human IL-15 ELISA
                  </Link>
                  <Link
                    href="/products/assay-kits/interleukin-elisas/human-il-22"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Human IL-22 ELISA
                  </Link>
                </div>
                <Link href="/products/assay-kits/interleukin-elisas" className="w-full py-4 bg-[#002776] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm hover:bg-cyan-600">
                  View Performance Data
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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

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
            <div className="group p-1 rounded-[3rem] transition-all duration-500 glow-border" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.8rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-cyan-500 mb-8 font-black text-xs group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all" style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  border: '1px solid rgba(0, 240, 243, 0.2)'
                }}>C</div>
                <Link href="/products/assay-kits/cell-based-assays" className="block cursor-pointer mb-2">
                  <h3 className="text-2xl font-bold mb-4 text-[#002776]">Cell-Based Assays</h3>
                </Link>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                  Reporter gene cells for measuring interferon bioactivity and neutralizing antibodies in research applications.
                </p>
                <div className="space-y-3 mb-10">
                  <Link
                    href="/products/assay-kits/cell-based-assays"
                    className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-cyan-50 text-[11px] font-bold transition-all group/link"
                  >
                    <span>iLite Human Type I IFN Responsive Cells for bioactivity measurement</span>
                    <span className="text-cyan-500 opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                </div>
                <div className="mt-auto">
                  <Link href="/products/assay-kits/cell-based-assays" className="text-[10px] font-black text-cyan-600 uppercase tracking-widest flex items-center gap-2">
                    Explore Bioassays <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Interferon (IFN) ELISAs Card */}
            <div className="group p-1 rounded-[3rem] transition-all duration-500 glow-border" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.8rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-cyan-500 mb-8 font-black text-xs group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all" style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  border: '1px solid rgba(0, 240, 243, 0.2)'
                }}>IFN</div>
                <Link href="/products/assay-kits/interferon-elisas" className="block cursor-pointer mb-2">
                  <h3 className="text-2xl font-bold mb-4 text-[#002776]">Interferon (IFN) ELISAs</h3>
                </Link>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                  Immunoassays for the detection and quantification of Type I and III IFN in various species.
                </p>
                <div className="space-y-2 mb-10">
                  <Link
                    href="/products/assay-kits/interferon-elisas"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-cyan-50 text-[11px] font-bold transition-all group/link"
                  >
                    <span>Human Interferon ELISAs</span>
                    <span className="text-cyan-500 opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                  <Link
                    href="/products/assay-kits/interferon-elisas"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-cyan-50 text-[11px] font-bold transition-all group/link"
                  >
                    <span>Mouse Interferon ELISAs</span>
                    <span className="text-cyan-500 opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                  <Link
                    href="/products/assay-kits/interferon-elisas"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-cyan-50 text-[11px] font-bold transition-all group/link"
                  >
                    <span>Non-Human Interferon ELISAs</span>
                    <span className="text-cyan-500 opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Interleukin (IL) ELISAs Card */}
            <div className="group p-[2.5px] rounded-[3rem] bg-gradient-to-br from-cyan-400 to-[#002776] transition-all duration-500 hover:scale-[1.02] flex flex-col shadow-xl">
              <div className="bg-white rounded-[2.8rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-8 font-black text-xs group-hover:bg-[#002776] group-hover:text-white transition-all">IL</div>
                <Link href="/products/assay-kits/interleukin-elisas" className="block cursor-pointer mb-2">
                  <h3 className="text-2xl font-bold mb-4 text-[#002776]">Interleukin (IL) ELISAs</h3>
                </Link>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                  High-sensitivity ELISA kits for accurate quantification of interleukins in serum, plasma, and tissue culture media.
                </p>
                <div className="space-y-2 mb-10">
                  <Link
                    href="/products/assay-kits/interleukin-elisas"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-[#002776]/5 text-[11px] font-bold transition-all group/link"
                  >
                    <span>Human IL-15 ELISA</span>
                    <span className="text-[#002776] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                  <Link
                    href="/products/assay-kits/interleukin-elisas"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-[#002776]/5 text-[11px] font-bold transition-all group/link"
                  >
                    <span>Human IL-22 ELISA</span>
                    <span className="text-[#002776] opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                </div>
                <div className="mt-auto">
                  <Link href="/products/assay-kits/interleukin-elisas" className="w-full py-4 bg-[#002776] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block shadow-lg hover:bg-cyan-600 transition-colors">
                    View Performance Data
                  </Link>
                </div>
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

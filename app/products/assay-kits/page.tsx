import Link from 'next/link';
import Image from 'next/image';

export default function AssayKitsPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">

      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-start">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/assay kits hero2.webp"
            alt="Assay Kits header background"
            fill
            className="object-cover image-shadow-lg"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="max-w-4xl text-left">
            {/* Breadcrumbs */}
            <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
              <Link href="/products" className="hover:text-cyan-700">Products</Link>
            </nav>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6 pb-2 drop-shadow-sm leading-tight text-safe">
              <span className="text-[#002776] whitespace-nowrap">High-performance</span>
              <br className="block" />
              <span className="text-[#002776]">IFN&nbsp;&amp;&nbsp;Cytokine</span>
              <br className="block" />
              <span className="text-[#04849C] whitespace-nowrap">ELISA&nbsp;Kits</span>
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 to-[#002776] rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              Characterized to Provide You with Reliability and Accuracy
            </p>
          </div>
        </div>
      </section>

      {/* Three-Category Grid Section */}
      <section className="py-24 bg-[#F9F9FC] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Cell-Based Assays Card */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all font-bold">C</div>
                </div>
                <Link href="/products/assay-kits/cell-based-assays" className="block cursor-pointer mb-2">
                  <h2 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-cyan-600 transition-colors">
                    Cell-Based Assays
                  </h2>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8">
                  Reporter gene cells for measuring interferon bioactivity and
                  neutralizing antibodies in research applications.
                </p>

                <div className="mt-auto space-y-2">
                  <Link
                    href="/products/assay-kits/cell-based-assays"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>iLite Human Type I IFN Responsive Cells for bioactivity measurement</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Interferon (IFN) ELISAs Card */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all font-bold">IFN</div>
                </div>
                <Link href="/products/assay-kits/interferon-elisas" className="block cursor-pointer mb-2">
                  <h2 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-cyan-600 transition-colors">
                    Interferon <span className="font-light text-gray-400 font-serif italic">(IFN)</span> ELISAs
                  </h2>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8">
                  Immunoassays for the detection and quantification of Type I and
                  III IFN in various species.
                </p>

                <div className="mt-auto space-y-2">
                  <Link
                    href="/products/assay-kits/interferon-elisas"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Human Interferon ELISAs</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                  <Link
                    href="/products/assay-kits/interferon-elisas"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Mouse Interferon ELISAs</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                  <Link
                    href="/products/assay-kits/interferon-elisas"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Non-Human Interferon ELISAs</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Interleukin (IL) ELISAs Card */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all font-bold">IL</div>
                </div>
                <Link href="/products/assay-kits/interleukin-elisas" className="block cursor-pointer mb-2">
                  <h2 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-cyan-600 transition-colors">
                    Interleukin <span className="font-light text-gray-400 font-serif italic">(IL)</span> ELISAs
                  </h2>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8">
                  High-sensitivity ELISA kits for accurate quantification of
                  interleukins in serum, plasma, and tissue culture media.
                </p>

                <div className="mt-auto space-y-2">
                  <Link
                    href="/products/assay-kits/interleukin-elisas"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Human IL-15 ELISA</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                  <Link
                    href="/products/assay-kits/interleukin-elisas"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Human IL-22 ELISA</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
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
            Fit-for-purpose assay&nbsp;development, customization and execution.
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

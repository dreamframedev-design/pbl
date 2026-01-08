import Link from 'next/link';
import Image from 'next/image';
import CountingBadge from '@/components/CountingBadge';

export default function InterferonElisasPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      {/* Hero Section - Preserve Hero Image Background */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ELISAs Kits Hero.webp"
            alt="Interferon ELISA Kits header background"
            fill
            className="object-cover"
            priority
          />
          {/* White gradient overlay - solid white on left, fades to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-white/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="max-w-2xl text-left">
            {/* Breadcrumbs */}
            <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
              <Link href="/products" className="hover:text-cyan-700">Products</Link>
              <span className="text-gray-300">/</span>
              <Link href="/products/assay-kits" className="hover:text-cyan-700">Assay Kits</Link>
            </nav>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 pb-2 leading-[1.1] text-safe">
              <span className="text-[#002776] whitespace-nowrap">Interferon <span className="font-light text-gray-400 font-serif italic">(IFN)</span></span>
              <br />
              <span className="text-[#04849C]">ELISA Kits</span>
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 to-[#002776] rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-xl">
              Designed to provide <span className="text-[#4B5563] font-semibold">accurate and reproducible quantitation</span> of IFNs in samples from human, mouse, and other species. Cited in high impact journals by researchers for over three decades.
            </p>
          </div>
        </div>
      </section>

      {/* Scientific Authority Row */}
      <section className="bg-white border-y border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="group">
            <div className="text-cyan-500 font-bold text-4xl mb-1 group-hover:scale-110 transition-transform">
              <CountingBadge targetValue={30} suffix="+" />
            </div>
            <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Years of Citations</div>
          </div>
          <div>
            <div className="text-cyan-500 font-bold text-4xl mb-1 italic">Validated</div>
            <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Multi-Species Data</div>
          </div>
          <div className="group">
            <div className="text-cyan-500 font-bold text-4xl mb-1 group-hover:scale-110 transition-transform">
              <CountingBadge targetValue={99} suffix="%" />
            </div>
            <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Purity Standard</div>
          </div>
          <div>
            <div className="text-cyan-500 font-bold text-4xl mb-1">ISO 9001</div>
            <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Quality Certified</div>
          </div>
        </div>
      </section>

      {/* Refined Category Portals */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* CARD 1: Human Interferon ELISAs */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col transition-all duration-300">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all font-black text-lg">H</div>
                </div>
                <Link href="/products/assay-kits/interferon-elisas/human" className="block mb-2 group-hover:text-cyan-600 transition-colors">
                  <h2 className="text-2xl font-bold text-[#002776]">Human Interferon ELISAs</h2>
                </Link>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed">
                  ELISA kits target various <strong className="text-slate-700 font-semibold">human interferon analytes</strong>. Kits range in <em>sensitivity</em> and <em>matrix compatibility</em>.
                </p>
                <div className="mt-auto space-y-3 mb-10">
                  <Link
                    href="/products/assay-kits/interferon-elisas/human/ifn-alpha"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Human IFN-Alpha ELISA Kits
                  </Link>
                  <Link
                    href="/products/assay-kits/interferon-elisas/human/ifn-beta"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Human IFN-Beta ELISA Kits
                  </Link>
                  <Link
                    href="/products/assay-kits/interferon-elisas/human/ifn-gamma-receptor"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Human IFN-Gamma Receptor ELISA
                  </Link>
                </div>
                <Link href="/products/assay-kits/interferon-elisas/human" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                  Explore Human ELISAs
                </Link>
              </div>
            </div>

            {/* CARD 2: Mouse Interferon ELISAs */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col transition-all duration-300">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#2563EB] group-hover:bg-blue-600 group-hover:text-white transition-all font-black italic text-lg">M</div>
                </div>
                <Link href="/products/assay-kits/interferon-elisas/mouse" className="block mb-2 group-hover:text-[#2563EB] transition-colors">
                  <h2 className="text-2xl font-bold text-[#002776]">Mouse Interferon ELISAs</h2>
                </Link>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed">
                  ELISA kits targeting various <strong className="text-slate-700 font-semibold">mouse interferon analytes</strong>. Kits range in <em>sensitivity</em> and <em>matrix compatibility</em>.
                </p>
                <div className="mt-auto space-y-3 mb-10">
                  <Link
                    href="/products/assay-kits/interferon-elisas/mouse/ifn-alpha"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Mouse IFN-Alpha ELISAs
                  </Link>
                  <Link
                    href="/products/assay-kits/interferon-elisas/mouse/ifn-beta"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Mouse IFN-Beta ELISAs
                  </Link>
                  <Link
                    href="/products/assay-kits/interferon-elisas/mouse/ifn-lambda"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Mouse IFN-Lambda ELISA
                  </Link>
                </div>
                <Link href="/products/assay-kits/interferon-elisas/mouse" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                  Explore Mouse ELISAs
                </Link>
              </div>
            </div>

            {/* CARD 3: Non-Human Interferon ELISAs (Featured) */}
            <div className="group p-[2.5px] rounded-[3rem] bg-gradient-to-br from-cyan-400 to-[#002776] transition-all duration-500 hover:scale-[1.02] flex flex-col shadow-xl">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="mb-6 flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#002776] group-hover:text-white transition-all font-black text-lg">NH</div>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full text-[9px] font-black uppercase tracking-widest h-fit">Cross-Species</span>
                </div>
                <Link href="/products/assay-kits/interferon-elisas/non-human" className="block mb-2 group-hover:text-cyan-500 transition-colors">
                  <h2 className="text-2xl font-bold text-[#002776]">Non-Human IFN ELISAs</h2>
                </Link>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed">
                  IFN ELISA kits target non-human (cynomolgus/rhesus, pig) analytes and provide accurate sample detection.
                </p>
                <div className="mt-auto space-y-3 mb-10">
                  <Link
                    href="/products/assay-kits/interferon-elisas/non-human/cynomolgus-rhesus-ifn-alpha"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Cynomolgus/Rhesus IFN-Alpha ELISA
                  </Link>
                  <Link
                    href="/products/assay-kits/interferon-elisas/non-human/pig-ifn-alpha"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Pig IFN-Alpha ELISA
                  </Link>
                  <Link
                    href="/products/assay-kits/interferon-elisas/non-human/cynomolgus-ifn-beta"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Cynomolgus IFN-Beta ELISA
                  </Link>
                </div>
                <Link href="/products/assay-kits/interferon-elisas/non-human" className="w-full py-4 bg-[#002776] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm hover:bg-cyan-600">
                  Explore Non-Human ELISAs
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Master CTA */}
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

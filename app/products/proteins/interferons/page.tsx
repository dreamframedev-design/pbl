import Link from 'next/link';
import Image from 'next/image';

export default function InterferonsPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-start">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/interferons hero.webp"
            alt="Interferons header background"
            fill
            className="object-cover image-shadow-lg"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-8 w-full py-16 lg:py-20">
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl text-left pl-0 md:pl-6 lg:pl-0 pr-6 md:pr-12 lg:pr-0">
            {/* Breadcrumbs */}
            <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
              <Link href="/products" className="hover:text-cyan-700">Products</Link>
              <span className="text-gray-300">/</span>
              <Link href="/products/proteins" className="hover:text-cyan-700">Proteins</Link>
            </nav>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 pb-2 drop-shadow-sm">
              <span className="text-[#002776]">Interferons</span>
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 to-[#002776] rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-xl">
              PBL offers a range of interferons from different species and of different classes including multiple IFN-Alpha and IFN-Beta subtypes. Our interferons are high purity, provide consistent performance and biological activity, and are suitable for use in a range of research applications.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Categories Grid - Internal Navigation */}
      <section className="py-24 bg-[#F9F9FC] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Human IFN Proteins Card */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all font-bold">H</div>
                </div>
                <Link href="/products/proteins/interferons/human" className="block cursor-pointer mb-2">
                  <h2 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-cyan-600 transition-colors">
                    Human IFN Proteins
                  </h2>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8">
                  Human Interferon proteins for Type I, II and III.
                </p>
                <div className="mt-auto space-y-2">
                  <Link
                    href="/products/proteins/interferons/human/ifn-alpha"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Human IFN-Alpha</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                  <Link
                    href="/products/proteins/interferons/human/ifn-beta"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Human IFN-Beta</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                  <Link
                    href="/products/proteins/interferons/human/other"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Other Human IFNs</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mouse IFN Proteins Card */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all font-bold italic">M</div>
                </div>
                <Link href="/products/proteins/interferons/mouse" className="block cursor-pointer mb-2">
                  <h2 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-[#2563EB] transition-colors">
                    Mouse IFN Proteins
                  </h2>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8">
                  Mouse Interferon Alpha, Beta, and Lambda proteins.
                </p>
                <div className="mt-auto space-y-2">
                  <Link
                    href="/products/proteins/interferons/mouse/ifn-alpha"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-blue-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Mouse IFN-Alpha</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-[#2563EB]">→</span>
                  </Link>
                  <Link
                    href="/products/proteins/interferons/mouse/ifn-beta"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-blue-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Mouse IFN-Beta</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-[#2563EB]">→</span>
                  </Link>
                  <Link
                    href="/products/proteins/interferons/mouse/ifn-lambda"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-blue-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Mouse IFN-Lambda</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-[#2563EB]">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mammalian IFN Proteins Card */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all font-bold">M</div>
                </div>
                <Link href="/products/proteins/interferons/mammalian" className="block cursor-pointer mb-2">
                  <h2 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-cyan-600 transition-colors">
                    Mammalian IFN Proteins <br/>(Non-Human, Non-Mouse)
                  </h2>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8">
                  Cynomolgus, Rhesus, Feline, Porcine, and Bovine Interferon proteins.
                </p>
                <div className="mt-auto">
                  <Link href="/products/proteins/interferons/mammalian" className="text-sm font-bold text-cyan-500 flex items-center gap-2 group-hover:gap-4 transition-all">
                    View Products <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Rat IFN Proteins Card */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-[#06B6D4] group-hover:bg-[#06B6D4] group-hover:text-white transition-all font-bold italic">R</div>
                </div>
                <Link href="/products/proteins/interferons/rat" className="block cursor-pointer mb-2">
                  <h2 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-[#06B6D4] transition-colors">
                    Rat IFN Proteins
                  </h2>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8">
                  Type I and II rat interferon proteins for life science research.
                </p>
                <div className="mt-auto">
                  <Link href="/products/proteins/interferons/rat" className="text-sm font-bold text-[#06B6D4] flex items-center gap-2 group-hover:gap-4 transition-all">
                    View Products <span>→</span>
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


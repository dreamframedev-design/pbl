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
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Human IFN Proteins Card */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col transition-all duration-300">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all font-black text-lg">H</div>
                </div>
                <Link href="/products/proteins/interferons/human" className="block mb-2 group-hover:text-cyan-600 transition-colors">
                  <h2 className="text-3xl font-bold text-[#002776]">
                    Human IFN Proteins
                  </h2>
                </Link>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
                  Human Interferon proteins for Type I, II and III.
                </p>
                <div className="mt-auto space-y-3 mb-10">
                  <Link
                    href="/products/proteins/interferons/human/ifn-alpha"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Human IFN-Alpha
                  </Link>
                  <Link
                    href="/products/proteins/interferons/human/ifn-beta"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Human IFN-Beta
                  </Link>
                  <Link
                    href="/products/proteins/interferons/human/other"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Other Human IFNs
                  </Link>
                </div>
                <Link href="/products/proteins/interferons/human" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                  View Products
                </Link>
              </div>
            </div>

            {/* Mouse IFN Proteins Card */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col transition-all duration-300">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all font-black text-lg italic">M</div>
                </div>
                <Link href="/products/proteins/interferons/mouse" className="block mb-2 group-hover:text-[#2563EB] transition-colors">
                  <h2 className="text-3xl font-bold text-[#002776]">
                    Mouse IFN Proteins
                  </h2>
                </Link>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
                  Mouse Interferon Alpha, Beta, and Lambda proteins.
                </p>
                <div className="mt-auto space-y-3 mb-10">
                  <Link
                    href="/products/proteins/interferons/mouse/ifn-alpha"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#2563EB] hover:pl-3 hover:text-[#2563EB] hover:bg-[rgba(37,99,235,0.04)]"
                  >
                    Mouse IFN-Alpha
                  </Link>
                  <Link
                    href="/products/proteins/interferons/mouse/ifn-beta"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#2563EB] hover:pl-3 hover:text-[#2563EB] hover:bg-[rgba(37,99,235,0.04)]"
                  >
                    Mouse IFN-Beta
                  </Link>
                  <Link
                    href="/products/proteins/interferons/mouse/ifn-lambda"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#2563EB] hover:pl-3 hover:text-[#2563EB] hover:bg-[rgba(37,99,235,0.04)]"
                  >
                    Mouse IFN-Lambda
                  </Link>
                </div>
                <Link href="/products/proteins/interferons/mouse" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                  View Products
                </Link>
              </div>
            </div>

            {/* Mammalian IFN Proteins Card */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col transition-all duration-300">
                <div className="mb-6 flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all font-black text-lg">M</div>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full text-[9px] font-black uppercase tracking-widest h-fit">Cross-Species</span>
                </div>
                <Link href="/products/proteins/interferons/mammalian" className="block mb-2 group-hover:text-cyan-600 transition-colors">
                  <h2 className="text-3xl font-bold text-[#002776]">
                    Mammalian IFN Proteins <br/>(Non-Human, Non-Mouse)
                  </h2>
                </Link>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
                  Cynomolgus, Rhesus, Feline, Porcine, and Bovine Interferon proteins.
                </p>
                <div className="mt-auto">
                  <Link href="/products/proteins/interferons/mammalian" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                    View Products
                  </Link>
                </div>
              </div>
            </div>

            {/* Rat IFN Proteins Card (Featured) */}
            <div className="group p-[2.5px] rounded-[3rem] bg-gradient-to-br from-cyan-400 to-[#002776] transition-all duration-500 hover:scale-[1.02] flex flex-col shadow-xl">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#002776] group-hover:text-white transition-all font-black text-lg italic">R</div>
                </div>
                <Link href="/products/proteins/interferons/rat" className="block mb-2 group-hover:text-cyan-500 transition-colors">
                  <h2 className="text-3xl font-bold text-[#002776]">
                    Rat IFN Proteins
                  </h2>
                </Link>
                <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed flex-grow">
                  Type I and II rat interferon proteins for life science research.
                </p>
                <div className="mt-auto">
                  <Link href="/products/proteins/interferons/rat" className="w-full py-4 bg-[#002776] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm hover:bg-cyan-600">
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <footer className="py-32 bg-white text-center">
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
      </footer>
    </main>
  );
}


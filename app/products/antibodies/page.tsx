import Link from 'next/link';
import Image from 'next/image';

export default function AntibodiesPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">

      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products-antibodies hero.webp"
            alt="Antibodies header background"
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
              <span>Antibodies</span>
            </nav>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
              <span className="block text-[#002776]">Monoclonal</span>
              <span className="block text-[#002776]">& Polyclonal</span>
              <span className="block font-light text-slate-400 font-serif italic">Antibodies</span>
            </h1>

            <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
              PBL Offers Monoclonal and Polyclonal Antibodies From Multiple Mammalian Species
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8 text-slate-600 leading-relaxed font-light text-lg">
          <p>
            Monoclonal and polyclonal antibodies are often interchangeable; however in some applications, one or the other antibody will give a better result.
          </p>
          <p>
            Monoclonal antibodies (MAbs) are monospecific antibodies that are the same because they are made by identical immune cells that are all clones of a unique parent cell. MAbs have monovalent affinity, in that they bind to the same epitope and offer high specificity in applications such as ELISA, flow cytometry or epitope mapping where specific binding is desirable.
          </p>
        </div>
      </section>

      {/* Interactive Cards Section */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Monoclonal Antibodies Card */}
            <div className="group p-1 rounded-[3rem] transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,240,243,0.2)] hover:border-[#00F0F3] hover:-translate-y-1.5" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-500 mb-8 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.644.322a6 6 0 01-3.86.517l-2.387-.477a2 2 0 00-1.022.547l1.166 3.497a2 2 0 001.898 1.368h10.23a2 2 0 001.898-1.368l1.166-3.497z" />
                  </svg>
                </div>
                <Link href="/products/antibodies/monoclonal" className="block cursor-pointer mb-2">
                  <h3 className="text-3xl font-bold mb-6 text-[#002776]">Monoclonal Antibodies (MAbs)</h3>
                </Link>
                <div className="text-slate-500 font-light leading-relaxed mb-10 flex-grow text-sm space-y-4">
                  <p>
                    Monoclonal antibodies (MAbs) are monospecific antibodies that
                    are the same because they are made by identical immune cells
                    that are all clones of a unique parent cell. MAbs have
                    monovalent affinity, in that they bind to the same epitope and
                    offer high specificity in applications such as{' '}
                    <strong className="text-[#002776] font-semibold">ELISA</strong>, <strong className="text-[#002776] font-semibold">flow cytometry</strong> or{' '}
                    <strong className="text-[#002776] font-semibold">epitope mapping</strong> where specific binding is
                    desirable.
                  </p>
                  <p>
                    PBL's MAbs are derived against a range of interferons from
                    various mammalian species. They deliver superior{' '}
                    <em>product stability</em> and <em>high specificity</em> while
                    providing <em>reliable</em> and <em>reproducible results</em>.
                  </p>
                </div>
                
                <div className="space-y-3 mb-10">
                  <Link
                    href="/products/antibodies/monoclonal/anti-human-ifn"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Anti-Human IFN MAbs
                  </Link>
                  <Link
                    href="/products/antibodies/monoclonal/anti-mouse-ifn"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Anti-Mouse IFN MAbs
                  </Link>
                  <Link
                    href="/products/antibodies/monoclonal/anti-porcine-ifn"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Anti-Porcine IFN MAbs
                  </Link>
                  <Link
                    href="/products/antibodies/monoclonal/labeled"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Labeled Anti-IFN MAbs (Human, Mouse)
                  </Link>
                </div>
                
                <Link href="/products/antibodies/monoclonal" className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                  Explore Monoclonals
                </Link>
              </div>
            </div>

            {/* Polyclonal Antibodies Card */}
            <div className="group p-1 rounded-[3rem] transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,240,243,0.2)] hover:border-[#00F0F3] hover:-translate-y-1.5" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#2563EB] mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all font-bold italic">PA</div>
                <Link href="/products/antibodies/polyclonal" className="block cursor-pointer mb-2">
                  <h3 className="text-3xl font-bold mb-6 text-[#002776]">Polyclonal Antibodies (PAbs)</h3>
                </Link>
                <div className="text-slate-500 font-light leading-relaxed mb-10 flex-grow text-sm space-y-4">
                  <p>
                    Polyclonal antibodies (PAbs) are obtained using a mixture of
                    immunoglobulin molecules secreted against a specific antigen,
                    each recognizing a different epitope making them more tolerant
                    to small changes in the structure of the antigen. PAbs are
                    preferable for neutralization because they target a variety of
                    specific epitopes of a particular antigen.
                  </p>
                  <p>
                    PBL's PAbs are available for use in a range of applications
                    including <strong className="text-[#002776] font-semibold">ELISA</strong>,{' '}
                    <strong className="text-[#002776] font-semibold">neutralization assays</strong>,{' '}
                    <strong className="text-[#002776] font-semibold">western blotting</strong>, <strong className="text-[#002776] font-semibold">flow cytometry</strong>,{' '}
                    <strong className="text-[#002776] font-semibold">immunoprecipitation</strong>, and{' '}
                    <strong className="text-[#002776] font-semibold">immunohistochemistry</strong>.
                  </p>
                </div>
                
                <div className="space-y-3 mb-10">
                  <Link
                    href="/products/antibodies/polyclonal/anti-human-ifn"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Anti-Human IFN PAbs
                  </Link>
                  <Link
                    href="/products/antibodies/polyclonal/anti-mouse-ifn"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Anti-Mouse IFN PAbs
                  </Link>
                  <Link
                    href="/products/antibodies/polyclonal/anti-rat-ifn"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Anti-Rat IFN PAbs
                  </Link>
                </div>

                <Link href="/products/antibodies/polyclonal" className="w-full py-4 bg-slate-50 group-hover:bg-blue-600 group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm">
                  Explore Polyclonals
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

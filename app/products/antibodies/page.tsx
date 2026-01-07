import Link from 'next/link';
import Image from 'next/image';

export default function AntibodiesPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">

      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-start">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products-antibodies hero.webp"
            alt="Antibodies header background"
            fill
            className="object-cover image-shadow-lg"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="max-w-2xl text-left">
            {/* Breadcrumbs */}
            <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
              <Link href="/products" className="hover:text-cyan-700">Products</Link>
            </nav>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 pb-2 drop-shadow-sm">
              <span className="text-[#002776]">PBL Offers Monoclonal and Polyclonal</span>
              <br />
              <span className="text-[#04849C]">Antibodies From Multiple Mammalian Species</span>
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 to-[#002776] rounded-full mb-8"></div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl space-y-8 text-gray-600 leading-relaxed font-light text-lg">
            <p>
              Monoclonal and polyclonal antibodies are often interchangeable;
              however in some applications, one or the other antibody will give a
              better result.
            </p>
            <p>
              Monoclonal antibodies (MAbs) are monospecific antibodies that are
              the same because they are made by identical immune cells that are
              all clones of a unique parent cell. MAbs have monovalent affinity,
              in that they bind to the same epitope and offer high specificity in
              applications such as <strong className="text-[#4B5563] font-semibold animated-underline">ELISA</strong>, <strong className="text-[#4B5563] font-semibold animated-underline">flow cytometry</strong> or <strong className="text-[#4B5563] font-semibold animated-underline">epitope mapping</strong> where
              specific binding is desirable.
            </p>
            <p>
              PBL's MAbs are derived against a range of interferons from various
              mammalian species. They deliver superior <em>product stability</em> and <em>high specificity</em> while
              providing <em>reliable</em> and <em>reproducible results</em>.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Cards Section */}
      <section className="py-24 bg-[#F9F9FC] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Monoclonal Antibodies Card */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.644.322a6 6 0 01-3.86.517l-2.387-.477a2 2 0 00-1.022.547l1.166 3.497a2 2 0 001.898 1.368h10.23a2 2 0 001.898-1.368l1.166-3.497z" />
                    </svg>
                  </div>
                </div>
                <Link href="/products/antibodies/monoclonal" className="block cursor-pointer mb-2">
                  <h2 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-cyan-600 transition-colors">
                    Monoclonal Antibodies
                  </h2>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-6">
                  Monoclonal antibodies (MAbs) are monospecific antibodies that
                  are the same because they are made by identical immune cells
                  that are all clones of a unique parent cell. MAbs have
                  monovalent affinity, in that they bind to the same epitope and
                  offer high specificity in applications such as{' '}
                  <strong className="text-[#4B5563] font-semibold animated-underline">ELISA</strong>, <strong className="text-[#4B5563] font-semibold animated-underline">flow cytometry</strong> or{' '}
                  <strong className="text-[#4B5563] font-semibold animated-underline">epitope mapping</strong> where specific binding is
                  desirable.
                </p>
                <p className="text-gray-500 text-sm font-light mb-8">
                  PBL's MAbs are derived against a range of interferons from
                  various mammalian species. They deliver superior{' '}
                  <em>product stability</em> and <em>high specificity</em> while
                  providing <em>reliable</em> and <em>reproducible results</em>.
                </p>

                <div className="mt-auto space-y-2">
                  <Link
                    href="/products/antibodies/monoclonal/anti-human-ifn"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Anti-Human IFN MAbs</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                  <Link
                    href="/products/antibodies/monoclonal/anti-mouse-ifn"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Anti-Mouse IFN MAbs</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                  <Link
                    href="/products/antibodies/monoclonal/anti-porcine-ifn"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Anti-Porcine IFN MAbs</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                  <Link
                    href="/products/antibodies/monoclonal/labeled"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Labeled Anti-IFN MAbs (Human, Mouse)</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Polyclonal Antibodies Card */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all font-bold">PA</div>
                </div>
                <Link href="/products/antibodies/polyclonal" className="block cursor-pointer mb-2">
                  <h2 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-cyan-600 transition-colors">
                    Polyclonal Antibodies
                  </h2>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-6">
                  Polyclonal antibodies (PAbs) are obtained using a mixture of
                  immunoglobulin molecules secreted against a specific antigen,
                  each recognizing a different epitope making them more tolerant
                  to small changes in the structure of the antigen. PAbs are
                  preferable for neutralization because they target a variety of
                  specific epitopes of a particular antigen.
                </p>
                <p className="text-gray-500 text-sm font-light mb-8">
                  PBL's PAbs are available for use in a range of applications
                  including <strong className="text-[#4B5563] font-semibold animated-underline">ELISA</strong>,{' '}
                  <strong className="text-[#4B5563] font-semibold animated-underline">neutralization assays</strong>,{' '}
                  <strong className="text-[#4B5563] font-semibold animated-underline">western blotting</strong>, <strong className="text-[#4B5563] font-semibold animated-underline">flow cytometry</strong>,{' '}
                  <strong className="text-[#4B5563] font-semibold animated-underline">immunoprecipitation</strong>, and{' '}
                  <strong className="text-[#4B5563] font-semibold animated-underline">immunohistochemistry</strong>.
                </p>

                <div className="mt-auto space-y-2">
                  <Link
                    href="/products/antibodies/polyclonal/anti-human-ifn"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Anti-Human IFN PAbs</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                  <Link
                    href="/products/antibodies/polyclonal/anti-mouse-ifn"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Anti-Mouse IFN PAbs</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                  <Link
                    href="/products/antibodies/polyclonal/anti-rat-ifn"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Anti-Rat IFN PAbs</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

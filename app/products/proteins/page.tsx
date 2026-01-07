import Link from 'next/link';
import Image from 'next/image';

export default function ProteinsPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">

      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-start">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products-proteins hero.webp"
            alt="Proteins header background"
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
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              With over 30 years of experience developing and manufacturing
              recombinant proteins for life science research, our manufacturing
              and quality standards ensure that our proteins exhibit{' '}
              <strong className="text-[#4B5563]">lot-to-lot consistency</strong>, as well as high levels of{' '}
              <strong className="text-[#4B5563]">bioactivity</strong>, high <strong className="text-[#4B5563]">purity</strong>, and{' '}
              <strong className="text-[#4B5563]">low endotoxin</strong> levels.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl space-y-8 text-gray-600 leading-relaxed font-light text-lg">
            <p>
              Many of our proteins are sold as units of <strong className="text-[#4B5563] font-semibold">activity</strong>{' '}
              per vial instead of in units of mass per vial (µg or mg). Each new
              lot of protein is tested internally using the same bioassay to
              provide a valid activity comparison between lots. (ED<sub>50</sub> is
              the amount of protein required to elicit a 50% maximum response in
              the bioassay.) Providing our proteins by activity instead of mass
              ensures that your results are biologically relevant.
            </p>
          </div>
        </div>
      </section>

      {/* Three-Category Grid Section */}
      <section className="py-24 bg-[#F9F9FC] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Cytokines and Growth Factors Card */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all font-bold">CGF</div>
                </div>
                <Link href="/products/proteins/cytokines-growth-factors" className="block cursor-pointer mb-2">
                  <h2 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-cyan-600 transition-colors">
                    Cytokines and Growth Factors
                  </h2>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8">
                  PBL offers a comprehensive range of recombinant cytokines and
                  growth factors for life science research applications.
                </p>

                <div className="mt-auto space-y-2">
                  <Link
                    href="/products/proteins/cytokines-growth-factors/ecoli-cho-expressed"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>E.coli & CHO Expressed Cytokine & Growth Factor</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                  <Link
                    href="/products/proteins/cytokines-growth-factors/human-cell-expressed"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Human Cell-Expressed Cytokines</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Interferon Decoy Receptor Card */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all font-bold">IDR</div>
                </div>
                <Link href="/products/proteins/interferon-decoy-receptor" className="block cursor-pointer mb-2">
                  <h2 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-cyan-600 transition-colors">
                    Interferon Decoy Receptor
                  </h2>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8">
                  Specialized proteins for interferon research and neutralization
                  applications.
                </p>

                <div className="mt-auto space-y-2">
                  <Link
                    href="/products/proteins/interferon-decoy-receptor"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Mouse Interferon Alpha All-Subtype Neutralizing Viral Protein</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Interferon Card */}
            <div className="group p-1 rounded-3xl transition-all duration-500 hover:scale-[1.02]" style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div className="bg-white rounded-[22px] p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,243,0.2)] hover:border-cyan-400/40 border border-transparent">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all font-bold">IFN</div>
                </div>
                <Link href="/products/proteins/interferons" className="block cursor-pointer mb-2">
                  <h2 className="text-2xl font-bold mb-2 text-[#002776] group-hover:text-cyan-600 transition-colors">
                    Interferon
                  </h2>
                </Link>
                <p className="text-gray-500 text-sm font-light mb-8">
                  Comprehensive collection of interferon proteins across multiple
                  species for research applications.
                </p>

                <div className="mt-auto space-y-2">
                  <Link
                    href="/products/proteins/interferons"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Human IFN Proteins</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                  <Link
                    href="/products/proteins/interferons"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Rat IFN Proteins</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                  <Link
                    href="/products/proteins/interferons"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Mouse IFN Proteins</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-500">→</span>
                  </Link>
                  <Link
                    href="/products/proteins/interferons"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 text-sm font-semibold transition-all group/link"
                  >
                    <span>Mammalian IFN Proteins (Non-Human, Non-Mouse)</span>
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

import Image from 'next/image';
import Link from 'next/link';
import { getResourcesByCategory } from '@/lib/markdown-utils';
import ResourcesFilter from '@/components/ResourcesFilter';

export default async function ResourcesPage() {
  // Fetch resources for each category
  const generalProtocols = await getResourcesByCategory('general-protocols');
  const scientificArticles = await getResourcesByCategory('scientific-articles');
  const technicalPresentations = await getResourcesByCategory('technical-presentations');

  return (
    <main className="min-h-screen bg-[#FBFBFE]">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        {/* Background Image with White Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/23.webp"
            alt="Resources"
            fill
            className="object-cover"
            priority
          />
          {/* White gradient overlay - solid white on left, fades to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-white/40 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
            <span>PBL</span> <span className="text-gray-300">/</span> <span>Technical Resources</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="text-[#002776]">Resources</span>
          </h1>
        </div>
      </header>

      {/* Resource Cards Grid */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Column 1: Technical Presentations */}
            <div className="group p-1 rounded-[2.5rem] transition-all duration-500 hover-glow" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.2rem] p-8 h-full flex flex-col">
                <div className="aspect-video rounded-2xl overflow-hidden mb-8 shadow-inner transition-all duration-700">
                  <Image
                    src="/images/Technical Presentations.webp"
                    alt="Technical Presentations"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Technical Presentations</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6">Characterization Studies</p>
                
                <div className="space-y-3 mb-10 overflow-hidden">
                  {technicalPresentations.length > 0 ? (
                    technicalPresentations.slice(0, 5).map((presentation) => (
                      <Link
                        key={presentation.slug}
                        href={`/resources/technical-presentations/${presentation.slug}`}
                        className="block phosphor-link text-[11px] font-semibold text-slate-600 truncate"
                      >
                        {presentation.name}
                      </Link>
                    ))
                  ) : (
                    <p className="text-[11px] text-slate-400">No presentations available</p>
                  )}
                </div>
                
              </div>
            </div>

            {/* Column 2: General Protocols */}
            <div className="group p-1 rounded-[2.5rem] transition-all duration-500 hover-glow" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.2rem] p-8 h-full flex flex-col">
                <div className="aspect-video rounded-2xl overflow-hidden mb-8 shadow-inner transition-all duration-700">
                  <Image
                    src="/images/General Protocols hero2.webp"
                    alt="General Protocols"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">General Protocols</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6">Laboratory Procedures</p>
                
                <div className="space-y-3 mb-10 overflow-hidden">
                  {generalProtocols.length > 0 ? (
                    generalProtocols.slice(0, 5).map((protocol) => (
                      <Link
                        key={protocol.slug}
                        href={`/resources/general-protocols/${protocol.slug}`}
                        className="block phosphor-link text-[11px] font-semibold text-slate-600 truncate"
                      >
                        {protocol.name}
                      </Link>
                    ))
                  ) : (
                    <p className="text-[11px] text-slate-400">No protocols available</p>
                  )}
                </div>
                
              </div>
            </div>

            {/* Column 3: Scientific Articles */}
            <div className="group p-1 rounded-[2.5rem] transition-all duration-500 hover-glow" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.2rem] p-8 h-full flex flex-col">
                <div className="aspect-video rounded-2xl overflow-hidden mb-8 shadow-inner transition-all duration-700">
                  <Image
                    src="/images/Scientific Articles.webp"
                    alt="Scientific Articles"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Scientific Articles</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6">Published Research</p>
                
                <div className="space-y-3 mb-10 overflow-hidden">
                  {scientificArticles.length > 0 ? (
                    scientificArticles.slice(0, 5).map((article) => (
                      <Link
                        key={article.slug}
                        href={`/resources/scientific-articles/${article.slug}`}
                        className="block phosphor-link text-[11px] font-semibold text-slate-600 truncate"
                      >
                        {article.name}
                      </Link>
                    ))
                  ) : (
                    <p className="text-[11px] text-slate-400">No articles available</p>
                  )}
                </div>

              </div>
            </div>

            {/* Column 4: Blog */}
            <div className="group p-1 rounded-[2.5rem] transition-all duration-500 hover-glow" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.2rem] p-8 h-full flex flex-col">
                <div className="aspect-video rounded-2xl overflow-hidden mb-8 shadow-inner transition-all duration-700">
                  <Image
                    src="/images/10.webp"
                    alt="Blog"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Blog</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6">Latest Updates</p>
                
                <div className="space-y-3 mb-10 flex-1">
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Stay up to date with the latest news, product updates, and scientific insights from PBL Assay Science.
                  </p>
                </div>

                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#002776] hover:text-cyan-600 transition-colors"
                >
                  Visit Blog →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Resources Filter System */}
      <ResourcesFilter />
    </main>
  );
}

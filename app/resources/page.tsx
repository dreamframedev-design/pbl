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
            <span className="text-[#002776]">Technical</span> <br/> <span className="font-light text-gray-400 font-serif italic">Resources</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            Access our comprehensive database of validated procedures, characterization studies, 
            and published scientific insights.
          </p>
        </div>
      </header>

      {/* Three-Column Entry Portal */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Column 1: Technical Presentations */}
            <div className="group p-1 rounded-[2.5rem] transition-all duration-500 hover-glow" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.2rem] p-8 h-full flex flex-col">
                <div className="aspect-video rounded-2xl overflow-hidden mb-8 shadow-inner grayscale group-hover:grayscale-0 transition-all duration-700">
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
                
                <div className="mt-auto">
                  <Link
                    href="/resources/technical-presentations"
                    className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all"
                  >
                    Browse Presentations
                  </Link>
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
                <div className="aspect-video rounded-2xl overflow-hidden mb-8 shadow-inner grayscale group-hover:grayscale-0 transition-all duration-700">
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
                
                <div className="mt-auto">
                  <Link
                    href="/resources/general-protocols"
                    className="w-full py-4 bg-slate-50 group-hover:bg-[#058A9F] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all"
                  >
                    View All Protocols
                  </Link>
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
                <div className="aspect-video rounded-2xl overflow-hidden mb-8 shadow-inner grayscale group-hover:grayscale-0 transition-all duration-700">
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

                <div className="mt-auto">
                  <Link
                    href="/resources/scientific-articles"
                    className="w-full py-4 bg-slate-50 group-hover:bg-cyan-500 group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all"
                  >
                    Read All Articles
                  </Link>
                </div>
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

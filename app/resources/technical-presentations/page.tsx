import Image from 'next/image';
import Link from 'next/link';
import { getResourcesByCategory } from '@/lib/markdown-utils';

export default async function TechnicalPresentationsPage() {
  const presentations = await getResourcesByCategory('technical-presentations');

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
            alt="Technical Presentations"
            fill
            className="object-cover"
            priority
          />
          {/* White gradient overlay - solid white on left, fades to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-white/40 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em] flex-wrap">
            <span>PBL</span> <span className="text-gray-300">/</span> <span>Technical Resources</span> <span className="text-gray-300">/</span> <span className="break-words">Technical Presentations</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="text-[#002776]">Technical</span> <br/> <span className="font-light text-gray-400 font-serif italic">Presentations</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            Technical presentations and characterization studies
          </p>
        </div>
      </header>

      {/* Presentations List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {presentations.map((presentation) => (
              <Link
                key={presentation.slug}
                href={`/resources/technical-presentations/${presentation.slug}`}
                className="group p-1 rounded-[2.5rem] transition-all duration-500 hover-glow flex flex-col" 
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(226, 232, 240, 0.3)'
                }}
              >
                <div className="bg-white rounded-[2.2rem] p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-[#002776] mb-4 group-hover:text-[#058A9F] transition-colors">
                    {presentation.name}
                  </h3>
                  {presentation.description && (
                    <p className="text-slate-600 leading-relaxed font-light mb-6 flex-grow text-sm">
                      {presentation.description}
                    </p>
                  )}
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-[#058A9F] hover:text-[#002776] font-semibold transition-colors duration-300 text-sm group/link">
                      <span className="mr-2">View Presentation</span>
                      <svg
                        className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

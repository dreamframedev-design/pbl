import Image from 'next/image';
import Link from 'next/link';
import FloatingCTA from '@/components/FloatingCTA';
import { getResourcesByCategory } from '@/lib/markdown-utils';
import ResourcesFilter from '@/components/ResourcesFilter';

export default async function ResourcesPage() {
  // Fetch resources for each category
  const generalProtocols = await getResourcesByCategory('general-protocols');
  const scientificArticles = await getResourcesByCategory('scientific-articles');
  const technicalPresentations = await getResourcesByCategory('technical-presentations');

  return (
    <main className="min-h-screen">
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/23.webp"
            alt="Resources"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-navy/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Resources
            </h1>
          </div>
        </div>
      </section>

      {/* Three-Column Entry Portal */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: Technical Resources */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-full max-w-md mb-6 flex items-center justify-center">
                  <Image
                    src="/images/Technical Presentations.webp"
                    alt="Technical Resources"
                    width={800}
                    height={450}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary-navy mb-4">
                  Technical Resources
                </h3>
                <p className="text-gray-700 leading-relaxed font-light mb-6">
                  Protocols, white papers, presentations, and scientific articles
                </p>
              </div>
              {/* Technical Presentations Links */}
              {technicalPresentations.length > 0 && (
                <div className="w-full mt-auto space-y-2">
                  {technicalPresentations.slice(0, 5).map((presentation) => (
                    <Link
                      key={presentation.slug}
                      href={`/resources/technical-presentations/${presentation.slug}`}
                      className="block text-sm text-primary-navy hover:text-secondary-teal font-medium transition-colors py-1.5 border-l-2 border-transparent hover:border-secondary-teal pl-2"
                    >
                      {presentation.name}
                    </Link>
                  ))}
                  {technicalPresentations.length > 5 && (
                    <Link
                      href="/resources/technical-presentations"
                      className="block text-sm text-secondary-teal hover:text-primary-navy font-semibold transition-colors py-1.5 mt-2"
                    >
                      View All Presentations →
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Column 2: General Protocols */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <Link
                href="/resources/general-protocols"
                className="flex flex-col items-center text-center mb-6"
              >
                <div className="w-full max-w-md mb-6 flex items-center justify-center">
                  <Image
                    src="/images/General Protocols hero2.webp"
                    alt="General Protocols"
                    width={800}
                    height={450}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary-navy mb-4">
                  General Protocols
                </h3>
                <p className="text-gray-700 leading-relaxed font-light mb-6">
                  Step-by-step protocols for common laboratory procedures
                </p>
              </Link>
              {/* General Protocols Links */}
              {generalProtocols.length > 0 && (
                <div className="w-full mt-auto space-y-2">
                  {generalProtocols.slice(0, 5).map((protocol) => (
                    <Link
                      key={protocol.slug}
                      href={`/resources/general-protocols/${protocol.slug}`}
                      className="block text-sm text-primary-navy hover:text-secondary-teal font-medium transition-colors py-1.5 border-l-2 border-transparent hover:border-secondary-teal pl-2"
                    >
                      {protocol.name}
                    </Link>
                  ))}
                  {generalProtocols.length > 5 && (
                    <Link
                      href="/resources/general-protocols"
                      className="block text-sm text-secondary-teal hover:text-primary-navy font-semibold transition-colors py-1.5 mt-2"
                    >
                      View All Protocols →
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Column 3: Scientific Articles */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <Link
                href="/resources/scientific-articles"
                className="flex flex-col items-center text-center mb-6"
              >
                <div className="w-full max-w-md mb-6 flex items-center justify-center">
                  <Image
                    src="/images/Scientific Articles.webp"
                    alt="Scientific Articles"
                    width={800}
                    height={450}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary-navy mb-4">
                  Scientific Articles
                </h3>
                <p className="text-gray-700 leading-relaxed font-light mb-6">
                  Research articles and technical presentations
                </p>
              </Link>
              {/* Scientific Articles Links */}
              {scientificArticles.length > 0 && (
                <div className="w-full mt-auto space-y-2">
                  {scientificArticles.slice(0, 5).map((article) => (
                    <Link
                      key={article.slug}
                      href={`/resources/scientific-articles/${article.slug}`}
                      className="block text-sm text-primary-navy hover:text-secondary-teal font-medium transition-colors py-1.5 border-l-2 border-transparent hover:border-secondary-teal pl-2"
                    >
                      {article.name}
                    </Link>
                  ))}
                  {scientificArticles.length > 5 && (
                    <Link
                      href="/resources/scientific-articles"
                      className="block text-sm text-secondary-teal hover:text-primary-navy font-semibold transition-colors py-1.5 mt-2"
                    >
                      View All Articles →
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Resources Filter System */}
      <ResourcesFilter />
    </main>
  );
}

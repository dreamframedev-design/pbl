import Image from 'next/image';
import Link from 'next/link';
import { getResourcesByCategory } from '@/lib/markdown-utils';

export default async function ScientificArticlesPage() {
  const articles = await getResourcesByCategory('scientific-articles');

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[350px] lg:min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/23.webp"
            alt="Scientific Articles"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-navy/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Scientific Articles
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
              Peer-reviewed articles and scientific publications
            </p>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="section-padding bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/scientific-articles/${article.slug}`}
                className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4 group-hover:text-secondary-teal transition-colors">
                  {article.name}
                </h3>
                {article.description && (
                  <p className="text-gray-700 leading-relaxed font-light mb-6 flex-grow">
                    {article.description}
                  </p>
                )}
                <span className="inline-flex items-center text-secondary-teal hover:text-primary-navy font-medium transition-colors duration-300 group/link">
                  <span className="mr-2">Read Article</span>
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

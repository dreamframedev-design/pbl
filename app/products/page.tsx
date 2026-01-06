import Link from 'next/link';
import Image from 'next/image';
import FloatingCTA from '@/components/FloatingCTA';

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <FloatingCTA />
      
      {/* Header Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/13.webp"
            alt="Products header background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight mb-6">
              Products That Won't Let You Down
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light max-w-3xl mx-auto">
              We offer a range of high-quality interferon and interleukin
              immunoassay kits, cytokines and interferons, and monoclonal and
              polyclonal antibodies for life science researchers. Our products
              provide consistent performance with reliable and reproducible
              results.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Assay Kits */}
            <Link
              href="/products/assay-kits"
              className="group relative flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md mb-6 group-hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-secondary-teal/30 group-hover:scale-[1.02]">
                <Image
                  src="/images/15.webp"
                  alt="Assay Kits"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-navy group-hover:text-secondary-teal transition-colors text-center">
                Assay Kits
              </h2>
            </Link>

            {/* Proteins */}
            <Link
              href="/products/proteins"
              className="group relative flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md mb-6 group-hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-secondary-teal/30 group-hover:scale-[1.02]">
                <Image
                  src="/images/16.webp"
                  alt="Proteins"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-navy group-hover:text-secondary-teal transition-colors text-center">
                Proteins
              </h2>
            </Link>

            {/* Antibodies */}
            <Link
              href="/products/antibodies"
              className="group relative flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md mb-6 group-hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-secondary-teal/30 group-hover:scale-[1.02]">
                <Image
                  src="/images/14.webp"
                  alt="Antibodies"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-navy group-hover:text-secondary-teal transition-colors text-center">
                Antibodies
              </h2>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

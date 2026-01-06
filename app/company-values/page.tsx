import Image from 'next/image';

export default function CompanyValuesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[350px] lg:min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/23.webp"
            alt="Company Values"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-navy/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Company Values
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:text-primary-navy prose-headings:font-bold prose-p:text-gray-700 prose-p:font-light prose-p:leading-relaxed">
            <p className="text-lg text-gray-600 mb-8">
              Content to be pulled from live site: https://www.pblassaysci.com/company-values
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


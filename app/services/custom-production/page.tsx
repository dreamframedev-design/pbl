import Image from 'next/image';
import Link from 'next/link';

export default function CustomProductionPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/20.webp"
            alt="Custom Production Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-navy/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-light mb-8">
              PBL's reagent development services offer customized production of cytokines, interferons, antibodies, and other proteins.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Service List */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-16">
            {/* Service 1: Recombinant Protein Production */}
            <div className="group relative bg-white p-8 lg:p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-professional mb-6 group-hover:text-purple-deep transition-colors duration-300">
                1. Recombinant Protein Production and Purification (Bacterial & Mammalian)
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                PBL provides comprehensive recombinant protein production services utilizing both bacterial and mammalian expression systems. Our bacterial expression capabilities offer cost-effective, high-yield production for proteins that do not require complex post-translational modifications. For proteins requiring authentic glycosylation and native folding, our mammalian cell expression systems deliver proteins with full biological activity. All production processes include rigorous purification protocols to ensure high purity, low endotoxin levels, and optimal protein quality for research and therapeutic applications.
              </p>
            </div>

            {/* Service 2: Cytokine and Antibody Production */}
            <div className="group relative bg-white p-8 lg:p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-professional mb-6 group-hover:text-purple-deep transition-colors duration-300">
                2. Cytokine and Antibody Production and Characterization
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Our specialized cytokine and antibody production services leverage decades of expertise in immunological research. We produce high-quality cytokines with authentic post-translational modifications, ensuring full biological activity and proper receptor binding. Our antibody production services encompass both monoclonal and polyclonal antibodies, with comprehensive characterization including specificity testing, affinity determination, and functional validation. All products undergo rigorous quality control to meet the highest standards for research and diagnostic applications.
              </p>
            </div>

            {/* Service 3: Hybridoma and Cell Line Development */}
            <div className="group relative bg-white p-8 lg:p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-professional mb-6 group-hover:text-purple-deep transition-colors duration-300">
                3. Hybridoma, Polyclonal Antibody, and Cell Line Development
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                PBL offers complete cell line development services, including hybridoma generation for monoclonal antibody production and polyclonal antibody development through immunization protocols. Our hybridoma services include cell fusion, screening, cloning, and stable cell line establishment to deliver monoclonal antibodies with defined specificity and high affinity. For polyclonal antibodies, we manage the entire immunization process and purification workflow. We also develop custom stable cell lines for protein production, reporter assays, and other research applications, ensuring optimal expression levels and long-term stability.
              </p>
            </div>

            {/* Service 4: Protein and Antibody Labeling */}
            <div className="group relative bg-white p-8 lg:p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-professional mb-6 group-hover:text-purple-deep transition-colors duration-300">
                4. Protein and Antibody Labeling and Biophysical Characterization
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Our labeling services provide conjugation of proteins and antibodies with a wide range of fluorophores, enzymes, biotin, and other tags while preserving biological activity and binding specificity. We employ optimized conjugation protocols to ensure consistent labeling ratios and minimal aggregation. Our biophysical characterization services include analysis of protein stability, aggregation propensity, thermal stability, and structural integrity. Comprehensive characterization reports provide detailed insights into protein quality, enabling informed decisions for research and development applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-background-offwhite">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Link
            href="/speak-to-a-scientist"
            className="btn-primary"
          >
            Talk to a Scientist
          </Link>
        </div>
      </section>
    </main>
  );
}


import Image from 'next/image';
import Link from 'next/link';

export default function CellBasedServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        {/* Background Image with White Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/19.webp"
            alt="Cell-Based Services"
            fill
            className="object-cover"
            priority
          />
          {/* White gradient overlay - solid white on left, fades to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-white/40 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
            <span>PBL</span> <span className="text-gray-300">/</span> <span>Services</span> <span className="text-gray-300">/</span> <span>Cell-Based Services</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="text-[#002776]">Cell-Based</span> <br/> <span className="font-light text-gray-400 font-serif italic">Services</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            Assays measuring Cytokine & Chemokine Bioactivity, Cytokine Release, NAb Activity, Proliferation & Anti-Proliferation, Antiviral Activity including CPE inhibition assays.
          </p>
        </div>
      </header>

      {/* Introduction Content - Verbatim from Master Specs */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
              Cell-based assay tools are key to understanding cellular mechanisms in a biologically relevant context. PBL offers a targeted portfolio of cell-based assay services to provide you with the most relevant information and facilitate the advancement of your research.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
              Whatever your cell-based study needs, PBL will work with you to determine the most suitable assay program to meet your goals. PBL's services team is a trusted partner of midsize and major biotech and pharma companies worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Service Grid */}
      <section className="section-padding bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Cytopathic Effect Inhibition Assay Service (CPE) */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
                Cytopathic Effect Inhibition Assay Service (CPE)
              </h3>
              <div className="space-y-3 mb-6">
                <ul className="text-sm text-gray-700 font-light space-y-2 list-disc list-inside">
                  <li>Widely accepted standard bioassay for determining the biological activity of interferons (IFNs)</li>
                  <li>More than <strong>20 years of experience</strong> serving Pharmaceutical, Biotechnology, Contract Research, and Academic scientists</li>
                  <li>Services available for measurement of <strong>IFN-Alpha</strong>, <strong>IFN-Beta</strong>, <strong>IFN-Omega</strong>, <strong>IFN-Gamma</strong>, and <strong>IFN-Lambda</strong> bioactivity in human samples, in a variety of other species, and in <strong>multiple matrices</strong></li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed font-light mb-4 flex-grow">
                The standard bioassay used to determine the biological activity of interferon (IFN) encompasses measurement of the protection of cells from the cytopathic effect (CPE) of certain viruses. IFNs are pleiotropic cytokines with antiviral, antiproliferative, and immunomodulatory activities. The biological activities of IFNs can be assessed by bioassay methods that quantify any of these characteristics. However, the standard IFN bioassay has been the protection of cells from CPE of certain viruses, since this was the initial activity which defined these molecules. CPE assay services may be used to measure the antiviral activity of IFN-α, β, ω, γ, and λ in human samples, as well as in a variety of other species, and in multiple matrices.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm text-gray-700 font-medium">
                  Frequently used systems (high level of assay sensitivity and accuracy):
                </p>
                <ul className="text-sm text-gray-700 font-light space-y-1 list-disc list-inside">
                  <li>Human A549 / EMCV</li>
                  <li>Bovine MDBK</li>
                  <li>Mouse L929 / VSV</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed font-light mb-4">
                CPE assays are inherently complex due to the metabolic state of cells, virus replication, and the ability of IFN to protect cells. Our years of knowledge and expertise in CPE assays will reduce variability and provide you with reproducible quality results. Results are provided either as a graphical representation of dye binding which allows slope and parallel line analysis, or visually determined from microscopic examination of the CPE and determination of the dilution of test samples which protects 50% of the cells.
              </p>
            </div>

            {/* Proliferation & Anti-Proliferation Assay Services */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
                Proliferation & Anti-Proliferation Assay Services
              </h3>
              <p className="text-gray-700 leading-relaxed font-light mb-6 flex-grow">
                Cell proliferation and anti-proliferation assays are essential tools for evaluating the effects of cytokines, growth factors, and therapeutic agents on cell growth and viability. PBL offers comprehensive cell-based assay services to measure both proliferation and anti-proliferative activities in a variety of cell lines and primary cells.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm text-gray-700 font-light">
                  <strong>Key Applications:</strong>
                </p>
                <ul className="text-sm text-gray-700 font-light space-y-1 list-disc list-inside">
                  <li>Assessment of cytokine and growth factor bioactivity through cell proliferation endpoints</li>
                  <li>Evaluation of anti-proliferative effects of interferons and other immunomodulatory agents</li>
                  <li>Quantification of cell viability and growth kinetics using colorimetric, fluorometric, and luminescent detection methods</li>
                  <li>Dose-response analysis and determination of EC50 or IC50 values</li>
                  <li>Custom assay development tailored to specific cell lines and research objectives</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed font-light">
                Our extensive experience with multiple cell systems and detection platforms enables us to develop robust, reproducible assays that accurately measure cellular responses. PBL's proliferation assay services provide precise quantification of cell growth, supporting your research and development programs with high-quality, reliable data.
              </p>
            </div>

            {/* Cytokine Secretion Detection Services */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
                Cytokine Secretion Detection Services
              </h3>
              <p className="text-gray-700 leading-relaxed font-light mb-6 flex-grow">
                Accurate measurement of cytokine and chemokine secretion is critical for understanding immune responses, evaluating therapeutic efficacy, and assessing cellular activation states. PBL provides specialized cell-based services for detecting and quantifying cytokine release from stimulated cells in various experimental contexts.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm text-gray-700 font-light">
                  <strong>Service Capabilities:</strong>
                </p>
                <ul className="text-sm text-gray-700 font-light space-y-1 list-disc list-inside">
                  <li>Measurement of cytokine and chemokine release from activated T cells, NK cells, and other immune cell populations</li>
                  <li>Assessment of cytokine secretion profiles in response to antigen stimulation or therapeutic intervention</li>
                  <li>Quantification of multiple analytes using multiplex immunoassay platforms for comprehensive cytokine profiling</li>
                  <li>Evaluation of cytokine release syndrome (CRS) potential in cell therapy applications</li>
                  <li>Custom assay development for specific cytokine detection requirements</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed font-light">
                PBL's cytokine secretion detection services utilize sensitive, validated immunoassays to provide accurate quantification of analytes in cell culture supernatants. Our expertise in cell-based assay development ensures reliable detection of both high and low abundance cytokines, supporting your research with comprehensive cytokine profiling data.
              </p>
            </div>

            {/* Neutralizing Antibody Assay Service */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
                Neutralizing Antibody Assay Service
              </h3>
              <p className="text-gray-700 leading-relaxed font-light mb-6 flex-grow">
                Neutralizing antibody (NAb) assays are fundamental to evaluating the immunogenicity of biotherapeutics and assessing the potential for therapeutic efficacy loss. PBL offers comprehensive NAb assay services using cell-based systems that measure the ability of antibodies to neutralize the biological activity of cytokines, interferons, and other therapeutic proteins.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm text-gray-700 font-light">
                  <strong>Assay Features:</strong>
                </p>
                <ul className="text-sm text-gray-700 font-light space-y-1 list-disc list-inside">
                  <li>Detection of neutralizing antibodies against interferon and cytokine therapeutics</li>
                  <li>Quantification of NAb titers in serum, plasma, and other biological matrices</li>
                  <li>Cell-based reporter gene assays for sensitive and specific NAb detection</li>
                  <li>Validation of NAb assays to support regulatory submissions and clinical trial requirements</li>
                  <li>Determination of antibody specificity and characterization of neutralizing activity</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed font-light">
                Our NAb assay services utilize validated cell-based systems that provide biologically relevant endpoints for measuring neutralizing activity. PBL's extensive experience in immunogenicity assessment ensures accurate, reproducible results that support your biotherapeutic development programs from early research through clinical stages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-cyan-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Specialized Development</span>
          <h2 className="text-5xl font-bold mb-6 tracking-tight text-[#002776]">Need a custom solution?</h2>
          <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
            Fit-for-purpose assay development, customization and execution.
          </p>
          <Link
            href="/speak-to-a-scientist"
            className="inline-flex items-center px-14 py-6 bg-[#002776] text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-[#002776]/30"
          >
            Talk to a Scientist
          </Link>
        </div>
      </section>
    </main>
  );
}


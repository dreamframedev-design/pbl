import Link from 'next/link';
import FloatingCTA from '@/components/FloatingCTA';

export default function BiomarkerSampleAnalysisPage() {
  return (
    <main className="min-h-screen">
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative w-full min-h-[350px] lg:min-h-[450px] flex items-center justify-center bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight mb-8">
              Biomarker Sample Analysis
            </h1>
            
            {/* Primary CTA */}
            <Link
              href="/speak-to-a-scientist"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary-teal text-white font-medium rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-out"
            >
              Talk to a Scientist
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Content - Verbatim from Old Site */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
              Sample Testing & Screening
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
              PBL can expedite your R&D work as our technologies and services
              can be tailored to meet your specific requirements under
              fit-for-purpose guidelines. For many of your sample testing and
              screening needs, PBL can help you measure basal and elevated
              levels of cytokine or biomarker in samples from healthy and
              disease states. With state-of-the-art technologies quantifying
              into femtogram/milliliter level of a biomarker to cost-effective
              multiplex profiling of inflammatory cytokines, PBL's immunoassay
              testing service offers a multitude of options to fit your project
              needs.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-light">
              We understand the value of your experimental samples and execute
              assays as you would-consuming a minimum of sample while generating
              robust results. We can take on work you don't have the capacity to
              handle. Let us help you develop, customize, or just execute assays
              on your sample in a timely, professional manner.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Service Category Grid */}
      <section className="section-padding bg-background-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-navy mb-12 lg:mb-16 text-center">
            Ultra-Sensitive & Multiplex Assay Platforms
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* SIMOA Assay Services */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
                SIMOA Assay Services
              </h3>
              <p className="text-gray-700 leading-relaxed font-light mb-6 flex-grow">
                Understanding the role of protein biomarkers in various disease
                states is essential, as are the most robust tools for examining
                your therapeutic candidates modulate these biomarkers. For your
                sample testing needs, PBL can help you measure your analyte(s)
                of interest that are in low abundance or in difficult matrices.
                Our scientists communicate with you building a transparent,
                collaborative environment and eliminating costly project
                missteps.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm text-gray-600 font-light">
                  <strong>Key Features:</strong>
                </p>
                <ul className="text-sm text-gray-700 font-light space-y-1 list-disc list-inside">
                  <li>Ultrasensitive fg/ml LLOQ for low abundance analyte quantitation</li>
                  <li>Robust immunoassays for Neurobiological Markers such as Neurofilament Light Chain (NF-L), Amyloid peptides (Aβ), and Tau protein</li>
                  <li>High precision digital ELISA provides accurate and reproducible data</li>
                  <li>Single well digital ELISA with femtogram per milliliter (fg/ml) sensitivity</li>
                  <li>Compatible with various sample matrices such as CSF, serum, and plasma</li>
                  <li>Provides a high degree of precision, accuracy, and reproducibility with &lt; 10% inter-assay CV and intra-assay CV</li>
                </ul>
              </div>
              <Link
                href="/services/biomarker-sample-analysis/simoa"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary-teal text-white font-medium rounded-lg hover:bg-primary-navy transition-colors duration-300 w-fit"
              >
                Find Out More
              </Link>
            </div>

            {/* SMC Assay Services */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
                SMC Assay Services
              </h3>
              <p className="text-gray-700 leading-relaxed font-light mb-6 flex-grow">
                Employing MilliporeSigma's{' '}
                <strong>Single Molecule Counting</strong> (SMC) technology with
                robust microparticle-based SMCxPRO® & Erenna® immunoassays,
                PBL's cytokine detection services can provide scientists with
                sub-pg/ml level measurements of low-abundance analytes in
                healthy or disease sera and plasma.
              </p>
              <p className="text-gray-700 leading-relaxed font-light mb-6 flex-grow">
                MilliporeSigma's SMC (Single Molecule Counting) technology in
                conjunction with robust microparticle (MP) based sandwich
                immunoassays enables accurate, high-precision baseline
                quantification of low-abundance analytes at or below
                sub-picogram concentrations. Accurately measuring low-abundance
                analytes present in complex matrices is essential for the
                profiling and characterization of cytokines and other biomarker
                analytes.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm text-gray-600 font-light">
                  <strong>Key Features:</strong>
                </p>
                <ul className="text-sm text-gray-700 font-light space-y-1 list-disc list-inside">
                  <li>Sub-pg/ml sensitivity of low abundance biomarkers in normal or disease sera/plasma</li>
                  <li>Minimal sample dilution with 4-Log+ dynamic range</li>
                  <li>40+ cytokine assays covering several disease areas</li>
                  <li>High precision and reproducible data</li>
                </ul>
              </div>
              <Link
                href="/services/biomarker-sample-analysis/smc"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary-teal text-white font-medium rounded-lg hover:bg-primary-navy transition-colors duration-300 w-fit"
              >
                Find Out More
              </Link>
            </div>

            {/* Multiplex ELISA Assay Services */}
            <div className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-accent-cyan/30 hover:ring-2 hover:ring-accent-cyan/20 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
                Multiplex ELISA Assay Services
              </h3>
              <p className="text-gray-700 leading-relaxed font-light mb-6 flex-grow">
                PBL's cost-effective multiplex ELISA service enables
                simultaneous measurement of multiple analytes in individual
                sample. These panels allow an understanding of the immune and
                other markers in study samples stemming particularly from
                oncology and autoimmunity programs.
              </p>
              <p className="text-gray-700 leading-relaxed font-light mb-6 flex-grow">
                These ELISAs provide chemiluminescent results on each analyte
                and allow for a global understanding of ongoing immune responses
                in diseases ranging from cancer to autoimmunity. Evaluation of
                one given inflammatory molecule in the context of several
                others, repeated measurements of the same cytokine panels in the
                same subjects under different treatment assay conditions, and
                reliable detection of different proteins across a broad range of
                concentrations are just some of the benefits provided by this
                multiplex service.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm text-gray-600 font-light">
                  <strong>Key Features:</strong>
                </p>
                <ul className="text-sm text-gray-700 font-light space-y-1 list-disc list-inside">
                  <li>Cost-effective multiplex protein biomarker screening using chemiluminescent detection</li>
                  <li>Available panels allow rapid evaluation of cytokine, inflammatory, enteric, and angiogenesis markers</li>
                  <li>Up to 20 analytes can be measured in a single sample</li>
                  <li>96-well plate ELISA format allows simultaneous analysis of up to 80 samples in a single run</li>
                  <li>Reliable assay with &lt;20% CV in serum, plasma, cell culture media, and other matrices</li>
                  <li>Small volumes of only 50 ul required to quantify all analytes in a single assay</li>
                </ul>
              </div>
              <Link
                href="/services/biomarker-sample-analysis/multiplex-elisa"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary-teal text-white font-medium rounded-lg hover:bg-primary-navy transition-colors duration-300 w-fit"
              >
                Find Out More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MSD-ECL Assays Section (Additional Content from Old Site) */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">
              MSD-ECL Assays
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-primary-navy mb-4">
              Meso Scale Discovery® Electrochemiluminescence (MESO QuickPlex SQ
              120MM)
            </h3>

            <ul className="text-gray-700 leading-relaxed font-light mb-6 space-y-2 list-disc list-inside">
              <li>
                Measure high and low abundance analytes (normal and elevated
                levels) within the same sample with <strong>5-Log+ dynamic range</strong>
              </li>
              <li>
                180+ <strong>validated</strong> fit-for-purpose singleplex and
                preconfigured multiplex panel ELISAs (V-PLEX) available with
                excellent performance specifications and lot-to-lot consistency
              </li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
              Offering high-precision protein quantification services for a
              broad range of sample matrices for Human, Non-Human Primate (NHP),
              Mouse, Rat, and Canine samples. MSD's validated multiplex panel
              assay kits (V-PLEX) enable simultaneous comparison of the
              expression of pertinent cytokines, chemokines, and other
              biomarkers in samples from diseased and normal patients at
              different intervals.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
              Multiplex immunoassays on the MSD platform maintain the
              sensitivity and performance offered by singleplex ELISAs while
              providing additional benefits such as cost-savings and targeting
              of several related analytes in a single sample. The ability to
              quantify compatible analytes while requiring no more than 25 μl of
              neat sample ensures efficient use of precious sample.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold text-primary-navy mb-4">
              Broad Range of Applications
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
              The unique detection technology provided by the MSD platform
              utilizes SULFO-TAG™ labels which emit light upon electrochemical
              stimulation. This system provides the basis for achieving
              measurement of a several log range of protein expression levels.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-light">
              Cytokines & Chemokines, Cardiac Biomarkers, Immunogenicity,
              Immunology, Inflammation, Intracellular signaling, Metabolic,
              Neurodegeneration, Oncology and Cancer, Toxicity, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Single Analyte & Multiplex Assay Services Section */}
      <section className="section-padding bg-background-offwhite">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">
              Single Analyte & Multiplex Assay Services
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold text-primary-navy mb-4">
              Single Analyte ELISA Service
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed font-light mb-4 italic">
              Sensitive detection and robust results. Dedicated, flexible
              workforce. Reliable, high-quality outcomes.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
              Take advantage of PBL ELISAs or other commercial ELISAs for a
              wide range of additional analytes using PBL's services.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
              <strong>PBL ELISAs:</strong>
            </p>

            <ul className="text-gray-700 leading-relaxed font-light mb-6 space-y-2 list-disc list-inside">
              <li>
                High sensitivity ELISAs available for a comprehensive range of
                species and analytes
              </li>
              <li>Matrix tolerance for autoimmune disease sera*</li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
              PBL routinely runs ELISA studies for our clients for the
              detection and differentiation of interferons and cytokines in
              various sample matrices. We offer a range of heterogeneous
              immunoassay services for:
            </p>

            <ul className="text-gray-700 leading-relaxed font-light mb-8 space-y-2 list-disc list-inside">
              <li>Human IFN-Alpha, Beta, Gamma, Lambda 1/2/3, Omega, Gamma Receptor 1</li>
              <li>Mouse IFN-Alpha, Beta, Lambda 2/3</li>
              <li>Cynomolgus/Rhesus IFN-Alpha, Cynomolgus IFN-Beta</li>
              <li>Porcine IFN-Alpha</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-semibold text-primary-navy mb-4">
              Multiplex Screening Service
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed font-light mb-4 italic">
              High sensitivity & specificity using low sample volumes.
              Cost-effective quantitation of multiple analytes.
            </p>

            <ul className="text-gray-700 leading-relaxed font-light mb-6 space-y-2 list-disc list-inside">
              <li>
                Variety of chemokine and cytokine panels already available for
                human and mouse targets
              </li>
              <li>
                Cost-effective multiplex protein biomarker screening using
                chemiluminescent detection
              </li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
              These ELISAs provide chemiluminescent results on each analyte and
              allow for a global understanding of ongoing immune responses in
              diseases ranging from cancer to autoimmunity. Evaluation of one
              given inflammatory molecule in the context of several others,
              repeated measurements of the same cytokine panels in the same
              subjects under different treatment assay conditions, and reliable
              detection of different proteins across a broad range of
              concentrations are just some of the benefits provided by this
              multiplex service.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-light">
              Ability to run immunoassays produced by other suppliers, provided
              we are confident in the data they generate (
              <a
                href="mailto:assayservices@pblassaysci.com"
                className="text-secondary-teal hover:text-primary-navy transition-colors"
              >
                contact PBL
              </a>{' '}
              for your specific needs)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

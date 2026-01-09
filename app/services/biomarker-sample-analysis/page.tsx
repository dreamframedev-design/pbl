import Image from 'next/image';
import Link from 'next/link';
import HumanIL3Graph from '@/components/HumanIL3Graph';
import JurkatStimulationGraph from '@/components/JurkatStimulationGraph';
import PlasmaIL1BetaGraph from '@/components/PlasmaIL1BetaGraph';

export default function BiomarkerSampleAnalysisPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      {/* 1. HERO SECTION */}
      <header className="relative pt-32 pb-24 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/22.webp"
            alt="Biomarker Sample Analysis"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-white/40 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
            <Link href="/services" className="hover:text-cyan-700">Services</Link>
            <span className="text-gray-300">/</span>
            <span>Biomarker Sample Analysis</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            Biomarker <br/> <span className="font-light text-gray-400 font-serif italic">Sample Analysis</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            Sensitive biomarker detection on a variety of singleplex and multiplex assay platforms (MSD, Simoa®, Erenna®, SMCxPRO®, ELISA), from one sample to thousands.
          </p>
        </div>
      </header>

      {/* 2. GOLD STANDARD NAVIGATION CARDS */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* SIMOA CARD */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-500 mb-8 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all font-black text-lg">
                  SI
                </div>
                <h3 className="text-3xl font-bold mb-4 text-[#002776]">Simoa® Assay Services</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                  Ultra-sensitive single molecule detection for biomarkers at sub-picogram levels.
                </p>
                <div className="space-y-3 mb-10">
                  <Link
                    href="/services/biomarker-sample-analysis/simoa"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Explore Simoa® Platform
                  </Link>
                </div>
                <Link
                  href="/services/biomarker-sample-analysis/simoa"
                  className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm"
                >
                  View Technology
                </Link>
              </div>
            </div>

            {/* SMC CARD */}
            <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all font-black text-lg">
                  SM
                </div>
                <h3 className="text-3xl font-bold mb-4 text-[#002776]">SMC™ Assay Services</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                  Single Molecule Counting technology for high-precision quantification of low-abundance proteins.
                </p>
                <div className="space-y-3 mb-10">
                  <Link
                    href="/services/biomarker-sample-analysis/smc"
                    className="block py-3 text-xs font-bold text-slate-600 transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:text-[#058A9F] hover:bg-[rgba(0,240,243,0.04)]"
                  >
                    Erenna® & SMCxPRO™ Systems
                  </Link>
                </div>
                <Link
                  href="/services/biomarker-sample-analysis/smc"
                  className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm"
                >
                  Explore SMC™
                </Link>
              </div>
            </div>

            {/* MULTIPLEX CARD (Featured) */}
            <div className="group p-[2.5px] rounded-[3rem] bg-gradient-to-br from-cyan-400 to-[#002776] transition-all duration-500 hover:scale-[1.02] flex flex-col shadow-xl">
              <div className="bg-white rounded-[2.8rem] p-12 h-full flex flex-col">
                <div className="mb-6 flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#002776] group-hover:text-white transition-all font-black text-lg">
                    MX
                  </div>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full text-[9px] font-black uppercase tracking-widest h-fit">
                    Multi-Analyte
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-[#002776]">Multiplex ELISA Services</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                  Simultaneous detection of multiple proteins across broad concentration ranges.
                </p>
                <div className="space-y-3 mb-10">
                  <Link
                    href="/services/biomarker-sample-analysis/multiplex-elisa"
                    className="block py-3 text-xs font-bold text-[#002776] transition-all border-l-2 border-transparent hover:border-[#00F0F3] hover:pl-3 hover:bg-[rgba(0,39,118,0.04)]"
                  >
                    Custom Multiplex Panels
                  </Link>
                </div>
                <Link
                  href="/services/biomarker-sample-analysis/multiplex-elisa"
                  className="w-full py-4 bg-[#002776] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-sm hover:bg-cyan-600"
                >
                  View Platforms
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2.5. INTRODUCTION PARAGRAPH */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
              PBL can expedite your R&D work as our technologies and services can be tailored to meet your specific requirements under fit-for-purpose guidelines. For many of your sample testing and screening needs, PBL can help you measure basal and elevated levels of cytokine or biomarker in samples from healthy and disease states. With state-of-the-art technologies quantifying into femtogram/milliliter level of a biomarker to cost-effective multiplex profiling of inflammatory cytokines, PBL's immunoassay testing service offers a multitude of options to fit your project needs.
            </p>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              We understand the value of your experimental samples and execute assays as you would—consuming a minimum of sample while generating robust results. We can take on work you don't have the capacity to handle. Let us help you develop, customize, or just execute assays on your sample in a timely, professional manner.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SECTION A: MSD-ECL ASSAYS */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-4 tracking-tight text-[#002776]">MSD-ECL Assays</h2>
              <h3 className="text-xl font-semibold mb-8 text-purple-700">Meso Scale Discovery® Electrochemiluminescence (MESO QuickPlex SQ 120MM)</h3>
              <ul className="space-y-4 mb-8 text-lg text-slate-600 font-light leading-relaxed list-disc list-inside">
                <li>
                  Measure high and low abundance analytes (normal and elevated levels) within the same sample with <strong>5-Log+ dynamic range</strong>
                </li>
                <li>
                  180+ <strong>validated</strong> fit-for-purpose singleplex and preconfigured multiplex panel ELISAs (V-PLEX) available with excellent performance specifications and lot-to-lot consistency
                </li>
              </ul>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Offering high-precision protein quantification services for a broad range of sample matrices for Human, Non-Human Primate (NHP), Mouse, Rat, and Canine samples. MSD's validated multiplex panel assay kits (V-PLEX) enable simultaneous comparison of the expression of pertinent cytokines, chemokines, and other biomarkers in samples from diseased and normal patients at different intervals.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-12">
                Multiplex immunoassays on the MSD platform maintain the sensitivity and performance offered by singleplex ELISAs while providing additional benefits such as cost-savings and targeting of several related analytes in a single sample. The ability to quantify compatible analytes while requiring no more than 25 μl of neat sample ensures efficient use of precious sample.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 tracking-tight text-[#002776]">Broad Range of Applications</h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-4">
                The unique detection technology provided by the MSD platform utilizes SULFO-TAG™ labels which emit light upon electrochemical stimulation. This system provides the basis for achieving measurement of a several log range of protein expression levels.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Cytokines & Chemokines, Cardiac Biomarkers, Immunogenicity, Immunology, Inflammation, Intracellular signaling, Metabolic, Neurodegeneration, Oncology and Cancer, Toxicity, ...and more
              </p>
            </div>
            
            {/* GRAPHS: Human IL-3 Standard Curve (MSD) and Jurkat Stimulation */}
            <div className="grid grid-cols-1 gap-12">
              <div className="min-h-[500px]">
                <HumanIL3Graph />
              </div>
              <div className="min-h-[500px]">
                <JurkatStimulationGraph />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION B: ULTRA-SENSITIVE CYTOKINE TESTING (SMC) */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* GRAPH: Plasma IL-1 beta Analysis */}
            <div className="min-h-[500px] order-2 lg:order-1">
              <PlasmaIL1BetaGraph />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-4 tracking-tight text-[#002776]">Ultra-Sensitive Cytokine Testing</h2>
              <h3 className="text-xl font-semibold mb-8 text-purple-700">MilliporeSigma Single Molecule Counting (SMCxPRO®, Erenna®)</h3>
              <ul className="space-y-4 mb-8 text-lg text-slate-600 font-light leading-relaxed list-disc list-inside">
                <li>
                  Sub-pg/ml sensitivity of low abundance biomarkers in normal or disease sera/plasma
                </li>
                <li>
                  Minimal sample dilution with 4-Log+ dynamic range
                </li>
                <li>
                  40+ cytokine assays covering several disease areas including IFN-γ, IL-1a, IL-1b, IL-4, IL-6, IL-8, IL-10, IL-13, IL-15, IL-17A, IL-17F, IL-17 heterodimer, IL-23, GLP-1, and TNF-α
                </li>
              </ul>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                MilliporeSigma's SMC (Single Molecule Counting) technology in conjunction with robust microparticle (MP) based sandwich immunoassays enables accurate, high-precision baseline quantification of low-abundance analytes at or below sub-picogram concentrations. Accurately measuring low-abundance analytes present in complex matrices is essential for the profiling and characterization of cytokines and other biomarker analytes.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                An increased understanding of the role and regulation of cytokines in disease states results from greater profiling and characterization of their activities in biological responses. This technology can be instrumental in furthering our collective understanding of low-abundance cytokines in complex matrices.
              </p>
              <p className="text-sm text-slate-500 font-light leading-relaxed italic">
                Powered by SMCxPRO® & Erenna® Immunoassay Systems, MilliporeSigma Inc., Burlington, MA, USA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION C: ULTRA-SENSITIVE BIOMARKER TESTING (SIMOA) */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4 tracking-tight text-[#002776]">Ultra-Sensitive Biomarker Testing</h2>
              <h3 className="text-xl font-semibold mb-8 text-purple-700">Quanterix Simoa (Quanterix HD-X, Quanterix SP-X)</h3>
              <ul className="space-y-4 mb-8 text-lg text-slate-600 font-light leading-relaxed list-disc list-inside">
                <li>
                  Femtogram per milliliter (fg/ml) level sensitivity for measuring low-abundance biomarkers in serum, plasma, and other complex matrices (e.g. bronchial lavage, urine, sputum)
                </li>
                <li>
                  50+ analyte panels available including IL-17A, TNF-alpha, IL-23, IP-10, TRAIL, IL-6, IL-10, and IL-12p70
                </li>
              </ul>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Taking advantage of the benefits of Simoa (Single Molecule Array) technology, services run on this platform yield robust and reproducible data thus enabling a better understanding of the contributions of difficult-to-measure analytes. This technology allows for "digital" measurement of each captured bead for the presence of the targeted analyte in a sandwich immunoassay format. The enzymatic amplification of analyte binding events on single beads in single wells yields low background signals and can increase assay sensitivities up to several orders of magnitude over conventional assays. Assays run on this platform frequently exhibit sensitivities in the low to mid fg/ml range.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                The instrument's capacity for digital measurement at low concentrations of target analyte and analog measurement at higher analyte concentrations ensures accuracy and precision across a wide dynamic range (&gt;4 logs) minimizing sample volume requirements and the need for multiple dilutions. Simoa facilitates quantification of biomarkers at unprecedented levels.
              </p>
              <p className="text-sm text-slate-500 font-light leading-relaxed italic mb-4">
                Powered by SimoaTM (Single Molecule Array) Technology, Quanterix, Lexington, MA, USA.
              </p>
              <p className="text-sm text-slate-500 font-light leading-relaxed italic">
                NF-light® is a registered trademark of Uman Diagnostics, Umeå Sweden.
              </p>
            </div>
            
            {/* GRAPH PLACEHOLDER 3 */}
            <div className="aspect-video bg-slate-50 rounded-[3rem] border border-slate-100 flex items-center justify-center italic text-slate-400 shadow-inner">
              [Graph Stage 3: Patient B showing measurable IFN-γ (n=24) - Output Data vs Input Data]
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION D: SINGLE ANALYTE & MULTIPLEX ASSAY SERVICES */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* GRAPH PLACEHOLDER 4 */}
            <div className="aspect-video bg-white rounded-[3rem] border border-slate-100 flex items-center justify-center italic text-slate-400 shadow-xl order-2 lg:order-1">
              [Graph Stage 4: Plasma IL-6 (pg/mL) - Comparison of Heparin, Citrate, and EDTA samples]
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-4 tracking-tight text-[#002776]">Single Analyte & Multiplex Assay Services</h2>
              <h3 className="text-xl font-semibold mb-6 text-purple-700">Single Analyte ELISA Service</h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Sensitive detection and robust results. Dedicated, flexible workforce. Reliable, high-quality outcomes.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Take advantage of PBL ELISAs or other commercial ELISAs for a wide range of additional analytes using PBL's services.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-4 font-semibold">
                PBL ELISAs:
              </p>
              <ul className="space-y-4 mb-8 text-lg text-slate-600 font-light leading-relaxed list-disc list-inside ml-4">
                <li>
                  High sensitivity ELISAs available for a comprehensive range of species and analytes
                </li>
                <li>
                  Matrix tolerance for autoimmune disease sera*
                </li>
              </ul>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-4">
                PBL routinely runs ELISA studies for our clients for the detection and differentiation of interferons and cytokines in various sample matrices. We offer a range of heterogeneous immunoassay services for:
              </p>
              <ul className="space-y-2 mb-12 text-lg text-slate-600 font-light leading-relaxed list-disc list-inside ml-4">
                <li>Human IFN-Alpha, Beta, Gamma, Lambda 1/2/3, Omega, Gamma Receptor 1</li>
                <li>Mouse IFN-Alpha, Beta, Lambda 2/3</li>
                <li>Cynomolgus/Rhesus IFN-Alpha, Cynomolgus IFN-Beta</li>
                <li>Porcine IFN-Alpha</li>
              </ul>
              
              <h3 className="text-2xl font-bold mb-6 tracking-tight text-[#002776]">Multiplex Screening Service</h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                High sensitivity & specificity using low sample volumes. Cost-effective quantitation of multiple analytes.
              </p>
              <ul className="space-y-4 mb-8 text-lg text-slate-600 font-light leading-relaxed list-disc list-inside ml-4">
                <li>
                  Variety of chemokine and cytokine panels already available for human and mouse targets
                </li>
                <li>
                  Cost-effective multiplex protein biomarker screening using chemiluminescent detection
                </li>
              </ul>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                These ELISAs provide chemiluminescent results on each analyte and allow for a global understanding of ongoing immune responses in diseases ranging from cancer to autoimmunity. Evaluation of one given inflammatory molecule in the context of several others, repeated measurements of the same cytokine panels in the same subjects under different treatment assay conditions, and reliable detection of different proteins across a broad range of concentrations are just some of the benefits provided by this multiplex service.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Ability to run immunoassays produced by other suppliers, provided we are confident in the data they generate (contact PBL for your specific needs)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MASTER CTA */}
      <footer className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-cyan-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Consultative Science</span>
          <h2 className="text-5xl font-bold mb-6 tracking-tight text-[#002776]">Ready to analyze?</h2>
          <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
            Our scientists provide fit-for-purpose biomarker analysis tailored to your specific research parameters.
          </p>
          <Link
            href="/speak-to-a-scientist"
            className="inline-flex items-center px-14 py-6 bg-[#002776] text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-[#002776]/30"
          >
            Initiate Study Evaluation
          </Link>
        </div>
      </footer>
    </main>
  );
}
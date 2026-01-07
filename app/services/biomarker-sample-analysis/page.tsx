import Link from 'next/link';

export default function BiomarkerSampleAnalysisPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
            <span>PBL</span> <span className="text-gray-300">/</span> <span>Services</span> <span className="text-gray-300">/</span> <span>Biomarker Sample Analysis</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="text-[#002776]">Biomarker Sample</span> <br/> <span className="font-light text-gray-400 font-serif italic">Analysis</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            Sensitive biomarker detection on a variety of singleplex and multiplex assay platforms (MSD, Simoa®, Erenna®, SMCxPRO®, ELISA), from one sample to thousands.
          </p>
        </div>
      </header>

      {/* Introduction Content */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-4xl font-bold mb-8 tracking-tight text-[#002776]">Sample Testing & Screening</h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed mb-6">
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
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              We understand the value of your experimental samples and execute
              assays as you would-consuming a minimum of sample while generating
              robust results. We can take on work you don't have the capacity to
              handle. Let us help you develop, customize, or just execute assays
              on your sample in a timely, professional manner.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Validated Matrices</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-center font-bold text-sm">Serum</div>
                <div className="bg-white p-4 rounded-2xl shadow-sm text-center font-bold text-sm">Plasma</div>
                <div className="bg-white p-4 rounded-2xl shadow-sm text-center font-bold text-sm">CSF</div>
                <div className="bg-white p-4 rounded-2xl shadow-sm text-center font-bold text-sm">Tears</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Service Category Grid */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-cyan-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Technology Stack</span>
            <h2 className="text-5xl font-bold tracking-tight text-[#002776]">Ultra-Sensitive & Multiplex Assay Platforms</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* SIMOA Assay Services */}
            <div className="group glass-card p-1 rounded-[2.5rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 platform-badge rounded-2xl flex items-center justify-center text-cyan-500 mb-8 font-black text-xs group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all" style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  border: '1px solid rgba(0, 240, 243, 0.2)'
                }}>SIMOA</div>
                <h3 className="text-2xl font-bold mb-4 text-[#002776]">SIMOA Assay Services</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
                  Understanding the role of protein biomarkers in various disease
                  states is essential, as are the most robust tools for examining
                  your therapeutic candidates modulate these biomarkers. For your
                  sample testing needs, PBL can help you measure your analyte(s)
                  of interest that are in low abundance or in difficult matrices.
                  Our scientists communicate with you building a transparent,
                  collaborative environment and eliminating costly project
                  missteps.
                </p>
                <div className="space-y-3 mb-10 text-[11px] font-semibold text-slate-400 italic">
                  <p>✓ Ultrasensitive fg/ml LLOQ for low abundance analyte quantitation</p>
                  <p>✓ Robust immunoassays for Neurobiological Markers such as Neurofilament Light Chain (NF-L), Amyloid peptides (Aβ), and Tau protein</p>
                  <p>✓ High precision digital ELISA provides accurate and reproducible data</p>
                  <p>✓ Single well digital ELISA with femtogram per milliliter (fg/ml) sensitivity</p>
                  <p>✓ Compatible with various sample matrices such as CSF, serum, and plasma</p>
                  <p>✓ Provides a high degree of precision, accuracy, and reproducibility with &lt; 10% inter-assay CV and intra-assay CV</p>
                </div>
                <Link
                  href="/services/biomarker-sample-analysis/simoa"
                  className="w-full py-4 bg-slate-50 group-hover:bg-[#002776] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all"
                >
                  Explore SIMOA
                </Link>
              </div>
            </div>

            {/* SMC Assay Services */}
            <div className="group glass-card p-1 rounded-[2.5rem] transition-all duration-500 glow-border">
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 platform-badge rounded-2xl flex items-center justify-center text-cyan-500 mb-8 font-black text-xs group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all" style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  border: '1px solid rgba(0, 240, 243, 0.2)'
                }}>SMC</div>
                <h3 className="text-2xl font-bold mb-4 text-[#002776]">SMC Assay Services</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
                  Employing MilliporeSigma's{' '}
                  <strong>Single Molecule Counting</strong> (SMC) technology with
                  robust microparticle-based SMCxPRO® & Erenna® immunoassays,
                  PBL's cytokine detection services can provide scientists with
                  sub-pg/ml level measurements of low-abundance analytes in
                  healthy or disease sera and plasma.
                </p>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
                  MilliporeSigma's SMC (Single Molecule Counting) technology in
                  conjunction with robust microparticle (MP) based sandwich
                  immunoassays enables accurate, high-precision baseline
                  quantification of low-abundance analytes at or below
                  sub-picogram concentrations. Accurately measuring low-abundance
                  analytes present in complex matrices is essential for the
                  profiling and characterization of cytokines and other biomarker
                  analytes.
                </p>
                <div className="space-y-3 mb-10 text-[11px] font-semibold text-slate-400 italic">
                  <p>✓ Sub-pg/ml sensitivity of low abundance biomarkers in normal or disease sera/plasma</p>
                  <p>✓ Minimal sample dilution with 4-Log+ dynamic range</p>
                  <p>✓ 40+ cytokine assays covering several disease areas</p>
                  <p>✓ High precision and reproducible data</p>
                </div>
                <Link
                  href="/services/biomarker-sample-analysis/smc"
                  className="w-full py-4 bg-slate-50 group-hover:bg-[#00F0F3] group-hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all"
                >
                  Explore SMC
                </Link>
              </div>
            </div>

            {/* Multiplex ELISA Assay Services */}
            <div className="group glass-card p-1 rounded-[2.5rem] transition-all duration-500 glow-border border-cyan-400/30">
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <div className="w-14 h-14 platform-badge rounded-2xl flex items-center justify-center text-cyan-500 mb-8 font-black text-xs group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all" style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  border: '1px solid rgba(0, 240, 243, 0.2)'
                }}>ELISA</div>
                <h3 className="text-2xl font-bold mb-4 text-[#002776]">Multiplex ELISA Assay Services</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
                  PBL's cost-effective multiplex ELISA service enables
                  simultaneous measurement of multiple analytes in individual
                  sample. These panels allow an understanding of the immune and
                  other markers in study samples stemming particularly from
                  oncology and autoimmunity programs.
                </p>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 flex-grow">
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
                <div className="space-y-3 mb-10 text-[11px] font-semibold text-slate-400 italic">
                  <p>✓ Cost-effective multiplex protein biomarker screening using chemiluminescent detection</p>
                  <p>✓ Available panels allow rapid evaluation of cytokine, inflammatory, enteric, and angiogenesis markers</p>
                  <p>✓ Up to 20 analytes can be measured in a single sample</p>
                  <p>✓ 96-well plate ELISA format allows simultaneous analysis of up to 80 samples in a single run</p>
                  <p>✓ Reliable assay with &lt;20% CV in serum, plasma, cell culture media, and other matrices</p>
                  <p>✓ Small volumes of only 50 ul required to quantify all analytes in a single assay</p>
                </div>
                <Link
                  href="/services/biomarker-sample-analysis/multiplex-elisa"
                  className="w-full py-4 bg-[#002776] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center block transition-all shadow-lg shadow-[#002776]/20"
                >
                  Explore Multiplex
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MSD-ECL Assays Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-8">
              <span className="px-4 py-1.5 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] inline-block">Electrochemi-luminescence</span>
              <h2 className="text-4xl font-bold tracking-tight text-[#002776]">Meso Scale Discovery® (MSD-ECL)</h2>
              <h3 className="text-xl font-semibold text-[#002776]">
                Meso Scale Discovery® Electrochemiluminescence (MESO QuickPlex SQ 120MM)
              </h3>
              <ul className="text-slate-500 font-light leading-relaxed space-y-2 list-disc list-inside">
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
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                Offering high-precision protein quantification services for a
                broad range of sample matrices for Human, Non-Human Primate (NHP),
                Mouse, Rat, and Canine samples. MSD's validated multiplex panel
                assay kits (V-PLEX) enable simultaneous comparison of the
                expression of pertinent cytokines, chemokines, and other
                biomarkers in samples from diseased and normal patients at
                different intervals.
              </p>
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                Multiplex immunoassays on the MSD platform maintain the
                sensitivity and performance offered by singleplex ELISAs while
                providing additional benefits such as cost-savings and targeting
                of several related analytes in a single sample. The ability to
                quantify compatible analytes while requiring no more than 25 μl of
                neat sample ensures efficient use of precious sample.
              </p>
              <h3 className="text-xl font-semibold text-[#002776]">
                Broad Range of Applications
              </h3>
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                The unique detection technology provided by the MSD platform
                utilizes SULFO-TAG™ labels which emit light upon electrochemical
                stimulation. This system provides the basis for achieving
                measurement of a several log range of protein expression levels.
              </p>
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                Cytokines & Chemokines, Cardiac Biomarkers, Immunogenicity,
                Immunology, Inflammation, Intracellular signaling, Metabolic,
                Neurodegeneration, Oncology and Cancer, Toxicity, and more.
              </p>
              <div className="p-8 glass-card rounded-3xl border border-slate-100 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0">✓</div>
                <p className="text-sm font-medium text-slate-600">Confidently measure IFN and inflammatory biomarkers in complex donor samples.</p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="aspect-video bg-slate-900 rounded-[3rem] shadow-2xl relative overflow-hidden flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 to-[#002776]/40 opacity-50"></div>
                <svg className="w-24 h-24 text-cyan-400/50 group-hover:scale-110 transition-all duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-[9px] font-black uppercase tracking-[0.4em] mb-1">MSD QuickPlex</p>
                  <p className="text-xl font-bold tracking-tight">Validated Performance Data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Single Analyte & Multiplex Assay Services Section */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-[#002776]">Single Analyte ELISA Services</h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              PBL's bioanalytical lab offers expert sample testing for interferon and cytokine levels utilizing traditional high-sensitivity ELISA kits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#002776] mb-4">
                Single Analyte ELISA Service
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light italic">
                Sensitive detection and robust results. Dedicated, flexible
                workforce. Reliable, high-quality outcomes.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Take advantage of PBL ELISAs or other commercial ELISAs for a
                wide range of additional analytes using PBL's services.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                <strong>PBL ELISAs:</strong>
              </p>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0 text-xs font-bold">✓</div>
                <p className="text-sm text-slate-500 leading-relaxed font-light">High sensitivity ELISAs available for a comprehensive range of species and analytes</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0 text-xs font-bold">✓</div>
                <p className="text-sm text-slate-500 leading-relaxed font-light">Matrix tolerance for autoimmune disease sera*</p>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                PBL routinely runs ELISA studies for our clients for the
                detection and differentiation of interferons and cytokines in
                various sample matrices. We offer a range of heterogeneous
                immunoassay services for:
              </p>
              <ul className="text-sm text-slate-500 leading-relaxed font-light space-y-2 list-disc list-inside">
                <li>Human IFN-Alpha, Beta, Gamma, Lambda 1/2/3, Omega, Gamma Receptor 1</li>
                <li>Mouse IFN-Alpha, Beta, Lambda 2/3</li>
                <li>Cynomolgus/Rhesus IFN-Alpha, Cynomolgus IFN-Beta</li>
                <li>Porcine IFN-Alpha</li>
              </ul>
              <h3 className="text-xl font-semibold text-[#002776] mb-4 mt-8">
                Multiplex Screening Service
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light italic">
                High sensitivity & specificity using low sample volumes.
                Cost-effective quantitation of multiple analytes.
              </p>
              <ul className="text-sm text-slate-500 leading-relaxed font-light space-y-2 list-disc list-inside">
                <li>
                  Variety of chemokine and cytokine panels already available for
                  human and mouse targets
                </li>
                <li>
                  Cost-effective multiplex protein biomarker screening using
                  chemiluminescent detection
                </li>
              </ul>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
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
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Ability to run immunoassays produced by other suppliers, provided
                we are confident in the data they generate (
                <a
                  href="mailto:assayservices@pblassaysci.com"
                  className="text-cyan-600 hover:text-[#002776] transition-colors"
                >
                  contact PBL
                </a>{' '}
                for your specific needs)
              </p>
            </div>
            <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Project Inquiry</p>
              <h4 className="text-2xl font-bold mb-8 text-[#002776]">Ready to analyze?</h4>
              <Link
                href="/speak-to-a-scientist"
                className="w-full py-5 bg-[#002776] text-white rounded-2xl font-bold text-sm shadow-xl shadow-[#002776]/20 hover:scale-[1.02] transition-all"
              >
                Speak to a Scientist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

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
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em] flex-wrap">
            <span>Services</span> <span className="text-gray-300">/</span> <span className="break-words">Cell-Based Services</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="text-[#002776]">Cell-Based:</span> <br/> <span className="text-[#002776]">Bioactivity & Antiviral</span> <br/> <span className="font-light text-gray-400 font-serif italic">Assays</span>
          </h1>
        </div>
      </header>

      {/* Introduction Content */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
            <p>Cell-based assay tools are key to understanding cellular mechanisms in a biologically relevant context. PBL offers a targeted portfolio of cell-based assay services to provide you with the most relevant information and facilitate the advancement of your research.</p>
            <p>Whatever your cell-based study needs, PBL will work with you to determine the most suitable assay program to meet your goals. PBL's services team is a trusted partner of midsize and major biotech and pharma companies worldwide.</p>
          </div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10">
            
            {/* Cytopathic Effect Inhibition Assay Service (CPE) - Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Column - Content Card */}
              <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
                <div className="bg-white rounded-[2.8rem] p-10 h-full flex flex-col">
                  <div className="w-14 h-14 badge-icon rounded-2xl flex items-center justify-center text-cyan-500 mb-8 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all" style={{
                    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                    border: '1px solid rgba(0, 240, 243, 0.2)'
                  }}>
                    <ShieldCheck className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-purple-700 leading-tight">Cytopathic Effect Inhibition Assay (CPE)</h3>
                  <div className="space-y-6 text-[15px] text-slate-500 font-light leading-relaxed flex-grow">
                    <ul className="space-y-3 mb-6 list-disc list-inside">
                      <li>Widely accepted standard bioassay for determining the biological activity of interferons (IFNs).</li>
                      <li>More than <strong>20 years of experience</strong> serving Pharmaceutical, Biotechnology, Contract Research, and Academic scientists.</li>
                      <li>Services available for measurement of <strong>IFN-Alpha</strong>, <strong>IFN-Beta</strong>, <strong>IFN-Omega</strong>, <strong>IFN-Gamma</strong>, and <strong>IFN-Lambda</strong> bioactivity in human samples, in a variety of other species, and in <strong>multiple matrices</strong>.</li>
                    </ul>
                    <p>The standard bioassay used to determine the biological activity of interferon (IFN) encompasses measurement of the protection of cells from the cytopathic effect (CPE) of certain viruses. IFNs are pleiotropic cytokines with antiviral, antiproliferative, and immunomodulatory activities. The biological activities of IFNs can be assessed by bioassay methods that quantify any of these characteristics. However, the standard IFN bioassay has been the protection of cells from CPE of certain viruses, since this was the initial activity which defined these molecules. CPE assay services may be used to measure the antiviral activity of IFN-α, β, ω, γ, and λ in human samples, as well as in a variety of other species, and in multiple matrices.</p>
                    
                    <h4 className="text-lg font-semibold text-cyan-600 italic">Frequently used systems (high level of assay sensitivity and accuracy):</h4>
                    <ul className="space-y-3 list-none text-[#002776] font-medium">
                      <li>- Human A549 / EMCV</li>
                      <li>- Bovine MDBK</li>
                      <li>- Mouse L929 / VSV</li>
                    </ul>
                    
                    <p>CPE assays are inherently complex due to the metabolic state of cells, virus replication, and the ability of IFN to protect cells. Our years of knowledge and expertise in CPE assays will reduce variability and provide you with reproducible quality results.</p>
                    <p>Results are provided either as a graphical representation of dye binding which allows slope and parallel line analysis, or visually determined from microscopic examination of the CPE and determination of the dilution of test samples which protects 50% of the cells.</p>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Graph Placeholder */}
              <div className="glass-card p-1 rounded-[3rem] glow-border self-start">
                <div className="bg-white rounded-[2.8rem] p-10 min-h-[300px] flex items-center justify-center border-2 border-dashed border-slate-300">
                  <p className="text-slate-400 text-center font-medium">CPE Assay Graph/Chart Placeholder</p>
                </div>
              </div>
            </div>

            {/* Proliferation & Anti-Proliferation Assay Services - Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Column - Content Card */}
              <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
                <div className="bg-white rounded-[2.8rem] p-10 h-full flex flex-col">
                  <h3 className="text-3xl font-bold mb-6 text-purple-700 leading-tight">Proliferation & Anti-Proliferation Assay Services</h3>
                  <div className="space-y-6 text-[15px] text-slate-500 font-light leading-relaxed flex-grow">
                    <ul className="space-y-3 mb-6 list-disc list-inside">
                      <li>Evaluate cytokine and other modulator activities with <strong>growth inhibition, growth promotion,</strong> and <strong>cytotoxicity</strong> assays</li>
                      <li>Utilizes cell lines sensitive to IFNs or other growth-modulating cytokines</li>
                      <li>Allows <strong>cell line screening</strong> to address specific client applications and clinical indications</li>
                    </ul>
                    <p>Growth promotion and inhibition assays are often used to measure cytokine and drug activity profiles. Such Proliferation and Anti-Proliferation (AP) assays utilize a variety of cell lines and protein or small molecule stimuli to address specific applications and clinical indications. EC<sub>50</sub> or IC50 results are provided.</p>
                    <p><strong>Figure 1</strong> shows OVCAR-3 grown in the presence of IFN-alpha. Cellular anti-proliferation was quantified using soluble tetrazolium reagent. <strong>Figure 2</strong> shows TF-1 grown in the presence of GM-CSF. Cellular proliferation was quantified using soluble tetrazolium reagent. For both graphs, the quantity of reduced reagent product is directly proportional to viable cell number.</p>
                    
                    <div>
                      <p className="font-semibold text-slate-600 mb-2">Service Citations:</p>
                      <ol className="list-decimal list-inside text-sm">
                        <li>High yield soluble bacterial expression and streamlined purification of recombinant human interferon α-2a. Bis et al., 2014, Protein Expression and Purification, 11:138-146. (<a href="https://pubmed.ncbi.nlm.nih.gov/24769112/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-[#002776] underline">link</a>)</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Graph Placeholder */}
              <div className="glass-card p-1 rounded-[3rem] glow-border self-start">
                <div className="bg-white rounded-[2.8rem] p-10 min-h-[300px] flex flex-col items-center justify-center border-2 border-dashed border-slate-300">
                  <p className="text-slate-400 text-center font-medium mb-4">Growth Inhibition Assay Graph Placeholder</p>
                  <p className="text-xs text-slate-400 text-center">OVCAR-3 human adenocarcinoma cell line grown in the presence of IFN-Alpha. EC50: was determined by nonlinear regression using a four-parameter (variable slope) curve fit.</p>
                </div>
              </div>
            </div>

            {/* Cytokine Secretion Detection Services - Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Column - Content Card */}
              <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
                <div className="bg-white rounded-[2.8rem] p-10 h-full flex flex-col">
                  <h3 className="text-3xl font-bold mb-6 text-purple-700 leading-tight">Cytokine Secretion Detection Services</h3>
                  <div className="space-y-6 text-[15px] text-slate-500 font-light leading-relaxed flex-grow">
                    <p>Accurate measurement of the ability of a sample to induce cytokine production and/or release from cell lines or isolated donor cells is the standard assay for certain applications, such as measurement of IL-18 activity.</p>
                    <p><strong>Figure 3</strong> shows resting NK-92 cells stimulated with human IFN-Alpha 2a or human IFN-Alpha 10. Following stimulation, cell supernatants were harvested and analyzed for human IFN-Gamma production by ELISA. Data are graphed as a function of IFN-Alpha concentration (x-axis) in the bioassay. EC<sub>50</sub>s were determined by nonlinear regression using a four-parameter curve fit.</p>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Graph Placeholder */}
              <div className="glass-card p-1 rounded-[3rem] glow-border self-start">
                <div className="bg-white rounded-[2.8rem] p-10 min-h-[300px] flex flex-col items-center justify-center border-2 border-dashed border-slate-300">
                  <p className="text-slate-400 text-center font-medium mb-4">IFN-Gamma Production Graph Placeholder</p>
                  <p className="text-xs text-slate-400 text-center">A natural killer cell model, NK-92, stimulated to produce IFN-Gamma by incubation with Type I IFNs. The data is graphed as a function of IFN-alpha concentration in the bioassay.</p>
                </div>
              </div>
            </div>

            {/* Neutralizing Antibody Assay Service - Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Column - Content Card */}
              <div className="group glass-card p-1 rounded-[3rem] transition-all duration-500 glow-border">
                <div className="bg-white rounded-[2.8rem] p-10 h-full flex flex-col">
                  <h3 className="text-3xl font-bold mb-6 text-purple-700 leading-tight">Neutralizing Antibody Assay Service</h3>
                  <div className="space-y-6 text-[15px] text-slate-500 font-light leading-relaxed flex-grow">
                    <ul className="space-y-3 mb-6 list-disc list-inside">
                      <li>Accurate determination of sample inhibitory effect on the biological activity of cytokines such as interferons (IFNs)</li>
                      <li>Neutralizing activity measurement performed in a cell-based assay format using serum, plasma, cell culture media, or tissue culture media samples may be used as an anti-drug antibody (ADA) assay</li>
                    </ul>
                    <p>The standard method of accurately determining whether a sample may inhibit the biological activity of cytokines is the neutralization assay. Results, provided either as a visual read or in a graphical format, reveal the ability of a sample to block the activity of IFN added at a specific concentration which provides 100% cell protection.</p>
                    <p>Suitable for serum, plasma, cell culture media, or tissue culture media samples. May be used as an anti-drug antibody (ADA) assay for certain therapeutics.</p>
                    <p><strong>Figure 5.</strong> Representative neutralization curves of a sample of two monoclonal antibodies to interferon in a cytopathic effect inhibition (CPE) assay to determine neutralization titer. One neutralization unit is the amount of antiserum or antibody (NAb) required to neutralize one unit of human interferon to a 50% endpoint in the bioassay. The units are determined with respect to the international reference standard for interferon.</p>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Graph Placeholder */}
              <div className="glass-card p-1 rounded-[3rem] glow-border self-start">
                <div className="bg-white rounded-[2.8rem] p-10 min-h-[300px] flex flex-col items-center justify-center border-2 border-dashed border-slate-300">
                  <p className="text-slate-400 text-center font-medium mb-4">MAb Titration Graph Placeholder</p>
                  <p className="text-xs text-slate-400 text-center">Representative neutralization curves of a sample of two monoclonal antibodies to interferon in a cytopathic effect inhibition (CPE) assay to determine neutralization titer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="pt-32 pb-12 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6 tracking-tight text-[#002776]">Speak to a Scientist</h2>
          <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
            PBL's Customer Support Team is ready to assist by email, phone, or chat.
          </p>
          <a
            href="https://www.pblassaysci.com/speak-to-a-scientist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-14 py-6 bg-[#002776] text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-[#002776]/30"
          >
            Speak to a Scientist
          </a>
        </div>
      </section>
    </main>
  );
}


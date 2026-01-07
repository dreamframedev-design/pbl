import Link from 'next/link';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 mt-32">
      <div className="max-w-[1600px] mx-auto px-8 pt-24 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-black text-[#002776] tracking-tighter">PBL ASSAY SCIENCE</h2>
            <p className="text-sm text-slate-500 font-light leading-relaxed max-w-sm">
              Expertise in interferons and cytokines since 1990. Providing high-performance reagents to the global life science community.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#002776] mb-8">Products</h4>
            <ul className="space-y-4 text-xs text-slate-500 font-light">
              <li>
                <Link href="/products/assay-kits" className="hover:text-cyan-600 transition-colors">Assay Kits</Link>
              </li>
              <li>
                <Link href="/products/proteins" className="hover:text-cyan-600 transition-colors">Proteins</Link>
              </li>
              <li>
                <Link href="/products/antibodies" className="hover:text-cyan-600 transition-colors">Antibodies</Link>
              </li>
              <li>
                <Link href="/products/antibodies/monoclonal" className="hover:text-cyan-600 transition-colors">Monoclonal (MAbs)</Link>
              </li>
              <li>
                <Link href="/products/antibodies/polyclonal" className="hover:text-cyan-600 transition-colors">Polyclonal (PAbs)</Link>
              </li>
              <li>
                <Link href="/products/proteins/interferons" className="hover:text-cyan-600 transition-colors">Interferons</Link>
              </li>
              <li>
                <Link href="/products/proteins/interferon-decoy-receptor" className="hover:text-cyan-600 transition-colors">Decoy Receptors</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#002776] mb-8">Services</h4>
            <ul className="space-y-4 text-xs text-slate-500 font-light">
              <li>
                <Link href="/services/assay-development" className="hover:text-cyan-600 transition-colors">Assay Development</Link>
              </li>
              <li>
                <Link href="/services/biomarker-sample-analysis" className="hover:text-cyan-600 transition-colors">Biomarker Analysis</Link>
              </li>
              <li>
                <Link href="/services/biomarker-sample-analysis/simoa" className="hover:text-cyan-600 transition-colors">SIMOA Services</Link>
              </li>
              <li>
                <Link href="/services/biomarker-sample-analysis/smc" className="hover:text-cyan-600 transition-colors">SMC Services</Link>
              </li>
              <li>
                <Link href="/services/cell-based-services" className="hover:text-cyan-600 transition-colors">Cell-Based Services</Link>
              </li>
              <li>
                <Link href="/services/custom-production" className="hover:text-cyan-600 transition-colors">Custom Production</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#002776] mb-8">Support</h4>
            <ul className="space-y-4 text-xs text-slate-500 font-light">
              <li>
                <Link href="/shipping" className="hover:text-cyan-600 transition-colors">Shipping Info</Link>
              </li>
              <li>
                <Link href="/distributors" className="hover:text-cyan-600 transition-colors">Distributors</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cyan-600 transition-colors">Technical Blog</Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-cyan-600 transition-colors">Contact us</Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-cyan-600 transition-colors">Resources</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#002776] mb-8">Company</h4>
            <ul className="space-y-4 text-xs text-slate-500 font-light">
              <li>
                <Link href="/history" className="hover:text-cyan-600 transition-colors">Our History</Link>
              </li>
              <li>
                <Link href="/pbl-team" className="hover:text-cyan-600 transition-colors">PBL Team</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-cyan-600 transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/values" className="hover:text-cyan-600 transition-colors">Values</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black text-slate-300 tracking-widest uppercase italic">
          <p>© {new Date().getFullYear()} PBL ASSAY SCIENCE. PRECISION REAGENTS.</p>
          <div className="flex gap-10 text-slate-400">
            <Link href="/terms" className="hover:text-slate-600 transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-slate-600 transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


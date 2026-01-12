import Link from 'next/link';

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
            <span>Support</span> <span className="text-gray-300">/</span> <span>Contact</span>
          </nav>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
            <span className="block">How can</span>
            <span className="block">we help you</span>
            <span className="block font-light text-gray-400 font-serif italic">today?</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            Our subject matter experts are standing by to assist with product selection, 
            technical protocols, and global logistics.
          </p>
        </div>
      </header>

      {/* Contact Categories Grid */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* General Support */}
            <div className="group p-1 rounded-[2.5rem] transition-all duration-500 hover-glow" style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6">General <br/>Support</h3>
                <div className="space-y-6 text-sm">
                  <div>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-1">Email</span>
                    <a href="mailto:info@pblassaysci.com" className="font-bold text-[#058A9F] hover:text-cyan-400 transition-colors">info@pblassaysci.com</a>
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-1">Direct Phone</span>
                    <p className="font-bold">+1 732-777-9123</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-1">Toll-Free</span>
                    <p className="font-bold">+1 877-PBL-8881</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Support */}
            <div className="group p-1 rounded-[2.5rem] transition-all duration-500 hover-glow" style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6">Order <br/>Support</h3>
                <div className="space-y-6 text-sm">
                  <div>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-1">Sales Email</span>
                    <a href="mailto:sales@pblassaysci.com" className="font-bold text-[#058A9F] hover:text-cyan-400 transition-colors">sales@pblassaysci.com</a>
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-1">Phone Inquiry</span>
                    <p className="font-bold">+1 732-777-9123 <span className="text-cyan-500 ml-1">Option 2</span></p>
                  </div>
                  <div className="pt-4 border-t border-slate-50">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1 italic">Accounts Payable</span>
                    <a href="mailto:ap@pblbio.com" className="text-xs font-semibold text-slate-500 hover:text-[#002776] transition-colors">ap@pblbio.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Assay Services */}
            <div className="group p-1 rounded-[2.5rem] transition-all duration-500 hover-glow" style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6">Assay <br/>Services</h3>
                <div className="space-y-6 text-sm">
                  <div>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-1">Email Specialist</span>
                    <a href="mailto:assayservices@pblassaysci.com" className="font-bold text-[#058A9F] hover:text-cyan-400 transition-colors">assayservices@pblassaysci.com</a>
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-1">Service Direct</span>
                    <p className="font-bold">+1 732-777-9123 <span className="text-cyan-500 ml-1">Option 6</span></p>
                  </div>
                </div>
                <div className="mt-auto pt-8">
                  <span className="w-full py-3 bg-slate-50 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">Ready to Start Study →</span>
                </div>
              </div>
            </div>

            {/* Global Distributors */}
            <div className="group p-[2px] rounded-[2.5rem] bg-gradient-to-br from-cyan-400 to-[#002776] transition-all duration-500 hover:scale-[1.02]">
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Global <br/>Distributors</h3>
                <p className="text-xs text-slate-400 mb-8 leading-relaxed">PBL works with a network of distribution partners worldwide to serve our international customers.</p>
                <div className="mt-auto">
                  <Link href="/distributors" className="w-full py-4 bg-[#002776] text-white rounded-xl font-bold text-sm text-center block shadow-xl shadow-[#002776]/20 hover:bg-cyan-500 transition-colors">
                    Find Your Local Partner
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How to Place an Order & Logistics */}
      <section className="py-32 bg-[#F4F4F9]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-7">
            <h2 className="text-4xl font-bold mb-12 tracking-tight">How to Place an Order</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 font-bold text-cyan-500">01</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Domestic US Orders</h4>
                  <p className="text-slate-500 font-light leading-relaxed">Orders can be placed via the <Link href="/products" className="text-[#002776] font-semibold underline underline-offset-4 decoration-cyan-400">website</Link>, e-mail, phone, fax, or mail.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 font-bold text-cyan-500">02</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">International Orders</h4>
                  <p className="text-slate-500 font-light leading-relaxed">PBL ships globally. International orders can be placed by e-mail, phone, fax, or mail, <strong className="text-[#002776]">but not on the website.</strong></p>
                </div>
              </div>
              <div className="mt-12 p-8 rounded-3xl border border-slate-100 flex items-start gap-6" style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(226, 232, 240, 0.8)'
              }}>
                <div className="w-10 h-10 bg-[#002776] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <address className="not-italic text-sm text-slate-500 leading-relaxed font-light">
                  <strong className="text-[#002776] font-bold block mb-1 uppercase tracking-widest text-[10px]">Mailing Address</strong>
                  131 Ethel Road West, Suite 6<br/>
                  Piscataway, NJ 08854, USA
                </address>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-4xl font-bold mb-12 tracking-tight">Logistics</h2>
            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
              <div className="text-cyan-500 font-bold text-3xl mb-1 italic">1:00 PM EST</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4">Domestic Cutoff</div>
              <p className="text-xs text-slate-500 font-light">Orders received Mon–Thurs by this time typically ship same-day.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
              <div className="text-cyan-500 font-bold text-3xl mb-1 italic">$55</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4">Overnight Flat Fee</div>
              <p className="text-xs text-slate-500 font-light">Applies to domestic orders up to $1000 received by 3:00 PM EST.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
              <div className="text-[#002776] font-bold text-3xl mb-1 italic">Mon / Fri</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4">International Schedule</div>
              <p className="text-xs text-slate-500 font-light">Global shipments generally depart at the start and end of the week.</p>
            </div>
          </div>

        </div>
      </section>
      {/* Final CTA Section */}
      <section className="pt-32 pb-12 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-cyan-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Direct Scientific Connection</span>
          <h2 className="text-5xl font-bold mb-6 tracking-tight text-[#002776]">Speak to a Scientist</h2>
          <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
            PBL's Customer Support Team is ready to assist by email, phone, or chat.
          </p>
          <Link
            href="/speak-to-a-scientist"
            className="inline-flex items-center px-14 py-6 bg-[#002776] text-white rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-[#002776]/30"
          >
            Initiate Chat
          </Link>
        </div>
      </section>
    </main>
  );
}


import Link from 'next/link';
import Image from 'next/image';

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        {/* Background Image with White Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/15.webp"
            alt="Contact Us"
            fill
            className="object-cover -scale-x-100"
            priority
          />
          {/* White gradient overlay - solid white on left, fades to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
            <span>Support</span> <span className="text-gray-300">/</span> <span>Contact</span>
          </nav>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
            <span className="block">How can</span>
            <span className="block">we help you</span>
            <span className="block font-light text-[#002776] font-serif italic">today?</span>
          </h1>
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
                    <a href="mailto:sales@pblassaysci.com" className="font-bold text-[#058A9F] hover:text-cyan-400 transition-colors">sales@pblassaysci.com</a>
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-1">Phone Inquiry</span>
                    <p className="font-bold">+1 732-777-9123</p>
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
                    <a href="mailto:assayservices@pblassaysci.com" className="font-bold text-[#058A9F] hover:text-cyan-400 transition-colors text-xs break-all">assayservices@pblassaysci.com</a>
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-1">Service Direct</span>
                    <p className="font-bold">+1 732-777-9123</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Distributors */}
            <div className="group p-1 rounded-[2.5rem] transition-all duration-500 hover-glow" style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-2">Distributors</h3>
                <p className="text-xs text-slate-400 mb-8 leading-relaxed">PBL works with a network of distribution partners worldwide to serve our international customers.</p>
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
                  <p className="text-slate-500 font-light leading-relaxed">PBL ships globally. International orders can be placed by e-mail, phone, fax, or mail, but not on the website. PBL also maintains a network of dedicated and reliable <Link href="https://www.pblassaysci.com/distributors" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-[#002776] underline">distribution partners</Link>.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10">
            <h2 className="text-4xl font-bold mb-12 tracking-tight">Shipping & Delivery</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#8B2981]">Domestic US Orders</h3>
                <div className="space-y-2 text-slate-500 font-light leading-relaxed">
                  <p>Domestic orders received by 1 pm EST Monday - Thursday are generally shipped the same day and should arrive the following day by 3 pm.</p>
                  <p>Any orders placed after 1 pm on Thursday will typically ship on Monday (excluding US holidays).</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#8B2981]">International Orders</h3>
                <p className="text-slate-500 font-light leading-relaxed">International orders generally ship on Monday or Friday.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#8B2981]">Shipping & Ice/Handling Fees</h3>
                <div className="space-y-2 text-slate-500 font-light leading-relaxed">
                  <p>$55 overnight shipping for all domestic orders up to $1000 received by 3 pm. Contact us for international shipping rates.</p>
                  <p>Shipping fees correspond to the total retail value of your order.</p>
                </div>
              </div>

              <div className="pt-8">
                <p className="text-2xl font-bold text-[#8B2981] leading-tight">
                  Please contact Order Support for questions about ordering or order status.
                </p>
              </div>
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


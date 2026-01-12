'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Mail, Phone, Send, FlaskConical } from 'lucide-react';

export default function SpeakToAScientistPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectInterest: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // TODO: Implement actual form submission
    // For now, just simulate success
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        projectInterest: '',
        message: '',
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden" style={{
        background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%)'
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-left">
          <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
            <span>Expertise</span> <span className="text-gray-300">/</span> <span>Consultation</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="block md:inline">Collaborate</span>
            <span className="block md:inline"> <span className="md:hidden">with our</span><span className="hidden md:inline">with</span></span>
            <span className="block md:inline"> <span className="md:hidden"><span className="font-light text-gray-400 font-serif italic">Scientists</span></span><span className="hidden md:inline"> our <span className="font-light text-gray-400 font-serif italic">Scientists</span></span></span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            Bridge the gap between discovery and validation. Our subject matter experts respond to technical inquiries within <strong className="text-[#002776]">2 business days.</strong>
          </p>
        </div>
      </header>

      {/* Contact Methods & Form Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Contact Method Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            
            {/* General Support */}
            <div className="group p-1 rounded-[2.5rem] transition-all duration-500 hover-glow" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-500 mb-6 group-hover:bg-[#00F0F3] group-hover:text-white transition-all">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">General Support</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-600 mb-6">info@pblassaysci.com</p>
                <a href="mailto:info@pblassaysci.com" className="text-sm font-bold text-[#058A9F] hover:text-[#002776] transition-colors underline underline-offset-8 decoration-cyan-400">
                  Email Now →
                </a>
              </div>
            </div>

            {/* Assay Services */}
            <div className="group p-1 rounded-[2.5rem] transition-all duration-500 hover-glow" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:bg-[#00F0F3] group-hover:text-[#002776] transition-all duration-300 shadow-sm mb-6">
                  <FlaskConical className="h-6 w-6 stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Assay Services</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-600 mb-6">assayservices@pblassaysci.com</p>
                <a href="mailto:assayservices@pblassaysci.com" className="text-sm font-bold text-blue-600 hover:text-[#002776] transition-colors underline underline-offset-8 decoration-blue-400">
                  Consult a Specialist →
                </a>
              </div>
            </div>

            {/* Scientific Hotline */}
            <div className="group p-1 rounded-[2.5rem] transition-all duration-500 hover-glow" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}>
              <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-6 group-hover:bg-[#002776] group-hover:text-white transition-all">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Scientific Hotline</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-600 mb-6">+1 732-777-9123</p>
                <p className="text-xs font-semibold text-slate-400 italic">Technical Support: Option 6</p>
              </div>
            </div>

          </div>

          {/* Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 space-y-12">
              <h2 className="text-4xl font-bold tracking-tight">How we support <br/> your discovery</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0">✓</div>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">Direct access to the bench scientists who developed the assays.</p>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0">✓</div>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">Optimization strategies for difficult matrices (Serum, Plasma, CSF).</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-10 md:p-16 rounded-[3rem] shadow-2xl relative" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(226, 232, 240, 0.8)'
              }}>
                <h3 className="text-2xl font-bold mb-10 tracking-tight text-center md:text-left">Inquiry for Scientific Expertise</h3>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    <p className="font-medium">Thank you for your inquiry! We'll get back to you within 2 business days.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    <p className="font-medium">There was an error submitting your form. Please try again or contact us directly.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-[10px] font-black uppercase tracking-widest text-slate-400">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-cyan-400/15 focus:border-cyan-400 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-cyan-400/15 focus:border-cyan-400 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Professional Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="j.doe@pharma-org.com"
                      className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-cyan-400/15 focus:border-cyan-400 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="projectInterest" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Project Interests</label>
                    <select
                      id="projectInterest"
                      name="projectInterest"
                      value={formData.projectInterest}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-cyan-400/15 focus:border-cyan-400 transition-all appearance-none"
                    >
                      <option value="">Select an option...</option>
                      <option value="assay-development">Assay Development & Validation</option>
                      <option value="biomarker-testing">Biomarker Testing Services</option>
                      <option value="custom-antibody">Custom Antibody Characterization</option>
                      <option value="cell-based">Cell-Based Services</option>
                      <option value="custom-production">Custom Production</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your research objectives..."
                      className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-cyan-400/15 focus:border-cyan-400 transition-all resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-[#002776] text-white font-bold rounded-2xl hover:bg-[#00F0F3] hover:text-[#002776] transition-all shadow-xl shadow-[#002776]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Consultation Request'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Support Section */}
      <section className="py-32 bg-slate-50 overflow-hidden relative">
        <div className="absolute inset-0 skew-y-3 bg-[#002776] transform translate-y-2/3 origin-right opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white p-12 md:p-20 rounded-[4rem] shadow-xl border border-slate-100">
            <div className="max-w-xl text-center md:text-left">
              <span className="px-4 py-1.5 bg-red-50 text-red-500 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block ring-1 ring-red-100">Urgent Support</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#002776] mb-6">Need Immediate Scientific Assistance?</h2>
              <p className="text-xl text-slate-500 font-light leading-relaxed">
                For critical study support or urgent protocol clarification, bypass the form and reach our laboratory leads directly.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <a href="tel:+17327779123" className="px-10 py-6 bg-[#002776] text-white rounded-full font-bold text-center hover:scale-105 transition-all shadow-2xl shadow-[#002776]/30">
                Call +1 732-777-9123
              </a>
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Live Chat Standing By</span>
                <span className="flex items-center gap-2 text-[#058A9F] font-bold">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  9:00 AM – 5:00 PM EST
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  ArrowRight, 
  FlaskConical, 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  User,
  Building2,
  Beaker,
  CheckCircle2,
  Microscope
} from 'lucide-react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setIsLoading(true);
      // Simulate registration - replace with actual auth logic
      setTimeout(() => setIsLoading(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      
      {/* LEFT SIDE: Visual Brand Side (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary-navy relative overflow-hidden items-center justify-center p-12 xl:p-20">
        {/* Subtle Background Pattern/Grid */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
            backgroundSize: '40px 40px' 
          }}
        />
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-20 w-48 h-48 bg-secondary-teal/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-md text-center">
          <div className="w-20 h-20 bg-cyan-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-xl border border-white/10">
            <Microscope className="w-10 h-10 text-cyan-400" />
          </div>
          <h2 className="text-3xl xl:text-4xl font-bold text-white mb-6 tracking-tight">
            Join the Research Community
          </h2>
          <p className="text-blue-100/60 leading-relaxed font-medium">
            Create your PBL portal account to access exclusive pricing, track orders, and connect with our scientific team.
          </p>
          
          <div className="mt-12 space-y-4">
            {[
              { icon: FlaskConical, title: 'Exclusive Pricing', desc: 'Academic & volume discounts' },
              { icon: ShieldCheck, title: 'Order Tracking', desc: 'Real-time cold-chain monitoring' },
              { icon: Beaker, title: 'Technical Support', desc: 'Direct access to PhD scientists' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 text-left p-5 xl:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <item.icon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-bold tracking-tight">{item.title}</p>
                  <p className="text-blue-100/40 text-[10px] uppercase tracking-widest font-black">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Registration Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-16 xl:p-24 bg-white">
        <div className="w-full max-w-md">
          
          {/* Mobile Logo Only */}
          <div className="lg:hidden mb-12 text-center">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-primary-navy tracking-tighter">
                PBL<span className="font-light text-slate-400 text-lg ml-1 uppercase">Assay Science</span>
              </span>
            </Link>
          </div>

          {/* Desktop: Back to home link */}
          <div className="hidden lg:block mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary-navy transition-colors"
            >
              <ArrowRight className="w-3 h-3 rotate-180" />
              Back to Home
            </Link>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-3 mb-8">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-all ${
              step >= 1 ? 'bg-primary-navy text-white' : 'bg-slate-100 text-slate-400'
            }`}>
              {step > 1 ? <CheckCircle2 className="w-4 h-4" /> : '1'}
            </div>
            <div className={`flex-1 h-1 rounded-full transition-all ${step > 1 ? 'bg-primary-navy' : 'bg-slate-100'}`} />
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-all ${
              step >= 2 ? 'bg-primary-navy text-white' : 'bg-slate-100 text-slate-400'
            }`}>
              2
            </div>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl font-black text-primary-navy tracking-tight mb-3">
              {step === 1 ? 'Create Account' : 'Lab Details'}
            </h1>
            <p className="text-slate-400 text-sm font-medium">
              {step === 1 
                ? 'Start with your personal information.' 
                : 'Tell us about your research environment.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {step === 1 ? (
              <>
                {/* Step 1: Personal Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                      First Name
                    </label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-cyan-600 transition-colors" />
                      <input 
                        type="text" 
                        placeholder="Sarah"
                        required
                        className="w-full bg-slate-50 border-none rounded-2xl p-4 pl-12 text-sm font-bold text-primary-navy placeholder:text-slate-300 placeholder:font-normal focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Mitchell"
                      required
                      className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-bold text-primary-navy placeholder:text-slate-300 placeholder:font-normal focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                    Institutional Email
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-cyan-600 transition-colors" />
                    <input 
                      type="email" 
                      placeholder="name@institution.edu"
                      required
                      className="w-full bg-slate-50 border-none rounded-2xl p-4 pl-12 text-sm font-bold text-primary-navy placeholder:text-slate-300 placeholder:font-normal focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all" 
                    />
                  </div>
                  <p className="text-[10px] text-slate-400 ml-1">Use your .edu or institutional email for academic pricing</p>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                    Create Password
                  </label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-cyan-600 transition-colors" />
                    <input 
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Min. 8 characters"
                      required
                      minLength={8}
                      className="w-full bg-slate-50 border-none rounded-2xl p-4 pl-12 pr-12 text-sm font-bold text-primary-navy placeholder:text-slate-300 placeholder:font-normal focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all" 
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Step 2: Lab Info */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                    Institution / Company
                  </label>
                  <div className="relative group">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-cyan-600 transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Stanford University"
                      required
                      className="w-full bg-slate-50 border-none rounded-2xl p-4 pl-12 text-sm font-bold text-primary-navy placeholder:text-slate-300 placeholder:font-normal focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                    Department / Lab Name
                  </label>
                  <div className="relative group">
                    <FlaskConical className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-cyan-600 transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Department of Molecular Biology"
                      required
                      className="w-full bg-slate-50 border-none rounded-2xl p-4 pl-12 text-sm font-bold text-primary-navy placeholder:text-slate-300 placeholder:font-normal focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                    Your Role
                  </label>
                  <select 
                    required
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-bold text-primary-navy focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select your role...</option>
                    <option value="pi">Principal Investigator</option>
                    <option value="postdoc">Postdoctoral Fellow</option>
                    <option value="grad">Graduate Student</option>
                    <option value="tech">Research Technician</option>
                    <option value="lab-manager">Lab Manager</option>
                    <option value="industry">Industry Researcher</option>
                    <option value="purchasing">Purchasing Agent</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                    Primary Research Area
                  </label>
                  <select 
                    required
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-bold text-primary-navy focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select research area...</option>
                    <option value="immunology">Immunology</option>
                    <option value="virology">Virology</option>
                    <option value="oncology">Oncology</option>
                    <option value="cell-biology">Cell Biology</option>
                    <option value="neuroscience">Neuroscience</option>
                    <option value="infectious-disease">Infectious Disease</option>
                    <option value="autoimmune">Autoimmune Research</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </>
            )}

            {/* Terms checkbox (only on step 2) */}
            {step === 2 && (
              <div className="flex items-start gap-3 pt-2">
                <input 
                  type="checkbox" 
                  id="terms"
                  required
                  className="w-4 h-4 mt-0.5 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500 focus:ring-offset-0"
                />
                <label htmlFor="terms" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                  I agree to PBL&apos;s{' '}
                  <Link href="/terms" className="text-cyan-600 hover:text-primary-navy">Terms of Service</Link>
                  {' '}and{' '}
                  <Link href="/privacy" className="text-cyan-600 hover:text-primary-navy">Privacy Policy</Link>
                </label>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              {step === 2 && (
                <button 
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.15em] text-slate-500 hover:bg-slate-50 transition-all"
                >
                  Back
                </button>
              )}
              <button 
                type="submit"
                disabled={isLoading}
                className="flex-1 flex items-center justify-center gap-3 bg-primary-navy text-white py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-secondary-teal transition-all shadow-xl shadow-blue-900/10 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creating Account...
                  </>
                ) : step === 1 ? (
                  <>
                    Continue
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                ) : (
                  <>
                    Create Portal Account
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-[10px] font-bold uppercase tracking-widest text-slate-300">
                Or sign up with
              </span>
            </div>
          </div>

          {/* SSO Options */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 p-4 rounded-2xl border border-slate-100 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-200 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 p-4 rounded-2xl border border-slate-100 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-200 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Apple
            </button>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-slate-400 font-medium">
              Already have an account?{' '}
              <Link 
                href="/user/login" 
                className="text-cyan-600 font-bold hover:text-primary-navy transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

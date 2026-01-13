'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Mail, 
  KeyRound,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck
} from 'lucide-react';

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate sending reset email
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
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
        <div className="absolute top-32 left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-32 w-32 h-32 bg-secondary-teal/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-md text-center">
          <div className="w-20 h-20 bg-cyan-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-xl border border-white/10">
            <KeyRound className="w-10 h-10 text-cyan-400" />
          </div>
          <h2 className="text-3xl xl:text-4xl font-bold text-white mb-6 tracking-tight">
            Account Recovery
          </h2>
          <p className="text-blue-100/60 leading-relaxed font-medium">
            We take security seriously. Your password reset link will be sent to your verified institutional email.
          </p>
          
          <div className="mt-12">
            <div className="flex items-center gap-4 text-left p-5 xl:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <ShieldCheck className="w-6 h-6 text-cyan-400 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-bold tracking-tight">Secure Reset Process</p>
                <p className="text-blue-100/40 text-[10px] uppercase tracking-widest font-black">Time-limited encrypted links</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Reset Form */}
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

          {/* Back link */}
          <div className="mb-8">
            <Link 
              href="/user/login" 
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary-navy transition-colors"
            >
              <ArrowLeft className="w-3 h-3" />
              Back to Sign In
            </Link>
          </div>

          {!isSubmitted ? (
            <>
              <div className="mb-10">
                <h1 className="text-3xl font-black text-primary-navy tracking-tight mb-3">Reset Password</h1>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  Enter the email address associated with your account and we&apos;ll send you a link to reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                    Email Address
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-cyan-600 transition-colors" />
                    <input 
                      type="email" 
                      placeholder="name@institution.edu"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border-none rounded-2xl p-4 pl-12 text-sm font-bold text-primary-navy placeholder:text-slate-300 placeholder:font-normal focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all" 
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-3 bg-primary-navy text-white py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-secondary-teal transition-all shadow-xl shadow-blue-900/10 group mt-8 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Reset Link
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="text-center">
              <div className="w-20 h-20 bg-green-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              
              <h1 className="text-3xl font-black text-primary-navy tracking-tight mb-3">Check Your Email</h1>
              <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">
                We&apos;ve sent a password reset link to<br />
                <span className="text-primary-navy font-bold">{email}</span>
              </p>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 mb-8">
                <p className="text-xs text-slate-500 leading-relaxed">
                  <strong className="text-primary-navy">Didn&apos;t receive an email?</strong><br />
                  Check your spam folder or verify that you entered the correct email address.
                </p>
              </div>

              <button 
                onClick={() => {
                  setIsSubmitted(false);
                  setEmail('');
                }}
                className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-cyan-600 hover:text-primary-navy transition-colors"
              >
                <ArrowLeft className="w-3 h-3" />
                Try a different email
              </button>
            </div>
          )}

          {/* Help text */}
          <div className="mt-12 pt-8 border-t border-slate-100">
            <p className="text-center text-xs text-slate-400 leading-relaxed">
              Still having trouble?{' '}
              <Link 
                href="/contact-us" 
                className="text-cyan-600 font-bold hover:text-primary-navy transition-colors"
              >
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

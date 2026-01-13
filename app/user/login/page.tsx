'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, FlaskConical, Lock, Mail, Eye, EyeOff, Beaker, Microscope } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login - replace with actual auth logic
    setTimeout(() => setIsLoading(false), 2000);
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
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-secondary-teal/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-md text-center">
          <div className="w-20 h-20 bg-cyan-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-xl border border-white/10">
            <FlaskConical className="w-10 h-10 text-cyan-400" />
          </div>
          <h2 className="text-3xl xl:text-4xl font-bold text-white mb-6 tracking-tight">
            Access Your Research Portal
          </h2>
          <p className="text-blue-100/60 leading-relaxed font-medium">
            Manage your ELISA kits, track cold-chain shipments, and consult with our scientific team in one secure environment.
          </p>
          
          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-4 text-left p-5 xl:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <ShieldCheck className="w-6 h-6 text-cyan-400 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-bold tracking-tight">Institutional Security</p>
                <p className="text-blue-100/40 text-[10px] uppercase tracking-widest font-black">Encrypted via Stripe & OAuth 2.0</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-left p-5 xl:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Beaker className="w-6 h-6 text-cyan-400 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-bold tracking-tight">Scientific Support</p>
                <p className="text-blue-100/40 text-[10px] uppercase tracking-widest font-black">Direct access to PhD scientists</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-left p-5 xl:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Microscope className="w-6 h-6 text-cyan-400 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-bold tracking-tight">Order Management</p>
                <p className="text-blue-100/40 text-[10px] uppercase tracking-widest font-black">Track shipments & reorder easily</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Login Form */}
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

          <div className="mb-10">
            <h1 className="text-3xl font-black text-primary-navy tracking-tight mb-3">Sign In</h1>
            <p className="text-slate-400 text-sm font-medium">Welcome back to the PBL scientist portal.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                Laboratory Email
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
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Password
                </label>
                <Link 
                  href="/user/forgot-password" 
                  className="text-[10px] font-black uppercase tracking-widest text-cyan-600 hover:text-primary-navy transition-colors"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-cyan-600 transition-colors" />
                <input 
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  required
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

            {/* Remember me checkbox */}
            <div className="flex items-center gap-3">
              <input 
                type="checkbox" 
                id="remember"
                className="w-4 h-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500 focus:ring-offset-0"
              />
              <label htmlFor="remember" className="text-sm text-slate-500 font-medium cursor-pointer">
                Keep me signed in
              </label>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 bg-primary-navy text-white py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-secondary-teal transition-all shadow-xl shadow-blue-900/10 group mt-8 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing In...
                </>
              ) : (
                <>
                  Sign In to Dashboard
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-[10px] font-bold uppercase tracking-widest text-slate-300">
                Or continue with
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
              Don&apos;t have an account?{' '}
              <Link 
                href="/user/register" 
                className="text-cyan-600 font-bold hover:text-primary-navy transition-colors"
              >
                Create Portal Account
              </Link>
            </p>
          </div>

          {/* Footer trust text */}
          <p className="mt-8 text-center text-[9px] text-slate-300 uppercase tracking-widest leading-relaxed">
            By signing in, you agree to PBL&apos;s{' '}
            <Link href="/terms" className="underline hover:text-slate-500">Terms of Service</Link>
            {' '}and{' '}
            <Link href="/privacy" className="underline hover:text-slate-500">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  ChevronDown, 
  ShoppingCart, 
  Mail, 
  User, 
  ArrowRight, 
  Beaker, 
  Thermometer, 
  Box,
  FlaskConical,
  Microscope,
  ShieldCheck,
  Star,
  Package,
  FileText,
  CheckCircle2,
  Truck,
  Clock,
  Plus,
  Minus,
  Trash2,
  Eye,
  Download,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Lock,
  Snowflake,
  Info,
  AlertCircle,
  Bell,
  Settings,
  CreditCard,
  Quote,
  Building2,
  Hash,
  BarChart3,
  LineChart,
  TrendingUp
} from 'lucide-react';
import {
  ComposedChart,
  Scatter,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  ScatterChart
} from 'recharts';

// Reusable Section Component for the Style Guide
const StyleSection = ({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) => (
  <section className="mb-24">
    <div className="mb-10">
      <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-2">
        {title}
      </h2>
      {description && <p className="text-slate-500 text-sm max-w-2xl">{description}</p>}
    </div>
    <div className="border-t border-slate-100 pt-10">
      {children}
    </div>
  </section>
);

// Subsection Component
const Subsection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <h3 className="text-sm font-bold text-slate-900 mb-6">{title}</h3>
    {children}
  </div>
);

export default function DesignSystem() {
  const [glowHover, setGlowHover] = useState(false);

  return (
    <div className="min-h-screen bg-white pb-24 font-sans selection:bg-cyan-100">
      {/* Header Area */}
      <div className="bg-gradient-to-br from-primary-navy to-[#001a4d] py-20 mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400 mb-4">
            Version 2.0 • January 2026
          </p>
          <h1 className="text-5xl font-black text-white mb-6 tracking-tight">
            Master Design System
          </h1>
          <p className="text-blue-100/60 text-lg max-w-2xl font-light leading-relaxed">
            Global UI tokens and components for the PBL Assay Science digital ecosystem. 
            This document serves as the single source of truth for all design decisions.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6">
        
        {/* ============================================= */}
        {/* 01 - BRAND DNA: COLORS */}
        {/* ============================================= */}
        <StyleSection 
          title="01 — Color Palette" 
          description="Core brand colors that define the PBL identity. Navy conveys trust and scientific precision, while Cyan/Teal adds energy and modernity."
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Primary Colors */}
            <Subsection title="Primary Colors">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="h-28 w-full bg-primary-navy rounded-2xl shadow-lg shadow-blue-900/20 flex items-end p-4">
                    <span className="text-white/60 text-[10px] font-mono">primary-navy</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Primary Navy</p>
                    <p className="text-xs font-mono text-slate-500">#002776 • RGB(0, 39, 118)</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-28 w-full bg-secondary-teal rounded-2xl shadow-lg shadow-teal-500/20 flex items-end p-4">
                    <span className="text-white/60 text-[10px] font-mono">secondary-teal</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Secondary Teal</p>
                    <p className="text-xs font-mono text-slate-500">#058A9F • RGB(5, 138, 159)</p>
                  </div>
                </div>
              </div>
            </Subsection>

            {/* Accent Colors */}
            <Subsection title="Accent Colors">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-3">
                  <div className="h-20 w-full bg-accent-cyan rounded-xl shadow-sm flex items-end p-3">
                    <span className="text-primary-navy/60 text-[9px] font-mono">accent-cyan</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Accent Cyan</p>
                    <p className="text-[10px] font-mono text-slate-500">#00F0F3</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-20 w-full bg-accent-coral rounded-xl shadow-sm flex items-end p-3">
                    <span className="text-white/60 text-[9px] font-mono">accent-coral</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Accent Coral</p>
                    <p className="text-[10px] font-mono text-slate-500">#FF6F61</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-20 w-full bg-accent-skyBlue rounded-xl shadow-sm flex items-end p-3">
                    <span className="text-white/60 text-[9px] font-mono">accent-skyBlue</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Sky Blue</p>
                    <p className="text-[10px] font-mono text-slate-500">#4A99E4</p>
                  </div>
                </div>
              </div>
            </Subsection>

            {/* Extended Palette - NEW */}
            <Subsection title="Extended Palette">
              <div className="grid grid-cols-4 gap-4">
                <div className="space-y-3">
                  <div className="h-16 w-full bg-neutral-steel rounded-xl flex items-end p-2">
                    <span className="text-white/60 text-[8px] font-mono">neutral-steel</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Steel</p>
                    <p className="text-[10px] font-mono text-slate-500">#4C6692</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-16 w-full bg-charcoal rounded-xl flex items-end p-2">
                    <span className="text-white/60 text-[8px] font-mono">charcoal</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Charcoal</p>
                    <p className="text-[10px] font-mono text-slate-500">#2A3C4C</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-16 w-full bg-background-offwhite rounded-xl border border-slate-200 flex items-end p-2">
                    <span className="text-slate-500 text-[8px] font-mono">offwhite</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Off White</p>
                    <p className="text-[10px] font-mono text-slate-500">#F4F4F9</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-16 w-full bg-purple-deep rounded-xl flex items-end p-2">
                    <span className="text-white/60 text-[8px] font-mono">purple-deep</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Purple Deep</p>
                    <p className="text-[10px] font-mono text-slate-500">#7C3AED</p>
                  </div>
                </div>
              </div>
            </Subsection>

            {/* Purple Palette - NEW */}
            <Subsection title="Purple Palette (Secondary)">
              <div className="grid grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-14 w-full bg-purple-deep rounded-lg flex items-end p-2">
                    <span className="text-white/60 text-[8px] font-mono">deep</span>
                  </div>
                  <p className="text-[10px] font-mono text-slate-500">#7C3AED</p>
                </div>
                <div className="space-y-2">
                  <div className="h-14 w-full bg-purple-professional rounded-lg flex items-end p-2">
                    <span className="text-white/60 text-[8px] font-mono">professional</span>
                  </div>
                  <p className="text-[10px] font-mono text-slate-500">#6D28D9</p>
                </div>
                <div className="space-y-2">
                  <div className="h-14 w-full bg-purple-lavender rounded-lg border border-purple-200 flex items-end p-2">
                    <span className="text-purple-600/60 text-[8px] font-mono">lavender</span>
                  </div>
                  <p className="text-[10px] font-mono text-slate-500">#EDE6FF</p>
                </div>
                <div className="space-y-2">
                  <div className="h-14 w-full bg-purple-periwinkle rounded-lg flex items-end p-2">
                    <span className="text-purple-800/60 text-[8px] font-mono">periwinkle</span>
                  </div>
                  <p className="text-[10px] font-mono text-slate-500">#B7C3F3</p>
                </div>
              </div>
            </Subsection>

            {/* Gradients */}
            <Subsection title="Gradients">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="h-20 w-full bg-gradient-to-r from-secondary-teal via-secondary-teal to-accent-cyan rounded-xl shadow-lg shadow-teal-500/20 flex items-center justify-center">
                    <span className="text-white text-xs font-bold uppercase tracking-widest">CTA Gradient (btn-primary)</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">from-secondary-teal via-secondary-teal to-accent-cyan</p>
                </div>
                <div className="space-y-3">
                  <div className="h-24 w-full bg-gradient-to-r from-[#002776] via-[#04849C] to-[#058A9F] rounded-xl shadow-lg flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">customization and execution.</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">from-[#002776] via-[#04849C] to-[#058A9F] • Homepage Hero Text • bg-clip-text text-transparent</p>
                </div>
                <div className="space-y-3">
                  <div className="h-20 w-full bg-gradient-to-r from-primary-navy via-secondary-teal to-accent-cyan rounded-xl shadow-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold uppercase tracking-widest">Headline Gradient</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">from-primary-navy via-secondary-teal to-accent-cyan • .gradient-headline-primary</p>
                </div>
                <div className="space-y-3">
                  <div className="h-20 w-full bg-gradient-to-r from-secondary-teal via-accent-cyan to-accent-skyBlue rounded-xl shadow-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold uppercase tracking-widest">Secondary Headline</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">from-secondary-teal via-accent-cyan to-accent-skyBlue • .gradient-headline-secondary</p>
                </div>
                <div className="space-y-3">
                  <div className="h-20 w-full rounded-xl shadow-lg flex items-center justify-center" style={{
                    background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(222,47%,11%,0.04) 0, transparent 50%), #FBFBFE'
                  }}>
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Page Background Radial</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">radial-gradient(hsla) × 3 layers • Used in page headers and hero sections</p>
                </div>
              </div>
            </Subsection>

            {/* Neutral Colors */}
            <Subsection title="Neutral Palette (Slate)">
              <div className="flex gap-2">
                {[
                  { name: 'slate-50', color: 'bg-slate-50', text: 'text-slate-900' },
                  { name: 'slate-100', color: 'bg-slate-100', text: 'text-slate-900' },
                  { name: 'slate-200', color: 'bg-slate-200', text: 'text-slate-900' },
                  { name: 'slate-300', color: 'bg-slate-300', text: 'text-slate-900' },
                  { name: 'slate-400', color: 'bg-slate-400', text: 'text-white' },
                  { name: 'slate-500', color: 'bg-slate-500', text: 'text-white' },
                  { name: 'slate-600', color: 'bg-slate-600', text: 'text-white' },
                  { name: 'slate-700', color: 'bg-slate-700', text: 'text-white' },
                  { name: 'slate-800', color: 'bg-slate-800', text: 'text-white' },
                  { name: 'slate-900', color: 'bg-slate-900', text: 'text-white' },
                ].map((item) => (
                  <div key={item.name} className="flex-1">
                    <div className={`h-16 ${item.color} rounded-lg flex items-end justify-center pb-1`}>
                      <span className={`${item.text} text-[8px] font-mono opacity-60`}>{item.name.split('-')[1]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Subsection>
          </div>
        </StyleSection>

        {/* ============================================= */}
        {/* 02 - TYPOGRAPHY */}
        {/* ============================================= */}
        <StyleSection 
          title="02 — Typography" 
          description="Dual font system: Open Sauce One (display/headings) + Inter (body/UI). This pairing balances scientific authority with modern readability."
        >
          {/* Font Pairing Info - NEW */}
          <div className="mb-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="text-sm font-bold text-slate-900 mb-4">Font Stack</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-cyan-600 mb-2">Display / Headings</p>
                <p className="text-2xl font-bold text-primary-navy" style={{ fontFamily: '"Open Sauce One", system-ui, sans-serif' }}>Open Sauce One</p>
                <p className="text-xs text-slate-500 mt-1 font-mono">font-display • Weights: 300-900</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-cyan-600 mb-2">Body / UI Text</p>
                <p className="text-2xl font-light text-primary-navy" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Inter Variable</p>
                <p className="text-xs text-slate-500 mt-1 font-mono">font-body • Weights: 300-700</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Display & Headings */}
            <Subsection title="Display & Headings (Open Sauce One)">
              <div className="space-y-8">
                <div className="border-b border-slate-100 pb-6">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-mono">Display 1 • 4rem/64px • Bold 700</p>
                  <p className="text-display-1 font-bold text-primary-navy leading-tight">Scientific Excellence</p>
                </div>
                <div className="border-b border-slate-100 pb-6">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-mono">Display 2 • 3rem/48px • Bold 700</p>
                  <p className="text-display-2 font-bold text-primary-navy leading-tight">Interferon Research</p>
                </div>
                <div className="border-b border-slate-100 pb-6">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-mono">Heading 1 • 2.5rem/40px • Bold 700</p>
                  <p className="text-heading-1 font-bold text-primary-navy">ELISA Assay Kits</p>
                </div>
                <div className="border-b border-slate-100 pb-6">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-mono">Heading 2 • 2rem/32px • Bold 700</p>
                  <p className="text-heading-2 font-bold text-primary-navy">Human IFN Alpha</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-mono">Heading 3 • 1.5rem/24px • Medium 500</p>
                  <p className="text-heading-3 font-medium text-primary-navy">Product Specifications</p>
                </div>
              </div>
            </Subsection>

            {/* Body & Labels */}
            <Subsection title="Body & Labels (Inter)">
              <div className="space-y-8">
                <div className="border-b border-slate-100 pb-6">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-mono">Body • 1rem/16px • Light 300</p>
                  <p className="text-body font-light text-slate-600 leading-relaxed">
                    Designed for the quantification of Human Interferon Alpha subtype concentrations 
                    in various biological matrices with sub-picogram sensitivity.
                  </p>
                </div>
                <div className="border-b border-slate-100 pb-6">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-mono">Technical Label • 10px • Black 900 • Uppercase</p>
                  <p className="text-[10px] font-black text-primary-navy uppercase tracking-[0.2em]">High Sensitivity ELISA</p>
                </div>
                <div className="border-b border-slate-100 pb-6">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-mono">Section Label • 10px • Black 900 • Cyan</p>
                  <p className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.3em]">Featured Products</p>
                </div>
                <div className="border-b border-slate-100 pb-6">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-mono">Gradient Headline Text</p>
                  <p className="text-2xl font-bold gradient-headline-primary">Gradient Text Example</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-mono">Meta Text • 9px • Uppercase • Slate-400</p>
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest">Last updated January 2026</p>
                </div>
              </div>
            </Subsection>
          </div>
        </StyleSection>

        {/* ============================================= */}
        {/* 03 - SHADOWS & RADII */}
        {/* ============================================= */}
        <StyleSection 
          title="03 — Elevation & Shape" 
          description="Consistent shadows and border radii create visual hierarchy and maintain the premium, scientific aesthetic."
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Box Shadows */}
            <Subsection title="Box Shadows (Standard)">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="h-24 w-full bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center">
                    <span className="text-xs text-slate-400">shadow-sm</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">Subtle elevation</p>
                </div>
                <div className="space-y-3">
                  <div className="h-24 w-full bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center">
                    <span className="text-xs text-slate-400">shadow-lg</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">Card elevation</p>
                </div>
                <div className="space-y-3">
                  <div className="h-24 w-full bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-center">
                    <span className="text-xs text-slate-400">shadow-xl</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">Featured content</p>
                </div>
                <div className="space-y-3">
                  <div className="h-24 w-full bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 flex items-center justify-center">
                    <span className="text-xs text-slate-400">shadow-2xl</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">Modal/overlay</p>
                </div>
              </div>
            </Subsection>

            {/* Custom Shadows - NEW */}
            <Subsection title="Custom Shadows (tailwind.config.ts)">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="h-20 w-full bg-white rounded-2xl shadow-cta flex items-center justify-center">
                    <span className="text-xs text-slate-500">shadow-cta</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">CTA buttons • teal/cyan glow</p>
                </div>
                <div className="space-y-3">
                  <div className="h-20 w-full bg-white rounded-2xl shadow-cta-hover flex items-center justify-center">
                    <span className="text-xs text-slate-500">shadow-cta-hover</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">CTA hover state • enhanced glow</p>
                </div>
                <div className="space-y-3">
                  <div className="h-20 w-full bg-white rounded-2xl shadow-image flex items-center justify-center">
                    <span className="text-xs text-slate-500">shadow-image</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">Product images • navy/teal tint</p>
                </div>
              </div>
            </Subsection>

            {/* Border Radii */}
            <Subsection title="Border Radii">
              <div className="flex items-end gap-6">
                <div className="space-y-3 text-center">
                  <div className="h-16 w-16 bg-slate-100 rounded-lg flex items-center justify-center">
                    <span className="text-[10px] text-slate-500">lg</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">0.5rem</p>
                </div>
                <div className="space-y-3 text-center">
                  <div className="h-20 w-20 bg-slate-100 rounded-xl flex items-center justify-center">
                    <span className="text-[10px] text-slate-500">xl</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">0.75rem</p>
                </div>
                <div className="space-y-3 text-center">
                  <div className="h-24 w-24 bg-slate-100 rounded-2xl flex items-center justify-center">
                    <span className="text-[10px] text-slate-500">2xl</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">1rem</p>
                </div>
                <div className="space-y-3 text-center">
                  <div className="h-28 w-28 bg-slate-100 rounded-3xl flex items-center justify-center">
                    <span className="text-[10px] text-slate-500">3xl</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">1.5rem</p>
                </div>
                <div className="space-y-3 text-center">
                  <div className="h-16 w-32 bg-slate-100 rounded-full flex items-center justify-center">
                    <span className="text-[10px] text-slate-500">full</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">pill</p>
                </div>
              </div>
            </Subsection>

            {/* Glass Effects - NEW */}
            <Subsection title="Glass & Blur Effects">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="h-20 w-full glass-header rounded-2xl flex items-center justify-center">
                    <span className="text-xs text-slate-500">.glass-header</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">backdrop-blur(20px) • 98% white • Used for scrolled header</p>
                </div>
                <div className="space-y-3">
                  <div className="h-20 w-full glass-card rounded-2xl flex items-center justify-center">
                    <span className="text-xs text-slate-500">.glass-card</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">backdrop-blur(20px) • 95% white • Floating cards</p>
                </div>
                <div className="space-y-3">
                  <div className="h-20 w-full glass-card glow-border rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,240,243,0.2)] hover:border-[#00F0F3] hover:-translate-y-2">
                    <span className="text-xs text-slate-500">.glass-card.glow-border</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">Hover: cyan glow + translateY(-8px) • Used on product info cards</p>
                </div>
                <div className="space-y-3">
                  <div className="h-20 w-full specular-glass bg-white rounded-2xl border border-slate-200 flex items-center justify-center">
                    <span className="text-xs text-slate-500">.specular-glass</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500">border-top: 1px solid rgba(255,255,255,0.5) • Light edge highlight</p>
                </div>
              </div>
            </Subsection>
          </div>
        </StyleSection>

        {/* ============================================= */}
        {/* 04 - BUTTONS & CTAs */}
        {/* ============================================= */}
        <StyleSection 
          title="04 — Buttons & CTAs" 
          description="Interactive elements with clear visual hierarchy. Primary actions use the gradient, secondary actions use outline styling."
        >
          <div className="space-y-12">
            {/* Utility Class Buttons - NEW */}
            <Subsection title="CSS Utility Classes (globals.css)">
              <div className="flex flex-wrap items-center gap-6">
                <div className="space-y-3 text-center">
                  <button className="btn-primary">
                    Request a Quote
                  </button>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">.btn-primary</p>
                </div>
                <div className="space-y-3 text-center">
                  <button className="btn-secondary">
                    Learn More
                  </button>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">.btn-secondary</p>
                </div>
              </div>
            </Subsection>

            {/* Primary Buttons */}
            <Subsection title="Primary Button States">
              <div className="flex flex-wrap items-center gap-6">
                <div className="space-y-3 text-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-secondary-teal via-secondary-teal to-accent-cyan text-white text-xs font-black uppercase tracking-[0.15em] rounded-xl shadow-cta">
                    Request a Quote
                  </button>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Default</p>
                </div>
                <div className="space-y-3 text-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-secondary-teal via-secondary-teal to-accent-cyan text-white text-xs font-black uppercase tracking-[0.15em] rounded-xl shadow-cta-hover scale-105 -translate-y-0.5">
                    Request a Quote
                  </button>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Hover (scale + translate)</p>
                </div>
                <div className="space-y-3 text-center">
                  <button className="px-8 py-4 bg-primary-navy text-white text-xs font-black uppercase tracking-[0.15em] rounded-xl shadow-lg shadow-blue-900/20">
                    Proceed to Checkout
                  </button>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Navy Variant</p>
                </div>
              </div>
            </Subsection>

            {/* Secondary Buttons */}
            <Subsection title="Secondary & Ghost Buttons">
              <div className="flex flex-wrap items-center gap-6">
                <div className="space-y-3 text-center">
                  <button className="px-8 py-4 bg-white text-primary-navy border-2 border-primary-navy text-xs font-black uppercase tracking-[0.15em] rounded-xl">
                    Learn More
                  </button>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Outline</p>
                </div>
                <div className="space-y-3 text-center">
                  <button className="px-8 py-4 bg-slate-50 text-primary-navy border border-slate-200 text-xs font-bold uppercase tracking-[0.1em] rounded-xl">
                    View Details
                  </button>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Ghost</p>
                </div>
                <div className="space-y-3 text-center">
                  <button className="px-6 py-3 text-cyan-600 text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    View All <ArrowRight size={14} />
                  </button>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Text Link</p>
                </div>
              </div>
            </Subsection>

            {/* Floating CTA - NEW */}
            <Subsection title="Floating CTA (Fixed Position)">
              <div className="relative h-24 bg-slate-50 rounded-2xl overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Link
                    href="#"
                    className="group inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-secondary-teal via-secondary-teal to-accent-cyan text-white font-semibold rounded-lg shadow-cta hover:shadow-cta-hover hover:-translate-y-1 transition-all duration-300 ease-out whitespace-nowrap text-sm"
                  >
                    <span>REQUEST A QUOTE</span>
                  </Link>
                </div>
                <p className="absolute bottom-4 left-4 text-xs text-slate-400">FloatingCTA component • fixed top-24 right-4</p>
              </div>
            </Subsection>

            {/* Icon Buttons */}
            <Subsection title="Icon Buttons">
              <div className="flex flex-wrap items-center gap-6">
                <div className="space-y-3 text-center">
                  <button className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-all">
                    <ShoppingCart size={20} />
                  </button>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Cart</p>
                </div>
                <div className="space-y-3 text-center">
                  <button className="p-3 bg-slate-100 text-slate-600 rounded-xl">
                    <Mail size={20} />
                  </button>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Messages</p>
                </div>
                <div className="space-y-3 text-center">
                  <button className="p-3 bg-slate-100 text-slate-600 rounded-xl">
                    <User size={20} />
                  </button>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Profile</p>
                </div>
                <div className="space-y-3 text-center">
                  <button className="p-3 bg-primary-navy text-white rounded-full shadow-lg shadow-blue-900/20">
                    <Search size={20} />
                  </button>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Search</p>
                </div>
              </div>
            </Subsection>

            {/* Quantity Stepper */}
            <Subsection title="Quantity Stepper">
              <div className="flex items-center gap-8">
                <div className="flex items-center bg-slate-50 rounded-xl p-1 border border-slate-100">
                  <button className="p-2.5 hover:bg-white hover:shadow-sm rounded-lg transition-all text-slate-400 hover:text-primary-navy">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-5 text-sm font-black text-primary-navy min-w-[3rem] text-center">1</span>
                  <button className="p-2.5 hover:bg-white hover:shadow-sm rounded-lg transition-all text-slate-400 hover:text-primary-navy">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-slate-400">Used in cart and product pages</p>
              </div>
            </Subsection>
          </div>
        </StyleSection>

        {/* ============================================= */}
        {/* 05 - NAVIGATION */}
        {/* ============================================= */}
        <StyleSection 
          title="05 — Navigation" 
          description="Header navigation with hover states, active indicators, and mobile menu patterns."
        >
          <div className="space-y-12">
            {/* Nav Links */}
            <Subsection title="Navigation Links">
              <div className="flex items-center gap-8 p-6 bg-white border border-slate-100 rounded-2xl">
                <div className="space-y-2 text-center">
                  <span className="text-[13px] font-medium text-black">Products</span>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Default</p>
                </div>
                <div className="space-y-2 text-center">
                  <span className="text-[13px] font-medium text-primary-navy relative">
                    Products
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-500"></span>
                  </span>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Active</p>
                </div>
                <div className="space-y-2 text-center">
                  <span className="text-[13px] font-medium text-secondary-teal">Products</span>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Hover</p>
                </div>
              </div>
            </Subsection>

            {/* Scrolled Header State */}
            <Subsection title="Header States">
              <div className="space-y-6">
                <div className="p-4 glass-header rounded-2xl shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary-navy tracking-tighter">PBL<span className="font-light text-slate-400 ml-1">Assay Science</span></span>
                    <div className="flex items-center gap-6">
                      <span className="text-[13px] font-medium text-black">Products</span>
                      <span className="text-[13px] font-medium text-black">Services</span>
                      <span className="text-[13px] font-medium text-black">Resources</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-3">.glass-header (isScrolled state)</p>
                </div>
              </div>
            </Subsection>

            {/* Phosphor Link - NEW */}
            <Subsection title="Footer Links (.phosphor-link)">
              <div className="max-w-xs space-y-2 bg-white p-4 rounded-2xl border border-slate-100">
                <a href="#" className="phosphor-link text-sm text-slate-500 hover:text-secondary-teal">Assay Kits</a>
                <a href="#" className="phosphor-link text-sm text-slate-500 hover:text-secondary-teal">Proteins</a>
                <a href="#" className="phosphor-link text-sm text-slate-500 hover:text-secondary-teal">Antibodies</a>
                <p className="text-[10px] text-slate-400 mt-4">Left border + bg tint on hover</p>
              </div>
            </Subsection>

            {/* Sidebar Navigation */}
            <Subsection title="Sidebar Navigation (Profile/Account)">
              <div className="max-w-xs space-y-2">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold bg-primary-navy text-white shadow-lg shadow-blue-900/20">
                  <User className="w-4 h-4" /> Profile Details
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50">
                  <Package className="w-4 h-4" /> Order History
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50">
                  <FlaskConical className="w-4 h-4" /> Lab Affiliation
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50">
                  <CreditCard className="w-4 h-4" /> Payment Methods
                </button>
              </div>
            </Subsection>
          </div>
        </StyleSection>

        {/* ============================================= */}
        {/* 06 - FORM ELEMENTS */}
        {/* ============================================= */}
        <StyleSection 
          title="06 — Form Elements" 
          description="Input fields, search bars, and form controls with consistent styling and focus states."
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Text Inputs */}
            <Subsection title="Text Inputs">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="name@institution.edu"
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-bold text-primary-navy placeholder:text-slate-300 placeholder:font-normal focus:ring-2 focus:ring-cyan-500 focus:outline-none" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">With Icon</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                    <input 
                      type="email" 
                      placeholder="name@institution.edu"
                      className="w-full bg-slate-50 border-none rounded-2xl p-4 pl-12 text-sm font-bold text-primary-navy placeholder:text-slate-300 placeholder:font-normal focus:ring-2 focus:ring-cyan-500 focus:outline-none" 
                    />
                  </div>
                </div>
              </div>
            </Subsection>

            {/* Search Bar */}
            <Subsection title="Search Bar">
              <div className="space-y-6">
                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50/50 h-12 overflow-hidden w-full">
                  <div className="bg-slate-200/50 px-5 h-full text-[10px] font-black text-primary-navy border-r border-slate-200 uppercase tracking-widest flex items-center gap-2 cursor-pointer">
                    All <ChevronDown size={14} />
                  </div>
                  <div className="flex-1 flex items-center px-4 gap-3">
                    <Search size={18} className="text-slate-400" />
                    <input type="text" placeholder="Search products, protocols..." className="bg-transparent text-sm w-full outline-none" />
                  </div>
                  <button className="bg-secondary-teal h-full px-5 text-white hover:bg-primary-navy transition-colors">
                    <Search size={18} />
                  </button>
                </div>
                <p className="text-xs text-slate-400">Category dropdown + search input + submit button</p>
              </div>
            </Subsection>

            {/* Select Dropdown */}
            <Subsection title="Select Dropdown">
              <select className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-bold text-primary-navy focus:ring-2 focus:ring-cyan-500 focus:outline-none appearance-none cursor-pointer">
                <option value="">Select your role...</option>
                <option value="pi">Principal Investigator</option>
                <option value="postdoc">Postdoctoral Fellow</option>
                <option value="grad">Graduate Student</option>
              </select>
            </Subsection>

            {/* Checkbox & Toggle */}
            <Subsection title="Checkbox & Toggle">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500" defaultChecked />
                  <label className="text-sm text-slate-600 font-medium">Keep me signed in</label>
                </div>
                <div className="flex items-center gap-3">
                  <button className="relative w-12 h-7 rounded-full bg-cyan-500 transition-all">
                    <span className="absolute top-1 left-6 w-5 h-5 bg-white rounded-full shadow-sm" />
                  </button>
                  <span className="text-sm text-slate-600 font-medium">Enabled</span>
                </div>
              </div>
            </Subsection>
          </div>
        </StyleSection>

        {/* ============================================= */}
        {/* 07 - BADGES & TAGS */}
        {/* ============================================= */}
        <StyleSection 
          title="07 — Badges & Status Tags" 
          description="Visual indicators for categories, status, and metadata throughout the interface."
        >
          <div className="space-y-12">
            {/* Category Badges */}
            <Subsection title="Category Badges">
              <div className="flex flex-wrap gap-4">
                <span className="px-3 py-1.5 bg-cyan-50 text-[10px] font-black text-cyan-600 uppercase tracking-widest rounded-full border border-cyan-100">
                  Featured Product
                </span>
                <span className="px-3 py-1.5 bg-purple-50 text-[10px] font-black text-purple-600 uppercase tracking-widest rounded-full border border-purple-100">
                  New Release
                </span>
                <span className="px-3 py-1.5 bg-amber-50 text-[10px] font-black text-amber-600 uppercase tracking-widest rounded-full border border-amber-100">
                  Best Seller
                </span>
                <span className="px-3 py-1.5 bg-slate-50 text-[10px] font-black text-slate-500 uppercase tracking-widest rounded-full border border-slate-100">
                  Assay Kit
                </span>
              </div>
            </Subsection>

            {/* Status Badges */}
            <Subsection title="Status Badges">
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 text-[10px] font-black uppercase tracking-widest text-green-600 border border-green-100">
                  <CheckCircle2 className="w-3 h-3" /> Delivered
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-[10px] font-black uppercase tracking-widest text-blue-600 border border-blue-100">
                  <Truck className="w-3 h-3" /> In Transit
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 text-[10px] font-black uppercase tracking-widest text-amber-600 border border-amber-100">
                  <Clock className="w-3 h-3" /> Processing
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-500 border border-slate-100">
                  <Clock className="w-3 h-3" /> Pending
                </span>
              </div>
            </Subsection>

            {/* Glow Badge - NEW */}
            <Subsection title="Glow Badge (.glow-badge)">
              <div className="flex flex-wrap gap-4">
                <div 
                  className="glow-badge p-4 rounded-xl cursor-pointer"
                  onMouseEnter={() => setGlowHover(true)}
                  onMouseLeave={() => setGlowHover(false)}
                >
                  <p className="text-sm font-bold text-primary-navy">Navigation Card</p>
                  <p className="text-xs text-slate-400">Hover for glow effect</p>
                </div>
                <p className="self-center text-xs text-slate-400">Used in mega menu nav cards • cyan glow + translateY(-2px)</p>
              </div>
            </Subsection>

            {/* Hover Glow - NEW */}
            <Subsection title="Hover Glow (.hover-glow)">
              <div className="max-w-sm p-6 rounded-2xl border border-slate-200 hover-glow cursor-pointer">
                <p className="text-sm font-bold text-primary-navy mb-2">Service Card</p>
                <p className="text-xs text-slate-400">Hover for glow + lift effect (translateY -4px)</p>
              </div>
            </Subsection>

            {/* Product Meta Tags */}
            <Subsection title="Product Meta Tags">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 text-[10px] font-bold text-slate-500 border border-slate-100">
                  <Snowflake className="w-3 h-3 text-cyan-500" /> -70°C Storage
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 text-[10px] font-bold text-slate-500 border border-slate-100">
                  <Package className="w-3 h-3" /> 100 µg
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 text-[10px] font-bold text-slate-500 border border-slate-100">
                  <Beaker className="w-3 h-3" /> 96 wells
                </span>
              </div>
            </Subsection>

            {/* Message Category Badges */}
            <Subsection title="Message Category Badges">
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 text-[9px] font-bold text-green-600 border border-green-100">
                  <Package className="w-2.5 h-2.5" /> ORDER
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-50 text-[9px] font-bold text-purple-600 border border-purple-100">
                  <FileText className="w-2.5 h-2.5" /> QUOTE
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-50 text-[9px] font-bold text-cyan-600 border border-cyan-100">
                  <AlertCircle className="w-2.5 h-2.5" /> SUPPORT
                </span>
              </div>
            </Subsection>
          </div>
        </StyleSection>

        {/* ============================================= */}
        {/* 08 - CARDS & CONTAINERS */}
        {/* ============================================= */}
        <StyleSection 
          title="08 — Cards & Containers" 
          description="Reusable container patterns including the signature 60/40 Science Card layout."
        >
          {/* Banner Hero - NEW */}
          <Subsection title="Banner Hero (Page Headers)">
            <div className="relative rounded-2xl overflow-hidden" style={{
              background: 'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.12) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(180,100%,48%,0.08) 0, transparent 50%), #FBFBFE'
            }}>
              <div className="p-8 lg:p-12">
                <nav className="mb-6 flex items-center gap-2 text-sm font-semibold text-cyan-600 uppercase tracking-[0.25em]">
                  <span>Products</span>
                  <span className="text-gray-300">/</span>
                  <span>Assay Kits</span>
                </nav>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  <span className="text-primary-navy">Interferon</span> <span className="text-secondary-teal">ELISAs</span>
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 to-primary-navy rounded-full mb-6"></div>
                <p className="max-w-xl text-lg text-gray-600 font-light leading-relaxed">
                  High-sensitivity detection for research applications.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-50/50 to-transparent -skew-x-12 transform translate-x-1/4"></div>
            </div>
            <p className="text-xs text-slate-400 mt-4">BannerHero.tsx • Radial gradients + skewed accent shape</p>
          </Subsection>

          {/* Testimonial Card - NEW */}
          <Subsection title="Testimonial Card">
            <div className="max-w-2xl p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50">
              <Quote className="w-8 h-8 text-cyan-500/30 mb-4" />
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6 italic">
                &ldquo;Reliable quantification of IFN subtypes revolutionized our donor screening. PBL&apos;s high-sensitivity ELISAs allowed our team to detect baseline levels previously lost in the noise.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-navy to-secondary-teal flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary-navy">Senior Scientist</p>
                  <p className="text-xs text-slate-400">Large U.S. Pharma</p>
                </div>
              </div>
            </div>
          </Subsection>

          {/* Authority Bar - NEW */}
          <Subsection title="Footer Authority Bar">
            <div className="bg-slate-50/50 p-6 rounded-2xl border-y border-slate-100">
              <div className="flex flex-wrap items-center justify-center gap-12">
                <div className="text-center">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Certified Quality</div>
                  <div className="text-sm font-bold text-primary-navy">ISO 9001:2015</div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Global Reach</div>
                  <div className="text-sm font-bold text-primary-navy">Worldwide Distribution</div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Research Impact</div>
                  <div className="text-sm font-bold text-primary-navy">Cited in 50+ Journals</div>
                </div>
              </div>
            </div>
          </Subsection>

          {/* 60/40 Science Card */}
          <Subsection title="60/40 Science Card (Featured Product)">
            <div className="max-w-5xl bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row">
              {/* Left Column (60% Content) */}
              <div className="lg:w-[60%] p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-cyan-50 text-[10px] font-black text-cyan-600 uppercase tracking-widest rounded-full border border-cyan-100">
                      Featured Product
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      <Beaker size={12} /> Assay Kit
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-primary-navy mb-4 uppercase tracking-tight">VeriKine-HS Human IFN-Alpha All Subtype ELISA</h3>
                  <p className="text-slate-500 font-light leading-relaxed mb-8">
                    Designed for the quantification of Human Interferon Alpha subtype concentrations in various biological matrices with sub-picogram sensitivity.
                  </p>
                </div>
                
                <div className="flex items-center gap-6">
                  <button className="text-[13px] font-black text-secondary-teal uppercase tracking-widest flex items-center gap-2 group">
                    View Specifications <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column (40% Order Control) */}
              <div className="lg:w-[40%] bg-slate-50/50 border-t lg:border-t-0 lg:border-l border-slate-100 p-8 lg:p-10 flex flex-col gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-widest">
                    <span>Catalog #</span>
                    <span className="text-primary-navy font-black">41115-1</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-widest">
                    <span>Shipping Temp</span>
                    <span className="flex items-center gap-2 text-primary-navy">
                      <Thermometer size={14} className="text-cyan-600" /> Dry Ice
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-widest">
                    <span>Lead Time</span>
                    <span className="flex items-center gap-2 text-primary-navy">
                      <Box size={14} className="text-cyan-600" /> 3-5 Days
                    </span>
                  </div>
                </div>

                <div className="mt-auto space-y-4">
                  <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1 overflow-hidden">
                    <button className="w-10 h-10 flex items-center justify-center font-bold text-slate-400 hover:text-secondary-teal transition-colors">-</button>
                    <input type="number" defaultValue={1} className="flex-1 text-center font-bold text-primary-navy outline-none" readOnly />
                    <button className="w-10 h-10 flex items-center justify-center font-bold text-slate-400 hover:text-secondary-teal transition-colors">+</button>
                  </div>
                  <button className="w-full py-4 bg-primary-navy text-white text-[13px] font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-secondary-teal transition-colors">
                    <ShoppingCart size={18} /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </Subsection>

          {/* Cart Item Card */}
          <Subsection title="Cart Item Card">
            <div className="max-w-3xl group relative flex flex-col sm:flex-row gap-6 p-6 rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500">
              <div className="w-full sm:w-32 h-32 bg-slate-50 rounded-2xl flex items-center justify-center overflow-hidden">
                <FlaskConical className="w-12 h-12 text-slate-300" />
              </div>
              <div className="flex-1 flex flex-col min-w-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">
                      Interferon Proteins <span className="text-cyan-600">• CAT #11100-1</span>
                    </p>
                    <h3 className="text-lg font-bold text-primary-navy leading-tight">Human IFN Alpha A (2a)</h3>
                  </div>
                  <p className="text-xl font-bold text-primary-navy">$455.00</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 text-[10px] font-bold text-slate-500 border border-slate-100">
                    <Snowflake className="w-3 h-3 text-cyan-500" /> -70°C
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 text-[10px] font-bold text-slate-500 border border-slate-100">
                    <Package className="w-3 h-3" /> 100 µg
                  </span>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center bg-slate-50 rounded-xl p-1 border border-slate-100">
                    <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all text-slate-400"><Minus className="w-4 h-4" /></button>
                    <span className="px-4 text-sm font-black text-primary-navy">1</span>
                    <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all text-slate-400"><Plus className="w-4 h-4" /></button>
                  </div>
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" /> Remove
                  </button>
                </div>
              </div>
            </div>
          </Subsection>

          {/* Order Summary Card */}
          <Subsection title="Order Summary Card">
            <div className="max-w-sm rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl shadow-slate-200/50">
              <h2 className="text-xl font-bold text-primary-navy mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Subtotal (3 items)</span>
                  <span className="font-bold text-primary-navy">$1,705.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 flex items-center gap-2">Cold Chain Shipping <Truck className="w-3.5 h-3.5 text-cyan-500" /></span>
                  <span className="font-bold text-primary-navy">$45.00</span>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between items-baseline">
                  <span className="text-lg font-bold text-primary-navy">Total</span>
                  <span className="text-2xl font-black text-primary-navy">$1,750.00</span>
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-3 bg-primary-navy text-white py-4 rounded-2xl text-xs font-black uppercase tracking-[0.15em]">
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </button>
              <div className="mt-4 flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-cyan-600" />
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">Secure encrypted checkout via Stripe</p>
              </div>
            </div>
          </Subsection>
        </StyleSection>

        {/* ============================================= */}
        {/* 09 - DATA VISUALIZATION */}
        {/* ============================================= */}
        <StyleSection 
          title="09 — Data Visualization (Recharts)" 
          description="Scientific graphs and charts using Recharts library. Used on /biomarker-sample-analysis and product pages."
        >
          <div className="space-y-16">
            {/* Chart Overview */}
            <Subsection title="Chart Components Overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <LineChart className="w-8 h-8 text-cyan-500 mb-4" />
                  <h4 className="font-bold text-primary-navy mb-2">ComposedChart + Scatter</h4>
                  <p className="text-xs text-slate-500">Log-scale standard curves with R² values. Used for IL-3 MSD data.</p>
                  <p className="text-[10px] font-mono text-slate-400 mt-2">HumanIL3Graph.tsx</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <BarChart3 className="w-8 h-8 text-cyan-500 mb-4" />
                  <h4 className="font-bold text-primary-navy mb-2">BarChart + Gradient Fill</h4>
                  <p className="text-xs text-slate-500">Cell stimulation comparisons with gradient bars.</p>
                  <p className="text-[10px] font-mono text-slate-400 mt-2">JurkatStimulationGraph.tsx</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <TrendingUp className="w-8 h-8 text-cyan-500 mb-4" />
                  <h4 className="font-bold text-primary-navy mb-2">ScatterChart + ReferenceLine</h4>
                  <p className="text-xs text-slate-500">Plasma analysis with mean value indicators.</p>
                  <p className="text-[10px] font-mono text-slate-400 mt-2">PlasmaIL1BetaGraph.tsx</p>
                </div>
              </div>
            </Subsection>

            {/* Sample Line/Scatter Chart */}
            <Subsection title="Standard Curve Chart (HumanIL3Graph Pattern)">
              <div className="max-w-3xl p-8 bg-white rounded-[2.5rem] shadow-inner border border-slate-100/50">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-primary-navy tracking-tight">Sample Standard Curve</h4>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600 mt-1">Sensitivity Validation</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">R² Value</span>
                    <div className="text-sm font-mono font-bold text-primary-navy">0.9998</div>
                  </div>
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart margin={{ top: 20, right: 20, bottom: 40, left: 50 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis 
                        type="number" 
                        dataKey="x" 
                        domain={[0, 100]} 
                        stroke="#94a3b8"
                        fontSize={10}
                        fontWeight={700}
                        label={{ value: 'Concentration (pg/ml)', position: 'bottom', offset: 10, fill: '#64748b', fontSize: 10, fontWeight: 900 }}
                      />
                      <YAxis 
                        type="number" 
                        dataKey="y" 
                        domain={[0, 1000]} 
                        stroke="#94a3b8"
                        fontSize={10}
                        fontWeight={700}
                        label={{ value: 'Pixel Intensity', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 10, fontWeight: 900 }}
                      />
                      <Line 
                        type="monotone" 
                        data={[{x: 1, y: 50}, {x: 10, y: 100}, {x: 50, y: 400}, {x: 100, y: 900}]}
                        dataKey="y" 
                        stroke="#00F0F3" 
                        strokeWidth={2} 
                        dot={false}
                      />
                      <Scatter 
                        data={[{x: 1, y: 50}, {x: 10, y: 100}, {x: 50, y: 400}, {x: 100, y: 900}]}
                        fill="#002776"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-50 flex justify-between items-center">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#00F0F3]"></div>
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Digital Fit</span>
                    </div>
                  </div>
                  <p className="text-[10px] italic text-slate-400">Validated: MSD QuickPlex SQ 120MM</p>
                </div>
              </div>
            </Subsection>

            {/* Sample Bar Chart */}
            <Subsection title="Bar Chart with Gradient (JurkatStimulation Pattern)">
              <div className="max-w-3xl p-8 bg-white rounded-[2.5rem] shadow-inner border border-slate-100/50">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-primary-navy tracking-tight">Cell Stimulation Comparison</h4>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600 mt-1">Jurkat Cell Analysis</p>
                  </div>
                  <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Technique</span>
                    <div className="text-[10px] font-bold text-primary-navy">Cell Culture Bioassay</div>
                  </div>
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                      { name: 'Control', value: 50 },
                      { name: 'PHA', value: 240 },
                      { name: 'PMA', value: 80 },
                      { name: 'PHA/PMA', value: 640 },
                    ]} margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
                      <defs>
                        <linearGradient id="barGradientDemo" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00F0F3" />
                          <stop offset="100%" stopColor="#002776" />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} fontWeight={700} />
                      <YAxis stroke="#94a3b8" fontSize={10} fontWeight={700} />
                      <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={45}>
                        {[0, 1, 2, 3].map((index) => (
                          <Cell key={`cell-${index}`} fill={index === 0 ? '#e2e8f0' : 'url(#barGradientDemo)'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-50 flex gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00F0F3]"></div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Stimulated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Basal/Control</span>
                  </div>
                </div>
              </div>
            </Subsection>

            {/* Activity Bar Chart (from interferon-decoy-receptor) */}
            <Subsection title="Activity Profile Chart (Custom CSS Bars)">
              <div className="max-w-3xl p-10 bg-white rounded-[3.3rem] shadow-sm border border-slate-100">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="text-2xl font-bold text-primary-navy flex items-center gap-3">Activity Profile (IU/mg)</h4>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Validated Antagonism</span>
                </div>
                <div className="relative h-48 mb-8 flex items-end justify-between gap-1 border-b-2 border-slate-100 pb-4">
                  {[100, 85, 70, 60, 50, 45, 40, 35, 30, 25, 20, 18, 15, 12].map((height, index) => (
                    <div 
                      key={index} 
                      className={`flex-1 bg-gradient-to-t from-[#002776] ${index === 0 ? 'to-cyan-500' : 'to-cyan-400'} rounded-t-lg`}
                      style={{ 
                        height: `${height}%`,
                        filter: index === 0 ? 'drop-shadow(0 0 8px rgba(0, 240, 243, 0.4))' : 'none'
                      }}
                    />
                  ))}
                </div>
                <p className="text-xs text-slate-400">Custom CSS bar chart • gradient fill • first bar highlighted with glow</p>
                <p className="text-[10px] font-mono text-slate-400 mt-2">Used in /products/proteins/interferon-decoy-receptor</p>
              </div>
            </Subsection>

            {/* Chart Styling Tokens */}
            <Subsection title="Chart Styling Tokens">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="w-8 h-2 bg-[#00F0F3] rounded mb-2"></div>
                  <p className="text-xs font-bold text-slate-700">Line Stroke</p>
                  <p className="text-[10px] font-mono text-slate-400">#00F0F3</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="w-4 h-4 bg-[#002776] rounded-full border-2 border-white shadow mb-2"></div>
                  <p className="text-xs font-bold text-slate-700">Scatter Point</p>
                  <p className="text-[10px] font-mono text-slate-400">#002776 + white stroke</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <div className="w-8 h-2 bg-[#f1f5f9] mb-2"></div>
                  <p className="text-xs font-bold text-slate-700">Grid Lines</p>
                  <p className="text-[10px] font-mono text-slate-400">#f1f5f9 dashed</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-xs font-bold text-slate-700 mb-1">Axis Labels</p>
                  <p className="text-[10px] font-mono text-slate-400">10px • 900 weight • #64748b</p>
                </div>
              </div>
            </Subsection>
          </div>
        </StyleSection>

        {/* ============================================= */}
        {/* 10 - PRODUCT CATALOG TABLE */}
        {/* ============================================= */}
        <StyleSection 
          title="10 — Product Catalog Table" 
          description="Data table component for product listings with document downloads and quantity inputs."
        >
          <div className="space-y-12">
            {/* Desktop Table Preview */}
            <Subsection title="Desktop Table (ProductCatalog.tsx)">
              <div className="rounded-[2.5rem] border border-slate-200/60 bg-white/80 backdrop-blur-2xl shadow-[0_32px_64px_-16px_rgba(0,39,118,0.1)] overflow-hidden specular-glass">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 border-b border-slate-100">
                      <th className="px-6 py-4 text-[10px] font-black text-primary-navy uppercase tracking-[0.2em]">
                        <div className="flex items-center gap-2"><Hash className="w-3 h-3 text-cyan-500"/> Catalog No.</div>
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-primary-navy uppercase tracking-[0.2em]">
                        <div className="flex items-center gap-2"><FileText className="w-3 h-3 text-cyan-500"/> Description</div>
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-primary-navy uppercase tracking-[0.2em]">Size</th>
                      <th className="px-6 py-4 text-[10px] font-black text-primary-navy uppercase tracking-[0.2em]">Documents</th>
                      <th className="px-6 py-4 text-[10px] font-black text-primary-navy uppercase tracking-[0.2em] text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100/80">
                    <tr className="hover:bg-slate-50/80 transition-all duration-300">
                      <td className="px-6 py-6">
                        <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-xl bg-primary-navy text-white font-mono text-sm font-bold shadow-lg shadow-blue-900/10">
                          12185-1
                        </span>
                      </td>
                      <td className="px-6 py-6">
                        <p className="text-sm font-semibold text-slate-800">Mouse IFN Alpha Neutralizing Protein</p>
                      </td>
                      <td className="px-6 py-6">
                        <span className="text-xs font-black text-slate-400 tracking-tighter uppercase">10 µg</span>
                      </td>
                      <td className="px-6 py-6">
                        <a href="#" className="inline-flex items-center gap-2 text-[10px] font-bold text-cyan-600 hover:text-primary-navy">
                          <Download className="w-3 h-3"/> CoA
                        </a>
                      </td>
                      <td className="px-6 py-6 text-right">
                        <div className="text-xl font-black bg-gradient-to-r from-primary-navy to-secondary-teal bg-clip-text text-transparent">
                          $315.00
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400 mt-4">backdrop-blur-2xl • specular-glass border • gradient price text</p>
            </Subsection>

            {/* Table Features */}
            <Subsection title="Key Table Features">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-xl bg-primary-navy text-white font-mono text-sm font-bold shadow-lg shadow-blue-900/10 mb-4">
                    12185-1
                  </span>
                  <p className="text-xs font-bold text-slate-700">Catalog Number Badge</p>
                  <p className="text-[10px] text-slate-400">Navy bg + white mono text + shadow</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <div className="text-2xl font-black bg-gradient-to-r from-primary-navy to-secondary-teal bg-clip-text text-transparent mb-4">
                    $1,200.00
                  </div>
                  <p className="text-xs font-bold text-slate-700">Price Gradient Text</p>
                  <p className="text-[10px] text-slate-400">Navy to teal gradient • bg-clip-text</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <a href="#" className="inline-flex items-center gap-2 text-[10px] font-bold text-cyan-600 hover:text-primary-navy mb-4">
                    <Download className="w-4 h-4"/> Download CoA
                  </a>
                  <p className="text-xs font-bold text-slate-700 mt-2">Document Links</p>
                  <p className="text-[10px] text-slate-400">Cyan with underline decoration</p>
                </div>
              </div>
            </Subsection>

            {/* CTA Footer */}
            <Subsection title="Table CTA Footer">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-primary-navy rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,240,243,0.15)_0,transparent_50%)]"></div>
                <div className="relative z-10 text-center md:text-left">
                  <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">Request a custom study evaluation</h4>
                  <p className="text-blue-200 font-light text-sm">Our scientists provide fit-for-purpose assay development.</p>
                </div>
                <Link href="#" className="relative z-10 px-10 py-5 bg-[#00F0F3] text-primary-navy rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-cyan-400/20 hover:scale-105 hover:bg-white transition-all">
                  Consult a Scientist →
                </Link>
              </div>
              <p className="text-xs text-slate-400 mt-4">Dark navy footer with radial cyan glow overlay • accent CTA button</p>
            </Subsection>
          </div>
        </StyleSection>

        {/* ============================================= */}
        {/* 11 - DARK MODE COMPONENTS */}
        {/* ============================================= */}
        <StyleSection 
          title="11 — Dark Mode Components" 
          description="Dark-themed UI components used in product purchase sections and featured areas."
        >
          <div className="space-y-12">
            {/* Dark Purchase Card */}
            <Subsection title="Dark Purchase Portal (interferon-decoy-receptor)">
              <div className="max-w-md p-12 rounded-[3.5rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,rgba(0,240,243,0.15)_0,transparent_50%)]"></div>
                <div className="relative z-10">
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 mb-2">Available Now</div>
                  <div className="text-6xl font-black mb-10">
                    $315.00 <span className="text-sm font-normal text-slate-400 ml-2">USD</span>
                  </div>
                  
                  <div className="space-y-8 mb-12">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block mb-4">Pack Size</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button className="py-5 border-2 rounded-2xl text-xs font-bold transition-all border-cyan-400 bg-cyan-400/10 text-white">
                          10 µg
                        </button>
                        <button className="py-5 border-2 rounded-2xl text-xs font-bold transition-all border-white/10 hover:border-white/30 text-slate-400">
                          100 µg
                        </button>
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-6 bg-[#00F0F3] text-primary-navy rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-[1.02] transition-all shadow-xl shadow-cyan-400/30">
                    Add to Inquiry Cart →
                  </button>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4">bg-slate-900 • radial cyan overlay • cyan accent CTA</p>
            </Subsection>

            {/* Dark Mode Spec Grid */}
            <Subsection title="Dark Mode Specifications Grid">
              <div className="max-w-md p-10 rounded-[3rem] bg-slate-50 border border-slate-100 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-[9px] font-black uppercase text-slate-400 mb-1">Weight</p>
                  <p className="text-base font-bold text-primary-navy">32 KDa</p>
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase text-slate-400 mb-1">Purity</p>
                  <p className="text-base font-bold text-primary-navy">≥95%</p>
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase text-slate-400 mb-1">Endotoxin</p>
                  <p className="text-base font-bold text-primary-navy">&lt; 1 EU/µg</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4">Compact specification display beneath purchase card</p>
            </Subsection>
          </div>
        </StyleSection>

        {/* ============================================= */}
        {/* 12 - ANIMATIONS */}
        {/* ============================================= */}
        <StyleSection 
          title="12 — Animations & Transitions" 
          description="Keyframe animations and transition timing functions used throughout the interface."
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Keyframes */}
            <Subsection title="Keyframe Animations (globals.css)">
              <div className="space-y-6">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-xs font-mono text-slate-600 mb-2">@keyframes fade-in</p>
                  <p className="text-[10px] text-slate-400">opacity: 0 → 1, translateY(-10px) → 0</p>
                  <p className="text-[10px] text-slate-400 mt-1">Class: .animate-fade-in</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-xs font-mono text-slate-600 mb-2">@keyframes sectionReveal</p>
                  <p className="text-[10px] text-slate-400">opacity: 0 → 1, translateY(30px) + scale(0.98) → normal</p>
                  <p className="text-[10px] text-slate-400 mt-1">Class: .god-tier-reveal</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-xs font-mono text-slate-600 mb-2">@keyframes float</p>
                  <p className="text-[10px] text-slate-400">translateY(0px) → translateY(-10px) → translateY(0px)</p>
                  <p className="text-[10px] text-slate-400 mt-1">Infinite floating effect</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-xs font-mono text-slate-600 mb-2">@keyframes underline-expand</p>
                  <p className="text-[10px] text-slate-400">width: 0 → 100%</p>
                  <p className="text-[10px] text-slate-400 mt-1">Class: .animated-underline::after</p>
                </div>
              </div>
            </Subsection>

            {/* Timing Functions */}
            <Subsection title="Cubic Bezier Timing Functions">
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-xs font-mono text-slate-600 mb-1">cubic-bezier(0.16, 1, 0.3, 1)</p>
                  <p className="text-[10px] text-slate-400">iOS-standard swift curve • sectionReveal, brand-logo</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-xs font-mono text-slate-600 mb-1">cubic-bezier(0.34, 1.56, 0.64, 1)</p>
                  <p className="text-[10px] text-slate-400">Bounce curve • glyph-group hover</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-xs font-mono text-slate-600 mb-1">cubic-bezier(0.22, 1, 0.36, 1)</p>
                  <p className="text-[10px] text-slate-400">Smooth ease-out • glow-line underline</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-xs font-mono text-slate-600 mb-1">cubic-bezier(0.4, 0, 0.2, 1)</p>
                  <p className="text-[10px] text-slate-400">Material Design standard • glow-badge, hover-glow</p>
                </div>
              </div>
            </Subsection>

            {/* Transition Durations */}
            <Subsection title="Standard Durations">
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-slate-50 rounded-lg">
                  <p className="text-xs font-mono text-slate-600">150ms</p>
                  <p className="text-[10px] text-slate-400">Quick micro-interactions</p>
                </div>
                <div className="px-4 py-2 bg-slate-50 rounded-lg">
                  <p className="text-xs font-mono text-slate-600">300ms</p>
                  <p className="text-[10px] text-slate-400">Standard transitions</p>
                </div>
                <div className="px-4 py-2 bg-slate-50 rounded-lg">
                  <p className="text-xs font-mono text-slate-600">500ms</p>
                  <p className="text-[10px] text-slate-400">Hover glow, cart items</p>
                </div>
                <div className="px-4 py-2 bg-slate-50 rounded-lg">
                  <p className="text-xs font-mono text-slate-600">800ms</p>
                  <p className="text-[10px] text-slate-400">Section reveals</p>
                </div>
              </div>
            </Subsection>
          </div>
        </StyleSection>

        {/* ============================================= */}
        {/* 13 - ICONS */}
        {/* ============================================= */}
        <StyleSection 
          title="13 — Icon Library" 
          description="Lucide React icons used throughout the interface at consistent sizes (16-24px)."
        >
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4">
            {[
              { icon: Search, name: 'Search' },
              { icon: ShoppingCart, name: 'Cart' },
              { icon: Mail, name: 'Mail' },
              { icon: User, name: 'User' },
              { icon: ArrowRight, name: 'Arrow' },
              { icon: ChevronDown, name: 'Chevron' },
              { icon: ChevronRight, name: 'ChevronR' },
              { icon: Menu, name: 'Menu' },
              { icon: X, name: 'Close' },
              { icon: FlaskConical, name: 'Flask' },
              { icon: Beaker, name: 'Beaker' },
              { icon: Microscope, name: 'Microscope' },
              { icon: ShieldCheck, name: 'Shield' },
              { icon: Star, name: 'Star' },
              { icon: Package, name: 'Package' },
              { icon: FileText, name: 'File' },
              { icon: Truck, name: 'Truck' },
              { icon: Thermometer, name: 'Temp' },
              { icon: Snowflake, name: 'Cold' },
              { icon: Box, name: 'Box' },
              { icon: Plus, name: 'Plus' },
              { icon: Minus, name: 'Minus' },
              { icon: Trash2, name: 'Trash' },
              { icon: Eye, name: 'Eye' },
              { icon: Lock, name: 'Lock' },
              { icon: Download, name: 'Download' },
              { icon: ExternalLink, name: 'External' },
              { icon: CheckCircle2, name: 'Check' },
              { icon: Clock, name: 'Clock' },
              { icon: AlertCircle, name: 'Alert' },
              { icon: Info, name: 'Info' },
              { icon: Bell, name: 'Bell' },
              { icon: Settings, name: 'Settings' },
              { icon: CreditCard, name: 'Card' },
              { icon: Quote, name: 'Quote' },
              { icon: Building2, name: 'Building' },
              { icon: Hash, name: 'Hash' },
              { icon: BarChart3, name: 'BarChart' },
              { icon: LineChart, name: 'LineChart' },
              { icon: TrendingUp, name: 'Trending' },
            ].map((item) => (
              <div key={item.name} className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                <item.icon className="w-5 h-5 text-slate-600" />
                <span className="text-[9px] text-slate-400 font-mono">{item.name}</span>
              </div>
            ))}
          </div>
        </StyleSection>

        {/* ============================================= */}
        {/* 14 - TRUST ELEMENTS */}
        {/* ============================================= */}
        <StyleSection 
          title="14 — Trust & Security Elements" 
          description="Visual elements that build user confidence for a scientific e-commerce platform."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <ShieldCheck className="w-5 h-5 text-cyan-600" />
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">Secure encrypted checkout via Stripe</p>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-100">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <p className="text-[10px] font-bold text-green-600 uppercase tracking-tight">Verified Researcher Account</p>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/50 border border-amber-100">
              <Info className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-[10px] text-amber-700 leading-relaxed">Temperature-sensitive materials require cold chain logistics.</p>
            </div>
          </div>
        </StyleSection>

        {/* ============================================= */}
        {/* FOOTER */}
        {/* ============================================= */}
        <div className="mt-24 pt-12 border-t border-slate-100 text-center">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest">
            PBL Assay Science Design System • Version 2.0 • Updated January 2026
          </p>
          <p className="text-[9px] text-slate-300 mt-2">
            Fonts: Open Sauce One + Inter • Icons: Lucide React • Charts: Recharts • Styling: Tailwind CSS
          </p>
        </div>

      </main>
    </div>
  );
}

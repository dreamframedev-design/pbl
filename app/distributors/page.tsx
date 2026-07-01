import type { Metadata } from 'next';
import Link from 'next/link';
import { Globe, ArrowRight } from 'lucide-react';
import PageHero from '@/components/company/PageHero';
import SpeakToScientistCTA from '@/components/company/SpeakToScientistCTA';

export const metadata: Metadata = {
  title: 'Distributors | PBL Assay Science',
  description:
    'PBL Assay Science ships products and provides assay services directly to customers around the world, supported by a network of dedicated distributors.',
};

export default function DistributorsPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      <PageHero
        eyebrow={['Support', 'Distributors']}
        titleLines={['A trusted network', 'serving research']}
        accent="around the world."
        image="meso scale.webp"
        imageAlt="PBL Assay Science global distributors"
      />

      {/* Intro */}
      <section className="py-20 md:py-28 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            PBL Assay Science ships products and provides assay services directly to
            customers around the world. Learn how to place orders directly with PBL{' '}
            <Link
              href="/contact-us"
              className="text-secondary-teal font-medium underline underline-offset-4 hover:text-[#002776]"
            >
              here
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Distributors network */}
      <section className="py-20 md:py-28 bg-[#F4F4F9]/40">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="p-1 rounded-[2.5rem] hover-glow" style={{
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(226,232,240,0.8)',
          }}>
            <div className="bg-white rounded-[2.2rem] p-10 md:p-14">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#002776] to-[#058A9F] flex items-center justify-center text-white mb-8">
                <Globe className="w-8 h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#002776] mb-6">
                Distributors
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
                PBL maintains a network of dedicated and reliable distributors around the
                world. If you cannot locate a distributor in your region, please contact us
                and we will connect you with the right partner for your location.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.pblassaysci.com/distributors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#002776] text-white font-medium rounded-full hover:scale-105 transition-all shadow-lg shadow-[#002776]/20"
                >
                  Find a Distributor <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-7 py-3.5 bg-white text-[#002776] font-medium rounded-full border border-slate-200 hover:border-secondary-teal hover:text-secondary-teal transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-slate-400 font-light text-center max-w-2xl mx-auto">
            Note for developers: the searchable, country-by-country distributor directory is
            served dynamically on the live PBL site. This page presents the recommended
            layout and entry point; the interactive distributor list can be wired into the
            &ldquo;Find a Distributor&rdquo; action.
          </p>
        </div>
      </section>

      <SpeakToScientistCTA />
    </main>
  );
}

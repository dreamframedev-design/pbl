import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/company/PageHero';
import SpeakToScientistCTA from '@/components/company/SpeakToScientistCTA';

export const metadata: Metadata = {
  title: 'Careers | PBL Assay Science',
  description:
    'At PBL we pride ourselves on creating an environment where you are not constrained by your position or department function. Explore careers with us.',
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      <PageHero
        eyebrow={['Company', 'Careers']}
        titleLines={['Grow with a', 'team that']}
        accent="grows together."
        image="18.webp"
        imageAlt="Careers at PBL Assay Science"
      />

      {/* Intro */}
      <section className="py-20 md:py-28 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed">
          <p>
            At PBL we pride ourselves on creating an environment where you are not
            constrained by your position or your department function. We are still small
            enough that you have an opportunity to learn things outside of the traditional
            boundaries of your job description. You are encouraged to talk to others in
            different departments, learn new skills, work on interdepartmental projects,
            and develop both personally and professionally. As a matter of fact, we require
            it. We work to support, challenge, and inspire each other, so we can all succeed
            together.
          </p>
        </div>
      </section>

      {/* Values + Benefits cards */}
      <section className="py-20 md:py-28 bg-[#F4F4F9]/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group bg-white rounded-[2.2rem] p-10 md:p-12 border border-slate-100 shadow-sm hover:shadow-image transition-all duration-500">
            <p className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.3em] mb-6">
              Who We Are
            </p>
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
              See what we strive to be and what&apos;s important to us — these are the key
              principles that reflect the kind of company we are.
            </p>
            <Link
              href="/company-values"
              className="inline-flex items-center px-6 py-3 bg-[#002776] text-white font-medium rounded-full hover:scale-105 transition-all shadow-lg shadow-[#002776]/20"
            >
              Our Belief, Vision & Values
            </Link>
          </div>

          <div className="group bg-white rounded-[2.2rem] p-10 md:p-12 border border-slate-100 shadow-sm hover:shadow-image transition-all duration-500">
            <p className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.3em] mb-6">
              Compensation & Benefits
            </p>
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
              PBL offers a compensation package including a competitive salary commensurate
              with experience and a comprehensive benefits package.
            </p>
            <a
              href="https://www.pblassaysci.com/careers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-[#002776] font-medium rounded-full border border-slate-200 hover:border-secondary-teal hover:text-secondary-teal transition-all"
            >
              See a benefits overview
            </a>
          </div>
        </div>
      </section>

      {/* Current openings */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
            After reviewing all of the above, if you think you would be a good fit at PBL,
            please see our current openings below and apply for the position for which you
            are qualified.
          </p>
          <div className="rounded-[2.2rem] border border-dashed border-slate-300 bg-[#F4F4F9]/40 p-12 text-center">
            <h2 className="text-2xl font-bold text-[#002776] mb-4">Current Job Openings</h2>
            <p className="text-slate-500 font-light mb-8">
              For the latest open positions and to apply, please reach out to our team.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-secondary-teal to-accent-cyan text-white font-medium rounded-full hover:scale-105 transition-all shadow-cta"
            >
              Contact Us to Apply
            </Link>
          </div>
        </div>
      </section>

      <SpeakToScientistCTA />
    </main>
  );
}

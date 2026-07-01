import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/company/PageHero';
import SpeakToScientistCTA from '@/components/company/SpeakToScientistCTA';

export const metadata: Metadata = {
  title: 'About Us | PBL Assay Science',
  description:
    'For over 30 years PBL Assay Science has developed and supplied specialty immunoassay products and biomarker testing services to researchers around the world.',
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      <PageHero
        eyebrow={['Company', 'About']}
        titleLines={['Advancing science', 'through quality']}
        accent="for over 30 years."
        image="lab scientists search hero.webp"
        imageAlt="PBL Assay Science laboratory"
      />

      {/* Intro / mission */}
      <section className="py-20 md:py-28 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed">
          <p>
            For over 30 years PBL Assay Science has developed and supplied specialty
            immunoassay products and biomarker testing services to basic, drug
            development, translational, and clinical researchers around the world. PBL
            supports multinational pharmaceutical companies, biotechnology companies,
            virtual pharmas, and academic and research institutions. We believe people
            deserve new and improved interventions to treat disease and improve human
            health, and our vision is to enable the scientific community to overcome
            challenges through the high-quality solutions we deliver and the trust we
            inspire.
          </p>
          <p>
            Interferons and other cytokines are immune system proteins and important
            biomarkers in drug discovery and development. PBL has built a reputation as a
            high-quality manufacturer of interferon and cytokine proteins and antibodies,
            as well as pre-packaged, best-in-class interferon and cytokine immunoassay
            kits. Many of the products we produce and sell enjoy lengthy track records of
            use in studies described in high-impact publications and have been externally
            validated in challenging matrices for use in clinical programs.
          </p>
          <p>
            PBL has decades of experience developing and running immunoassays.
            Accordingly, we work hand in hand with study leads and researchers who wish to
            leverage PBL&apos;s Assay Services expertise and capabilities to expedite their
            clinical studies and internal R&amp;D efforts. Through the accurate measurement
            of biomarkers, our clients seek to distinguish between healthy individuals and
            patients with disease, to stratify patients, and to assess the beneficial and
            off-target effects of therapeutic treatments. PBL has developed biomarker
            assays, transferred assays both to and from clients, and is currently providing
            extensive biomarker assay performance qualification and biomarker sample
            testing services on several high-sensitivity and multiplexed bioanalytical
            platforms.
          </p>
        </div>
      </section>

      {/* Founders / heritage highlight */}
      <section className="py-20 md:py-28 bg-[#F4F4F9]/40">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="p-1 rounded-[2.5rem] hover-glow" style={{
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(226,232,240,0.8)',
          }}>
            <div className="bg-white rounded-[2.2rem] p-10 md:p-14">
              <p className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.3em] mb-6">
                Our Origins
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                PBL&apos;s beginnings are as a major provider of products, services,
                information, and know-how related primarily to interferons. The pioneering
                interferon research conducted by our co-founder,{' '}
                <span className="font-semibold text-[#002776]">Sidney Pestka, M.D.</span>,
                and his many colleagues and collaborators reflects decades of exploration
                into interferon&apos;s applications in medicine. Dr. Pestka, a biochemist and
                geneticist and recipient of the National Medal of Technology, is sometimes
                referred to as the{' '}
                <span className="italic text-[#8B2981] font-medium">
                  &ldquo;father of interferons&rdquo;
                </span>{' '}
                for his groundbreaking work developing the interferons as treatments for
                major diseases such as hepatitis, multiple sclerosis, and cancer. He and
                his wife Joan Pestka started PBL in 1990 to make available to scientists
                around the world the research products he had developed in the course of
                his pharmaceutical and academic careers.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/history"
                  className="inline-flex items-center px-6 py-3 bg-[#002776] text-white font-medium rounded-full hover:scale-105 transition-all shadow-lg shadow-[#002776]/20"
                >
                  Explore our history
                </Link>
                <Link
                  href="/pbl-team"
                  className="inline-flex items-center px-6 py-3 bg-white text-[#002776] font-medium rounded-full border border-slate-200 hover:border-secondary-teal hover:text-secondary-teal transition-all"
                >
                  Meet the team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SpeakToScientistCTA />
    </main>
  );
}

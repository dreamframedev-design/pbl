import type { Metadata } from 'next';
import PageHero from '@/components/company/PageHero';
import SpeakToScientistCTA from '@/components/company/SpeakToScientistCTA';
import TeamGrid from '@/components/company/TeamGrid';
import { managementTeam, advisoryBoard, founders } from './teamData';

export const metadata: Metadata = {
  title: 'PBL Team | PBL Assay Science',
  description:
    'Meet the management team, scientific advisory board, and founders of PBL Assay Science. Click any team member to read their full bio.',
};

export default function PBLTeamPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      <PageHero
        eyebrow={['Company', 'PBL Team']}
        titleLines={['The people', 'behind the']}
        accent="science."
        image="scientists in lab dark neon.webp"
        imageAlt="PBL Assay Science team"
      />

      {/* Guiding quote */}
      <section className="py-16 md:py-20 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl font-light font-serif italic text-[#058A9F] leading-relaxed">
            &ldquo;We believe people deserve new and improved interventions to treat disease
            and improve human health.&rdquo;
          </p>
        </div>
      </section>

      <TeamGrid
        sections={[
          { title: 'Management Team', members: managementTeam, tint: true },
          { title: 'Scientific Advisory Board', members: advisoryBoard, tint: false },
          { title: 'Founders', members: founders, tint: true, narrow: true },
        ]}
      />

      <SpeakToScientistCTA />
    </main>
  );
}

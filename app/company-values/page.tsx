import type { Metadata } from 'next';
import PageHero from '@/components/company/PageHero';
import SpeakToScientistCTA from '@/components/company/SpeakToScientistCTA';

export const metadata: Metadata = {
  title: 'Belief, Vision and Values | PBL Assay Science',
  description:
    "PBL's Core Values are the key principles that reflect the kind of company PBL is — and we rely on them in every decision we make.",
};

const coreValues: { title: string; text: string }[] = [
  {
    title: 'Doing the Right Thing',
    text: 'We take our best interests to heart and behave in ways that inspire the trust of our customers and trust in each other.',
  },
  {
    title: 'Ambition',
    text: 'We have courage to set goals and maintain focus as we pursue our unique Vision for ourselves and for our company.',
  },
  {
    title: 'Teamwork',
    text: 'We acknowledge each other’s strengths and experience, communicate openly, and work together to make decisions and achieve our goals. We work with our customers to understand their needs, share ideas, and help overcome their challenges as they seek new and improved interventions to treat disease and improve human health.',
  },
  {
    title: 'Quality',
    text: 'The high performance standards of our products and services and the professionalism of our approach are defining company characteristics and the differentiating factors that customers have come to rely upon and that bind us together as a team.',
  },
  {
    title: 'Helping People',
    text: 'Yes, we have to be for ourselves first: for if we don’t believe in ourselves, who will believe in us and how will we be able to accomplish our goals which are aimed at helping others? But if we are only for ourselves, what does that say about us? We care for our fellow employees, our customers, our company, our community, and society at large. That means we ask ourselves what others need or desire even when we or the company may not benefit.',
  },
  {
    title: 'Accountability',
    text: 'We follow our Belief, pursue our Vision, and stay true to our Core Values. We make decisions and set clear expectations, take responsibility for our decisions and actions, and fulfill our commitments to our customers and to each other.',
  },
  {
    title: 'Respect',
    text: 'We value each other’s skills, perspectives, opinions and ideas, allowing us to be comfortable listening and expressing ourselves, building trust and promoting understanding, and enabling us to care for each other and work together productively toward our common goals.',
  },
  {
    title: 'Passion',
    text: 'We take a keen interest in our work, approach our challenges with eagerness, acknowledge each other’s contributions, take pride in our accomplishments, spread encouragement and positivity, and keep our work as fresh and fun as possible, motivating us and keeping us excited to come to work each day.',
  },
];

export default function CompanyValuesPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE] text-[#002776]">
      <PageHero
        eyebrow={['Company', 'Belief, Vision & Values']}
        titleLines={['What we believe', 'and how we']}
        accent="show up every day."
        image="16.webp"
        imageAlt="PBL Assay Science values"
      />

      {/* Belief + Vision */}
      <section className="py-20 md:py-28 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-1 rounded-[2.5rem] hover-glow" style={{
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(226,232,240,0.8)',
          }}>
            <div className="bg-white rounded-[2.2rem] p-10 md:p-12 h-full">
              <p className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.3em] mb-6">
                We Believe…
              </p>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-[#002776]">
                …people deserve new and improved interventions to treat disease and improve
                human health.
              </p>
            </div>
          </div>
          <div className="p-1 rounded-[2.5rem] hover-glow" style={{
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(226,232,240,0.8)',
          }}>
            <div className="bg-[#002776] rounded-[2.2rem] p-10 md:p-12 h-full">
              <p className="text-[10px] font-black text-cyan-300 uppercase tracking-[0.3em] mb-6">
                Our Vision…
              </p>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-white">
                …is to enable the scientific community to overcome challenges through the
                high-quality solutions we deliver and the trust we inspire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-[#F4F4F9]/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Core Values</h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              PBL&apos;s values are at the core of Who We Are and What We Do. Our Core Values
              are key principles that reflect the kind of company PBL is, and we rely on our
              Core Values in every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <div
                key={value.title}
                className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-image transition-all duration-500 hover:-translate-y-1"
              >
                <span className="text-4xl font-black text-slate-100 group-hover:text-secondary-teal/30 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-bold text-[#002776] mt-2 mb-4">{value.title}</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SpeakToScientistCTA />
    </main>
  );
}

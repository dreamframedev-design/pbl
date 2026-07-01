'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import type { TeamMember, BioBlock } from '@/app/pbl-team/teamData';

function BioBody({ bio }: { bio: BioBlock[] }) {
  return (
    <div className="space-y-5">
      {bio.map((block, i) =>
        typeof block === 'string' ? (
          <p key={i} className="text-base text-slate-600 font-light leading-relaxed">
            {block}
          </p>
        ) : (
          <ul key={i} className="space-y-2.5 pl-1">
            {block.list.map((item, j) => (
              <li
                key={j}
                className="flex items-start gap-3 text-base text-slate-600 font-light leading-relaxed"
              >
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-secondary-teal flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
}

function MemberCard({ member, onOpen }: { member: TeamMember; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Read ${member.name}'s bio`}
      className="group text-left bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-image transition-all duration-500 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-teal focus-visible:ring-offset-2"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
        <Image
          src={`/images/team/${member.photo}`}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 50vw, 300px"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002776]/70 via-[#002776]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="absolute bottom-4 left-4 right-4 flex items-center gap-1.5 text-white text-sm font-semibold translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          Read bio <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-[#002776] leading-tight">{member.name}</h3>
        <p className="text-sm text-secondary-teal font-medium mt-2">{member.role}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-slate-400 group-hover:text-secondary-teal transition-colors">
          Read bio <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </button>
  );
}

function BioModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prev;
    };
  }, [handleKey]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${member.name} biography`}
        className="relative w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[88vh] bg-white rounded-t-[2rem] sm:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.98 }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      >
        {/* Header */}
        <div
          className="relative flex items-center gap-5 p-6 sm:p-8 border-b border-slate-100"
          style={{
            background:
              'radial-gradient(at 0% 0%, hsla(197,100%,49%,0.10) 0, transparent 60%), radial-gradient(at 100% 0%, hsla(222,47%,11%,0.05) 0, transparent 55%)',
          }}
        >
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden flex-shrink-0 border border-slate-100 shadow-image">
            <Image
              src={`/images/team/${member.photo}`}
              alt={member.name}
              fill
              sizes="96px"
              className="object-cover object-top"
            />
          </div>
          <div className="min-w-0 pr-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#002776] leading-tight">
              {member.name}
            </h2>
            <p className="text-sm font-medium text-secondary-teal mt-1">{member.role}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close biography"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#002776] hover:border-slate-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable bio */}
        <div className="overflow-y-auto p-6 sm:p-8">
          <BioBody bio={member.bio} />
        </div>
      </motion.div>
    </motion.div>
  );
}

interface Section {
  title: string;
  members: TeamMember[];
  tint?: boolean;
  narrow?: boolean;
}

export default function TeamGrid({ sections }: { sections: Section[] }) {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <>
      {sections.map((section) => (
        <section
          key={section.title}
          className={`py-20 md:py-28 ${section.tint ? 'bg-[#F4F4F9]/40' : 'bg-white'}`}
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight whitespace-nowrap text-[#002776]">
                {section.title}
              </h2>
              <span className="h-px flex-1 bg-gradient-to-r from-secondary-teal/40 to-transparent" />
            </div>
            <div
              className={`grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${
                section.narrow ? 'max-w-2xl' : ''
              }`}
            >
              {section.members.map((member) => (
                <MemberCard
                  key={member.slug}
                  member={member}
                  onOpen={() => setSelected(member)}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <AnimatePresence>
        {selected && <BioModal member={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
}

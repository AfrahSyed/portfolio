import { useEffect, useState } from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import {
  ArrowUpRight,
  Award,
  Briefcase,
  Code2,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import {
  certifications,
  education,
  experience,
  honors,
  profile,
  projects,
  skills,
  summary,
  volunteer,
} from '../data/resume';
import { cleanText } from '../utils/text';
import BentoCard from './BentoCard';
import Header from './Header';
import LinksCard from './LinksCard';
import ProfileCard from './ProfileCard';

const STAGGER = 0.07;

export default function BentoGrid() {
  const [spread, setSpread] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSpread(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-7xl px-4 py-6 md:px-8 md:py-10">
      <motion.div
        className="rounded-[2rem] bg-[var(--color-frame)] p-3 shadow-2xl md:rounded-[2.5rem] md:p-4"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <LayoutGroup>
          <motion.div
            layout
            className="bento-stage"
            data-spread={spread ? 'true' : 'false'}
          >
            <Header spread={spread} />
            <HeroCard spread={spread} delay={0} />
            <ExperienceCard spread={spread} delay={STAGGER} />
            <AboutCard spread={spread} delay={STAGGER * 2} />
            <EducationCard spread={spread} delay={STAGGER * 3} />
            <HonorsCard spread={spread} delay={STAGGER * 4} />
            <LinksCard spread={spread} delay={STAGGER * 5} />
            <SkillsCard spread={spread} delay={STAGGER * 6} />
            <ProjectsSection spread={spread} />
            <CertificationsCard spread={spread} delay={STAGGER * 8} />
            <VolunteerCard spread={spread} delay={STAGGER * 9} />
            <ProfileCard spread={spread} />
          </motion.div>
        </LayoutGroup>
      </motion.div>
    </div>
  );
}

function HeroCard({ spread, delay }) {
  return (
    <BentoCard
      spread={spread}
      delay={delay}
      stackOrder={1}
      tone="light"
      cardClass="card-hero card-top"
      className="flex flex-col justify-center !p-6"
    >
      <Sparkles className="mb-4 text-[var(--color-accent)]" size={22} />
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Portfolio | {new Date().getFullYear()}
        </p>
        <h2 className="mt-3 font-display text-[1.75rem] leading-[1.12] md:text-[2rem]">
          Turning ideas into{' '}
          <em className="not-italic text-[var(--color-accent-3)]">live products</em> that people love
          to use.
        </h2>
      </div>
    </BentoCard>
  );
}

function AboutCard({ spread, delay }) {
  return (
    <BentoCard
      id="about"
      spread={spread}
      delay={delay}
      stackOrder={2}
      tone="mint"
      cardClass="card-about bento-scroll overflow-y-auto"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
        About
      </p>
      <p className="mt-3 text-sm leading-relaxed md:text-[15px]">{summary}</p>
    </BentoCard>
  );
}

function ExperienceCard({ spread, delay }) {
  return (
    <BentoCard
      id="experience"
      spread={spread}
      delay={delay}
      stackOrder={3}
      tone="sky"
      cardClass="card-experience card-top"
      className="flex max-h-[300px] flex-col !p-5"
    >
      <div className="flex shrink-0 items-center justify-between">
        <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          <Briefcase size={14} />
          Experience
        </p>
        <ArrowUpRight size={18} className="text-[var(--color-accent-3)]" />
      </div>
      <motion.div className="bento-scroll mt-3 min-h-0 flex-1 space-y-5 pr-0.5">
        {experience.map((job) => (
          <div
            key={job.role + job.company}
            className="border-t border-[var(--color-ink)]/10 pt-4 first:border-0 first:pt-0"
          >
            <h3 className="font-display text-lg">{job.role}</h3>
            <p className="text-sm font-medium text-[var(--color-accent-3)]">
              {job.company} | {cleanText(job.period)}
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-[var(--color-muted)]">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </BentoCard>
  );
}

function EducationCard({ spread, delay }) {
  return (
    <BentoCard spread={spread} delay={delay} stackOrder={4} tone="lavender" cardClass="card-education">
      <GraduationCap className="text-[var(--color-accent-3)]" size={20} />
      <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
        Education
      </p>
      <h3 className="mt-2 font-display text-xl">{education.degree}</h3>
      <p className="mt-1 text-sm text-[var(--color-muted)]">{education.school}</p>
      <p className="mt-2 text-sm font-medium">{cleanText(education.period)}</p>
    </BentoCard>
  );
}

function SkillsCard({ spread, delay }) {
  const groups = [
    { label: 'Languages', items: skills.languages },
    { label: 'Web', items: skills.web },
    { label: 'Databases', items: skills.databases },
    { label: 'Concepts', items: skills.concepts },
    { label: 'DevOps & Tools', items: skills.devops },
  ];

  return (
    <BentoCard
      spread={spread}
      delay={delay}
      stackOrder={5}
      tone="coral"
      cardClass="card-skills bento-scroll overflow-y-auto"
    >
      <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
        <Code2 size={14} />
        Technical Skills
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {groups.map((g) => (
          <div key={g.label}>
            <p className="text-xs font-semibold text-[var(--color-accent-3)]">{g.label}</p>
            <motion.div className="mt-2 flex flex-wrap gap-1.5">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/80 px-2.5 py-1 text-xs text-[var(--color-ink)]"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}

function HonorsCard({ spread, delay }) {
  return (
    <BentoCard spread={spread} delay={delay} stackOrder={6} tone="blush" cardClass="card-honors">
      <Award className="text-[var(--color-accent)]" size={20} />
      <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
        Honors & Awards
      </p>
      {honors.map((h) => (
        <div key={h.title} className="mt-3">
          <h3 className="font-display text-lg">{cleanText(h.title)}</h3>
          <p className="text-sm text-[var(--color-muted)]">{cleanText(h.school)}</p>
          <p className="mt-1 text-xs">
            {cleanText(h.date)} - {cleanText(h.detail)}
          </p>
        </div>
      ))}
    </BentoCard>
  );
}


function ProjectsSection({ spread }) {
  return (
    <BentoCard
      id="projects"
      spread={spread}
      delay={STAGGER * 10}
      stackOrder={9}
      tone="light"
      cardClass="card-projects"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
        Projects
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            className="rounded-2xl border border-[var(--color-ink)]/8 bg-gradient-to-br from-white to-[var(--color-card-sky)] p-4"
            initial={{ opacity: 0, y: 12 }}
            animate={spread ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ delay: 1.8 + i * 0.04 }}
          >
            <h3 className="font-display text-lg text-[var(--color-accent-3)]">{p.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </BentoCard>
  );
}

function CertificationsCard({ spread, delay }) {
  return (
    <BentoCard
      spread={spread}
      delay={delay}
      stackOrder={10}
      tone="mint"
      cardClass="card-certifications bento-scroll max-h-[280px]"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
        Certifications
      </p>
      <ul className="mt-4 space-y-2">
        {certifications.map((c) => (
          <li key={c} className="flex gap-2 text-sm text-[var(--color-muted)]">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-2)]" />
            {c}
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}

function VolunteerCard({ spread, delay }) {
  return (
    <BentoCard
      spread={spread}
      delay={delay}
      stackOrder={11}
      tone="lavender"
      cardClass="card-volunteer bento-scroll max-h-[360px] overflow-y-auto md:max-h-[400px]"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
        Volunteer Experience
      </p>
      <div className="mt-4 space-y-5">
        {volunteer.map((v) => (
          <motion.div key={v.role}>
            <h3 className="font-display text-lg">{v.role}</h3>
            <p className="text-sm text-[var(--color-accent-3)]">
              {v.org} | {v.period}
            </p>
            <ul className="mt-2 space-y-1 text-sm text-[var(--color-muted)]">
              {v.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </BentoCard>
  );
}

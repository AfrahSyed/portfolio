import { Mic } from 'lucide-react';
import { fyp } from '../data/resume';
import BentoCard from './BentoCard';
import LoopVideo from './LoopVideo';

export default function FypCard({ spread, delay }) {
  return (
    <BentoCard
      id="fyp"
      spread={spread}
      delay={delay}
      stackOrder={9}
      tone="dark"
      cardClass="card-fyp"
      className="!p-5 md:!p-6"
    >
      <div className="grid items-center gap-5 lg:grid-cols-2 lg:gap-8">
        <LoopVideo
          src={fyp.video}
          title={`${fyp.name} demo`}
          controls
          className="w-full shadow-lg ring-1 ring-white/10"
        />

        <div className="min-w-0">
          <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
            <Mic size={14} />
            Final Year Project
          </p>
          <h2 className="mt-1.5 font-display text-xl text-white md:text-2xl">{fyp.name}</h2>
          <p className="mt-2 text-xs leading-relaxed text-white/75">{fyp.intro}</p>

          <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
            {fyp.features.map((feature) => (
              <li key={feature} className="flex gap-1.5 text-[11px] leading-snug text-white/65">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent-2)]" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {fyp.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-medium text-white/85"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </BentoCard>
  );
}

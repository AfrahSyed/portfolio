import { Play } from 'lucide-react';
import { workVideos } from '../data/resume';
import BentoCard from './BentoCard';
import LoopVideo from './LoopVideo';

export default function WorkVideosCard({ spread, delay }) {
  return (
    <BentoCard
      spread={spread}
      delay={delay}
      stackOrder={10}
      tone="lavender"
      cardClass="card-work-videos"
      className="!p-5 md:!p-6"
    >
      <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
        <Play size={14} />
        Something I&apos;ve built
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {workVideos.map((item) => (
          <LoopVideo
            key={item.src}
            src={item.src}
            title={item.title}
            className="w-full shadow-md ring-1 ring-[var(--color-ink)]/8"
          />
        ))}
      </div>
    </BentoCard>
  );
}

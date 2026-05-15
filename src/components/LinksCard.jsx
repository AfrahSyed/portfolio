import { Code2, Link2, Mail, Phone } from 'lucide-react';
import { profile } from '../data/resume';
import BentoCard from './BentoCard';

const contactItems = [
  {
    key: 'phone',
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
    icon: Phone,
    label: profile.phone,
    external: false,
  },
  {
    key: 'email',
    href: `mailto:${profile.email}`,
    icon: Mail,
    label: profile.email,
    external: false,
  },
  {
    key: 'linkedin',
    href: profile.linkedin,
    icon: Link2,
    label: profile.linkedinLabel,
    external: true,
  },
  {
    key: 'github',
    href: profile.github,
    icon: Code2,
    label: profile.githubLabel,
    external: true,
  },
];

export default function LinksCard({ spread, delay }) {
  return (
    <BentoCard
      id="contact"
      spread={spread}
      delay={delay}
      stackOrder={8}
      tone="sky"
      cardClass="card-links"
      className="flex flex-col justify-center !p-5"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
        Contact
      </p>
      <ul className="mt-3 space-y-2">
        {contactItems.map(({ key, href, icon: Icon, label, external }) => (
          <li key={key}>
            <a
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              className="group flex items-center gap-3 rounded-xl bg-white/60 px-3 py-2 transition-colors hover:bg-white"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-3)]/15 text-[var(--color-accent-3)] transition-colors group-hover:bg-[var(--color-accent-3)] group-hover:text-white">
                <Icon size={15} />
              </span>
              <span className="break-all text-sm font-medium text-[var(--color-ink)]">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}

import { ArrowUpRight, Code2, Link2, Mail } from 'lucide-react';
import { profile } from '../data/resume';
import BentoCard from './BentoCard';

const contactItems = [
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
    label: 'LinkedIn',
    external: true,
  },
  {
    key: 'github',
    href: profile.github,
    icon: Code2,
    label: 'GitHub',
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
      tone="dark"
      cardClass="card-links"
      className="contact-card flex flex-col justify-center !p-5 md:!p-6"
    >
      <span className="contact-orb" aria-hidden="true" />
      <div className="relative z-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/55">
          Available for opportunities
        </p>
        <h2 className="mt-2 font-display text-2xl leading-none text-white sm:text-[1.75rem]">
          Let&apos;s build together.
        </h2>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {contactItems.map(({ key, href, icon: Icon, label, external }) => (
            <li key={key} className={key === 'email' ? 'sm:col-span-2' : ''}>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className={`contact-link group ${key === 'email' ? 'contact-link--primary' : ''}`}
              >
                <span className="contact-link__icon">
                  <Icon size={key === 'email' ? 19 : 18} />
                </span>
                <span className="break-all text-sm font-bold sm:text-base">{label}</span>
                {key === 'email' && (
                  <ArrowUpRight
                    className="ml-auto transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    size={20}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </BentoCard>
  );
}

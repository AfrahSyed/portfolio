import { motion } from 'framer-motion';
import { profile, navLinks } from '../data/resume';

export default function Header({ spread }) {
  return (
    <motion.header
      className="bento-header col-span-full flex items-center justify-between rounded-2xl bg-[var(--color-card)] px-5 py-3 md:px-8 md:py-4"
      layout
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: spread ? 1 : 0, y: spread ? 0 : -8 }}
      transition={{ duration: 0.5, delay: spread ? 0.25 : 0 }}
    >
      <a href="#" className="font-display text-xl tracking-tight md:text-2xl">
        {profile.name.split(' ')[0]}{' '}
        <span className="text-[var(--color-accent)]">{profile.name.split(' ')[1]}</span>
      </a>
      <nav className="flex flex-wrap justify-end gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)] md:gap-6 md:text-xs">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-[var(--color-accent-3)]"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}

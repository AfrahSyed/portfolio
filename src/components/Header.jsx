import { motion } from 'framer-motion';
import { profile, navLinks } from '../data/resume';

export default function Header({ spread }) {
  return (
    <motion.header
      className="bento-header box-border flex w-full min-w-0 shrink-0 flex-col gap-4 rounded-2xl bg-[var(--color-card)] px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-4 md:px-8"
      layout
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: spread ? 1 : 0, y: spread ? 0 : -8 }}
      transition={{ duration: 0.5, delay: spread ? 0.25 : 0 }}
    >
      <a href="#" className="shrink-0 font-display text-xl tracking-tight sm:text-2xl">
        {profile.name.split(' ')[0]}{' '}
        <span className="text-[var(--color-accent)]">{profile.name.split(' ')[1]}</span>
      </a>
      <nav className="flex w-full flex-wrap items-center gap-x-5 gap-y-2 sm:w-auto sm:justify-end sm:gap-x-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent-3)] sm:text-xs sm:tracking-[0.18em]"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}

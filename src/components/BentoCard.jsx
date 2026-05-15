import { motion } from 'framer-motion';

const toneMap = {
  light: 'bg-[var(--color-card)] text-[var(--color-ink)]',
  mint: 'bg-[var(--color-card-mint)] text-[var(--color-ink)]',
  sky: 'bg-[var(--color-card-sky)] text-[var(--color-ink)]',
  lavender: 'bg-[var(--color-card-lavender)] text-[var(--color-ink)]',
  coral: 'bg-[var(--color-card-coral)] text-[var(--color-ink)]',
  blush: 'bg-[var(--color-card-alt)] text-[var(--color-ink)]',
  dark: 'bg-[var(--color-frame)] text-white',
  accent: 'bg-gradient-to-br from-[#ff6b9d] to-[#7c6bff] text-white',
};

export default function BentoCard({
  id,
  children,
  cardClass = '',
  className = '',
  tone = 'light',
  isCenter = false,
  spread = false,
  stackOrder = 0,
  delay = 0,
}) {
  const toneClass = toneMap[tone] || toneMap.light;

  return (
    <motion.article
      id={id}
      layout
      layoutId={id || cardClass || 'card'}
      className={`
        bento-card relative overflow-hidden rounded-3xl p-4 md:p-5
        shadow-[0_8px_30px_rgba(26,31,58,0.08)]
        ${isCenter ? 'bento-card--center' : ''}
        ${cardClass}
        ${toneClass}
        ${className}
      `}
      initial={false}
      animate={
        isCenter
          ? {
              opacity: 1,
              scale: spread ? 1 : [0.86, 0.93, 1],
            }
          : {
              opacity: spread ? 1 : 0,
              scale: spread ? 1 : 0.9 - stackOrder * 0.01,
            }
      }
      transition={
        isCenter
          ? {
              opacity: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 1.3, ease: [0.22, 1, 0.36, 1] },
              layout: { type: 'spring', stiffness: 58, damping: 17, mass: 0.9 },
            }
          : {
              opacity: { duration: 0.5, delay: spread ? delay + 0.15 : 0 },
              scale: { type: 'spring', stiffness: 65, damping: 17, delay: spread ? delay : 0 },
              layout: { type: 'spring', stiffness: 58, damping: 17, mass: 0.9, delay: spread ? delay : 0 },
            }
      }
      style={{ zIndex: isCenter ? 40 : spread ? 10 + stackOrder : 5 + stackOrder }}
    >
      {children}
    </motion.article>
  );
}

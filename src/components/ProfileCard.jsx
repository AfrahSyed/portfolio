import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/resume';
import BentoCard from './BentoCard';

import profilePhoto from '../assets/profile.jpg';

export default function ProfileCard({ spread }) {
  const [imgError, setImgError] = useState(false);

  return (
    <BentoCard
      id="profile"
      isCenter
      spread={spread}
      stackOrder={0}
      tone="dark"
      cardClass="card-profile card-top"
      className="p-0"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#1a1f3a] via-[#2d2458] to-[#4a2040]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="relative z-10 flex min-h-[200px] w-full flex-col items-center justify-center gap-4 p-5 text-center lg:min-h-[260px] lg:flex-row lg:items-center lg:gap-5 lg:p-6 lg:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.25 }}
      >
        <motion.div
          className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#ff6b9d] via-[#7c6bff] to-[#4ecdc4] ring-4 ring-white/25 lg:h-32 lg:w-32"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {!imgError ? (
            <img
              src={profilePhoto}
              alt={profile.name}
              className="h-full w-full object-cover object-center"
              loading="eager"
              decoding="async"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="font-display text-4xl font-semibold text-white lg:text-5xl">
              {profile.initials}
            </span>
          )}
        </motion.div>
        <motion.div className="w-full min-w-0 flex-1 px-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65 lg:tracking-[0.22em]">
            {profile.title}
          </p>
          <h1 className="mt-0.5 break-words font-display text-xl leading-tight text-white sm:text-2xl lg:text-[1.65rem]">
            {profile.name}
          </h1>
          <p className="mt-1.5 break-words text-sm text-white/75">{profile.location}</p>
        </motion.div>
      </motion.div>
    </BentoCard>
  );
}

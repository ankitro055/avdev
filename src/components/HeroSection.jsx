  'use client';
import Link from 'next/link';
import * as React from 'react';

import dynamic from 'next/dynamic';
import { LazyMotion, domAnimation, motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

/* Dynamic imports (supports default OR named export) */
const AnimatedTooltipPreview = dynamic(
  () =>
    import('./AnimatedTooltipPreview').then(
      (mod) => mod.default || mod.AnimatedTooltipPreview
    ),
  { ssr: false }
);

const SplashCursor = dynamic(
  () => import('./SplashCursor').then((mod) => mod.default || mod.SplashCursor),
  { ssr: false }
);

/* Animation Variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
};

/* Stats content */
const stats = [
  { value: '100+', label: 'Projects' },
  { value: '5+', label: 'Years' },
  { value: '100+', label: 'Clients' },
  { value: '24/7', label: 'Support' },
];

const HeroSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#361259] to-[#6B4A8C] px-6">

      {/* GPU-Lite Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob bg-[#B272F2] top-1/4 left-1/4"></div>
        <div className="blob bg-[#C6A7F2] bottom-1/3 right-1/4"></div>
      </div>

      {/* Cursor only on desktop (performance win) */}
      {!isMobile && <SplashCursor />}

      <LazyMotion features={domAnimation}>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* LCP Heading (optimized) */}
          <div className="sm:mt-10">
          <motion.h1
            variants={itemVariants}
            className="text-4xl  sm:text-5xl md:text-6xl font-bold text-white leading-tight mt-10"
          >
            We Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B272F2] to-[#D6AEFE]">
              Digital
            </span>
            <br />
             <span className="relative inline-block">
  <span className="relative z-10">Experiences</span>
  <span className="absolute left-0 bottom-0 w-full h-[6px] bg-white rounded-md"></span>
</span>


          </motion.h1>
          </div>

          {/* Tooltip NOW visible on mobile too */}
          <div className="mt-10">
          <AnimatedTooltipPreview />
</div>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-[#D6AEFE] max-w-3xl mx-auto mb-10"
          >
            Transforming your vision into high-performance web applications with cutting-edge
            technologies and innovative design.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services/web-development" className="btn-primary">
              Get Started
            </Link>
            <Link href="#ServicesSection" className="btn-outline">
              Our Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </LazyMotion>
    </header>
  );
};

export default React.memo(HeroSection)



// fskfjsfsfj
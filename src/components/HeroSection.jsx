 'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedTooltipPreview } from './AnimatedTooltipPreview';
import SplashCursor from './SplashCursor';
import Link from 'next/link';

/* ---- Static variants ---- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const stats = [
  { value: '100+', label: 'Projects' },
  { value: '5+', label: 'Years' },
  { value: '100+', label: 'Clients' },
  { value: '24/7', label: 'Support' },
];

const HeroSection = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#361259] to-[#6B4A8C] px-4 sm:px-6 lg:px-8">
      
      {/* Background blobs */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#B272F2] blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#C6A7F2] blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#D6AEFE] blur-3xl" />
        <SplashCursor />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl sm:max-w-5xl mx-auto text-center">
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight mt-10"
          >
            We Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B272F2] to-[#D6AEFE]">
              Digital
            </span>{' '}
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">Experiences</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-2 sm:h-3 bg-[#C6A7F2] opacity-30"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h1>

          {/* Tooltip preview */}
          <AnimatedTooltipPreview />

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-[#D6AEFE] max-w-3xl mb-8 sm:mb-10"
          >
            Transforming your vision into high-performance web applications with cutting-edge
            technologies and innovative design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services/web-development"
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-[#B272F2] text-white font-semibold shadow-md"
            >
              Get Started
            </Link>
            <Link
              href="#ServicesSection"
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg border-2 border-[#B272F2] text-[#D6AEFE] font-semibold"
            >
              Our Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-10 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-xl bg-[#361259]/50 backdrop-blur-sm border border-[#6B4A8C] text-center"
                whileHover={{ y: -3, backgroundColor: '#6B4A8C' }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#B272F2]">{stat.value}</div>
                <div className="text-sm sm:text-base text-[#D6AEFE]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute bottom-16 left-8 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#B272F2]"
        animate={{ y: [0, -15, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="absolute top-1/3 right-16 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#C6A7F2]"
        animate={{ y: [0, -10, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#D6AEFE]"
        animate={{ y: [0, -8, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
      />
    </header>
  );
};

export default React.memo(HeroSection);
//helfjslfjfklj
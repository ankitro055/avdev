 // components/ui-ux/HeroSection.jsx
'use client'

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import FullScreenLightning from '@/components/hooks/Thunder';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-purple-900/20 rounded-lg" />
});

// Import your Lottie JSON file (replace with your actual path)
import animationData from '../../../public/mb4.json';
import { WebClient } from '@/components/hooks/WebClient';
import Plans from '@/components/Pricing';
import { AppleCardsCarouselDemo } from '@/components/Work';
import TechMarquee from '@/components/TechMarquee';
import BrandStatementMarquee from '@/components/BrandStatementMarquee';

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.8,
        type: 'spring',
        stiffness: 300
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  const lottieVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 60,
        damping: 10
      }
    }
  };

  return (
    <>
    <section className="relative h-screen overflow-hidden">
      {/* Lightning Background */}
      <div className="absolute inset-0 z-0">
        <FullScreenLightning />
      </div>

      {/* Color Overlay */}
      <div 
        className="absolute inset-0 z-1"
        style={{ 
          background: 'linear-gradient(to right, rgba(54, 18, 89, 0.9) 0%, rgba(107, 74, 140, 0.7) 100%)',
          backdropFilter: 'blur(2px)'
        }}
      />

      {/* Content */}
      <div 
        ref={ref}
        className="relative z-10 h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center"
      >
        <motion.div
          className="w-full flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Text Content - Left Side */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            variants={containerVariants}
          >
            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              variants={itemVariants}
              style={{ color: '#FFFFFF' }}
            >
              <span className="block">Transform Your</span>
              <span 
                className="block bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: 'linear-gradient(to right, #B272F2, #C6A7F2)',
                  WebkitBackgroundClip: 'text'
                }}
              >
                Digital Experience
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0 mb-10"
              variants={itemVariants}
              style={{ color: '#C6A7F2' }}
            >
              We craft intuitive, beautiful interfaces that drive engagement and deliver results for your business.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 rounded-lg font-bold text-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                style={{ 
                  backgroundColor: '#6B4A8C',
                  color: 'white'
                }}
              >
                Get Started Today
              </motion.a>
              <motion.a
                href="#portfolio"
                className="px-8 py-4 rounded-lg font-bold text-lg border-2"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                style={{ 
                  borderColor: '#B272F2',
                  color: '#B272F2',
                  backgroundColor: 'transparent'
                }}
              >
                View Our Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Lottie Animation - Right Side */}
          <motion.div 
            className="lg:w-1/2 w-full max-w-2xl"
            variants={lottieVariants}
          >
            <div className="relative w-full h-full aspect-square">
              <Lottie 
                animationData={animationData} 
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="#C6A7F2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
    <TechMarquee/>
    <WebClient/>
    <BrandStatementMarquee/>
    <Plans/>
    <AppleCardsCarouselDemo/>
    </>

  );
};

export default HeroSection;
  'use client';

import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WebClient } from '@/components/hooks/WebClient';
import { AppleCardsCarouselDemo } from '@/components/Work';
import AppDevelopmentPlans from '@/components/hooks/app';
// import TechMarquee from '@/components/TechMarquee';
import BrandStatementMarquee from '@/components/BrandStatementMarquee';
  
// Dynamically import Lottie and Ballpit to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
const Ballpit = dynamic(() => import('@/components/hooks/Balls'), { ssr: false });

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroSection = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const ctaRef = useRef(null);
  const animationRef = useRef(null);

  // Import animation data (replace with your actual Lottie animation path)
  const animationData = require('../../../public/mb1.json');

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out', duration: 1 },
    });

    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        subheadingRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      );

    // Scroll animation for the hero section
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: 50,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
    <section
      ref={heroRef}
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-[#361259] to-[#6B4A8C] text-white"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <Ballpit
          count={150}
          gravity={0.5}
          friction={0.85}
          wallBounce={0.9}
          followCursor={true}
          colors={['#B272F2', '#fff', '#FFFFFF', '#D9B8FF']}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#361259]/80 via-transparent to-transparent z-10" />

      <div className="container mx-auto px-6 py-24 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="lg:w-1/2 space-y-8">
            <h1
              ref={headingRef}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#B272F2] to-[#C6A7F2]">
                Innovative
              </span>{' '}
              App Solutions <br />
              for the Digital Age
            </h1>

            <p
              ref={subheadingRef}
              className="text-xl md:text-2xl text-[#C6A7F2] max-w-2xl"
            >
              We craft cutting-edge mobile and web applications that drive growth
              and engage users. Let's transform your idea into reality.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-[#B272F2] to-[#8A4FBF] rounded-full font-semibold hover:shadow-lg hover:shadow-[#B272F2]/30 transition-all duration-300 transform hover:-translate-y-1">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-[#B272F2] text-[#B272F2] rounded-full font-semibold hover:bg-[#B272F2]/10 transition-all duration-300">
                View Portfolio
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="w-12 h-12 rounded-full border-2 border-[#C6A7F2] flex items-center justify-center text-xs font-bold"
                >
                  {item}+
                </div>
              ))}
              <p className="text-[#C6A7F2]">
                Years of excellence in app development
              </p>
            </div>
          </div>

          {/* Lottie animation */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-full max-w-lg">
              {typeof window !== 'undefined' && (
                <Lottie
                  lottieRef={animationRef}
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce w-6 h-10 border-2 border-[#B272F2] rounded-full flex justify-center">
          <div className="w-1 h-2 bg-[#B272F2] rounded-full mt-2" />
        </div>
      </div>
    </section>
    {/* <TechMarquee/> */}
    <WebClient/>
    <BrandStatementMarquee/>
    <AppleCardsCarouselDemo/>
     <AppDevelopmentPlans/>
      </>

  );
};

export default HeroSection;
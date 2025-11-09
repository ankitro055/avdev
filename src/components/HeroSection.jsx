 "use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import React from "react";

/* Lazy load Tooltip AFTER paint */
const AnimatedTooltipPreview = dynamic(
  () =>
    import("./AnimatedTooltipPreview").then(
      (mod) => mod.default || mod.AnimatedTooltipPreview
    ),
  { ssr: false, loading: () => null }
);

/* Lazy load cursor + fade in AFTER paint only on desktop */
const SplashCursor = dynamic(() => import("./SplashCursor"), {
  ssr: false,
  loading: () => null,
});

/* Animation Variants */
const containerVariants = {
  hidden: { opacity: 1 }, // paint instantly, no fade-in delay
  visible: { opacity: 1 }
};

const itemVariants = {
  hidden: { y: 0, opacity: 1 },
  visible: { y: 0, opacity: 1 }
};

const stats = [
  { value: "100+", label: "Projects" },
  { value: "5+", label: "Years" },
  { value: "100+", label: "Clients" },
  { value: "24/7", label: "Support" },
];

const HeroSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-[#361259] px-6 overflow-hidden">

      {/* ✅ REAL LCP HERO BACKGROUND IMAGE (PRIORITY + HIGH FETCH) */}
      {/* <Image
        src="/hero-bg.webp"
        alt="AV Development Hero Background"
        priority
        fetchPriority="high"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-35"
      /> */}

      {/* ✅ GPU Efficient Blob Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob bg-[#B272F2] top-1/4 left-1/4"></div>
        <div className="blob bg-[#C6A7F2] bottom-1/3 right-1/4"></div>
      </div>

      {/* ✅ Cursor ONLY after main paint (no LCP delay) */}
      {!isMobile && <SplashCursor />}

      <LazyMotion features={domAnimation}>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* ✅ LCP HEADING — NO ANIMATION BEFORE PAINT */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mt-20">
            We Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B272F2] to-[#D6AEFE]">
              Digital
            </span>
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">Experiences</span>
              <span className="absolute left-0 bottom-0 w-full h-[6px] bg-white rounded-md"></span>
            </span>
          </h1>

          {/* ✅ Tooltip loads AFTER paint */}
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services/web-development" className="btn-primary">
              Get Started
            </Link>
            <Link href="#ServicesSection" className="btn-outline">
              Our Services
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </LazyMotion>
    </header>
  );
};

export default React.memo(HeroSection);

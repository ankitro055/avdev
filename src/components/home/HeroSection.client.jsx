
"use client";

import dynamic from "next/dynamic";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
// import dynamic from "next/dynamic";

const AnimatedTooltipPreview = dynamic(
  () => import("../AnimatedTooltipPreview"),
  { ssr: false }
);

const containerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

export default function AnimatedHero({ stats }) {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LCP TEXT — STATIC */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mt-20">
          We Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B272F2] to-[#D6AEFE]">
            Digital
          </span>
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">Experiences</span>
            <span className="absolute left-0 bottom-0 w-full h-[6px] bg-white rounded-md" />
          </span>
        </h1>

        {/* Tooltip AFTER paint */}
        <div className="mt-10">
          <AnimatedTooltipPreview />
        </div>

        <p className="text-base sm:text-lg md:text-xl text-[#D6AEFE] max-w-3xl mx-auto mb-10">
          Transforming your vision into high-performance web applications with cutting-edge
          technologies and innovative design.
        </p>

        {/* CTA */}
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
  );
}

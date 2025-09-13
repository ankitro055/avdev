 'use client';

import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ExamplePage from "@/components/hooks/team";
 
export default function TeamHeroSection() {
  const teamRoles = [
    "Developers",
    "Designers",
    "Strategists",
    "Creatives",
    "Innovators",
    "Your Team"
  ];

   

  return (
    <div className="w-full">
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white px-4 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                Meet Our <br />
                <Typewriter
                  words={teamRoles}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-lg md:text-xl lg:text-2xl text-white/80 mt-6 max-w-2xl mx-auto"
            >
              A collective of passionate experts dedicated to crafting exceptional digital experiences through innovation and collaboration.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12 pointer-events-auto"
          >
        <button
  onClick={() => {
    const section = document.getElementById("team");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
  className="text-white text-7xl animate-bounce p-2"
  aria-label="Scroll Down"
>
  ↓
</button>

          </motion.div>
        </div>
      </BackgroundGradientAnimation>

      {/* <TeamShowcase */}
      <ExamplePage id='team'/>
    </div>
  );
}
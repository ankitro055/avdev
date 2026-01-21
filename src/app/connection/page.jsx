 "use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
 import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactHeroSection() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative flex h-[100vh] w-full flex-col items-center justify-center bg-black dark:bg-black overflow-hidden scroll-smooth">
      {/* Grid background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial mask for soft center fade */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Animated Blurred Blobs */}
      <motion.div
        className="absolute inset-0 opacity-20 z-0"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#B272F2] blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-[#C6A7F2] blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 rounded-full bg-[#D6AEFE] blur-3xl"></div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl font-bold text-transparent sm:text-7xl mb-6"
        >
          Let's Build Something Amazing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-2xl text-lg text-neutral-400 mb-12"
        >
          Our team is ready to bring your vision to life. Contact us today to discuss your project.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <Link href="#contactpage" scroll>
            <motion.button
              onClick={toggleDropdown}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#B272F2] to-[#6B4A8C] px-8 py-4 text-white font-semibold shadow-lg"
            >
              Contact Us
              <motion.span
                animate={{ rotate: showDropdown ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                ↓
              </motion.span>
            </motion.button>
          </Link>

          {!showDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="mt-8 flex flex-col items-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="text-neutral-400"
              >
                ↓
              </motion.div>
              <p className="text-sm text-neutral-500 mt-2">
                Scroll down or click above
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Splash Cursor - on top of all elements */}
       
    </div>
  );
}


// this is new upadate 2026 
 
 
 "use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utlisPro";

export const StickyScroll = ({
  content,
  contentClassName,
  title = "My Projects",
  description = "Explore my work through these interactive cards. Scroll to see different projects and their details."
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#361259", // primary dark purple
    "#6B4A8C", // secondary purple
    "#1A0933", // darker purple
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #361259, #B272F2)", // dark to light purple
    "linear-gradient(to bottom right, #6B4A8C, #C6A7F2)", // medium to light purple
    "linear-gradient(to bottom right, #361259, #6B4A8C)", // dark to medium purple
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-slate-300 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      </div>

      {/* Sticky Scroll Component */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-lg mt-4 max-w-sm text-slate-300"
                >
                  {item.description}
                </motion.p>
                {item.technologies && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {item.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 rounded-full text-xs font-medium bg-purple-900/50 text-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
            contentClassName
          )}
        >
          {content[activeCard].content ?? (
            <div className="h-full w-full flex items-center justify-center text-white text-lg">
              {content[activeCard].imageLabel || "Project Preview"}
            </div>
          )}
        </div>
      </motion.div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {content.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const element = ref.current;
              const scrollHeight = element.scrollHeight;
              const scrollPosition = (index / content.length) * scrollHeight;
              element.scrollTo({ top: scrollPosition, behavior: 'smooth' });
            }}
            className={`w-3 h-3 rounded-full transition-all ${activeCard === index ? 'bg-purple-400 w-6' : 'bg-purple-800'}`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
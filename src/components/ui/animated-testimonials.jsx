 'use client'; // Important for Next.js client-side component

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]); // Added testimonials.length to dependency array

  // Memoize rotation values for consistency
  // Use a ref to store the randomized rotations for each testimonial
  // to ensure they don't change on re-renders, but are unique per card.
  const rotations = useMemo(() => {
    return testimonials.map(() => ({
      initial: Math.floor(Math.random() * 21) - 10, // -10 to +10 degrees
      idle: Math.floor(Math.random() * 21) - 10,    // -10 to +10 degrees
    }));
  }, [testimonials.length]); // Regenerate if the number of testimonials changes

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* Image side */}
        <div className="relative h-80 w-full">
          {testimonials.map((testimonial, index) => {
            const isActive = index === active;
            const { initial: initialRotate, idle: idleRotate } = rotations[index];

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  rotate: initialRotate, // Use the memoized initial rotation
                }}
                animate={{
                  opacity: isActive ? 1 : 0.3,
                  scale: isActive ? 1 : 0.95,
                  rotate: isActive ? 0 : idleRotate, // Use the memoized idle rotation
                  zIndex: isActive ? 40 : 10,
                  y: isActive ? [0, -80, 0] : 0, // This animation moves the active card
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom transition-all duration-300"
                style={{
                  // Corrected: Use camelCase for pointerEvents
                  pointerEvents: isActive ? "auto" : "none",
                  // No need to set opacity or transform here, Framer Motion handles it via `animate` prop
                }}
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Text side */}
        <div className="flex flex-col justify-between py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active + "-text"} // Ensure unique key for AnimatePresence
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <h3 className="text-2xl font-bold text-black dark:text-white">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                {testimonials[active].designation}
              </p>
              <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-6 w-6 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-6 w-6 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
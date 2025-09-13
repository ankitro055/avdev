 'use client';

import React from 'react';
import CardSwap, { Card } from '@/components/hooks/webDevpage';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { WebClient } from '@/components/hooks/WebClient';
import Plans from '@/components/Pricing';
import { AppleCardsCarouselDemo } from '@/components/Work';
import TechMarquee from '@/components/TechMarquee';
import BrandStatementMarquee from '@/components/BrandStatementMarquee';
 import ProjectsShowcase from "@/components/bento-grid";
 
const WebDevSection = () => {
 



  return (
    <>
      <section
        id="web-development"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#361259] to-[#6B4A8C] overflow-hidden px-4 py-20 md:py-32"
        aria-label="Web Development Services"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#361259]/30 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#6B4A8C]/20 blur-[100px] rounded-full" />
          <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] bg-[#B272F2]/10 blur-[80px] rounded-full" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[#C6A7F2] font-medium mb-4"
              >
                Digital Innovation Studio
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B272F2] to-[#C6A7F2]">
                  Transform
                </span>{' '}
                <span className="text-white">Your Business Online</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-[#E2D4F0] mb-8 max-w-xl mx-auto lg:mx-0"
              >
                We craft high-performance digital experiences that drive growth and captivate your audience.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/connection"
                  className="px-8 py-4 bg-gradient-to-r from-[#B272F2] to-[#6B4A8C] hover:from-[#9B5BD4] hover:to-[#4E3570] text-white font-medium rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-[#6B4A8C]/40 hover:-translate-y-1"
                >
                  Start Your Project
                </Link>
                
              </motion.div>

              <motion.div
                className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#B272F2]">150+</div>
                  <div className="text-[#C6A7F2]">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#B272F2]">98%</div>
                  <div className="text-[#C6A7F2]">Client Satisfaction</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side Image Cards */}
            <motion.div
              className="relative h-[400px] md:h-[500px] w-full lg:right-[150px] lg:bottom-[80px] bottom-[200px] right-[200px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="lg:flex-1 lg:flex lg:justify-center lg:items-center h-full min-h-[450px]">
                <CardSwap
                  width={500}
                  height={400}
                  cardDistance={70}
                  verticalDistance={80}
                  delay={4000}
                  pauseOnHover={true}
                  skewAmount={6}
                >
                  {[
                    { title: "Responsive Websites", image: "/w.png" },
                    { title: "E-commerce Solutions", image: "/e.jpg" },
                    { title: "Custom Web Apps", image: "/ai.jpg" },
                    { title: "API Integrations", image: "/api.jpg" }
                  ].map((card, i) => (
                    <Card key={i}>
                      <div className="relative w-full h-full">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black/40 rounded-xl flex flex-col items-center justify-center text-center px-4">
                          <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                          <p className="text-white text-sm">Explore more about {card.title.toLowerCase()}.</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
<TechMarquee/>
      <WebClient />
      <BrandStatementMarquee/>
      <Plans />
            <ProjectsShowcase/>
      
      <AppleCardsCarouselDemo />
    </>
  );
};

export default WebDevSection;

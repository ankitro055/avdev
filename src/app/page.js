'use client';

import HeroSection from "@/components/HeroSection";
import ScrollVelocity from "@/components/ScrollVelocity";
 import ChartAreaInteractive from "@/components/Chart";
import { ServicesSection } from "@/components/Service";
import { StickyScrollRevealDemo } from "@/components/Project";
import SolutionsSection from "@/components/SolutionsSection";
import {AnimatedTestimonialsDemo} from "@/components/AnimatedTestimonialsDemo";
import ProjectsShowcase from "@/components/bento-grid";
// import FoundersSection from "@/components/FoundersSection";
import { LampDemo } from "@/components/lamp";
import TechMarquee from "@/components/TechMarquee";
import  { AppleCardsCarouselDemo } from "@/components/Work";
import ChatBot from "@/components/hooks/ChatBot";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
       
export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
       <HeroSection />
       {/* <ChatBot/> */}

      {/* ScrollVelocity fixed for mobile */}
      <div className="overflow-hidden py-4">
        <ScrollVelocity
          texts={['Fast Deals', 'Smooth Speed', 'Hello World']}
          className="text-purple-600 text-2xl sm:text-4xl md:text-5xl font-bold whitespace-nowrap"
          parallaxClassName="w-full"
          scrollerClassName="flex gap-8"
          velocity={100}
        />
      </div>
       <ServicesSection />
       <LampDemo/>
          <ChartAreaInteractive />
      <SolutionsSection/>

      <AnimatedTestimonialsDemo/>
       <StickyScrollRevealDemo />
      <ProjectsShowcase/>
       <TechMarquee/> 
      <AppleCardsCarouselDemo/>
      <TextHoverEffect/>
        
      {/* <FoundersSection/> */}
 
   
    </main>
  );
}

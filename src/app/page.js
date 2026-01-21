 // app/page.js
import HeroSection from "@/components/home/HeroSection.server";
import ScrollVelocity from "@/components/ScrollVelocity";
import ChartAreaInteractive from "@/components/Chart";
import { ServicesSection } from "@/components/Service";
import { StickyScrollRevealDemo } from "@/components/Project";
import SolutionsSection from "@/components/SolutionsSection";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";
import ProjectsShowcase from "@/components/bento-grid";
import { LampDemo } from "@/components/lamp";
import TechMarquee from "@/components/TechMarquee";
import { AppleCardsCarouselDemo } from "@/components/Work";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">

      {/* ✅ STATIC HERO */}
      <HeroSection />

      {/* ✅ CLIENT COMPONENT (isolated) */}
      <div className="overflow-hidden py-4">
        <ScrollVelocity
          texts={['Fast Deals', 'Smooth Speed', 'Hello World']}
          className="text-purple-600 text-2xl sm:text-4xl md:text-5xl font-bold whitespace-nowrap"
          parallaxClassName="w-full"
          scrollerClassName="flex gap-8"
          velocity={100}
        />
      </div>

      {/* Mostly static sections */}
      <ServicesSection />
      <LampDemo />

      {/* Heavy interactive → client internally */}
      <ChartAreaInteractive />

      <SolutionsSection />
      <AnimatedTestimonialsDemo />
      <StickyScrollRevealDemo />
      <ProjectsShowcase />
      <TechMarquee />
      <AppleCardsCarouselDemo />
      <TextHoverEffect />

    </main>
  );
}

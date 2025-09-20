 "use client";

import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

const projects = [
  
  {
    title: "AI Content Generator",
    description: "AI-powered content creation tool.",
    tags: ["React", "Python", "OpenAI"],
    gradient: "from-[#6B4A8C] via-[#B272F2] to-[#C6A7F2]",
    image: "/arc.png",
    link: "/",
  },
  {
    title: "Fitness Tracker",
    description: "Workout and nutrition tracking app.",
    tags: ["Flutter", "GraphQL", "Node.js"],
    gradient: "from-[#1A0933] via-[#361259] to-[#6B4A8C]",
    image: "/images/fitness-tracker.png",
    link: "https://github.com/yourusername/fitness-tracker",
  },
  {
    title: "Crypto Wallet",
    description: "Secure cryptocurrency wallet.",
    tags: ["React", "Solidity", "Web3.js"],
    gradient: "from-[#B272F2] via-[#6B4A8C] to-[#361259]",
    image: "/images/crypto-wallet.png",
    link: "https://github.com/yourusername/crypto-wallet",
  },
  {
    title: "Social Dashboard",
    description: "Analytics for social media.",
    tags: ["Next.js", "Tailwind", "Chart.js"],
    gradient: "from-[#C6A7F2] via-[#B272F2] to-[#6B4A8C]",
    image: "/images/social-dashboard.png",
    link: "https://github.com/yourusername/social-dashboard",
  },
  {
    title: "AR Design App",
    description: "Augmented reality for interiors.",
    tags: ["Unity", "ARKit", "Swift"],
    gradient: "from-[#361259] via-[#B272F2] to-[#C6A7F2]",
    image: "/images/ar-design.png",
    link: "https://github.com/yourusername/ar-design",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment integration.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    gradient: "from-[#361259] via-[#6B4A8C] to-[#B272F2]",
    image: "/images/ecommerce.png",
    link: "https://github.com/yourusername/ecommerce",
  },
  
  
];

export function AnimatedPinDemo() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#361259] mb-4">
          Our <span className="text-[#B272F2]">Projects</span>
        </h2>
        <p className="text-xl text-[#6B4A8C] max-w-2xl mx-auto">
          Professional solutions built with modern technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="flex justify-center">
            <PinContainer title={project.title} href={project.link}>
              <div className="flex flex-col p-4 w-[20rem] h-[22rem] bg-white border border-[#E2D4F0] rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative w-full h-32 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#361259] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#6B4A8C] text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-[#F5EFFD] text-[#6B4A8C] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className={`mt-auto h-2 w-full rounded-full bg-gradient-to-r ${project.gradient}`}
                />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
}

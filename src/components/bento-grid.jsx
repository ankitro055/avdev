 "use client";

import React from "react";
import Image from "next/image";
import {
  IconCode,
  IconDeviceDesktop,
  IconRocket,
  IconShieldCheck,
  IconTrendingUp,
  IconUsers,
  IconWorldWww,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ShoppingCart as IconShoppingCart } from "lucide-react";
import { Book as IconBook } from "lucide-react";
import { Clock as IconClock } from "lucide-react";

import { Cloud as IconCloud } from "lucide-react";

const ProjectsShowcase = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-neutral-800 dark:text-white">
          Our Portfolio
        </h2>
        <p className="text-lg text-center mb-12 text-neutral-600 dark:text-neutral-400">
          Transforming ideas into powerful digital experiences
        </p>

        <BentoGrid className="max-w-6xl mx-auto">
          {[
            {
              title: "Ujjwal Welfare Trust",
              description:
                "Empowering communities through education, healthcare, and sustainable development initiatives.",
              image: "/ng.png",
              demoUrl: "https://ujjwalwelfaretrust.org", // Replace with the actual domain if different
              icon: <IconUsers className="h-4 w-4 text-purple-600" />,
            }
,            
{
  title: "Institute Website",
  description:
    "A feature-rich, responsive educational portal with student and admin dashboards, CMS integration, and support for online quizzes, fee tracking, and certificate downloads.",
  image: "/arc.png", // Update this path to your actual image
  demoUrl: "https://www.arcinstitute.in/", // Replace with your actual deployed URL
  icon: <IconWorldWww className="h-4 w-4 text-blue-600" />,
}
,
            {
              title: 'Rk Porta Cabin ',
              description:
          "Informative and interactive website showcasing portable cabin solutions, with product listings, image galleries, and contact features."      ,
               image: "/rk.png",
              demoUrl: "https://rkportacabin.in/",
              icon: <IconCode className="h-4 w-4 text-purple-600" />,
            },
            {
              title: "CrackIQ India Smart Study Platform",
              description:
                "🚀 Developed a full-featured EdTech platform Crack_IQ to empower students of Classes 6 to 12 with Free access to handwritten notes maps PYQs Verified tutors registration & hiring system 0% commission book buying/selling marketplace  Weekly quizzes with topper showcase system Tech stack: Next.js, TypeScript, MongoDB, Tailwind CSS, Node.js, Express.js",
              image: "/crackiq.png",
              demoUrl: "https://www.crackiq.in/",
              icon: <IconTrendingUp className="h-4 w-4 text-purple-600" />,
            }   ,
            {
              title: "E-commerce Platform",
              description:
                  "Full-featured online store with product catalog, shopping cart, and secure checkout system.",
  image: "/ecoo.png",
  demoUrl: "https://my-store-frontend-theta.vercel.app/",

    icon: <IconShoppingCart className="h-4 w-4 text-green-600" />

             },
        {
  title: " MAX Institute Website",
  description:
    "Interactive learning platform with course listings, video content, quizzes, and student progress tracking.",
  image: "/max.png",
  demoUrl: "https://www.maxinfotech.in/",
  icon: <IconBook className="h-4 w-4 text-blue-600" />,
},
{
  title: "ASIAN TECHNOLOGY",
  description:
    "Modern platform showcasing scalable cloud infrastructure, service offerings, and seamless client onboarding.",
  image: "/asian.png",
  demoUrl: "https://asiantechnology.co.in/",
  icon: <IconCloud className="h-4 w-4 text-blue-600" />,
}
,
{
  title: "Blast Feel the FreshNess",
  description: "Full-featured online store with payment integration.",
  tags: ["Next.js", "Node.js", "MongoDB"],
  gradient: "from-[#361259] via-[#6B4A8C] to-[#B272F2]",
  image: "/blast.png",
  link: "https://www.letblastbevaragesandcompany.in/",
},
      {
  title: "Community Platform",
  description:
    "Exciting social network coming soon — connect, share, and grow together.",
  image: "/cs.webp",
  demoUrl: "#",
  icon: <IconClock className="h-4 w-4 text-yellow-600" />,
}
,
          ].map((project, i) => (
            <BentoGridItem
              key={i}
              title={project.title}
              description={project.description}
              icon={project.icon}
              className={i === 0 || i === 4 ? "md:col-span-2" : ""}
              header={
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex w-full h-full min-h-[10rem] rounded-xl overflow-hidden group"
                >
                  <Image
                    src={project.image}
                    alt="Project screenshot"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50 opacity-0 group-hover:opacity-100 backdrop-blur-sm bg-black/10 transition-opacity duration-300 z-10">
                    <span className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium">
                      View Live Demo
                    </span>
                  </div>
                </a>
              }
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default ProjectsShowcase;

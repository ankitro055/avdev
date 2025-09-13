 "use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Responsive Design",
    description:
      "Build interfaces that look great on any device. From mobile phones to large desktops, your site adapts seamlessly.",
    content: (
      <div className="flex items-center justify-center bg-[linear-gradient(to_bottom_right,#361259,#6B4A8C)] p-8 rounded-lg">
        <img
          src="/i.png"
          width={400}
          height={400}
          className="object-cover rounded-lg max-w-full h-auto"
          alt="Responsive design illustration"
        />
      </div>
    ),
  },
  {
    title: "Optimized Performance",
    description:
      "Ensure fast load times and smooth interactions. Our development practices keep performance at the core.",
    content: (
      <div className="flex items-center justify-center p-8 rounded-lg bg-white">
        <img
          src="/i2.png"
          width={400}
          height={400}
          className="object-cover rounded-lg max-w-full h-auto"
          alt="Website performance concept"
        />
      </div>
    ),
  },
  {
    title: "Modern Tech Stack",
    description:
      "We use the latest technologies like React, Next.js, and Tailwind CSS to build scalable, maintainable web apps.",
    content: (
      <div className="flex items-center justify-center bg-[linear-gradient(to_bottom_right,#6B4A8C,#B272F2)] p-8 rounded-lg">
        <img
          src="/i3.jpg"
          width={400}
          height={400}
          className="object-cover rounded-lg max-w-full h-auto"
          alt="Modern web development tech stack"
        />
      </div>
    ),
  },
  {
    title: "SEO & Accessibility",
    description:
      "Your website is discoverable and usable by everyone. We follow best practices for search engines and all users.",
    content: (
      <div className="flex items-center justify-center bg-[linear-gradient(to_bottom_right,#361259,#C6A7F2)] p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-white">SEO & Accessibility</h3>
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full bg-[#B272F2] py-16 px-4">
      {/* Custom scrollbar styles */}
      <style jsx global>{`
        /* Width */
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        
        /* Track */
        ::-webkit-scrollbar-track {
          background: rgba(54, 18, 89, 0.1);
          border-radius: 10px;
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #6B4A8C;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #B272F2;
        }
        
        /* Corner */
        ::-webkit-scrollbar-corner {
          background: #361259;
        }
        
        /* Firefox scrollbar */
        html {
          scrollbar-width: thin;
          scrollbar-color: #6B4A8C rgba(54, 18, 89, 0.1);
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <StickyScroll
          content={content}
          contentClassName="max-w-full sm:w-[500px] sm:h-[400px]"
          title="Web Development Excellence"
          description="Explore the key pillars we follow to build high-quality, modern websites"
          titleClassName="text-5xl font-bold text-purple-200 mb-4"
          descriptionClassName="text-xl text-purple-300 max-w-3xl"
        />
      </div>

       

      
    </div>
  );
}
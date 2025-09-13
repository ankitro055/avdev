 'use client';

import React from "react";
import ChromaGrid from "@/components/hooks/hoverteam";

const ExamplePage = () => {
  const items = [
    {
      image: "/img.jpg",
      title: "Ankit Singh",
      subtitle: "Full Stack Developer",
      handle: "ankitroy5575@gmail.com",
      borderColor: "#B272F2",
      gradient: "linear-gradient(145deg, #6B4A8C, #361259)",
      url: "https://github.com/sarahjohnson",
    },
    {
      image: "/nobo.jpg",
      title: "Abhishek Sharma",
      subtitle: "Backend Engineer",
      handle: "@abhishek",
      borderColor: "#B272F2",
      gradient: "linear-gradient(160deg, #6B4A8C, #361259)",
      url: "https://linkedin.com/in/abhisheksharma",
    },
    {
      image: "/sachin.jpg",
      title: "Rahul Mehra",
      subtitle: "SEO Expert & Digital Marketer Driving Growth.",
      handle: "@",
      borderColor: "#C6A7F2",
      gradient: "linear-gradient(180deg, #B272F2, #361259)",
      url: "https://www.linkedin.com/in/sachin-kumar-7b1a24343/",
    },
    {
      image: "/gautam.jpg",
      title: "Gautam Pandey",
      subtitle: "Frontend Developer",
      handle: "@gautam",
      borderColor: "#C6A7F2",
      gradient: "linear-gradient(180deg, #B272F2, #361259)",
      url: "https://linkedin.com/in/gautampandey",
    },
    {
      image: "/pankaj.jpg",
      title: "Pankaj",
      subtitle: "Full Stack Developer",
      handle: "@mikechen",
      borderColor: "#C6A7F2",
      gradient: "linear-gradient(180deg, #B272F2, #361259)",
      url: "https://linkedin.com/in/mikechen",
    },
    
    {
      image: "/sonu.jpg",
      title: "Sonu Gupta",
      subtitle: "Senior Vidoe Editor",
      handle: "@priyav",
      borderColor: "#B272F2",
      gradient: "linear-gradient(180deg, #6B4A8C, #361259)",
      url: "https://dribbble.com/priyav",
    },
    
  ];

  return (
    <section className="w-full py-12 md:py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#C6A7F2] mb-8 md:mb-12">
          Meet Our Team
        </h2>
        <div className="relative">
          <ChromaGrid 
            items={items} 
            className="mobile:grayscale-0 mobile:brightness-100"
          />
        </div>
      </div>
    </section>
  );
};

export default ExamplePage;
// jkvjkll
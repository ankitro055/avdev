 'use client';

import { motion } from "framer-motion";
import Link from "next/link";
export function ServicesSection() {
  return (
    <motion.section
      id="ServicesSection"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-16 px-4 bg-gradient-to-b from-white to-[#C6A7F2]/20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#361259]">
            Our Digital Services
          </h2>
          <p className="text-lg text-[#6B4A8C] max-w-2xl mx-auto">
            Comprehensive solutions to transform your digital presence and drive business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-r ${getGradientColor(index)} p-0.5 rounded-xl`}
            >
              <div className="bg-white rounded-lg p-6 h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-[#F5F0FF] flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#361259]">{service.title}</h3>
                <p className="text-[#6B4A8C] mb-4 flex-grow">{service.description}</p>
                <Link
  href={service.link}
  className="group relative mt-6 inline-flex items-center justify-center px-8 py-3 text-sm font-bold tracking-wide text-white transition-all duration-300 ease-out transform hover:scale-105 active:scale-95"
>
  {/* Gradient background with glow effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#6B4A8C] via-[#8B5FAE] to-[#B272F2] rounded-xl opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
  
  {/* Hover gradient background */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#B272F2] via-[#D084FF] to-[#E8A4FF] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  
  {/* Animated border glow */}
  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#6B4A8C] to-[#B272F2] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
  
  {/* Button content */}
  <span className="relative z-10 flex items-center space-x-2">
    <span>Learn More</span>
    <svg 
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </span>
  
  {/* Shine effect */}
  <div className="absolute inset-0 rounded-xl overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
  </div>
</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// Helper function to get gradient colors based on index
function getGradientColor(index) {
  const gradients = [
    "from-[#361259] to-[#6B4A8C]",
    "from-[#6B4A8C] to-[#B272F2]",
    "from-[#B272F2] to-[#C6A7F2]",
    "from-[#361259] to-[#6B4A8C]",
    "from-[#6B4A8C] to-[#B272F2]",
    "from-[#B272F2] to-[#C6A7F2]"
  ];
  return gradients[index % gradients.length];
}

export const services = [
  {
    title: "Custom Web Development",
    description: "Tailored websites built with modern frameworks like Next.js, React, and Node.js for optimal performance.",
    link: "/services/web-development",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6B4A8C" className="w-6 h-6">
        <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile application for iOS and Android using React Native and Flutter.",
    link: "mobile_apps",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6B4A8C" className="w-6 h-6">
        <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
        <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that enhance user experience and drive engagement.",
    link: "/ui-ux",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6B4A8C" className="w-6 h-6">
        <path fillRule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "E-commerce Solutions",
    description: "Scalable online stores with secure payment gateways and inventory management.",
    link: "/ecommerce",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6B4A8C" className="w-6 h-6">
        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
      </svg>
    )
  },
  {
    title: "SEO & Digital Marketing",
    description: "Increase your online visibility and drive qualified traffic to your site.",
    link: "/seo",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6B4A8C" className="w-6 h-6">
        <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.374-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing maintenance, updates, and 24/7 technical support for your digital products.",
    link: "/support",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6B4A8C" className="w-6 h-6">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
      </svg>
    )
  }
];
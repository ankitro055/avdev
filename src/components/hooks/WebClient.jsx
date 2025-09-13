'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export function WebClient() {
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
            Why We Stand Out
          </h2>
          <p className="text-lg text-[#6B4A8C] max-w-2xl mx-auto">
            Our approach makes your website 3x more effective than industry standards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                <div className="mt-2 text-sm text-[#B272F2] font-medium">
                  {service.benefit}
                </div>
                {/* <motion.a
                  href={service.link}
                  className="mt-4 inline-flex items-center text-[#B272F2] hover:text-[#6B4A8C] transition-colors"
                  whileHover={{ 
                    x: 5,
                    transition: { 
                      type: "spring",
                      stiffness: 300,
                      damping: 10
                    }
                  }}
                >
                  See case study
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                  </svg>
                </motion.a> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Testimonials */}
        <div className="bg-[#361259] rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#C6A7F2]">
            Trusted by Industry Leaders
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#6B4A8C]/30 p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{client.name}</h4>
                    <p className="text-sm text-[#C6A7F2]">{client.position}</p>
                  </div>
                </div>
                <p className="text-[#E2D4F0] mb-4">"{client.testimonial}"</p>
                <a href={`mailto:${client.email}`} className="text-[#B272F2] text-sm hover:underline">
                  {client.email}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Satisfaction Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#6B4A8C]/40 p-4 rounded-xl"
            >
              <div className="text-4xl font-bold text-[#B272F2]">98%</div>
              <div className="text-[#E2D4F0]">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#6B4A8C]/40 p-4 rounded-xl"
            >
              <div className="text-4xl font-bold text-[#B272F2]">4.9/5</div>
              <div className="text-[#E2D4F0]">Average Rating</div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#6B4A8C]/40 p-4 rounded-xl"
            >
              <div className="text-4xl font-bold text-[#B272F2]">24h</div>
              <div className="text-[#E2D4F0]">Avg. Response Time</div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#6B4A8C]/40 p-4 rounded-xl"
            >
              <div className="text-4xl font-bold text-[#B272F2]">150+</div>
              <div className="text-[#E2D4F0]">Projects Delivered</div>
            </motion.div>
          </div>
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
    title: "Performance-Optimized",
    description: "Websites that load in under 1.5s (3x faster than average) with perfect Lighthouse scores.",
    benefit: "↑ 70% lower bounce rates",
    link: "/performance-case-studies",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6B4A8C" className="w-6 h-6">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "Conversion-Focused Design",
    description: "UX engineered to guide visitors to take action, increasing conversions by 40-200%.",
    benefit: "↑ 120% avg. conversion lift",
    link: "/conversion-design",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6B4A8C" className="w-6 h-6">
        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.75.75H7.5v3.75a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75h9.75a.75.75 0 01.75.75zm-13.5-3A.75.75 0 016 9h12a.75.75 0 010 1.5H6A.75.75 0 015.25 9z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "AI-Powered Personalization",
    description: "Dynamic content that adapts to each visitor, increasing engagement by 3-5x.",
    benefit: "↑ 300% more engagement",
    link: "/ai-personalization",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6B4A8C" className="w-6 h-6">
        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
      </svg>
    )
  },
  {
    title: "Built-In SEO Dominance",
    description: "Technical infrastructure that ranks 50% higher than competitor sites from day one.",
    benefit: "↑ 3x more organic traffic",
    link: "/seo-case-studies",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6B4A8C" className="w-6 h-6">
        <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.374-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "Enterprise-Grade Security",
    description: "Military-grade protection that blocks 100% of common attacks and vulnerabilities.",
    benefit: "0 security breaches",
    link: "/security",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6B4A8C" className="w-6 h-6">
        <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "24/7 Proactive Monitoring",
    description: "Real-time issue detection with 99.99% uptime guarantee and instant resolution.",
    benefit: "↓ 90% less downtime",
    link: "/monitoring",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6B4A8C" className="w-6 h-6">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
      </svg>
    )
  }
];

const clients = [
  {
    name: "Anil Upadhyay",
    position: "Director, Arc Institute",
    testimonial: "Our conversion rates tripled after the redesign. These folks understand performance like no one else.",
    // email: "sarah@techstart.com",
    image: "/anilsir.jpeg"
  },
  {
    name: "Pinki Singh",
    position: "Director, Ujjwal Welfare Trust",
    testimonial: "The AI personalization features increased our average order value by 65%. Game-changing.",
    // email: "michael@globalretail.com",
    image: "/img5.jpg"
  },
  {
    name: "Ravindra Kumar",
    position: "Director, Max Infotech",
    testimonial: "24/7 monitoring saved us during peak traffic. Their team responds faster than our in-house IT.",
    // email: "priya@healthtech.org",
    image: "/img2.png"
  }
];
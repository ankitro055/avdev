    "use client";

import React from "react";
import {
  FaMobileAlt,
  FaMoneyBillWave,
  FaThumbsUp,
  FaUserTie,
  FaCode,
  FaRocket,
  FaHandshake,
  FaStar,
  FaCogs,
  FaTachometerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: <FaThumbsUp className="text-2xl" />,
    title: "100% Satisfaction",
    desc: "Our commitment is to exceed your expectations with every project.",
  },
  {
    icon: <FaUserTie className="text-2xl" />,
    title: "5+ years of Experience",
    desc: "Leverage our extensive experience in the industry to achieve your business goals.",
  },
  {
    icon: <FaMobileAlt className="text-2xl" />,
    title: "Mobile-Friendly Design",
    desc: "We create responsive websites that look great on any device.",
  },
  {
    icon: <FaMoneyBillWave className="text-2xl" />,
    title: "Pocket-Friendly Solutions",
    desc: "Quality services at affordable prices tailored to your budget.",
  },
  {
    icon: <FaStar className="text-2xl" />,
    title: "Quality Work",
    desc: "We deliver high-quality, professional websites that reflect your brand.",
  },
  {
    icon: <FaCode className="text-2xl" />,
    title: "Clean Code",
    desc: "Our code is well-written, organized, and easy to maintain.",
  },
  {
    icon: <FaHandshake className="text-2xl" />,
    title: "Reliability",
    desc: "Dependable services that you can count on at every step.",
  },
  {
    icon: <FaRocket className="text-2xl" />,
    title: "Fast Start",
    desc: "Quick project initiation to get your website up and running.",
  },
  {
    icon: <FaCogs className="text-2xl" />,
    title: "Hassle-Free Experience",
    desc: "We handle everything, so you can focus on your business.",
  },
  {
    icon: <FaTachometerAlt className="text-2xl" />,
    title: "Fast Loading Websites",
    desc: "Optimized for speed to enhance user experience and SEO.",
  },
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hoverVariants = {
  hover: {
    y: -10,
    scale: 1.03,
    boxShadow: "0px 10px 25px rgba(178, 114, 242, 0.3)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-[#361259]"
        >
          Discover our <span className="text-[#B272F2]">Benefits</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#6B4A8C] max-w-2xl mx-auto mb-12"
        >
          Discover the key advantages of working with Atechseva. We offer a range of benefits that ensure your project's success and exceed your expectations.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-[#6B4A8C] to-[#361259] rounded-xl shadow-md p-6 text-left relative overflow-hidden"
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              variants={cardVariants}
              viewport={{ once: true, margin: "-50px" }}
              custom={idx}
            >
              <motion.div 
                variants={hoverVariants}
                className="h-full"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B272F2] to-[#C6A7F2]"></div>
                <div className="mb-4 text-[#C6A7F2]">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                <p className="text-[#E2D4F0] text-sm">{item.desc}</p>
                <div className="absolute bottom-0 right-0 w-16 h-16 rounded-full bg-[#B272F2] opacity-20 -mr-6 -mb-6"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaGlobe } from 'react-icons/fa';

const FoundersSection = () => {
  const founders = [
    {
      name: "Ankit Singh",
    //   role: "CEO & Co-Founder",
    //   bio: "Visionary leader with 10+ years in digital transformation. Passionate about creating technology that makes a measurable impact.",
    bio:"Creative enthusiast and visual thinker passionate about building meaningful digital experiences. Driven by curiosity and a bold vision to shape technology that inspires and connects."
,

      image: "/img.jpg",
      social: [
        // { icon: <FaTwitter className="text-lg" />, url: "#" },
        { icon: <FaLinkedin className="text-lg" />, url: "https://www.linkedin.com/in/ankit5575/" },
        // { icon: <FaGithub className="text-lg" />, url: "#" },
        { icon: <FaInstagram className="text-lg" />, url: "https://www.instagram.com/viranshusingh055/" },

        // { icon: <FaGlobe className="text-lg" />, url: "#" }
      ]
    },
    {
      name: "Abhishek Sharma",
    //   role: "CTO & Co-Founder",
    //   bio: "Tech architectbio specializing in scalable solutions. Turns complex challenges into elegant, maintainable systems.",
    bio: "SEO specialist and digital strategist focused on driving organic growth through data-driven insights and technical precision. Transforms complex search challenges into clear, impactful solutions."

,

      image: "/nobo.jpg",

      social: [
        { icon: <FaLinkedin className="text-lg" />, url: "#" },
        // { icon: <FaGithub className="text-lg" />, url: "#" },
        { icon: <FaInstagram className="text-lg" />, url: "#" }
      ]
    }
  ];

  // Animation controls for staggered entrance
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const cardHover = {
    y: -8,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  };

  const imageHover = {
    scale: 1.05,
    rotate: 1,
    transition: { 
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  };

  const socialIcon = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15
      }
    },
    hover: {
      scale: 1.2,
      y: -3,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 5
      }
    }
  };

  const textReveal = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      transition: {
        duration: 1,
        ease: [0.83, 0, 0.17, 1]
      }
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-[10%] w-48 h-48 rounded-full bg-purple-100 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-[15%] w-64 h-64 rounded-full bg-indigo-100 blur-3xl"
          animate={{
            scale: [1, 0.9, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, -50, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="text-center mb-20"
        >
          <motion.div variants={item} className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-medium">
              Leadership
            </span>
          </motion.div>

          <motion.h2 
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            <motion.span 
              className="inline-block overflow-hidden"
              variants={textReveal}
            >
              Meet Our
            </motion.span>{' '}
            <motion.span 
              className="inline-block overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
              variants={textReveal}
              custom={0.2}
            >
              Founders
            </motion.span>
          </motion.h2>

          <motion.p 
            variants={item}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            The visionary minds driving our Agency's innovation and success
          </motion.p>
        </motion.div>

        {/* Founders cards */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={cardHover}
              className="relative group"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br from-purple-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Main card */}
              <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row">
                {/* Image */}
                <motion.div
                  className="relative flex-shrink-0 w-full md:w-1/3 h-64 md:h-auto overflow-hidden"
                  whileHover={imageHover}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Social icons overlay */}
                  <motion.div 
                    className="absolute bottom-4 left-4 z-20 flex gap-3"
                    initial="hidden"
                    animate="visible"
                    variants={container}
                  >
                    {founder.social.map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-purple-600 shadow-md"
                        variants={socialIcon}
                        whileHover="hover"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 p-8">
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 mb-2"
                    whileHover={{ x: 5 }}
                  >
                    {founder.name}
                  </motion.h3>
                  <motion.p 
                    className="text-purple-600 mb-6"
                    whileHover={{ x: 5 }}
                  >
                    {founder.role}
                  </motion.p>
                  
                  <motion.p 
                    className="text-gray-600 mb-6 leading-relaxed"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {founder.bio}
                  </motion.p>

                  <motion.div
                    className="flex gap-3"
                    initial="hidden"
                    animate="visible"
                    variants={container}
                  >
                    {founder.social.map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors md:hidden"
                        variants={socialIcon}
                        whileHover="hover"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-[20%] left-[15%] w-6 h-6 rounded-full bg-purple-400"
        animate={{
          y: [0, -40, 0],
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-[25%] right-[20%] w-4 h-4 rounded-full bg-indigo-400"
        animate={{
          y: [0, -30, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 2,
          ease: 'easeInOut'
        }}
      />
    </section>
  );
};

export default FoundersSection;
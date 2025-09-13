 'use client';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Compare } from "@/components/ui/compare";
import Founders from '@/components/hooks/founder';
import BenefitsSection from '@/components/hooks/Benifit';
``
const HeroSection = () => {
  // Floating animation variants
  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    }
  };

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'backOut'
      }
    }
  };

  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#361259] to-[#6B4A8C] px-4 sm:px-6 lg:px-8">
      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left side floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-16 h-16 rounded-full bg-[#B272F2] opacity-20 blur-xl"
          variants={floatingVariants}
          initial="float"
          animate="float"
          transition={{ delay: 0.2 }}
          />
        <motion.div
          className="absolute top-2/3 left-1/4 w-12 h-12 rounded-full bg-[#C6A7F2] opacity-30 blur-lg"
          variants={floatingVariants}
          initial="float"
          animate="float"
          transition={{ delay: 0.4 }}
          />
        
        {/* Right side floating elements (lottie-like animation) */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-20 h-20 rounded-lg bg-[#B272F2] opacity-20 blur-xl"
          initial={{ rotate: 0, y: 0 }}
          animate={{ rotate: [0, 10, -10, 0], y: [0, -20, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
          />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-16 h-16 rounded-full bg-[#D6AEFE] opacity-25 blur-lg"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          />
        <motion.div
          className="absolute top-1/2 right-1/5 w-24 h-24 rounded-lg bg-[#6B4A8C] opacity-15 blur-xl"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
          />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column - Text content */}
        <motion.div
          className="text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          >
          <motion.div variants={itemVariants}>
            <div className="mb-6 inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#C6A7F2] text-sm font-medium">
              <Typewriter
                words={['Web Development', 'UI/UX Design', 'Digital Solutions']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
                />
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B272F2] to-[#D6AEFE]">Digital</span>{' '}
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">Experiences</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-2 bg-[#C6A7F2] opacity-40"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                />
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-[#D6AEFE] mb-10 max-w-2xl mx-auto lg:mx-0"
            >
            Transforming your ideas into powerful digital experiences with cutting-edge web technologies and innovative design solutions.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
            <motion.a
              href="#contact"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#B272F2] to-[#6B4A8C] text-white font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              >
              Get Started
            </motion.a>
            <motion.a
              href="#portfolio"
              className="px-8 py-3 rounded-lg bg-transparent border-2 border-[#B272F2] text-[#D6AEFE] font-semibold"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(178, 114, 242, 0.1)'
              }}
              whileTap={{ scale: 0.95 }}
              >
              View Portfolio
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right column - Animated illustration placeholder */}
        <motion.div 
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          >
           <div className="p-4  rounded-3xl dark:bg-neutral-900  dark:border-neutral-800 px-4">
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
        />
    </div>
        </motion.div>
      </div>
    </section>
    <BenefitsSection/>
    <Founders/>
        </>
  );
};

export default HeroSection; 
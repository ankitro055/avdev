 'use client';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

export default function BrandStatementMarquee() {
  return (
    <div className="bg-[#361259] py-4 border-b border-[#C6A7F2]/30">
      <Marquee gradient={false} speed={40}>
        <motion.span 
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#B272F2] to-[#C6A7F2] text-2xl font-semibold mx-8"
          whileHover={{
            scale: 1.03,
            textShadow: '0 0 12px rgba(194, 158, 255, 0.5)'
          }}
          transition={{ 
            type: 'spring', 
            stiffness: 400,
            damping: 10
          }}
        >
          Your Brand with Cutting-Edge Web Development ✱ Delivering Innovative, Scalable Web Solutions ✱
        </motion.span>
      </Marquee>
    </div>
  );
}
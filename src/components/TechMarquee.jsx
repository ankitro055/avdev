// components/TechMarquee.jsx
'use client';

import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const techs = [
  { name: 'Next.js', color: 'text-[#B272F2]' },
  { name: 'React.js', color: 'text-[#C6A7F2]' },
  { name: 'PHP', color: 'text-[#6B4A8C]' },
  { name: 'MySQL', color: 'text-[#B272F2]' },
  { name: 'MongoDB', color: 'text-[#C6A7F2]' },
  { name: 'TypeScript', color: 'text-[#6B4A8C]' },
  { name: 'JavaScript', color: 'text-[#B272F2]' },
  { name: 'HTML', color: 'text-[#C6A7F2]' },
  { name: 'CSS', color: 'text-[#6B4A8C]' },
  { name: 'Tailwind CSS', color: 'text-[#B272F2]' },
  { name: 'Bootstrap', color: 'text-[#C6A7F2]' },
  { name: 'GSAP', color: 'text-[#6B4A8C]' },
  { name: 'Framer Motion', color: 'text-[#B272F2]' },
];

export default function TechMarquee() {
  return (
    <div className="w-full bg-[#361259] py-4 border border-[#6B4A8C] overflow-hidden">
      <Marquee pauseOnHover={true} speed={60} gradient={false}>
        {techs.map((tech, index) => (
          <motion.span
            key={index}
            className={`mx-6 font-bold text-2xl ${tech.color}`}
            whileHover={{ 
              scale: 1.2,
              textShadow: '0 0 8px rgba(194, 158, 255, 0.8)'
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 300,
              damping: 10 
            }}
          >
            #{tech.name}
          </motion.span>
        ))}
      </Marquee>
    </div>
  );
}
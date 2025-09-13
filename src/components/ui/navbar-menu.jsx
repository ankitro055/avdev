 'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // ✅ Import Link for client-side routing

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-[#D6AEFE] hover:text-[#FFFFFF] hover:opacity-[0.9] font-medium"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-[#361259] backdrop-blur-sm rounded-2xl overflow-hidden border border-[#B272F2]/20 shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent bg-gradient-to-r from-[#361259] to-[#6B4A8C] shadow-lg flex justify-center space-x-8 px-8 py-4"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex space-x-2 p-2 hover:bg-[#6B4A8C]/50 rounded-lg transition-colors"
    >
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl object-cover"
      />
      <div>
        <h4 className="text-lg font-bold mb-1 text-[#FFFFFF]">{title}</h4>
        <p className="text-[#D6AEFE] text-sm max-w-[10rem]">{description}</p>
      </div>
    </a>
  );
};

// ✅ Fixed version using Next.js <Link>
export const HoveredLink = ({ href, children, className = '' }) => {
  return (
    <Link
      href={href}
      className={`text-[#D6AEFE] hover:text-[#FFFFFF] transition-colors px-4 py-2 rounded-lg hover:bg-[#6B4A8C]/30 ${className}`}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const [active, setActive] = useState(null);

  return (
    <div className="fixed top-4 left-0 right-0 flex justify-center z-50 px-4">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Homepage</HoveredLink>
            <HoveredLink href="/about">About Us</HoveredLink>
            <HoveredLink href="/testimonials">Testimonials</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="grid grid-cols-2 gap-4 p-2">
            <ProductItem
              title="Web Development"
              description="Custom websites & web apps"
              href="/services/web"
              src="/web-dev.jpg"
            />
            <ProductItem
              title="UI/UX Design"
              description="Beautiful, intuitive interfaces"
              href="/services/design"
              src="/ui-ux.jpg"
            />
            <ProductItem
              title="E-commerce"
              description="Online stores that convert"
              href="/services/ecommerce"
              src="/ecommerce.jpg"
            />
            <ProductItem
              title="SEO"
              description="Get found online"
              href="/services/seo"
              src="/seo.jpg"
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Work">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/portfolio">Our Portfolio</HoveredLink>
            <HoveredLink href="/case-studies">Case Studies</HoveredLink>
            <HoveredLink href="/process">Our Process</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Get a Quote</HoveredLink>
            <HoveredLink href="/careers">Careers</HoveredLink>
            <HoveredLink href="/blog">Blog</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

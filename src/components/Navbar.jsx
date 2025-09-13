 'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utlis';

// Replace these with correct implementations or fix them similarly
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from '@/components/ui/navbar-menu';

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        {/* Services Menu */}
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services/web-development">Web Development</HoveredLink>
            <HoveredLink href="/mobile_apps">App Development</HoveredLink>
            <HoveredLink href="/ui-ux">UI/UX</HoveredLink>
            <HoveredLink href="/seo">SEO</HoveredLink>
          </div>
        </MenuItem>

        {/* Project Menu */}
        <MenuItem setActive={setActive} active={active} item="Project">
          <div className="lg:text-sm lg:grid lg:grid-cols-2 lg:gap-10 lg:p-4 flex flex-col space-y-4 gap-2">
            <ProductItem
              title="Ujjwal Welfare Trust"
              href="https://ujjwalwelfaretrust.org/"
              src="/ng.png"
              description="Empowering communities through education, healthcare, and sustainable development initiatives."
              external
            />
            <ProductItem
              title="Institute Website"
              href="https://seffoundation.com/"
              src="/arc.png"
              description="A feature-rich, responsive educational portal with student and."
              external
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
              external
            />
            <ProductItem
              title="Makeup Artist Portfolio"
              href="https://reliable-tarsier-4efeae.netlify.app/"
              src="/sapna.png"
              description="Elegant and responsive portfolio showcasing professional makeup artistry and transformations"
              external
            />
          </div>
        </MenuItem>

        {/* Quote/Contact Menu */}
        <MenuItem setActive={setActive} active={active} item="More">
        <div className="lg:flex lg:flex-col lg:space-y-4 lg:text-sm flex flex-col space-y-3">
  <HoveredLink href="/connection">Contact</HoveredLink>
  <HoveredLink href="/about">About</HoveredLink>
  <HoveredLink href="/teampage">Team</HoveredLink>
  <HoveredLink href="/">Home</HoveredLink>
</div>

        </MenuItem>
      </Menu>
    </div>
  );
}

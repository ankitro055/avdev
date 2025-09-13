 'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const cards = [
  // ... your existing card objects ...
  {
    title: 'I Will Add New Features to Your Existing Website',
    description: [
      'Add galleries, search, blog or custom forms',
      'Enhance without breaking your current setup',
      'Smooth, modern UX with React & Tailwind',
    ],
    target: 'Businesses looking to upgrade their site without rebuilding from scratch.',
  },
  {
    title: 'I Will Convert Your Static HTML to a Dynamic PHP (Laravel) Website',
    description: [
      'Use Laravel to power dynamic content',
      'Admin panel for managing everything',
      'Secure with routing, auth & DB (MySQL/PostgreSQL)',
    ],
    target: 'Non-technical site owners wanting modern backend power.',
  },
  {
    title: 'I Will Connect or Build RESTful & GraphQL APIs',
    description: [
      'Build fast APIs using Node.js, Express, or Laravel',
      'Integrate 3rd party APIs (Stripe, Twilio, etc.)',
      'Use TypeScript, secure tokens & validation',
    ],
    target: 'Apps or sites needing modern, secure APIs.',
  },
  {
    title: 'I Will Add Email Features with SMTP or API Services',
    description: [
      'Setup contact forms with email support',
      'Send automated transactional emails',
      'Use Nodemailer, Gmail API or SendGrid',
    ],
    target: 'Anyone who needs reliable email on their site or app.',
  },
  {
    title: 'I Will Build a Fullstack App with Next.js and MongoDB',
    description: [
      'Server-side rendering & API routes via Next.js',
      'Fast backend using MongoDB + Mongoose',
      'Modern auth & dashboards with Tailwind + ShadCN',
    ],
    target: 'Startups & devs needing blazing fast fullstack solutions.',
  },
  {
    title: 'I Will Build an Admin Dashboard with React & PostgreSQL',
    description: [
      'Dynamic dashboard with filtering & charts',
      'Secure auth system and data visualization',
      'GSAP/Framer Motion for smooth transitions',
    ],
    target: 'Businesses who want control over their data in a clean UI.',
  },
  {
    title: 'I Will Develop a Django Backend with SQL or MongoDB',
    description: [
      'Strong backend logic with Django + DRF',
      'Token-based APIs for mobile/web clients',
      'Admin interface for non-technical teams',
    ],
    target: 'Teams needing Python-based backend solutions.',
  },
  {
    title: 'I Will Create a Portfolio Website with ShadCN & Next.js 14',
    description: [
      'Beautiful, fast UI with latest Next.js App Router',
      'Dark/light mode, animations, and SEO ready',
      'Use ShadCN UI & Tailwind CSS for clean design',
    ],
    target: 'Freelancers, developers, or creatives who want a premium presence.',
  },
  {
    title: 'I Will Build a Real-time App Using WebSockets & Node.js',
    description: [
      'Real-time features: chat, updates, multiplayer logic',
      'Socket.IO or native WebSocket with Express/Node',
      'Deploy to Vercel, Railway, or custom VPS',
    ],
    target: 'Projects needing real-time communication.',
  },
  {
    title: 'I Will Develop a Modern SaaS MVP using Next.js, PostgreSQL & Stripe',
    description: [
      'Authentication, billing (Stripe), and subscription logic',
      'Type-safe backend with Prisma + Next.js API routes',
      'UI using Framer Motion, Tailwind & ShadCN components',
    ],
    target: 'Startup founders needing a scalable SaaS MVP fast.',
  },
];

export default function SolutionsSection() {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const totalWidth = container.scrollWidth / 2;

    const anim = gsap.to(container, {
      x: `-${totalWidth}px`,
      duration: 60,
      ease: 'linear',
      repeat: -1,
    });

    animationRef.current = anim;

    return () => {
      anim.kill();
    };
  }, []);

  const handlePause = () => {
    if (animationRef.current) animationRef.current.pause();
  };

  const handlePlay = () => {
    if (animationRef.current) animationRef.current.play();
  };

  return (
    <section className="bg-gradient-to-r from-[#361259] to-[#1A0933] text-white py-20 overflow-hidden">
      <div className="text-center px-4 md:px-12 mb-12">
        <p className="text-[#C6A7F2] font-medium mb-2">Freelance Development Services</p>
        <h2 className="text-4xl font-bold mb-4">
          Web <span className="text-[#B272F2] underline decoration-4">Development</span> Solutions
        </h2>
        <p className="text-[#C6A7F2]">Expert solutions tailored to your business needs</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          ref={containerRef}
          onMouseEnter={handlePause}
          onMouseLeave={handlePlay}
          className="flex gap-8 w-max px-4 md:px-12"
        >
          {[...cards, ...cards].map((card, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[400px] h-[420px] bg-gradient-to-br from-[#6B4A8C] to-[#361259] rounded-2xl p-8 shadow-xl flex flex-col justify-between transition-transform hover:scale-[1.02]"
            >
              <div>
                <h3 className="text-xl font-bold mb-6">"{card.title}"</h3>
                <div className="mb-6">
                  <p className="text-[#B272F2] font-semibold mb-3">✅ What We'll Do:</p>
                  <ul className="space-y-2 text-[#E2D4F0]">
                    {card.description.map((line, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-1 h-1 mt-2 mr-2 bg-[#B272F2] rounded-full"></span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-[#361259]/70 rounded-lg p-4">
                <p className="text-[#B272F2] font-semibold mb-2">⚡ Perfect For:</p>
                <p className="text-[#E2D4F0]">{card.target}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

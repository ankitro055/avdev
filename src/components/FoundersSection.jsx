 'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub, FaGlobe, FaLightbulb, FaRocket } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const AboutFoundersSection = () => {
  const sectionRef = useRef(null);
  const aboutRef = useRef(null);
  const foundersRef = useRef([]);
  const socialIconsRef = useRef([]);
  const statsRef = useRef(null);

  // Color theme
  const colors = {
    primary: '#361259',
    secondary: '#B272F2',
    accent: '#6B4A8C',
    light: '#C6A7F2',
    white: '#FFFFFF',
    dark: '#1A0933'
  };

  useEffect(() => {
    // Section animation
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 50,
      duration: 1
    });

    // About section animation
    gsap.from(aboutRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      x: -50,
      duration: 0.8
    });

    // Founders cards animation
    foundersRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.2
      });
    });

    // Social icons animation
    socialIconsRef.current.forEach((icon, index) => {
      gsap.from(icon, {
        scrollTrigger: {
          trigger: icon,
          start: "top 90%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        scale: 0.5,
        duration: 0.4,
        delay: index * 0.1,
        ease: "back.out(1.7)"
      });
    });

    // Stats counter animation
    if (statsRef.current) {
      const statItems = statsRef.current.querySelectorAll('.stat-item');
      statItems.forEach(item => {
        const target = +item.getAttribute('data-target');
        const count = { value: 0 };
        
        gsap.to(count, {
          value: target,
          duration: 2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          onUpdate: () => {
            item.textContent = Math.floor(count.value);
          }
        });
      });
    }

    // Parallax effect for decorative elements
    const floatElements = document.querySelectorAll('.float-animation');
    floatElements.forEach(el => {
      gsap.to(el, {
        y: 15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const founders = [
    {
      name: "Ankit Singh",
      role: "Lead Developer",
      bio: "Full-stack developer with 10+ years of experience building scalable web applications and leading tech teams. Specializes in React, Next.js, and Node.js architectures.",
      image: "/img.jpg",
      social: [
        { icon: <FaLinkedin />, url: "https://linkedin.com", color: "#0077B5" },
        { icon: <FaInstagram />, url: "https://instagram.com", color: "#E4405F" },
        { icon: <FaTwitter />, url: "https://twitter.com", color: "#1DA1F2" },
        { icon: <FaGithub />, url: "https://github.com", color: "#181717" }
      ]
    },
    {
      name: "Abhishek Sharma",
      role: "UX Specialist",
      bio: "UX/UI expert focused on creating intuitive user experiences with a strong background in product design and frontend development. Passionate about accessibility and micro-interactions.",
      image: "/images/founder2.jpg",
      social: [
        { icon: <FaLinkedin />, url: "https://linkedin.com", color: "#0077B5" },
        { icon: <FaInstagram />, url: "https://instagram.com", color: "#E4405F" },
        { icon: <FaTwitter />, url: "https://twitter.com", color: "#1DA1F2" },
        { icon: <FaGithub />, url: "https://github.com", color: "#181717" }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* About Us Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#C6A7F2] opacity-10 filter blur-xl float-animation"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-[#B272F2] opacity-10 filter blur-xl float-animation" style={{ animationDelay: '0.5s' }}></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div ref={aboutRef} className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: colors.primary }}>
                About <span style={{ color: colors.secondary }}>Our Agency</span>
              </h2>
              <p className="text-lg mb-6" style={{ color: colors.accent }}>
                We're a passionate team of developers, designers, and digital strategists dedicated to creating exceptional digital experiences that drive results.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-[#B272F2]">
                    <FaRocket className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1" style={{ color: colors.primary }}>Our Mission</h3>
                    <p style={{ color: colors.accent }}>To empower businesses with cutting-edge digital solutions that accelerate growth and enhance customer engagement.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-[#B272F2]">
                    <FaLightbulb className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1" style={{ color: colors.primary }}>Our Approach</h3>
                    <p style={{ color: colors.accent }}>We combine technical expertise with creative thinking to deliver solutions that are both functional and beautiful.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-[#B272F2]">
                    <FaGlobe className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1" style={{ color: colors.primary }}>Our Impact</h3>
                    <p style={{ color: colors.accent }}>We've helped over 200 clients worldwide transform their digital presence and achieve their business goals.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div ref={statsRef} className="bg-gradient-to-r from-[#361259] to-[#6B4A8C] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-8">By The Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#B272F2] bg-opacity-10 p-6 rounded-xl">
                    <div className="text-4xl font-bold mb-2 stat-item" data-target="200">0</div>
                    <p className="text-[#C6A7F2]">Happy Clients</p>
                  </div>
                  <div className="bg-[#B272F2] bg-opacity-10 p-6 rounded-xl">
                    <div className="text-4xl font-bold mb-2 stat-item" data-target="350">0</div>
                    <p className="text-[#C6A7F2]">Projects Completed</p>
                  </div>
                  <div className="bg-[#B272F2] bg-opacity-10 p-6 rounded-xl">
                    <div className="text-4xl font-bold mb-2 stat-item" data-target="8">0</div>
                    <p className="text-[#C6A7F2]">Years Experience</p>
                  </div>
                  <div className="bg-[#B272F2] bg-opacity-10 p-6 rounded-xl">
                    <div className="text-4xl font-bold mb-2 stat-item" data-target="99">0</div>
                    <p className="text-[#C6A7F2]">% Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section ref={sectionRef} className="py-20 px-6 bg-[#F8F5FF] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-[#B272F2] opacity-10 filter blur-xl float-animation"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-[#6B4A8C] opacity-10 filter blur-xl float-animation" style={{ animationDelay: '0.5s' }}></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.primary }}>
              Meet <span style={{ color: colors.secondary }}>Our Founders</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.accent }}>
              The visionary leaders who turned a simple idea into a thriving digital agency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {founders.map((founder, index) => (
              <div 
                key={index}
                ref={el => foundersRef.current[index] = el}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Hover effect layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#361259] to-[#6B4A8C] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8 z-10">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative w-40 h-40 shrink-0">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        width={160}
                        height={160}
                        className="rounded-full object-cover border-4 border-white group-hover:border-[#B272F2] transition-all duration-500"
                      />
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-full border-4 border-[#C6A7F2] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>

                    <div className="text-center md:text-left mt-6 md:mt-0">
                      <h3 className="text-2xl font-bold text-[#361259] group-hover:text-white transition-colors duration-300">{founder.name}</h3>
                      <p className="text-[#B272F2] mb-4 group-hover:text-[#C6A7F2] transition-colors duration-300">{founder.role}</p>
                      <p className="text-[#6B4A8C] mb-6 group-hover:text-white transition-colors duration-300">{founder.bio}</p>

                      <div className="flex justify-center md:justify-start space-x-4">
                        {founder.social.map((social, i) => (
                          <a 
                            key={i}
                            ref={el => socialIconsRef.current.push(el)}
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md group-hover:bg-opacity-20 group-hover:backdrop-blur-sm transition-all duration-300"
                            style={{ color: social.color }}
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFoundersSection;
 'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiShield, FiClock, FiHeadphones, FiCode, FiServer, FiRefreshCw } from 'react-icons/fi';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const MaintenanceSupportSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const headingRef = useRef(null);
  
  // Color theme
  const colors = {
    primary: '#361259',
    secondary: '#B272F2',
    accent: '#6B4A8C',
    light: '#C6A7F2',
    dark: '#1A0933'
  };

  // GSAP Animations
  useEffect(() => {
    // Section animation
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%"
      }
    });

    // Card animations
    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 80%"
        }
      });
    });

    // Floating animation for decorative elements
    const floatElements = sectionRef.current.querySelectorAll('.float-animation');
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

  const supportServices = [
    {
      icon: <FiShield className="text-3xl" />,
      title: "Security Updates",
      description: "Regular security patches and vulnerability fixes to protect your website from threats.",
      benefits: [
        "Malware protection",
        "Firewall management",
        "SSL certificate renewal"
      ]
    },
    {
      icon: <FiClock className="text-3xl" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock monitoring to ensure 99.9% uptime and immediate issue detection.",
      benefits: [
        "Real-time alerts",
        "Performance tracking",
        "Downtime prevention"
      ]
    },
    {
      icon: <FiHeadphones className="text-3xl" />,
      title: "Priority Support",
      description: "Dedicated support team with fast response times to resolve your issues quickly.",
      benefits: [
        "24/7 ticket system",
        "Phone & chat support",
        "Emergency response"
      ]
    },
    {
      icon: <FiCode className="text-3xl" />,
      title: "Code Maintenance",
      description: "Keep your website's codebase clean, optimized, and compatible with latest standards.",
      benefits: [
        "Bug fixes",
        "Performance optimization",
        "Technology updates"
      ]
    },
    {
      icon: <FiServer className="text-3xl" />,
      title: "Server Management",
      description: "Full server administration including backups, scaling, and performance tuning.",
      benefits: [
        "Automated backups",
        "Load balancing",
        "Resource optimization"
      ]
    },
    {
      icon: <FiRefreshCw className="text-3xl" />,
      title: "Content Updates",
      description: "Regular content refreshes to keep your website relevant and engaging for visitors.",
      benefits: [
        "SEO content updates",
        "Media management",
        "Seasonal updates"
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: colors.light }}
    >
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#B272F2] opacity-10 filter blur-xl float-animation"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#6B4A8C] opacity-10 filter blur-xl float-animation" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-[#361259] opacity-10 filter blur-xl float-animation" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.primary }}>
            Reliable <span style={{ color: colors.secondary }}>Maintenance & Support</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.accent }}>
            Keep your website secure, fast, and up-to-date with our comprehensive care plans
          </p>
        </div>

        {/* Why It Matters */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
                Why Website Maintenance Matters
              </h3>
              <p className="mb-4" style={{ color: colors.accent }}>
                Your website is your digital storefront - keeping it well-maintained is crucial for:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: colors.secondary }}></span>
                  <span style={{ color: colors.dark }}><strong>Security:</strong> Prevent hacks and data breaches</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: colors.secondary }}></span>
                  <span style={{ color: colors.dark }}><strong>Performance:</strong> Maintain fast load times (under 2s)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: colors.secondary }}></span>
                  <span style={{ color: colors.dark }}><strong>SEO:</strong> Keep your search rankings high</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: colors.secondary }}></span>
                  <span style={{ color: colors.dark }}><strong>UX:</strong> Ensure smooth visitor experience</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-[#361259] to-[#6B4A8C] rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-4">Our Maintenance Stats</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                    <div className="text-3xl font-bold mb-1">99.9%</div>
                    <div className="text-sm">Uptime Guarantee</div>
                  </div>
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                    <div className="text-3xl font-bold mb-1">24/7</div>
                    <div className="text-sm">Monitoring</div>
                  </div>
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                    <div className="text-3xl font-bold mb-1">30min</div>
                    <div className="text-sm">Avg. Response Time</div>
                  </div>
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                    <div className="text-3xl font-bold mb-1">100%</div>
                    <div className="text-sm">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportServices.map((service, index) => (
            <div 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: colors.light }}>
                  <div style={{ color: colors.secondary }}>{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.primary }}>{service.title}</h3>
                <p className="mb-4" style={{ color: colors.accent }}>{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 rounded-full mt-2 mr-3" style={{ backgroundColor: colors.secondary }}></span>
                      <span style={{ color: colors.dark }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                <button className="text-sm font-medium" style={{ color: colors.secondary }}>
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6" style={{ color: colors.primary }}>
            Ready for Stress-Free Website Management?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="px-8 py-3 rounded-lg font-bold text-white transition-all transform hover:scale-105"
              style={{ backgroundColor: colors.secondary }}
            >
              Get Maintenance Plan
            </button>
            <button 
              className="px-8 py-3 rounded-lg font-bold border-2 transition-all transform hover:scale-105"
              style={{ borderColor: colors.secondary, color: colors.secondary }}
            >
              Talk to Support Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceSupportSection;
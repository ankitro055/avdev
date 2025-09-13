 'use client'
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight, FiUsers, FiMail, FiAward, FiStar } from 'react-icons/fi';
import { FaQuoteLeft, FaRegSmileBeam, FaCrown } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ClientAchievements = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const maintenanceRef = useRef(null);
  const ctaRef = useRef(null);

  // Floating elements data
  const floatingElements = [
    { id: 1, width: 120, height: 120, top: 10, left: 5, backgroundColor: '#B272F2' },
    { id: 2, width: 80, height: 80, top: 60, left: 80, backgroundColor: '#6B4A8C' },
    { id: 3, width: 100, height: 100, top: 30, left: 40, backgroundColor: '#C6A7F2' },
    { id: 4, width: 60, height: 60, top: 70, left: 20, backgroundColor: '#361259' },
  ];

  // Client data
  const clients = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      photo: "/client1.jpg", // Replace with actual path
      testimonial: "AV Development transformed our online presence completely. Our e-commerce site saw 300% growth in just 3 months!",
      company: "StyleHub Fashion"
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@example.com",
      photo: "/client2.jpg", // Replace with actual path
      testimonial: "The team's attention to detail and post-launch support has been exceptional. Truly professional service.",
      company: "GreenLeaf Organics"
    },
    {
      id: 3,
      name: "Arjun Mehta",
      email: "arjun@example.com",
      photo: "/client3.jpg", // Replace with actual path
      testimonial: "Our custom web application has streamlined operations saving us ₹5L annually. Worth every rupee!",
      company: "TechLogix Solutions"
    }
  ];

  // Stats data
  const stats = [
    { value: "250+", label: "Happy Clients", icon: <FaRegSmileBeam className="text-3xl" /> },
    { value: "98%", label: "Retention Rate", icon: <FiStar className="text-3xl" /> },
    { value: "500+", label: "Projects Delivered", icon: <FiCheck className="text-3xl" /> },
    { value: "24/7", label: "Support Available", icon: <FiMail className="text-3xl" /> }
  ];

  // Maintenance features
  const maintenanceFeatures = [
    "Weekly backups & security scans",
    "Performance optimization",
    "Content updates (up to 5 pages/month)",
    "SEO monitoring & adjustments",
    "Bug fixes & troubleshooting",
    "Hosting management",
    "Email support (24hr response)",
    "Monthly analytics reports"
  ];

  useEffect(() => {
    // Section entrance animation
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Title animation
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.3
    });

    // Stats counter animation
    statsRef.current.querySelectorAll('.stat-item').forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 0.5 + (index * 0.15),
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    });

    // Testimonial cards animation
    testimonialsRef.current.querySelectorAll('.testimonial-card').forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.8,
        delay: 0.2 * index,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });

    // Maintenance section animation
    gsap.from(maintenanceRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: maintenanceRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // CTA animation
    gsap.from(ctaRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Floating elements
    const floatingElements = gsap.utils.toArray(".floating-element");
    floatingElements.forEach((el, i) => {
      gsap.to(el, {
        y: 15,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3
      });
    });
  }, []);

  return (
    <div className="bg-white overflow-hidden" ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#361259] to-[#6B4A8C] text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          {floatingElements.map((el) => (
            <div
              key={el.id}
              className="absolute rounded-full floating-element"
              style={{
                width: `${el.width}px`,
                height: `${el.height}px`,
                top: `${el.top}%`,
                left: `${el.left}%`,
                backgroundColor: el.backgroundColor,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Trusted by <span className="text-[#B272F2]">250+</span> Clients Worldwide
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            See how we've helped businesses like yours achieve digital excellence
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button 
              onClick={() => window.open("https://wa.me/9718659236", "_blank")}
              className="inline-flex items-center px-8 py-4 bg-[#B272F2] hover:bg-[#C6A7F2] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Get Your Free Consultation</span>
              <FiArrowRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-item text-center p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-md"
              whileHover={{ y: -5 }}
            >
              <div className="text-[#6B4A8C] mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#361259] mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#361259] mb-16">
            What Our <span className="text-[#B272F2]">Clients Say</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div 
                key={client.id}
                className="testimonial-card bg-white p-8 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img 
                      src={client.photo} 
                      alt={client.name} 
                      className="w-16 h-16 rounded-full object-cover border-4 border-[#C6A7F2]"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-[#B272F2] text-white p-1 rounded-full">
                      <FiCheck className="text-xs" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-[#361259]">{client.name}</h4>
                    <p className="text-sm text-gray-500">{client.company}</p>
                    <p className="text-xs text-gray-400">{client.email}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <FaQuoteLeft className="text-[#C6A7F2] text-2xl opacity-30 absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic mb-6 pl-6">"{client.testimonial}"</p>
                </div>
                
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section ref={maintenanceRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#361259] mb-4">
              <span className="text-[#B272F2]">1 Year</span> Premium Maintenance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just build your website - we keep it running flawlessly
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="bg-gradient-to-br from-[#361259] to-[#6B4A8C] p-8 rounded-2xl shadow-2xl text-white"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center mb-6">
                <FaCrown className="text-3xl text-[#B272F2] mr-4" />
                <h3 className="text-2xl font-bold">Maintenance Plan Includes</h3>
              </div>
              
              <ul className="space-y-3">
                {maintenanceFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-[#B272F2] border-opacity-30">
                <p className="text-2xl font-bold mb-4">Only ₹8,999/year</p>
                <button 
                  onClick={() => window.open("https://wa.me/9718659236", "_blank")}
                  className="w-full py-3 bg-[#B272F2] hover:bg-[#C6A7F2] text-white font-bold rounded-lg transition-all flex items-center justify-center"
                >
                  <span>Add Maintenance Plan</span>
                  <FiArrowRight className="ml-2" />
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#C6A7F2] rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#B272F2] rounded-full opacity-20"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-[#361259] mb-4">Why Maintenance Matters</h3>
                <p className="text-gray-700 mb-6">
                  Your website is a living asset that requires regular care to maintain security, performance, and relevance.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-[#361259] text-white p-2 rounded-full mr-4">
                      <FiCheck className="text-sm" />
                    </div>
                    <span className="text-gray-700">Prevent security vulnerabilities and hacking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#361259] text-white p-2 rounded-full mr-4">
                      <FiCheck className="text-sm" />
                    </div>
                    <span className="text-gray-700">Ensure compatibility with new devices and browsers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#361259] text-white p-2 rounded-full mr-4">
                      <FiCheck className="text-sm" />
                    </div>
                    <span className="text-gray-700">Keep content fresh for better SEO rankings</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#361259] text-white p-2 rounded-full mr-4">
                      <FiCheck className="text-sm" />
                    </div>
                    <span className="text-gray-700">Get expert support when you need it</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#361259] to-[#6B4A8C]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Digital Presence?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-[#C6A7F2] mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Join our family of satisfied clients and experience the AV Development difference
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={() => window.open("https://wa.me/9718659236", "_blank")}
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-[#361259] font-bold rounded-full transition-all shadow-2xl hover:shadow-xl hover:scale-105"
            >
              <span>Start Your Project Today</span>
              <FiArrowRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ClientAchievements;
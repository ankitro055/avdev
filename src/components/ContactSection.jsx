"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useForm } from "react-hook-form";

gsap.registerPlugin(TextPlugin);

export const ContactSection = () => {
  const sphereRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    // GSAP Animations
    gsap.from(titleRef.current, {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    });

    gsap.from(formRef.current, {
      duration: 1.5,
      y: 50,
      opacity: 0,
      delay: 0.3,
      ease: "power3.out",
    });

    // Sphere animation
    gsap.to(sphereRef.current, {
      duration: 20,
      rotationY: 360,
      rotationX: 360,
      repeat: -1,
      ease: "none",
    });
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Using FromSphere to handle the form submission
      const response = await fetch("https://api.fromsphere.com/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_FROMSPHERE_API_KEY}`
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: `New inquiry about ${data.service}`,
          message: data.message,
          metadata: {
            service: data.service
          }
        }),
      });

      if (response.ok) {
        setSubmitStatus({ success: true, message: "Message sent successfully! We'll contact you soon." });
        reset();
        gsap.fromTo(".success-message", 
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5 }
        );
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: "Error sending message. Please try again." });
      gsap.fromTo(".error-message", 
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contactpage" className="relative py-20 overflow-hidden bg-[#361259]">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute w-64 h-64 rounded-full bg-[#B272F2] blur-3xl top-1/4 left-1/4"></div>
        <div className="absolute w-96 h-96 rounded-full bg-[#6B4A8C] blur-3xl bottom-1/4 right-1/4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column - Form */}
          <div className="w-full lg:w-1/2" ref={formRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#361259]/50 backdrop-blur-lg rounded-2xl p-8 border border-[#6B4A8C] shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Build Something Amazing
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#C6A7F2] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 bg-[#6B4A8C]/30 border border-[#6B4A8C] rounded-lg focus:ring-2 focus:ring-[#B272F2] focus:border-transparent text-white placeholder-[#C6A7F2]/50"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-[#ff6b6b]">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#C6A7F2] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full px-4 py-3 bg-[#6B4A8C]/30 border border-[#6B4A8C] rounded-lg focus:ring-2 focus:ring-[#B272F2] focus:border-transparent text-white placeholder-[#C6A7F2]/50"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-[#ff6b6b]">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[#C6A7F2] mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    {...register("service", { required: "Please select a service" })}
                    className="w-full px-4 py-3 bg-[#6B4A8C]/30 border border-[#6B4A8C] rounded-lg focus:ring-2 focus:ring-[#B272F2] focus:border-transparent text-white"
                  >
                    <option value="" className="bg-[#361259]">Select a service</option>
                    <option value="web-development" className="bg-[#361259]">Web Development</option>
                    <option value="mobile-app" className="bg-[#361259]">Mobile App Development</option>
                    <option value="ui-ux" className="bg-[#361259]">UI/UX Design</option>
                    <option value="consulting" className="bg-[#361259]">Consulting</option>
                    <option value="other" className="bg-[#361259]">Other</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-[#ff6b6b]">{errors.service.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#C6A7F2] mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    {...register("message", { required: "Message is required" })}
                    className="w-full px-4 py-3 bg-[#6B4A8C]/30 border border-[#6B4A8C] rounded-lg focus:ring-2 focus:ring-[#B272F2] focus:border-transparent text-white placeholder-[#C6A7F2]/50"
                    placeholder="Tell us about your project..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-[#ff6b6b]">{errors.message.message}</p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    {submitStatus?.success ? (
                      <p className="success-message text-[#A3E635]">{submitStatus.message}</p>
                    ) : submitStatus?.success === false ? (
                      <p className="error-message text-[#ff6b6b]">{submitStatus.message}</p>
                    ) : null}
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-gradient-to-r from-[#B272F2] to-[#6B4A8C] text-white font-medium rounded-lg shadow-lg hover:shadow-[#B272F2]/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Right Column - Content & Sphere */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <div ref={titleRef} className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="text-[#B272F2]">Elevate</span> Your Digital Presence?
              </h2>
              <p className="text-lg text-[#C6A7F2] max-w-lg">
                Whether you're looking to build a new website, revamp an existing one, or need expert consultation, we're here to help. Drop us a message and let's create something extraordinary together.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              <div
                ref={sphereRef}
                className="absolute inset-0 rounded-full border-2 border-[#B272F2]/30 flex items-center justify-center"
              >
                <div className="absolute w-full h-full rounded-full border border-[#C6A7F2]/20 animate-spin-slow" style={{ animationDuration: '20s' }}></div>
                <div className="absolute w-3/4 h-3/4 rounded-full border border-[#B272F2]/30 animate-spin-slow-reverse" style={{ animationDuration: '25s' }}></div>
                <div className="absolute w-1/2 h-1/2 rounded-full bg-[#6B4A8C]/30 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-1/2 h-1/2 rounded-full bg-gradient-to-br from-[#B272F2] to-[#6B4A8C] animate-pulse"></div>
                </div>
              </div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#361259] px-4 py-2 rounded-full border border-[#B272F2] shadow-lg"
              >
                <span className="text-sm font-medium text-[#C6A7F2]">Web Design</span>
              </motion.div>

              <motion.div
                animate={{
                  x: [0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-[#361259] px-4 py-2 rounded-full border border-[#B272F2] shadow-lg"
              >
                <span className="text-sm font-medium text-[#C6A7F2]">Development</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#361259] px-4 py-2 rounded-full border border-[#B272F2] shadow-lg"
              >
                <span className="text-sm font-medium text-[#C6A7F2]">SEO</span>
              </motion.div>

              <motion.div
                animate={{
                  x: [0, -15, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-[#361259] px-4 py-2 rounded-full border border-[#B272F2] shadow-lg"
              >
                <span className="text-sm font-medium text-[#C6A7F2]">UX/UI</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
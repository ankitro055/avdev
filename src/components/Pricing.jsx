  'use client'
  import React, { useEffect, useRef } from 'react';
  import { motion } from 'framer-motion';
  import { FiCheck, FiArrowRight, FiStar } from 'react-icons/fi';
  import { FaCrown, FaFire, FaGem } from 'react-icons/fa';
  import Head from 'next/head';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  const plans = [
    {
      title: "Basic Plan",
      price: "₹5,999",
      originalPrice: "₹9,999",
      features: [
        { text: "5 Page Website", included: true },
        { text: "1 Year Free Domain (.com, .in, .org)", included: true },
        { text: "1 Year Free Cloud Hosting", included: true },
        { text: "Premium Designer Logo (3 Samples)", included: true },
        { text: "Dynamic Website (Modern Design)", included: true },
        { text: "Admin Access", included: true },
        { text: "Google Search Console Setup", included: true },
        { text: "Lifetime Hosting Support", included: true },
        { text: "Unlimited Media Upload", included: true },
        { text: "Free SSL Certificate", included: true },
        { text: "10 Professional Email IDs", included: true },
        { text: "SEO Optimized Website", included: true },
        { text: "100% Responsive Design", included: true },
        { text: "Live Chat Integration", included: true },
        { text: "Payment Gateway Setup", included: true },
        { text: "Advanced Analytics", included: false },
        { text: "Priority Support", included: false },
        { text: "Monthly SEO Reports", included: false },
        { text: "Content Management System", included: false },
      ],
      buttonText: "WhatsApp - 9718659236",
      popular: false,
      icon: <FiStar className="text-yellow-400" aria-hidden="true" />,
    },
    {
      title: "Standard Plan",
      price: "₹14,999",
      originalPrice: "₹25,999",
      features: [
        { text: "12 Page Website", included: true },
        { text: "1 Year Free Domain (.com, .in, .org)", included: true },
        { text: "1 Year Free Cloud Hosting", included: true },
        { text: "Premium Designer Logo (5 Samples)", included: true },
        { text: "Dynamic Website (Premium Design)", included: true },
        { text: "Admin Access", included: true },
        { text: "Google Search Console Setup", included: true },
        { text: "Lifetime Hosting Support", included: true },
        { text: "Unlimited Media Upload", included: true },
        { text: "Free SSL Certificate", included: true },
        { text: "15 Professional Email IDs", included: true },
        { text: "SEO Optimized Website", included: true },
        { text: "100% Responsive Design", included: true },
        { text: "Live Chat Integration", included: true },
        { text: "Payment Gateway Setup", included: true },
        { text: "Advanced Analytics", included: true },
        { text: "Priority Support", included: true },
        { text: "Monthly SEO Reports", included: false },
        { text: "Content Management System", included: false },
      ],
      buttonText: "WhatsApp - 9718659236",
      popular: true,
      icon: <FaFire className="text-orange-500" aria-hidden="true" />,
    },
    {
      title: "Premium Plan",
      price: "Custom Quote",
      features: [
        { text: "Unlimited Pages Website", included: true },
        { text: "1 Year Free Domain (.com, .in, .org)", included: true },
        { text: "1 Year Free Cloud Hosting", included: true },
        { text: "Premium Designer Logo (Unlimited Revisions)", included: true },
        { text: "Dynamic Website (Custom Design)", included: true },
        { text: "Admin Access", included: true },
        { text: "Google Search Console Setup", included: true },
        { text: "Lifetime Hosting Support", included: true },
        { text: "Unlimited Media Upload", included: true },
        { text: "Free SSL Certificate", included: true },
        { text: "Unlimited Professional Email IDs", included: true },
        { text: "SEO Optimized Website", included: true },
        { text: "100% Responsive Design", included: true },
        { text: "Live Chat Integration", included: true },
        { text: "Payment Gateway Setup", included: true },
        { text: "Advanced Analytics", included: true },
        { text: "Priority Support", included: true },
        { text: "Monthly SEO Reports", included: true },
        { text: "Content Management System", included: true },
      ],
      buttonText: "WhatsApp - 9718659236",
      popular: false,
      icon: <FaCrown className="text-yellow-500" aria-hidden="true" />,
    },
  ];

  const FeatureItem = ({ feature }) => (
    <motion.li 
      className={`flex items-start py-2 ${feature.included ? 'text-gray-800' : 'text-gray-400 line-through'}`}
      aria-label={feature.included ? `Included: ${feature.text}` : `Not included: ${feature.text}`}
    >
      <span className="mr-2 mt-0.5">
        {feature.included ? (
          <FiCheck className="text-green-500" aria-hidden="true" />
        ) : (
          <span className="w-4 h-4 inline-block" aria-hidden="true"></span>
        )}
      </span>
      <span className="text-sm">{feature.text}</span>
    </motion.li>
  );

  const PlanCard = ({ plan }) => {
    const cardRef = useRef(null);

    useEffect(() => {
      gsap.from(cardRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }, []);

    return (
      <motion.article
        ref={cardRef}
        className={`relative rounded-2xl overflow-hidden ${plan.popular ? 'border-2 border-purple-500' : 'border border-gray-200'} bg-white shadow-lg`}
        whileHover={{ y: -5 }}
        itemScope
        itemType="https://schema.org/Product"
      >
        {plan.popular && (
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white text-center py-1 text-xs font-bold uppercase tracking-wide">
            Most Popular
          </div>
        )}
        
        <div className="p-6" itemScope itemType="https://schema.org/Offer" itemProp="offers">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center" itemProp="name">
              {plan.icon}
              <span className="ml-2">{plan.title}</span>
            </h2>
            {plan.popular && <FaGem className="text-purple-500" aria-hidden="true" />}
          </div>
          
          <div className="mb-6">
            <div className="flex items-end justify-center space-x-2">
              <span className="text-3xl font-bold text-gray-800" itemProp="price">
                {plan.price}
              </span>
              {plan.originalPrice && (
                <span className="text-sm text-gray-500 line-through mb-1" itemProp="priceCurrency" content="INR">
                  {plan.originalPrice}
                </span>
              )}
            </div>
            {plan.price !== "Custom Quote" && (
              <p className="text-xs text-gray-500 text-center mt-1">
                Annual renewal: ₹4,000
              </p>
            )}
          </div>
          
          <ul className="divide-y divide-gray-200 mb-6 max-h-96 overflow-y-auto pr-2">
            {plan.features.map((feature, idx) => (
              <FeatureItem key={`${plan.title}-feature-${idx}`} feature={feature} />
            ))}
          </ul>
          
          <motion.button
            className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all ${
              plan.popular
                ? 'bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white hover:shadow-purple-500/20'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-indigo-500/20'
            } shadow-lg hover:shadow-xl`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Get started with ${plan.title}`}
            onClick={() => window.open("https://wa.me/9718659236", "_blank")}
          >
            <span>{plan.buttonText}</span>
            <FiArrowRight className="ml-1" aria-hidden="true" />
          </motion.button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500"></div>
      </motion.article>
    );
  };

  const Plans = () => {
    const titleRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
      // Animate title
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2
      });

      // Animate floating elements
      const floatingElements = gsap.utils.toArray(".floating-element");
      floatingElements.forEach((el, i) => {
        gsap.to(el, {
          y: 10,
          duration: 2 + Math.random() * 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2
        });
      });

      // Section animation
      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }, []);

    return (
      <>
        <Head>
          <title>Premium Web Development Plans | Compare Pricing & Features</title>
          <meta 
            name="description" 
            content="Choose the perfect Software development plan for your business. Compare our Basic, Standard, and Premium packages with features like free domain, hosting, SEO optimization, and more." 
          />
          <meta 
            name="keywords" 
            content="web development plans, website pricing, professional website, ecommerce website, SEO optimized website, responsive web design" 
          />
          <meta property="og:title" content="Premium Web Development Plans | Compare Pricing & Features" />
          <meta property="og:description" content="Choose the perfect web development plan for your business with our feature-packed solutions." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.avdevelopment.in/plans" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Premium Web Development Plans",
              "description": "Compare our feature-packed web development plans and choose the perfect solution for your business",
              "url": "https://www.avdevelopment.in/plans",
              "publisher": {
                "@type": "Organization",
                "name": "Your Company Name",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://yourwebsite.com/logo.png"
                }
              }
            })}
          </script>
        </Head>

        <main className="bg-white">
          <section 
            ref={sectionRef}
            className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
            aria-labelledby="plans-heading"
          >
            <div className="absolute inset-0 overflow-hidden opacity-10" aria-hidden="true">
              {[...Array(20)].map((_, i) => (
                <div
                  key={`bg-element-${i}`}
                  className="absolute rounded-full floating-element"
                  style={{
                    width: `${Math.random() * 6 + 2}px`,
                    height: `${Math.random() * 6 + 2}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    backgroundColor: i % 3 === 0 ? '#361259' : i % 2 === 0 ? '#B272F2' : '#6B4A8C',
                  }}
                />
              ))}
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.div className="text-center mb-16">
                <h1 
                  ref={titleRef}
                  id="plans-heading" 
                  className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-500 mb-4"
                >
                  Premium Web Development Plans
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Compare our feature-packed website development solutions and choose the perfect package for your business needs. All plans include free domain, hosting, SEO optimization, and responsive design.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <PlanCard
                    key={`plan-${index}`}
                    plan={plan}
                  />
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-6">Not sure which plan is right for your business? Our experts can help.</p>
                <motion.button
                  className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-gray-800 bg-white hover:bg-gray-50 transition-colors shadow-lg hover:shadow-purple-500/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Contact our web development experts"
                  onClick={() => window.open("https://wa.me/9718659236", "_blank")}
                >
                  <span>Contact Us</span>
                  <FiArrowRight className="ml-2" aria-hidden="true" />
                </motion.button>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  };

  export default Plans;
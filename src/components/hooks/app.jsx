'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight, FiStar } from 'react-icons/fi';
import { FaCrown, FaFire, FaGem } from 'react-icons/fa';
import Head from 'next/head';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const appPlans = [
  {
    title: 'Basic App Plan',
    price: '₹19,999',
    originalPrice: '₹29,999',
    features: [
      { text: 'Cross-Platform (iOS & Android)', included: true },
      { text: '3 Screens UI/UX Design', included: true },
      { text: 'Firebase/Backend Integration', included: true },
      { text: 'Push Notifications', included: true },
      { text: 'App Icon + Splash Screen', included: true },
      { text: 'Basic Analytics', included: true },
      { text: '1 Month Free Support', included: true },
      { text: 'App Store Deployment (Play Store)', included: true },
      { text: 'App Store (Apple) Deployment', included: false },
      { text: 'In-App Purchases', included: false },
      { text: 'Priority Support', included: false },
    ],
    popular: false,
    icon: <FiStar className="text-[#B272F2]" aria-hidden="true" />,
    buttonText: 'WhatsApp - 9718659236',
  },
  {
    title: 'Standard App Plan',
    price: '₹39,999',
    originalPrice: '₹54,999',
    features: [
      { text: 'Cross-Platform (iOS & Android)', included: true },
      { text: '8 Screens UI/UX Design', included: true },
      { text: 'Advanced Firebase/Backend Integration', included: true },
      { text: 'Push Notifications', included: true },
      { text: 'App Icon + Splash Screen', included: true },
      { text: 'Google Maps / Geolocation', included: true },
      { text: '3rd Party API Integration', included: true },
      { text: 'App Store Deployment (Android & iOS)', included: true },
      { text: 'In-App Purchases', included: true },
      { text: '3 Months Free Support', included: true },
      { text: 'Priority Support', included: true },
    ],
    popular: true,
    icon: <FaFire className="text-[#C6A7F2]" aria-hidden="true" />,
    buttonText: 'WhatsApp - 9718659236',
  },
  {
    title: 'Premium App Plan',
    price: 'Custom Quote',
    features: [
      { text: 'Unlimited Screens', included: true },
      { text: 'Custom UI/UX Design', included: true },
      { text: 'Advanced Backend (Node.js/Django)', included: true },
      { text: 'AI/ML Features', included: true },
      { text: 'Real-Time Chat Integration', included: true },
      { text: 'Payment Gateway Integration', included: true },
      { text: 'Multiple Language Support', included: true },
      { text: 'Full API Development', included: true },
      { text: 'App Store Deployment', included: true },
      { text: '6 Months Free Support', included: true },
      { text: 'Priority Support', included: true },
    ],
    popular: false,
    icon: <FaCrown className="text-[#361259]" aria-hidden="true" />,
    buttonText: 'WhatsApp - 9718659236',
  },
];

const FeatureItem = ({ feature }) => (
  <motion.li
    className={`flex items-start py-1 text-sm ${feature.included ? 'text-gray-800' : 'text-gray-400 line-through'}`}
  >
    <span className="mr-2 mt-1">
      {feature.included ? (
        <FiCheck className="text-green-500" aria-hidden="true" />
      ) : (
        <span className="w-4 h-4 inline-block" />
      )}
    </span>
    <span>{feature.text}</span>
  </motion.li>
);

const PlanCard = ({ plan }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 85%',
      },
    });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`rounded-2xl p-6 shadow-lg bg-white border-2 ${plan.popular ? 'border-[#B272F2]' : 'border-gray-200'}`}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        {plan.icon}
        <h3 className="ml-2 text-xl font-bold text-[#361259]">{plan.title}</h3>
      </div>

      <div className="mb-4">
        <div className="text-3xl font-bold text-[#6B4A8C]">{plan.price}</div>
        {plan.originalPrice && <div className="text-sm line-through text-gray-400">{plan.originalPrice}</div>}
      </div>

      <ul className="mb-6 space-y-1 max-h-72 overflow-y-auto pr-1">
        {plan.features.map((f, i) => <FeatureItem key={i} feature={f} />)}
      </ul>

      <button
        className="w-full bg-gradient-to-r from-[#361259] to-[#6B4A8C] text-white py-2 rounded-lg flex justify-center items-center space-x-2 hover:shadow-xl transition"
        onClick={() => window.open('https://wa.me/9718659236', '_blank')}
      >
        <span>{plan.buttonText}</span>
        <FiArrowRight />
      </button>
    </motion.div>
  );
};

const AppDevelopmentPlans = () => {
  return (
    <section className="py-20 bg-white px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#361259] to-[#C6A7F2]">App Development Plans</h2>
        <p className="text-gray-600 mt-2">Choose a package tailored to your mobile app goals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {appPlans.map((plan, i) => <PlanCard key={i} plan={plan} />)}
      </div>
    </section>
  );
};

export default AppDevelopmentPlans;
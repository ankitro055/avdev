 'use client';

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiSearch, FiTrendingUp, FiGlobe, FiDollarSign, FiSmartphone, FiBarChart2, FiTarget } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SEODigitalMarketingPage = () => {
  const [activeAudience, setActiveAudience] = useState('startups');
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const processRef = useRef(null);
  const audienceRef = useRef(null);
  const ctaRef = useRef(null);

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
    // Hero animation
    gsap.from(heroRef.current.querySelectorAll('.hero-element'), {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Stats counter animation
    const statElements = statsRef.current.querySelectorAll('.stat-item');
    statElements.forEach(el => {
      const target = +el.getAttribute('data-target');
      const count = { value: 0 };
      
      gsap.to(count, {
        value: target,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        onUpdate: () => {
          el.querySelector('.stat-number').textContent = Math.floor(count.value);
        }
      });
    });

    // Process steps animation
    gsap.from(processRef.current.querySelectorAll('.process-step'), {
      opacity: 0,
      x: -50,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: processRef.current,
        start: 'top 70%'
      }
    });

    // Audience section animation
    gsap.from(audienceRef.current.querySelectorAll('.audience-card'), {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: audienceRef.current,
        start: 'top 70%'
      }
    });

    // CTA animation
    gsap.from(ctaRef.current.querySelectorAll('.cta-element'), {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ctaRef.current,
        start: 'top 80%'
      }
    });

    // Floating elements animation
    const floatElements = document.querySelectorAll('.float-animation');
    floatElements.forEach(el => {
      gsap.to(el, {
        y: 15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const audienceData = {
    startups: {
      title: "Startups & Entrepreneurs",
      description: "We help startups establish their digital presence with cost-effective SEO strategies that deliver quick wins while building long-term organic growth.",
      challenges: ["Limited brand awareness", "Small marketing budgets", "Need quick results"],
      solutions: ["Rapid indexing strategies", "Content marketing foundation", "Local SEO for early traction"],
      icon: <FiTrendingUp className="text-3xl" />
    },
    smb: {
      title: "Small & Medium Businesses",
      description: "Local businesses and regional players benefit from our targeted approach that focuses on high-converting keywords and local search dominance.",
      challenges: ["Competing with larger brands", "Limited in-house expertise", "Need measurable ROI"],
      solutions: ["Local SEO optimization", "Conversion-focused content", "Competitor gap analysis"],
      icon: <FiDollarSign className="text-3xl" />
    },
    enterprise: {
      title: "Enterprise Organizations",
      description: "For established brands, we provide sophisticated technical SEO, internationalization strategies, and data-driven content ecosystems.",
      challenges: ["Complex website architectures", "Global competition", "Stagnant organic growth"],
      solutions: ["Technical SEO audits", "Content cluster strategies", "AI-powered keyword research"],
      icon: <FiGlobe className="text-3xl" />
    },
    ecommerce: {
      title: "E-commerce Stores",
      description: "We specialize in product-focused SEO that drives qualified traffic to your product pages with high commercial intent.",
      challenges: ["Thin product page content", "Duplicate content issues", "High bounce rates"],
      solutions: ["Product schema markup", "Long-tail keyword optimization", "Visual search optimization"],
      icon: <FiShoppingCart className="text-3xl" />
    }
  };

  return (
    <div className="bg-white">
      <Head>
        <title>Premium SEO & Digital Marketing Services | Dominate Search Rankings</title>
        <meta name="description" content="Data-driven SEO strategies that increase organic traffic, improve rankings, and grow your business. Get found by customers searching for your products/services." />
        <meta name="keywords" content="SEO services, digital marketing, search engine optimization, organic traffic, content marketing" />
        <link rel="canonical" href="https://yourdomain.com/seo-digital-marketing" />
      </Head>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-[#361259] to-[#6B4A8C]"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#B272F2] mix-blend-overlay filter blur-3xl opacity-20 float-animation"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#C6A7F2] mix-blend-overlay filter blur-3xl opacity-15 float-animation" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-[#6B4A8C] mix-blend-overlay filter blur-3xl opacity-20 float-animation" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 hero-element">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Dominate Search Rankings with <span className="text-[#B272F2]">Data-Driven SEO</span>
              </h1>
              <p className="text-xl text-[#C6A7F2] mb-8 max-w-lg">
                Increase organic traffic, improve rankings, and grow your business with our proven SEO strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 hero-element">
                <button className="px-8 py-4 bg-[#B272F2] hover:bg-[#9B5BDF] text-white font-bold rounded-lg transition-all transform hover:scale-105">
                  Get Your Free SEO Audit
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#361259] transition-all">
                  How It Works
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 hero-element">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-full h-full border-4 border-[#C6A7F2] rounded-2xl z-0"></div>
                <div className="relative bg-white p-2 rounded-2xl shadow-2xl z-10 overflow-hidden">
                  <div className="bg-[#F8F5FF] p-6 rounded-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#361259] flex items-center justify-center mr-4">
                        <FiSearch className="text-white text-xl" />
                      </div>
                      <h3 className="text-xl font-bold text-[#361259]">SEO Performance Dashboard</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[#6B4A8C]">Organic Traffic</span>
                        <span className="font-bold text-[#361259]">+247%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-[#B272F2] to-[#6B4A8C] h-3 rounded-full" 
                          style={{ width: '82%' }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#6B4A8C]">Keyword Rankings</span>
                        <span className="font-bold text-[#361259]">+315</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-[#6B4A8C] to-[#B272F2] h-3 rounded-full" 
                          style={{ width: '75%' }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#6B4A8C]">Conversion Rate</span>
                        <span className="font-bold text-[#361259]">+38%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-[#C6A7F2] to-[#B272F2] h-3 rounded-full" 
                          style={{ width: '68%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SEO Matters Section */}
      <section className="py-20 bg-[#F8F5FF]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#361259] mb-4">
              Why <span className="text-[#B272F2]">SEO Matters</span> for Your Business
            </h2>
            <p className="text-xl text-[#6B4A8C] max-w-3xl mx-auto">
              In today's digital landscape, appearing at the top of search results is crucial for business success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#F0E5FF] flex items-center justify-center mb-6">
                <FiTarget className="text-[#B272F2] text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#361259] mb-3">Targeted Traffic</h3>
              <p className="text-[#6B4A8C]">
                SEO brings visitors who are actively searching for your products/services, resulting in higher conversion rates.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#F0E5FF] flex items-center justify-center mb-6">
                <FiDollarSign className="text-[#B272F2] text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#361259] mb-3">Cost Effective</h3>
              <p className="text-[#6B4A8C]">
                Organic traffic costs 61% less than paid traffic while delivering better long-term results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#F0E5FF] flex items-center justify-center mb-6">
                <FiTrendingUp className="text-[#B272F2] text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#361259] mb-3">Sustainable Growth</h3>
              <p className="text-[#6B4A8C]">
                Unlike paid ads, SEO benefits compound over time, delivering increasing returns on your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-r from-[#361259] to-[#6B4A8C] text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="stat-item" data-target="95">
              <div className="text-5xl font-bold mb-2">
                <span className="stat-number">0</span>%
              </div>
              <p className="text-[#C6A7F2]">Client Satisfaction</p>
            </div>
            <div className="stat-item" data-target="247">
              <div className="text-5xl font-bold mb-2">
                <span className="stat-number">0</span>%
              </div>
              <p className="text-[#C6A7F2]">Avg. Traffic Growth</p>
            </div>
            <div className="stat-item" data-target="1500">
              <div className="text-5xl font-bold mb-2">
                +<span className="stat-number">0</span>
              </div>
              <p className="text-[#C6A7F2]">Keywords Ranked</p>
            </div>
            <div className="stat-item" data-target="38">
              <div className="text-5xl font-bold mb-2">
                <span className="stat-number">0</span>%
              </div>
              <p className="text-[#C6A7F2]">Conversion Increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section ref={processRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#361259] mb-4">
              Our <span className="text-[#B272F2]">SEO Process</span>
            </h2>
            <p className="text-xl text-[#6B4A8C] max-w-3xl mx-auto">
              A proven methodology that delivers measurable results at every stage.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#B272F2] to-[#6B4A8C] md:left-1/2 md:-ml-1"></div>
            
            <div className="space-y-12">
              {[
                {
                  title: "Discovery & Audit",
                  description: "We analyze your current SEO performance, competitors, and identify growth opportunities.",
                  icon: <FiSearch />
                },
                {
                  title: "Keyword Strategy",
                  description: "Researching high-intent keywords that align with your business goals and customer needs.",
                  icon: <FiBarChart2 />
                },
                {
                  title: "Technical Optimization",
                  description: "Improving site architecture, speed, mobile-friendliness, and indexability.",
                  icon: <FiSmartphone />
                },
                {
                  title: "Content Development",
                  description: "Creating authoritative, engaging content that ranks and converts.",
                  icon: <FiTrendingUp />
                },
                {
                  title: "Link Building",
                  description: "Earning high-quality backlinks from authoritative sources in your industry.",
                  icon: <FiGlobe />
                },
                {
                  title: "Ongoing Optimization",
                  description: "Continuous monitoring, testing, and refining to maximize results.",
                  icon: <FiTarget />
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className={`process-step relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
                >
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-[#F0E5FF] flex items-center justify-center text-[#B272F2] text-xl z-10 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    {step.icon}
                  </div>
                  <div className={`bg-white p-6 rounded-xl shadow-lg mt-4 md:mt-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-xl font-bold text-[#361259] mb-2">{step.title}</h3>
                    <p className="text-[#6B4A8C]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section ref={audienceRef} className="py-20 bg-[#F8F5FF]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#361259] mb-4">
              Who We <span className="text-[#B272F2]">Work With</span>
            </h2>
            <p className="text-xl text-[#6B4A8C] max-w-3xl mx-auto">
              Tailored SEO solutions for different business needs and stages.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.keys(audienceData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveAudience(key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${activeAudience === key ? 'bg-[#6B4A8C] text-white' : 'bg-white text-[#361259] hover:bg-[#F0E5FF]'} shadow-md hover:shadow-lg`}
                >
                  {audienceData[key].title}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden audience-card">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#F0E5FF] flex items-center justify-center mr-6 text-[#B272F2]">
                    {audienceData[activeAudience].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#361259]">
                    {audienceData[activeAudience].title}
                  </h3>
                </div>
                <p className="text-[#6B4A8C] mb-8 text-lg">
                  {audienceData[activeAudience].description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-[#B272F2] mb-4 text-lg flex items-center">
                      <span className="w-3 h-3 bg-[#B272F2] rounded-full mr-2"></span>
                      Common Challenges
                    </h4>
                    <ul className="space-y-3">
                      {audienceData[activeAudience].challenges.map((challenge, index) => (
                        <li key={index} className="text-[#361259]">
                          • {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#6B4A8C] mb-4 text-lg flex items-center">
                      <span className="w-3 h-3 bg-[#6B4A8C] rounded-full mr-2"></span>
                      Our Solutions
                    </h4>
                    <ul className="space-y-3">
                      {audienceData[activeAudience].solutions.map((solution, index) => (
                        <li key={index} className="text-[#361259]">
                          • {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-br from-[#361259] to-[#6B4A8C] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 cta-element">
            Ready to <span className="text-[#B272F2]">Dominate</span> Your Market?
          </h2>
          <p className="text-xl text-[#C6A7F2] mb-8 max-w-2xl mx-auto cta-element">
            Get a free SEO audit and discover how we can grow your organic traffic and revenue.
          </p>
          <form className="max-w-md mx-auto cta-element">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg text-[#361259] focus:outline-none focus:ring-2 focus:ring-[#B272F2]"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-[#B272F2] hover:bg-[#9B5BDF] text-white font-bold rounded-lg transition-all transform hover:scale-105"
              >
                Get Free Audit
              </button>
            </div>
          </form>
          <p className="text-[#C6A7F2] text-sm mt-4 cta-element">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SEODigitalMarketingPage;
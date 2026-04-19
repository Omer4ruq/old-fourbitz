"use client";

import { useRef } from "react";
import Image from "next/image";
import ParallaxSection from "@/components/ParallaxSection";
import AnimatedText from "@/components/AnimatedText";
import Button from "@/components/Button";
import { services, portfolio, companyData } from "@/data/content";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero entrance animation
    const tl = gsap.timeline();
    tl.fromTo(".hero-text-line", 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power4.out", delay: 0.5 }
    ).fromTo(".hero-btn",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.5"
    );

    // Services stagger scroll animation
    gsap.fromTo(".service-card",
      { y: 100, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: heroRef });

  return (
    <>
      {/* Hero Section */}
      <ParallaxSection className="min-h-screen flex items-center justify-center pt-24 pb-12" speed={0.8}>
        {/* Abstract luxury background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div ref={heroRef} className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="overflow-hidden mb-4">
            <h2 className="hero-text-line text-[#D4AF37] tracking-[0.3em] text-sm md:text-md uppercase font-bold">
              Engineering Excellence
            </h2>
          </div>
          <div ref={heroTextRef} className="max-w-4xl mx-auto mb-10 text-6xl md:text-8xl font-serif leading-[1.1]">
            <div className="overflow-hidden">
              <h1 className="hero-text-line text-[#F8F8F8]">Elegant Digital</h1>
            </div>
            <div className="overflow-hidden flex items-center justify-center gap-4">
              <h1 className="hero-text-line text-[#A0A0A0] italic">Experiences</h1>
            </div>
          </div>
          <p className="hero-text-line max-w-xl mx-auto text-[#A0A0A0] text-lg md:text-xl mb-12">
            We craft high-performance software solutions that elevate brands and drive digital transformation.
          </p>
          <div className="hero-btn flex gap-6 justify-center">
            <Button href="/portfolio" variant="primary" icon>View Our Work</Button>
            <Button href="/contact" variant="outline">Contact Us</Button>
          </div>
        </div>
      </ParallaxSection>

      {/* About Snippet */}
      <section className="py-32 bg-[#141414] border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedText as="h2" className="text-4xl md:text-5xl font-serif mb-8 text-[#F8F8F8]">
              Pioneering the future of <span className="text-[#D4AF37] italic">digital architecture.</span>
            </AnimatedText>
            <AnimatedText delay={0.2} as="p" className="text-[#A0A0A0] text-lg leading-relaxed mb-8">
              {companyData.description}
            </AnimatedText>
            <AnimatedText delay={0.4}>
              <Button href="/about" variant="secondary">Discover Our Story</Button>
            </AnimatedText>
          </div>
          {/* Abstract placeholder for image */}
          <div className="aspect-square bg-gradient-to-tr from-[#000000] to-[#1A1A1A] border border-white/10 relative overflow-hidden group">
             <div className="absolute inset-0 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 transition-colors duration-500"></div>
             {/* We will add real image placeholders next */}
             <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
      >
        <source src="https://www.pexels.com/download/video/8212373/" type="video/mp4" />
        {/* Fallback image if video fails to load */}
        {/* <img src="/fallback-image.jpg" alt="Digital Architecture" className="w-full h-full object-cover" /> */}
      </video>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[#333] text-2xl tracking-widest rotate-90">fourBitz</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-32 bg-[#0A0A0A]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[#D4AF37] tracking-widest text-sm uppercase mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#F8F8F8]">Services & Capabilities ....</h2>
            </div>
            <Button href="/services" variant="outline" className="hidden md:flex">View All Services</Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={service.id} className="service-card bg-[#141414] p-8 border border-white/5 hover:border-[#D4AF37]/30 transition-colors duration-300 group">
                <div className="w-12 h-12 bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#D4AF37] transition-colors duration-300">
                  {/* Icon Placeholder based on string, we would ideally render correct lucide icons here. Using a generic block for now */}
                   <span className="text-[#D4AF37] text-xl font-serif italic">{(i + 1).toString().padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl font-serif text-[#F8F8F8] mb-4 group-hover:text-[#D4AF37] transition-colors">{service.title}</h3>
                <p className="text-[#A0A0A0] text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-32 bg-[#141414] border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-[#D4AF37] tracking-widest text-sm uppercase mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#F8F8F8]">Selected Works</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.slice(0, 4).map((item, index) => (
              <div key={item.id} className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''}`}>
                <div className="overflow-hidden mb-6 bg-[#000] aspect-[4/3] border border-white/5 relative">
                  {/* Image placeholder wrapper */}
                  <div className="absolute inset-0 bg-[#A0A0A0]/10 flex items-center justify-center font-serif text-[#333]">
                     Project Media Placeholder
                  </div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div>
                   <div className="flex justify-between items-center mb-2">
                     <h3 className="text-2xl font-serif text-[#F8F8F8] group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                     <span className="text-[#A0A0A0] text-xs uppercase tracking-wider">{item.category}</span>
                   </div>
                   <p className="text-[#A0A0A0] text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 flex justify-center">
            <Button href="/portfolio" variant="primary" icon>Explore Full Portfolio</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ParallaxSection className="py-40 border-t border-white/5 text-center flex flex-col items-center justify-center" speed={0.3}>
         <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] z-[-2]"></div>
         {/* Parallax noise/texture overlay */}
         <div className="container mx-auto px-6 relative z-10">
           <AnimatedText as="h2" className="text-5xl md:text-7xl font-serif text-[#F8F8F8] mb-8">
             Ready to build something <span className="text-[#D4AF37] italic">extraordinary?</span>
           </AnimatedText>
           <AnimatedText delay={0.2} className="block mt-8">
             <Button href="/contact" variant="primary" icon>Start a Conversation</Button>
           </AnimatedText>
         </div>
      </ParallaxSection>
    </>
  );
}

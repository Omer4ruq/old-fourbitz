"use client";

import { useRef, useEffect, useState } from "react";
import { team } from "@/data/content";
import AnimatedText from "@/components/AnimatedText";
import SafeImage from "@/components/SafeImage"; // Component from Step 1
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 1. Scroll-based "Diving" Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const blurValue = useTransform(scrollYProgress, [0, 0.8], ["blur(0px)", "blur(40px)"]);
  
  // Smooth out the blur for a "sinking into water" feel
  const smoothBlur = useSpring(0, { stiffness: 100, damping: 30 });

  // 2. Mouse Ripple Logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="bg-[#0A0A0A] overflow-x-hidden">
      {/* HERO SECTION: The Water Surface */}
      <motion.section 
        ref={containerRef}
        style={{ filter: blurValue }}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden border-b border-white/5"
      >
        {/* Dynamic Water Ripple Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.15), transparent 80%)`
          }}
        />
        
        {/* Floating Content */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="container mx-auto px-6 text-center z-10"
        >
          <AnimatedText as="h1" className="text-6xl md:text-9xl font-serif text-[#F8F8F8] mb-6 select-none">
            Our <span className="text-[#D4AF37] italic drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Story</span>
          </AnimatedText>
          <AnimatedText delay={0.2} as="p" className="max-w-2xl mx-auto text-[#A0A0A0] text-lg tracking-[0.2em] uppercase">
            A collective obsessed with perfection
          </AnimatedText>
        </motion.div>

        {/* Subtle Water Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 mix-blend-overlay pointer-events-none" />
      </motion.section>

      {/* TEAM SECTION: The "Under-Water" Depth */}
      <section className="py-32 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
            <h2 className="text-[#D4AF37] tracking-[0.4em] text-xs uppercase mb-4 opacity-70">Internal Excellence</h2>
            <AnimatedText as="h3" className="text-4xl md:text-6xl font-serif text-[#F8F8F8]">
              The Leadership
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member, i) => (
              <motion.div 
                key={i} 
                className="group relative aspect-[3/4] overflow-hidden bg-[#111] rounded-sm shadow-2xl"
                initial="initial"
                whileHover="hover"
              >
                {/* 1. Image with Fallback and Readability Scrim */}
                <motion.div 
                  className="absolute inset-0"
                  variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1.08 }
                  }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                >
                  <SafeImage 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform" 
                  />
                  {/* CRITICAL: The Scrim for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80" />
                </motion.div>

                {/* 2. Initial Name/Role (Protected by Scrim) */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-10 group-hover:opacity-0 transition-all duration-500 transform group-hover:translate-y-4">
                  <h4 className="text-2xl font-serif text-white mb-1 drop-shadow-lg">{member.name}</h4>
                  <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-semibold">{member.role}</p>
                </div>

                {/* 3. Sliding Hover Detail Overlay */}
                <motion.div 
                  className="absolute inset-0 z-20 flex flex-col justify-end p-8 bg-[#0A0A0A]/90 backdrop-blur-sm"
                  variants={{
                    initial: { y: "100%" },
                    hover: { y: 0 }
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-[1px] bg-[#D4AF37]" />
                    <h4 className="text-2xl font-serif text-white">{member.name}</h4>
                    <p className="text-[#D4AF37] text-xs uppercase tracking-widest">{member.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-4 italic">
                      {member.details || "Committed to delivering high-fidelity digital solutions with a focus on human-centric design."}
                    </p>
                    <div className="flex gap-6 pt-4 border-t border-white/5">
                      <a href="#" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-[#D4AF37] transition-colors">LinkedIn</a>
                      <a href="#" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-[#D4AF37] transition-colors">Twitter</a>
                    </div>
                  </div>
                </motion.div>

                {/* Corner Decor */}
                <div className="absolute top-6 right-6 font-serif text-3xl text-white/5 group-hover:text-[#D4AF37]/20 transition-colors pointer-events-none">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
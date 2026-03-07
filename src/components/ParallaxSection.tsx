"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number; // 0 to 1
  className?: string;
  backgroundImage?: string;
}

export default function ParallaxSection({
  children,
  speed = 0.5,
  className = "",
  backgroundImage
}: ParallaxSectionProps) {
  const container = useRef<HTMLDivElement>(null);
  const bg = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current || !bg.current) return;
    
    // Parallax effect on the background image
    gsap.fromTo(
      bg.current,
      { yPercent: -20 },
      {
        yPercent: 20 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom", 
          end: "bottom top", 
          scrub: true,
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <div 
          ref={bg}
          className="absolute inset-0 bg-cover bg-center z-[-1] scale-125 origin-top"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      {children}
    </section>
  );
}

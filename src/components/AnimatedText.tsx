"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}

export default function AnimatedText({ 
  children, 
  className = "", 
  delay = 0,
  as: Component = "span" 
}: AnimatedTextProps) {
  const comp = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!comp.current) return;
    
    // Simple fade up animation on scroll
    gsap.fromTo(
      comp.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: comp.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: comp });

  return (
    <Component ref={comp} className={`inline-block ${className}`}>
      {children}
    </Component>
  );
}

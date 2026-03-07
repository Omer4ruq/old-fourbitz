"use client";

import { team, companyData } from "@/data/content";
import ParallaxSection from "@/components/ParallaxSection";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <ParallaxSection className="pt-40 pb-20 bg-[#0A0A0A] min-h-[60vh] flex items-center" speed={0.4}>
        <div className="container mx-auto px-6 md:px-12 text-center">
          <AnimatedText as="h1" className="text-5xl md:text-8xl font-serif text-[#F8F8F8] mb-6">
            Our <span className="text-[#D4AF37] italic">Story</span>
          </AnimatedText>
          <AnimatedText delay={0.2} as="p" className="max-w-2xl mx-auto text-[#A0A0A0] text-lg">
            A collective of engineers, designers, and strategists obsessed with perfection.
          </AnimatedText>
        </div>
      </ParallaxSection>

      <section className="py-24 bg-[#141414] border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 aspect-[3/4] bg-[#0A0A0A] border border-white/5 relative group overflow-hidden">
               {/* <div className="absolute inset-0 bg-[#D4AF37]/5 group-hover:bg-transparent transition-colors duration-700"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[#333] tracking-widest -rotate-90">STUDIO PLACEHOLDER</div> */}
               <Image src='/about-us/about.jpg' alt="About Us" fill />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-[#D4AF37] tracking-widest text-sm uppercase mb-4">The Vision</h2>
              <AnimatedText as="h3" className="text-4xl md:text-5xl font-serif text-[#F8F8F8] mb-8 leading-tight">
                Defying convention through <span className="italic text-[#A0A0A0]">relentless innovation.</span>
              </AnimatedText>
              <div className="space-y-6 text-[#A0A0A0] leading-relaxed text-sm md:text-base">
                <p>
                  Founded on a simple principle: software shouldn't just work, it should feel inevitable. We started {companyData.name} not just to write code, but to architect experiences that users innately understand and appreciate.
                </p>
                <p>
                  Every line of code and every pixel is placed with intent. We don't believe in minimum viable products; we believe in minimal lovable products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0A0A0A]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
             <h2 className="text-[#D4AF37] tracking-widest text-sm uppercase mb-4">Leadership</h2>
             <AnimatedText as="h3" className="text-4xl md:text-5xl font-serif text-[#F8F8F8]">
               The Team
             </AnimatedText>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-[#141414] border border-white/5 mb-6 relative overflow-hidden">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500">   <Image src={member.image} alt={member.name} fill className="object-cover" /></div>
                   <div className="absolute bottom-4 left-4 font-serif text-4xl text-[#333] opacity-20">{i + 1}</div>
                
                </div>
                <h4 className="text-xl font-serif text-[#F8F8F8] mb-2 group-hover:text-[#D4AF37] transition-colors">{member.name}</h4>
                <p className="text-[#A0A0A0] text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

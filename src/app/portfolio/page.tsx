"use client";

import { portfolio } from "@/data/content";
import ParallaxSection from "@/components/ParallaxSection";
import AnimatedText from "@/components/AnimatedText";

export default function PortfolioPage() {
  return (
    <>
      <ParallaxSection className="pt-40 pb-20 bg-[#0A0A0A] min-h-[50vh] flex items-center" speed={0.6}>
        <div className="container mx-auto px-6 md:px-12 text-center">
          <AnimatedText as="h1" className="text-6xl md:text-8xl font-serif text-[#F8F8F8] mb-6">
            Selected <span className="text-[#A0A0A0] italic">Works</span>
          </AnimatedText>
          <AnimatedText delay={0.2} as="p" className="max-w-2xl mx-auto text-[#A0A0A0] text-lg">
            A curated showcase of our engineering and design prowess across multiple industries.
          </AnimatedText>
        </div>
      </ParallaxSection>

      <section className="py-24 bg-[#141414]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-1 gap-24">
            {portfolio.map((item, idx) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative aspect-[16/9] md:aspect-[21/9] bg-[#0A0A0A] overflow-hidden mb-8 border border-white/5">
                   {/* Placeholder for actual image */}
                   <div className="absolute inset-0 flex items-center justify-center">
                     <span className="font-serif text-[#333] tracking-[0.5em] text-xl md:text-3xl rotate-[-5deg]">PROJECT SHOWCASE</span>
                   </div>
                   <div className="absolute inset-0 bg-[#A0A0A0]/5 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
                
                <div className="grid md:grid-cols-12 gap-4 items-end">
                   <div className="md:col-span-8">
                     <span className="text-[#D4AF37] text-xs uppercase tracking-widest mb-2 block">{item.category}</span>
                     <h2 className="text-3xl md:text-5xl font-serif text-[#F8F8F8] group-hover:text-[#A0A0A0] transition-colors">{item.title}</h2>
                   </div>
                   <div className="md:col-span-4 text-left md:text-right">
                     <p className="text-[#A0A0A0] text-sm max-w-sm md:ml-auto">{item.description}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

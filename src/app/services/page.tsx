"use client";

import { services } from "@/data/content";
import ParallaxSection from "@/components/ParallaxSection";
import AnimatedText from "@/components/AnimatedText";

export default function ServicesPage() {
  return (
    <>
      <ParallaxSection className="pt-40 pb-20 bg-[#0A0A0A] min-h-[50vh] flex items-center" speed={0.5}>
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedText as="h1" className="text-6xl md:text-8xl font-serif text-[#F8F8F8] mb-6">
            Our <span className="text-[#D4AF37] italic">Expertise</span>
          </AnimatedText>
          <AnimatedText delay={0.2} as="p" className="max-w-2xl text-[#A0A0A0] text-lg lg:text-xl">
            We provide end-to-end software engineering and design services for forward-thinking organizations.
          </AnimatedText>
        </div>
      </ParallaxSection>

      <section className="py-24 bg-[#141414] border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          {services.map((service, idx) => (
            <div key={service.id} className="grid md:grid-cols-12 gap-8 md:gap-16 py-16 border-b border-white/5 last:border-0 group">
              <div className="md:col-span-4 flex flex-col justify-between">
                <div>
                  <span className="text-[#D4AF37] font-serif italic text-2xl mb-4 block">{(idx + 1).toString().padStart(2, '0')}</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-[#F8F8F8] group-hover:text-[#D4AF37] transition-colors duration-300">{service.title}</h2>
                </div>
              </div>
              <div className="md:col-span-8 flex items-center">
                 <p className="text-[#A0A0A0] text-lg md:text-xl leading-relaxed font-light">
                   {service.description}
                   <br /><br />
                   Utilizing cutting-edge frameworks and methodologies, we ensure that the architecture supporting this is secure, scalable, and built for the future.
                 </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-[#0A0A0A] text-center">
         <div className="container mx-auto px-6">
           <h2 className="text-[#D4AF37] tracking-widest text-sm uppercase mb-4">Methodology</h2>
           <AnimatedText as="h3" className="text-4xl md:text-5xl font-serif text-[#F8F8F8] mb-12">
             How We Work
           </AnimatedText>
           <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
             {["Discovery", "Design", "Engineering", "Evolution"].map((step, i) => (
               <div key={step} className="p-8 border border-white/5 bg-[#141414] hover:border-[#D4AF37]/30 transition-colors">
                 <span className="text-[#333] font-serif text-3xl block mb-4">0{i+1}</span>
                 <h4 className="text-[#F8F8F8] font-serif text-xl">{step}</h4>
               </div>
             ))}
           </div>
         </div>
      </section>
    </>
  );
}

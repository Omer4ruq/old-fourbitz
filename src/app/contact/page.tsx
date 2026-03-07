"use client";

import { companyData } from "@/data/content";
import ParallaxSection from "@/components/ParallaxSection";
import AnimatedText from "@/components/AnimatedText";
import Button from "@/components/Button";

export default function ContactPage() {
  return (
    <>
      <ParallaxSection className="pt-40 pb-20 bg-[#0A0A0A] min-h-[50vh] flex items-center" speed={0.4}>
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedText as="h1" className="text-5xl md:text-8xl font-serif text-[#F8F8F8] mb-6">
            Let's <span className="text-[#D4AF37] italic">Talk.</span>
          </AnimatedText>
        </div>
      </ParallaxSection>

      <section className="py-24 bg-[#141414] border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div>
            <h2 className="text-[#F8F8F8] font-serif text-3xl mb-10">Get in Touch</h2>
            <div className="space-y-12">
              <div>
                <span className="text-[#A0A0A0] text-sm uppercase tracking-widest block mb-2">Email</span>
                <a href={`mailto:${companyData.contact.email}`} className="text-[#D4AF37] text-xl md:text-2xl font-serif hover:text-white transition-colors">
                  {companyData.contact.email}
                </a>
              </div>
              
              <div>
                <span className="text-[#A0A0A0] text-sm uppercase tracking-widest block mb-2">Phone</span>
                <a href={`tel:${companyData.contact.phone}`} className="text-[#F8F8F8] text-xl md:text-2xl font-serif hover:text-[#D4AF37] transition-colors">
                  {companyData.contact.phone}
                </a>
              </div>

              <div>
                <span className="text-[#A0A0A0] text-sm uppercase tracking-widest block mb-2">Office</span>
                <p className="text-[#F8F8F8] text-xl md:text-2xl font-serif max-w-xs">
                  {companyData.contact.address}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#0A0A0A] p-8 md:p-12 border border-white/5">
             <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
               <div className="grid md:grid-cols-2 gap-8">
                 <div>
                   <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">First Name</label>
                   <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-[#F8F8F8] focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="John" />
                 </div>
                 <div>
                   <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Last Name</label>
                   <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-[#F8F8F8] focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Doe" />
                 </div>
               </div>
               
               <div>
                 <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Email Address</label>
                 <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 text-[#F8F8F8] focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="john@company.com" />
               </div>

               <div>
                 <label className="block text-[#A0A0A0] text-xs uppercase tracking-widest mb-2">Project Details</label>
                 <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-3 text-[#F8F8F8] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none" placeholder="Tell us about your next big idea..."></textarea>
               </div>
               
               <div className="pt-4">
                 <Button className="w-full">Send Message</Button>
               </div>
             </form>
          </div>
        </div>
      </section>
    </>
  );
}

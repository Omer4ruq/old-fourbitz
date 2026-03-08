

"use client";

import { useState } from "react";
import { team } from "@/data/content";
import Image from "next/image";
import { motion } from "framer-motion";

// --- Sub-component to handle image fallback logic ---
const TeamMemberCard = ({ member, index }: { member: any; index: number }) => {
  const [imageError, setImageError] = useState(false);

  // Get initials for the fallback (e.g., "Sarah Chen" -> "SC")
  const initials = member.name
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase();

  return (
    <motion.div
      className="group relative cursor-pointer"
      initial="initial"
      whileHover="hover"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#141414] border border-white/5">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={{
            initial: { y: 0, scale: 1 },
            hover: { y: "-15%", scale: 0.9 }
          }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
        >
          {!imageError ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              onError={() => setImageError(true)} // Catch broken links
            />
          ) : (
            /* Classy Fallback Avatar */
            <div className="w-full h-full bg-[#1A1A1A] flex flex-col items-center justify-center border border-[#D4AF37]/10">
              <span className="text-5xl font-serif text-[#D4AF37]/20 mb-2">{initials}</span>
              <div className="w-8 h-[1px] bg-[#D4AF37]/30" />
            </div>
          )}
          
          <motion.div 
            className="absolute inset-0 bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
          />
        </motion.div>

        {/* Details Section (Slides in from bottom) */}
        <motion.div
          className="absolute inset-x-0 bottom-0 p-6 bg-[#0A0A0A] flex flex-col justify-end"
          variants={{
            initial: { y: "100%" },
            hover: { y: 0 }
          }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className="space-y-4">
            <p className="text-[#A0A0A0] text-xs leading-relaxed line-clamp-3 ">
              {member.details || "Crafting digital excellence through minimalist design and robust engineering."}"
            </p>
            
            <div className="flex gap-4 border-t border-white/10 pt-4">
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors">LinkedIn</span>
              <span className="text-[10px] uppercase tracking-widest text-[#F8F8F8]/40">— Contact</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Title Section */}
      <div className="mt-6 flex justify-between items-start">
        <div>
          <motion.h4 
            className="text-2xl font-serif text-[#F8F8F8]"
            variants={{
              initial: { x: 0 },
              hover: { x: 8, color: "#D4AF37" }
            }}
          >
            {member.name}
          </motion.h4>
          <p className="text-[#555] text-xs uppercase tracking-widest mt-1 group-hover:text-[#A0A0A0] transition-colors">
            {member.role}
          </p>
        </div>
        <span className="text-serif italic text-white/5 group-hover:text-[#D4AF37]/20 transition-colors text-4xl">
          {/* 0{index + 1} */}
        </span>
      </div>
    </motion.div>
  );
};

// --- Main Page Component ---
export default function AboutPage() {
  return (
    <section className="py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <h2 className="text-[#D4AF37] tracking-[0.4em] text-[10px] uppercase mb-4">The Collective</h2>
          <h3 className="text-5xl md:text-7xl font-serif text-[#F8F8F8]">The Team</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
          {team.map((member, i) => (
            <TeamMemberCard key={i} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
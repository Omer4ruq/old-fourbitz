// components/SafeImage.tsx
"use client";
import Image from "next/image";
import { useState } from "react";

interface SafeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
}

export default function SafeImage({ src, alt, fill, className }: SafeImageProps) {
  const [error, setError] = useState(false);
  const initial = alt.charAt(0).toUpperCase();

  if (error || !src) {
    return (
      <div className={`${className} bg-[#1A1A1A] flex items-center justify-center border border-white/5`}>
        <span className="text-5xl font-serif text-[#D4AF37] opacity-40 select-none">
          {initial}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      onError={() => setError(true)}
    />
  );
}
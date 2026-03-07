import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  icon?: boolean;
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = "primary", 
  className = "",
  icon = false
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-[#D4AF37] text-[#0A0A0A] hover:bg-white",
    secondary: "bg-[#141414] text-[#F8F8F8] hover:bg-[#D4AF37] hover:text-[#0A0A0A]",
    outline: "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A]"
  };

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />}
      {/* Hover glow effect */}
      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {buttonContent}
    </button>
  );
}

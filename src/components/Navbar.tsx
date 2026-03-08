"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md py-4 border-b border-white/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif text-[#F8F8F8] tracking-wider relative group  border-r-0 border-t-0 border-transparent hover:border-[#D4AF37] transition-colors">
          four<span className="text-[#D4AF37]">Bitz</span>
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all group-hover:w-full"></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-sm uppercase tracking-widest transition-colors hover:text-[#D4AF37] ${
                pathname === link.path ? "text-[#D4AF37]" : "text-[#A0A0A0]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 border border-[#D4AF37] text-[#D4AF37] px-6 py-2 text-sm uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-[#F8F8F8]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-[#0A0A0A] z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-500 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="text-2xl font-serif text-[#F8F8F8] hover:text-[#D4AF37] transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-4 border border-[#D4AF37] text-[#D4AF37] px-8 py-3 text-lg font-serif hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}

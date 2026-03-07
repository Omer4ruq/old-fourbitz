import Link from "next/link";
import { companyData } from "@/data/content";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-serif text-[#F8F8F8] mb-6">
              {companyData.name}
            </h3>
            <p className="text-[#A0A0A0] max-w-sm text-sm leading-relaxed mb-8">
              {companyData.tagline}
            </p>
            <div className="flex gap-4">
              <a href={companyData.socials.twitter} className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors">
                <Twitter size={20} />
              </a>
              <a href={companyData.socials.linkedin} className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={companyData.socials.github} className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[#F8F8F8] font-serif text-lg mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors text-sm">Services</Link></li>
              <li><Link href="/portfolio" className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors text-sm">Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F8F8F8] font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-[#A0A0A0] text-sm">{companyData.contact.address}</li>
              <li>
                <a href={`mailto:${companyData.contact.email}`} className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors text-sm">
                  {companyData.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${companyData.contact.phone}`} className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors text-sm">
                  {companyData.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A0A0A0] text-xs">
            © {new Date().getFullYear()} {companyData.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors text-xs">Privacy Policy</Link>
            <Link href="#" className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors text-xs">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

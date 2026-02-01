"use client";

import { MapPin, Phone, Clock, Facebook, Code2, Globe, ExternalLink } from "lucide-react";

export default function Footer() {
  const getHref = (link: string) => {
    if (link === "Living Area") return "#living";
    if (link === "Queen's Dine") return "#queensdine";
    return `#${link.toLowerCase().replace(/[^a-zA-Z]/g, "")}`;
  };

  return (
    <footer id="contact" className="bg-zinc-950 border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/queensicon.png" alt="Queen's Residence" className="h-6 w-6 sm:h-8 sm:w-8" />
              <span className="text-base sm:text-xl font-bold gold-text-gradient">Queen&apos;s Residence</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 mb-6">
              Experience luxury living at its finest. Where royal comfort meets modern elegance.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/16qP62RqiC/?mibextid=wwXIfr" className="rounded-full bg-gold/10 p-3 text-gold transition-colors hover:bg-gold/20">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm sm:text-lg font-semibold text-gold">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {["Home", "Rooms", "Living Area", "QR Dine", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={getHref(link)}
                    className="text-xs sm:text-sm text-gray-400 transition-colors hover:text-gold"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm sm:text-lg font-semibold text-gold">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-400">No 25/B, Abaya Place, 3rd Lane, Bank Town, Anuradhapura.</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-400">(+94) 74 352 4217</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 text-sm sm:text-lg font-semibold text-gold">Opening Hours</h3>
            <ul className="space-y-2 sm:space-y-3">
              
              <li className="flex items-center gap-2 sm:gap-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-gold shrink-0" />
                <div>
                  <span className="block text-white text-xs sm:text-sm">Check-in</span>
                  <span className="text-xs sm:text-sm text-gray-400">2:00 PM</span>
                </div>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-gold shrink-0" />
                <div>
                  <span className="block text-white text-xs sm:text-sm">Check-out</span>
                  <span className="text-xs sm:text-sm text-gray-400">Until 11:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 border-t border-gold/10 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            © 2025 Queen&apos;s Residence. All rights reserved.
          </p>
          
          {/* Developer Credits */}
          <div className="mt-4 sm:mt-6 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <Code2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold/70 animate-pulse" />
              <span>Developed by</span>
            </div>
            <a
              href="https://eranga-jayasooriya.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/5 to-gold/10 border border-gold/20 transition-all duration-300 hover:border-gold/40 hover:from-gold/10 hover:to-gold/20 hover:scale-105 hover:shadow-lg hover:shadow-gold/10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gold/30 rounded-full blur-sm animate-ping opacity-30"></div>
                <div className="relative bg-gradient-to-br from-gold/20 to-gold/30 rounded-full p-1.5 group-hover:from-gold/30 group-hover:to-gold/40 transition-colors duration-300">
                  <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <span className="text-xs sm:text-sm font-medium gold-text-gradient group-hover:from-amber-300 group-hover:via-gold group-hover:to-amber-300 transition-all duration-300">
                Eranga Jayasooriya
              </span>
              <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-gold/50 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

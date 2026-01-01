"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Rooms", href: "#rooms" },
    { name: "Living Area", href: "#living" },
    { name: "QR Dine", href: "#queensdine" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
        <a href="#home" className="flex items-center gap-2 group shrink-0">
          <img
            src="/queensicon.png"
            alt="Queen's Icon"
            className="h-8 w-8 sm:h-10 sm:w-10 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-sm sm:text-xl font-bold gold-text-gradient">Queen&apos;s Residence</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-gray-300 transition-colors hover:text-gold after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+94743524217"
          className="hidden md:flex items-center gap-2 rounded-full border border-gold px-6 py-2 text-sm font-medium text-gold transition-all duration-300 hover:bg-gold hover:text-black hover-gold-glow shrink-0"
        >
          Call Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gold shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "opacity-100 visible max-h-screen" : "opacity-0 invisible max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6 px-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-base sm:text-lg font-medium text-gray-300 transition-colors hover:text-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <a
            href="tel:+94743524217"
            className="mt-4 rounded-full border border-gold px-6 py-2 text-sm font-medium text-gold transition-all duration-300 hover:bg-gold hover:text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Call Now
          </a>
        </ul>
      </div>
    </header>
  );
}

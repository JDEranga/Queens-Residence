"use client";

import { ChevronDown, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
      style={{ scrollMarginTop: '120px' }}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/queens.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse z-20"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse delay-1000 z-20"></div>

      <div className="relative z-30 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <div className="animate-fadeInUp">
          <div className="mb-6 flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-gold text-gold" />
            ))}
          </div>
          <h1 className="mb-6 text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            <span className="text-white">Welcome to</span>
            <br />
            <span className="gold-text-gradient">Queen&apos;s Residence</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-base sm:text-lg md:text-xl text-gray-400">
            Enjoy a comfortable and affordable stay in the heart of Anuradhapura. Our clean rooms, essential amenities, and friendly service make us the perfect choice for families, solo travelers, and budget-conscious guests.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row px-2">
            <a
              href="#rooms"
              className="group relative overflow-hidden rounded-full bg-gold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-gold/30 w-full sm:w-auto"
            >
              <span className="relative z-10">Explore Rooms</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold-light opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#rooms"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-30"
      >
        <ChevronDown className="h-8 w-8 text-gold" />
      </a>
    </section>
  );
}

"use client";

import { useState } from "react";
import { 
  UtensilsCrossed, 
  Coffee, 
  Wine, 
  Cake, 
  Salad, 
  Soup,
  Star,
  Clock,
  ChefHat
} from "lucide-react";

const restaurantImages = [
  "/dine.jpg",
  "/dine1.jpg",
  "/dine2.jpg",
  "/dine4.jpg",
];

export default function QueensDine() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="queensdine" className="relative py-16 sm:py-24 bg-gradient-to-b from-zinc-950 to-black overflow-hidden" style={{ scrollMarginTop: '120px' }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-1 text-xs sm:text-sm text-gold">
            <ChefHat className="h-4 w-4 animate-bounce" />
            Fine Dining
          </span>
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="gold-text-gradient">Queen Residence&apos;s Dine</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-400">
            Indulge in a royal culinary experience at Queen's Dine.
          </p>
        </div>

        {/* Restaurant Info Cards */}
        <div className="flex justify-center mb-12">
          <div className="group flex items-center gap-4 rounded-xl border border-gold/20 bg-zinc-900/50 p-4 transition-all duration-300 hover:border-gold/50 hover:bg-zinc-900/80">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 transition-transform duration-300 group-hover:scale-110">
              <Clock className="h-6 w-6 text-gold" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Opening Hours</h4>
              <p className="text-sm text-gray-400">11:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        {/* Restaurant Photos Grid */}
        <div className="mb-12 sm:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {restaurantImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl ${
                  index === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`Restaurant ambiance ${index + 1}`}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index === 0 ? "h-80 sm:h-96 md:h-[500px]" : "h-32 sm:h-40"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Section */}
        <div className="rounded-3xl border border-gold/20 bg-zinc-900/30 p-6 sm:p-8 backdrop-blur-sm">
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-2xl sm:text-3xl font-bold text-white">Our Menu</h3>
            <p className="text-sm text-gray-400">Discover our carefully curated selection</p>
          </div>

          {/* Featured Menu Images */}
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="group relative overflow-hidden rounded-xl border border-gold/10 bg-black/30 transition-all duration-700 hover:border-gold/40 hover:bg-black/50 animate-fadeIn cursor-pointer" style={{ animationDelay: '0ms' }} onClick={() => setSelectedImage('/menu1.jpg')}>
              <img
                src="/menu1.jpg"
                alt="Featured menu item 1"
                className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-gold/10 bg-black/30 transition-all duration-700 hover:border-gold/40 hover:bg-black/50 animate-fadeIn cursor-pointer" style={{ animationDelay: '200ms' }} onClick={() => setSelectedImage('/menu2.jpg')}>
              <img
                src="/menu2.jpg"
                alt="Featured menu item 2"
                className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          </div>
        </div>

        {/* Reservation CTA */}
        <div className="mt-12 text-center">
          <button className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30">
            <UtensilsCrossed className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            Reserve Orders Now
          </button>
          <p className="mt-4 text-xs sm:text-sm text-gray-500">
            For Orders, please call (+94) 74 352 4217
          </p>
        </div>
      </div>

      {/* Full Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fadeIn" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="Full menu image"
            className="max-w-full max-h-full object-contain transition-transform duration-500 scale-100"
          />
        </div>
      )}
    </section>
  );
}

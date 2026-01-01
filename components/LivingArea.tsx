"use client";

import { Sofa, Lamp, Utensils, Tv, Target } from "lucide-react";

const features = [
  {
    icon: Sofa,
    title: "Comfortable Seating",
    description: "Plush sofas and armchairs for ultimate relaxation",
  },
  {
    icon: Target,
    title: "Carrom Area",
    description: "A dedicated space for guests to enjoy the classic game of carrom in a relaxed and friendly setting.",
  },
  {
    icon: Utensils,
    title: "Dining Area",
    description: "A clean and comfortable space for guests to enjoy meals together.",
  },
  {
    icon: Tv,
    title: "Dialog TV",
    description: " Enjoy movies, shows, and streaming apps while relaxing on the sofa with family.",
  },
];

const livingImages = [
  "/living.jpg",
];

export default function LivingArea() {
  return (
    <section id="living" className="relative py-16 sm:py-24 bg-zinc-950" style={{ scrollMarginTop: '120px' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-16 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div>
            <span className="mb-4 inline-block rounded-full border border-gold/30 px-4 py-1 text-xs sm:text-sm text-gold">
              Common Spaces
            </span>
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="gold-text-gradient">Living Area</span>
            </h2>
            <p className="mb-8 text-sm sm:text-lg text-gray-400">
             Our living room is a comfortable and welcoming space designed for relaxation and family time. 
             It features comfortable sofas, a flat-screen TV for entertainment, and a small dining
             area where guests can enjoy meals together.
            </p>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-gold/10 bg-black/30 p-4 sm:p-5 transition-all duration-300 hover:border-gold/30"
                >
                  <feature.icon className="mb-3 h-6 w-6 sm:h-8 sm:w-8 text-gold transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mb-2 font-semibold text-white text-sm sm:text-base">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Images Grid */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={livingImages[0]}
                alt="Living Area"
                className="h-64 sm:h-80 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Decorative border */}
            <div className="absolute -inset-4 -z-10 rounded-3xl border border-gold/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

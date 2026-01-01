"use client";

const kitchenImages = [
  "/kitchen.jpg",
];

export default function KitchenArea() {
  return (
    <section id="kitchen" className="relative py-16 sm:py-24 bg-black" style={{ scrollMarginTop: '120px' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-16 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div>
            <span className="mb-4 inline-block rounded-full border border-gold/30 px-4 py-1 text-xs sm:text-sm text-gold">
              Common Spaces
            </span>
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="gold-text-gradient">Kitchen Area</span>
            </h2>
            <p className="mb-8 text-sm sm:text-lg text-gray-400">
             Our kitchen area is a clean, fully equipped space designed for guests who enjoy preparing 
             meals or snacks during their stay. It features modern appliances, a stove, sink, and 
             essential cookware, providing everything you need for cooking and dining conveniently.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={kitchenImages[0]}
                alt="Kitchen Area"
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
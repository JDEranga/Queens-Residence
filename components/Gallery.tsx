"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800",
    category: "Rooms",
    title: "Royal Suite Bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
    category: "Living",
    title: "Main Living Area",
  },
  {
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
    category: "Rooms",
    title: "Deluxe Room",
  },
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
    category: "Rooms",
    title: "Suite Bathroom",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    category: "Living",
    title: "Lounge Area",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    category: "Rooms",
    title: "Room Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
    category: "Living",
    title: "Reading Corner",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
    category: "Rooms",
    title: "Deluxe Suite View",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Rooms", "Living"];
  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const next = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prev = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

  return (
    <section id="gallery" className="relative py-16 sm:py-24 bg-black" style={{ scrollMarginTop: '120px' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <span className="mb-4 inline-block rounded-full border border-gold/30 px-4 py-1 text-xs sm:text-sm text-gold">
            Photo Gallery
          </span>
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="gold-text-gradient">Explore Our Space</span>
          </h2>
          <p className="mx-auto mb-6 sm:mb-8 max-w-2xl text-sm sm:text-base text-gray-400">
            Take a visual tour of our luxurious accommodations and facilities.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-gold text-black"
                    : "border border-gold/30 text-gold hover:bg-gold/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-2 sm:gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={image.src}
                alt={image.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center">
                <ZoomIn className="h-6 w-6 sm:h-8 sm:w-8 text-gold mb-2" />
                <span className="text-white font-medium text-sm sm:text-base text-center px-2">
                  {image.title}
                </span>
                <span className="text-gold text-xs sm:text-sm">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 animate-fadeIn p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 rounded-full bg-gold/20 p-2 text-gold transition-colors hover:bg-gold/30"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button
            onClick={prev}
            className="absolute left-2 sm:left-4 z-10 rounded-full bg-gold/20 p-2 sm:p-3 text-gold transition-all hover:bg-gold/30"
          >
            <ChevronLeft className="h-5 w-5 sm:h-8 sm:w-8" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 sm:right-4 z-10 rounded-full bg-gold/20 p-2 sm:p-3 text-gold transition-all hover:bg-gold/30"
          >
            <ChevronRight className="h-5 w-5 sm:h-8 sm:w-8" />
          </button>

          <div className="relative max-h-[80vh] max-w-5xl">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-h-[80vh] w-auto object-contain rounded-lg"
            />
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 text-center">
              <h3 className="text-sm sm:text-xl font-bold text-white">
                {filteredImages[selectedImage].title}
              </h3>
              <span className="text-xs sm:text-base text-gold">
                {selectedImage + 1} / {filteredImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

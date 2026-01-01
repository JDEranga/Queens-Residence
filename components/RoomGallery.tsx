"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Room {
  id: number;
  name: string;
  images: string[];
}

interface RoomGalleryProps {
  room: Room;
  onClose: () => void;
}

export default function RoomGallery({ room, onClose }: RoomGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [currentIndex]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % room.images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 rounded-full bg-gold/20 p-2 text-gold transition-colors hover:bg-gold/30"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Title */}
      <h3 className="absolute top-6 left-6 text-2xl font-bold gold-text-gradient">
        {room.name}
      </h3>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 z-10 rounded-full bg-gold/20 p-3 text-gold transition-all hover:bg-gold/30 hover:scale-110"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 z-10 rounded-full bg-gold/20 p-3 text-gold transition-all hover:bg-gold/30 hover:scale-110"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Main Image */}
      <div className="relative h-[70vh] w-full max-w-5xl px-16">
        <img
          src={room.images[currentIndex]}
          alt={`${room.name} - Image ${currentIndex + 1}`}
          className="h-full w-full object-contain rounded-lg"
        />
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-8 flex gap-3">
        {room.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-16 w-24 overflow-hidden rounded-lg border-2 transition-all duration-300 ${
              index === currentIndex
                ? "border-gold scale-110"
                : "border-transparent opacity-50 hover:opacity-80"
            }`}
          >
            <img src={image} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>

      {/* Counter */}
      <div className="absolute bottom-8 right-8 text-gold">
        {currentIndex + 1} / {room.images.length}
      </div>
    </div>
  );
}

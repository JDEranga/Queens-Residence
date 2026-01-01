"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import LivingArea from "@/components/LivingArea";
import KitchenArea from "@/components/KitchenArea";
import QueensDine from "@/components/QueensDine";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Rooms />
      <LivingArea />
      <KitchenArea />
      <QueensDine />
      <Footer />
    </div>
  );
}

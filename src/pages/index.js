import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tech from "@/components/Tech";
import Footer from "@/components/Footer";
import { useState } from "react";
import Maintenance from "@/components/Maintenance";

const inter = Inter({ subsets: ["vietnamese"] });

export default function Home() {
  const [isMain, setIsMain] = useState(true);
  return isMain ? (
    <Maintenance />
  ) : (
    <main className={` ${inter.className}`}>
      <Navbar />
      <Hero />
      <Tech />
      <Footer />
    </main>
  );
}

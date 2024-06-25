import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tech from "@/components/Tech";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["vietnamese"] });

export default function Home() {
  return (
    <main className={` ${inter.className}`}>
      <Navbar />
      <Hero/>
      <Tech/>
      <Footer/>
    </main>
  );
}

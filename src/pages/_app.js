import "@/styles/globals.css";
import "../styles/drawerStyles.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import Maintenance from "@/components/Maintenance";

export default function App({ Component, pageProps }) {
  const [isMain, setIsMain] = useState(true);

  return isMain ? (
    <Maintenance />
  ) : (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

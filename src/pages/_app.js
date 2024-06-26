import "@/styles/globals.css";
import "../styles/drawerStyles.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import Maintenance from "@/components/Maintenance";
import { SessionProvider } from "next-auth/react";

export default function App({ session, Component, pageProps }) {
  const [isMain, setIsMain] = useState(false);

  return isMain ? (
    <Maintenance />
  ) : (
    <>
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}

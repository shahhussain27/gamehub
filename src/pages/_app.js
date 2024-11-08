import "@/styles/globals.css";
import "../styles/drawerStyles.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import Maintenance from "@/components/Maintenance";
import { SessionProvider } from "next-auth/react";
import Loader from "@/components/Loader";
import { store} from "@/redux/store";
import { Provider } from "react-redux";

export default function App({ session, Component, pageProps }) {
  const [isMain, setIsMain] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return isMain ? (
    <Maintenance />
  ) : (
    <>
      <SessionProvider session={session}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Provider store={store}>
              <Navbar />
              <Component {...pageProps} />
              <Footer />
            </Provider>
            
          </>
        )}
      </SessionProvider>
    </>
  );
}

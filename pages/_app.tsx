import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../components/context/cartcontext"; // ✅ import the context provider

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider> {/* ✅ wrap your entire app */}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  );
}

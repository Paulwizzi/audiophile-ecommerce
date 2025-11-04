import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-0 pb-12 px-6 md:px-20">
      {/* Orange Bar */}
    <div className="max-w-6xl mx-auto">
      <div className="h-1 w-24 bg-[#D87D4A] mb-12"></div>
    </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between">
        {/* Left Side: Logo + Description + Copyright */}
        <div className="flex flex-col lg:max-w-md">
          <Link
            href="/"
            className="text-xl font-bold uppercase tracking-[2px] mb-8"
          >
            audiophile
          </Link>

          <p className="text-gray-500 text-sm leading-relaxed mb-12">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility – we're open 7 days a week.
          </p>

          <p className="text-gray-500 text-sm">
            © {currentYear}. All Rights Reserved
          </p>
        </div>

        {/* Right Side: Nav Links + Social Icons */}
        <div className="flex flex-col lg:items-end">
          <nav className="flex flex-col md:flex-row gap-4 md:gap-8 text-xs font-bold uppercase tracking-widest mb-8">
            <Link href="/" className="hover:text-[#D87D4A] transition">
              Home
            </Link>
            <Link href="/headphones" className="hover:text-[#D87D4A] transition">
              Headphones
            </Link>
            <Link href="/speakers" className="hover:text-[#D87D4A] transition">
              Speakers
            </Link>
            <Link href="/earphones" className="hover:text-[#D87D4A] transition">
              Earphones
            </Link>
          </nav>

          <div className="flex gap-6 mt-10">
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-[#D87D4A] transition text-xl"
            >
              <FaFacebookSquare />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="hover:text-[#D87D4A] transition text-xl"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="hover:text-[#D87D4A] transition text-xl"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

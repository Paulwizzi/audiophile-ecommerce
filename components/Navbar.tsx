"use client";

import Link from "next/link";
import Image from "next/image";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import CartDropdown from "../components/cart";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-sm relative z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ✅ Left Section: Menu Button (mobile only) + Logo */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Logo (centered only on mobile) */}
          <Link
            href="/"
            className="text-xl font-bold uppercase md:transform-none absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:translate-x-0"
          >
            audiophile
          </Link>
        </div>

        {/* ✅ Middle Section: Nav links (desktop only) */}
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
          <Link href="/" className="hover:text-[#D87D4A] transition-colors">
            Home
          </Link>
          <Link href="/headphones" className="hover:text-[#D87D4A] transition-colors">
            Headphones
          </Link>
          <Link href="/speakers" className="hover:text-[#D87D4A] transition-colors">
            Speakers
          </Link>
          <Link href="/earphones" className="hover:text-[#D87D4A] transition-colors">
            Earphones
          </Link>
        </nav>

        {/* ✅ Right Section: Cart */}
        <CartDropdown />
      </div>

      {/* ✅ MOBILE MENU (Slide down with images) */}
      <div
        className={`absolute top-full left-0 w-full bg-white text-black z-50 overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-12 pt-8 grid gap-10">
          {/* Headphones */}
          <Link
            href="/headphones"
            onClick={() => setIsMenuOpen(false)}
            className="relative bg-[#F1F1F1] rounded-lg flex flex-col items-center justify-end pt-20 pb-6 shadow-sm"
          >
            <Image
              src="/images/home/headphones.png"
              alt="Headphones"
              width={79.92}
              height={1104}
              className="absolute -top-12 object-contain"
            />
            <h3 className="font-bold uppercase tracking-wider text-sm mt-2">
              Headphones
            </h3>
            <div className="flex items-center gap-2 text-[13px] text-gray-500">
              <span>Shop</span>
              <span className="text-[#D87D4A] font-bold">›</span>
            </div>
          </Link>

          {/* Speakers */}
          <Link
            href="/speakers"
            onClick={() => setIsMenuOpen(false)}
            className="relative bg-[#F1F1F1] rounded-lg flex flex-col items-center justify-end pt-20 pb-6 shadow-sm"
          >
            <Image
              src="/images/home/speakers.png"
              alt="Speakers"
              width={84.04}
              height={101}
              className="absolute -top-12 object-contain"
            />
            <h3 className="font-bold uppercase tracking-wider text-sm mt-2">
              Speakers
            </h3>
            <div className="flex items-center gap-2 text-[13px] text-gray-500">
              <span>Shop</span>
              <span className="text-[#D87D4A] font-bold">›</span>
            </div>
          </Link>

          {/* Earphones */}
          <Link
            href="/earphones"
            onClick={() => setIsMenuOpen(false)}
            className="relative bg-[#F1F1F1] rounded-lg flex flex-col items-center justify-end pt-20 pb-6 shadow-sm"
          >
            <Image
              src="/images/home/earphones.jpg"
              alt="Earphones"
              width={103}
              height={104}
              className="absolute -top-12 object-contain"
            />
            <h3 className="font-bold uppercase tracking-wider text-sm mt-2">
              Earphones
            </h3>
            <div className="flex items-center gap-2 text-[13px] text-gray-500">
              <span>Shop</span>
              <span className="text-[#D87D4A] font-bold">›</span>
            </div>
          </Link>
        </div>
      </div>

      {/* ✅ Overlay (click to close mobile menu) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-500"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}

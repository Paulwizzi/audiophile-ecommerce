"use client";

import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import CartDropdown from "../components/cart"; // ✅ Import your proper dropdown

export default function Navbar() {
  return (
    <header className="bg-black text-white shadow-sm relative">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold uppercase">
            audiophile
          </Link>

          <nav className="hidden md:flex gap-6 text-sm absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">Home</Link>
            <Link href="/headphones">Headphones</Link>
            <Link href="/speakers">Speakers</Link>
            <Link href="/earphones">Earphones</Link>
          </nav>
        </div>

        {/* ✅ Replace inline cart logic with your dropdown */}
        <CartDropdown />

        {/* Mobile Menu Button */}
        <button className="md:hidden" aria-label="Open menu">
          ☰
        </button>
      </div>
    </header>
  );
}

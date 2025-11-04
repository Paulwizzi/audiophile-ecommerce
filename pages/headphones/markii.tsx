"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../components/context/cartcontext";

const RELATED_PRODUCTS = [
  {
    name: "XX99 Mark I",
    slug: "/headphones/marki",
    image: "/images/home/headphones.png",
  },
  {
    name: "XX59",
    slug: "/headphones/xx59",
    image: "/images/shared/desktop/white headphones.jpg",
  },
  {
    name: "ZX9 Speaker",
    slug: "/speakers/zx9",
    image: "/images/home/speakers.png",
  },
];

export default function MarkII() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    const product = {
      id: "XX99 Mark II",
      name: "XX99 Mark II Headphones",
      price: 2999,
      quantity,
      image: "/images/shared/desktop/black headphones.jpg",
    };
    addToCart(product);
    alert(`${quantity} x ${product.name} added to cart!`);
  };

  return (
    <main className="px-6 md:px-12 lg:px-24 py-12 max-w-7xl mx-auto">
      {/* Go Back */}
      <Link
        href="/headphones"
        className="text-gray-500 hover:text-[#D87D4A] inline-block mb-8"
      >
        Go Back
      </Link>

      {/* Product Hero */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Product Image */}
        <div className="bg-[#F1F1F1] rounded-lg flex justify-center items-center p-10">
          <Image
            src="/images/shared/desktop/black headphones.jpg"
            alt="XX99 Mark II Headphones"
            width={400}
            height={400}
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="text-center md:text-left">
          <p className="text-[#D87D4A] uppercase tracking-[10px] text-sm mb-4">
            New Product
          </p>
          <h1 className="text-3xl md:text-5xl font-bold uppercase mb-6 leading-tight">
            XX99 Mark II <br className="hidden md:block" /> Headphones
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
            The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines
            your premium headphone experience by reproducing the balanced depth and
            precision of studio-quality sound.
          </p>
          <p className="font-bold text-lg mb-6">$ 2,999</p>

          <div className="flex justify-center md:justify-start items-center gap-4">
            {/* Quantity Selector */}
            <div className="bg-[#F1F1F1] px-3 py-2 rounded flex items-center justify-between w-28">
              <button
                onClick={decreaseQuantity}
                className="text-gray-500 hover:text-black font-bold text-lg"
              >
                -
              </button>
              <span className="font-bold">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="text-gray-500 hover:text-black font-bold text-lg"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button 
             onClick={handleAddToCart}
             className="bg-[#D87D4A] text-white px-8 py-3 uppercase tracking-wider text-sm hover:bg-[#FBAF85] transition rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Features + In the Box */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-24">
        <div>
          <h2 className="text-2xl font-bold uppercase mb-6">Features</h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
            Featuring a genuine leather head strap and premium earcups, these headphones
            deliver superior comfort for those who like to enjoy endless listening. It
            includes intuitive controls designed for any situation. Whether you’re taking
            a business call or just in your own personal space, the auto pause and play
            feature ensures that you’ll never miss a beat.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            The advanced Active Noise Cancellation with built-in equalizer allows you to
            experience your audio world on your terms. It lets you enjoy music and movies
            as close to the original recording as possible. Compatible with all devices,
            it’s the perfect companion for audiophiles and professionals alike.
          </p>
        </div>

        <div className="lg:pl-16">
          <h2 className="text-2xl font-bold uppercase mb-6">In the Box</h2>
          <ul className="space-y-3 text-gray-600 text-sm md:text-base">
            <li>
              <span className="text-[#D87D4A] font-bold mr-4">1x</span> Headphone Unit
            </li>
            <li>
              <span className="text-[#D87D4A] font-bold mr-4">2x</span> Replacement Earcups
            </li>
            <li>
              <span className="text-[#D87D4A] font-bold mr-4">1x</span> User Manual
            </li>
            <li>
              <span className="text-[#D87D4A] font-bold mr-4">1x</span> 3.5mm Audio Cable
            </li>
            <li>
              <span className="text-[#D87D4A] font-bold mr-4">1x</span> Travel Bag
            </li>
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24">
        <div className="space-y-6">
          <div className="relative w-full h-64 sm:h-72 rounded-lg overflow-hidden">
            <Image
              src="/images/home/man listening.png"
              alt="XX99 Mark II gallery 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-64 sm:h-72 rounded-lg overflow-hidden">
            <Image
              src="/images/home/Bitmap.jpg"
              alt="XX99 Mark II gallery 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative w-full h-[530px] sm:h-[600px] rounded-lg overflow-hidden">
          <Image
            src="/images/home/half headset.png"
            alt="XX99 Mark II gallery 3"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* You May Also Like */}
      <section className="mt-24 mb-32 text-center max-w-6xl mx-auto px-6 md:px-0">
        <h2 className="text-3xl font-bold uppercase mb-12">You may also like</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {RELATED_PRODUCTS.map((product) => (
            <div key={product.slug} className="flex flex-col items-center">
              <div className="w-full h-40 md:h-56 bg-[#F1F1F1] rounded-lg overflow-hidden flex justify-center items-center mb-8">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={350}
                  height={318}
                  loading="lazy"
                  className="object-cover w-auto h-full"
                />
              </div>
              <h3 className="text-xl font-bold uppercase mb-8">{product.name}</h3>
              <Link
                href={`${product.slug}`}
                className="bg-[#D87D4A] text-white px-8 py-3 uppercase tracking-wider text-sm hover:bg-[#FBAF85] transition rounded-md"
              >
                See Product
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Category Boxes */}
      <section className="max-w-6xl mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between gap-8 mb-32">
        {[
          { name: "Headphones", href: "/headphones", img: "/images/home/headphones.png" },
          { name: "Speakers", href: "/speakers", img: "/images/home/speakers.png" },
          { name: "Earphones", href: "/earphones", img: "/images/home/earphones.jpg" },
        ].map((cat) => (
          <div
            key={cat.name}
            className="bg-[#F1F1F1] rounded-lg flex flex-col items-center pt-16 pb-6 w-full md:w-1/3 relative"
          >
            <Image
              src={cat.img}
              alt={cat.name}
              width={150}
              height={150}
              className="absolute -top-10 w-28 h-28 object-contain"
            />
            <h3 className="uppercase font-bold tracking-widest mb-2">{cat.name}</h3>
            <Link
              href={cat.href}
              className="text-gray-500 uppercase tracking-widest text-sm hover:text-[#D87D4A]"
            >
              Shop <span className="text-[#D87D4A] font-bold">→</span>
            </Link>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-16 items-center my-32 text-center md:text-left">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6 leading-tight">
            Bringing you the <span className="text-[#D87D4A]">best</span> audio gear
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0 text-sm md:text-base">
            Located at the heart of New York City, Audiophile is the premier store
            for high end headphones, earphones, speakers, and audio accessories.
            We have a large showroom and luxury demonstration rooms available for
            you to browse and experience a wide range of our products.
          </p>
        </div>

        <div className="order-1 md:order-2">
          <Image
            src="/images/home/man listening.png"
            alt="Best audio gear"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
      </section>
    </main>
  );
}

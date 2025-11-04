import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../components/context/cartcontext";

const RELATED_PRODUCTS = [
  {
    name: "XX99 Mark II",
    slug: "/headphones/markii",
    image: "/images/shared/desktop/black headphones.jpg",
  },
  {
    name: "XX99 Mark I",
    slug: "/headphones/marki",
    image: "/images/home/headphones2.jpg",
  },
  {
    name: "ZX9 Speaker",
    slug: "/speakers/zx9",
    image: "/images/home/speakers.png",
  },
];

export default function XX59() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    const product = {
      id: "XX59 Headphones",
      name: "XX59 Headphones",
      price: 899,
      quantity,
      image: "/images/shared/desktop/white headphones.jpg",
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
            src="/images/shared/desktop/white headphones.jpg"
            alt="XX59 Headphones"
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
            XX59 <br className="hidden md:block" /> Headphones
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <p className="font-bold text-lg mb-6">$ 899</p>

          <div className="flex justify-center md:justify-start items-center gap-4">
            <div className="bg-[#F1F1F1] rounded flex items-center justify-between w-28 sm:w-32 md:w-36 px-3 sm:px-4 py-2 sm:py-3">
              <button
                onClick={decreaseQuantity}
                className="text-gray-500 hover:text-black font-bold text-lg sm:text-xl px-2 sm:px-3 transition-transform active:scale-90"
                aria-label="Decrease quantity"
              >
                −
              </button>

              <span className="font-bold text-base sm:text-lg">{quantity}</span>

              <button
                onClick={increaseQuantity}
                className="text-gray-500 hover:text-black font-bold text-lg sm:text-xl px-2 sm:px-3 transition-transform active:scale-90"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

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
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            These headphones have been created from durable, high-quality
            materials tough enough to take anywhere. Its compact folding design
            fuses comfort and style making it perfect for travel. Flawless
            transmission is assured by the latest wireless technology engineered
            for audio synchronization with videos.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            More than a simple pair of headphones, this headset features a pair
            of built-in microphones for clear, hands-free calling when paired
            with a compatible smartphone. Controlling music and calls is also
            intuitive thanks to easy-access touch buttons on the earcups.
            Regardless of how you use the XX59 headphones, you can do so all day
            thanks to an impressive 30-hour battery life that can be rapidly
            recharged via USB-C.
          </p>
        </div>

        <div className="lg:pl-16">
          <h2 className="text-2xl font-bold uppercase mb-6">In the Box</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <span className="text-[#D87D4A] font-bold mr-4">1x</span>{" "}
              Headphone Unit
            </li>
            <li>
              <span className="text-[#D87D4A] font-bold mr-4">2x</span>{" "}
              Replacement Earcups
            </li>
            <li>
              <span className="text-[#D87D4A] font-bold mr-4">1x</span> User
              Manual
            </li>
            <li>
              <span className="text-[#D87D4A] font-bold mr-4">1x</span> 3.5mm
              Audio Cable
            </li>
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative max-w-[1110px] h-auto md:h-[592px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 opacity-100">
        <div className="space-y-6">
          <div className="relative w-full max-w-[445px] h-[280px] mx-auto rounded-lg overflow-hidden opacity-100">
            <Image
              src="/images/home/someone with headphone.jpg"
              alt="XX59 gallery 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full max-w-[445px] h-[280px] mx-auto rounded-lg overflow-hidden opacity-100">
            <Image
              src="/images/home/headphones and books.jpg"
              alt="XX59 gallery 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative w-full max-w-[635px] h-[592px] mx-auto opacity-100 rounded-lg overflow-hidden">
          <Image
            src="/images/home/holding headphone.jpg"
            alt="XX59 gallery 3"
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

              <h3 className="text-xl font-bold uppercase mb-8">
                {product.name}
              </h3>

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

      {/* Category Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between gap-8 mb-32">
        {[
          {
            name: "Headphones",
            href: "/headphones",
            img: "/images/home/headphones.png",
          },
          {
            name: "Speakers",
            href: "/speakers",
            img: "/images/home/speakers.png",
          },
          {
            name: "Earphones",
            href: "/earphones",
            img: "/images/home/earphones.jpg",
          },
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
            <h3 className="uppercase font-bold tracking-widest mb-2">
              {cat.name}
            </h3>
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
            Bringing you the <span className="text-orange-500">best</span> audio
            gear
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products.
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

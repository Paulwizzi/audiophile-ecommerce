"use client";
import Image from "next/image";
import Link from "next/link";

export default function SpeakersPage() {
  return (
    <main className="flex flex-col items-center">
      {/* ===== HERO ===== */}
      <section className="bg-black w-full text-white text-center py-24 md:py-32">
        <h1 className="uppercase text-3xl md:text-5xl font-bold tracking-widest">
          Speakers
        </h1>
      </section>

      {/* ===== ZX9 SPEAKER ===== */}
      <section className="container mx-auto px-6 lg:px-20 my-24 md:my-32 grid md:grid-cols-2 gap-12 md:gap-20 items-center text-center md:text-left">
        {/* Image */}
        <div className="bg-gray-100 flex justify-center items-center rounded-lg p-10 md:p-16">
          <Image
            src="/images/home/white speaker.png"
            alt="ZX9 Speaker"
            width={400}
            height={400}
            className="object-contain"
            priority
          />
        </div>

        {/* Text */}
        <div>
          <p className="uppercase text-orange-500 tracking-[6px] text-sm mb-4">
            New Product
          </p>
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6 leading-tight">
            ZX9 Speaker
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
            Upgrade your sound system with the all new ZX9 active speaker.
            It’s a bookshelf speaker system that offers truly wireless
            connectivity — creating new possibilities for more pleasing and
            practical audio setups.
          </p>
          <Link href="/speakers/zx9">
            <button className="bg-orange-500 text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-orange-600 transition">
              See Product
            </button>
          </Link>
        </div>
      </section>

      {/* ===== ZX7 SPEAKER ===== */}
      <section className="container mx-auto px-6 lg:px-20 my-24 md:my-32 grid md:grid-cols-2 gap-12 md:gap-20 items-center text-center md:text-left">
        {/* Text */}
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6 leading-tight">
            ZX7 Speaker
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
            Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that represent
            the top of the line powered speakers for home or studio use.
          </p>
          <Link href="/speakers/zx7">
            <button className="bg-orange-500 text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-orange-600 transition">
              See Product
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="bg-gray-100 flex justify-center items-center rounded-lg p-10 md:p-16 order-1 md:order-2">
          <Image
            src="/images/home/black speaker.jpg"
            alt="ZX7 Speaker"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </section>

      {/* ===== CATEGORY CARDS ===== */}
      <section className="container mx-auto px-6 lg:px-20 grid sm:grid-cols-2 md:grid-cols-3 gap-8 my-32 text-center">
        {[
           { name: "Headphones", href: "/headphones", img: "/images/home/headphones.png" },
          { name: "Speakers", href: "/speakers", img: "/images/home/speakers.png" },
          { name: "Earphones", href: "/earphones", img: "/images/home/earphones.jpg" },
        ].map((cat) => (
          <div
            key={cat.name}
            className="bg-gray-100 rounded-lg flex flex-col items-center py-12 pt-16 pb-6 w-full relative"
          >
            <Image
              src={cat.img}
              alt={cat.name}
              width={150}
              height={150}
              className="object-contain -mt-20 sm:-mt-24"
            />
            <h3 className="uppercase tracking-widest font-semibold mt-4 text-sm md:text-base">
              {cat.name}
            </h3>
            <Link href={cat.href}>
              <span className="text-gray-500 text-xs md:text-sm uppercase tracking-wider mt-3 inline-flex items-center hover:text-orange-500 transition">
                Shop <span className="text-orange-500 ml-2">→</span>
              </span>
            </Link>
          </div>
        ))}
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="container mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-16 items-center my-32 text-center md:text-left">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6 leading-tight">
            Bringing you the{" "}
            <span className="text-orange-500">best</span> audio gear
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
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

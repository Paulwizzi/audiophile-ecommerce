import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeadphonesPage: React.FC = () => {
  return (
    <main className="bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="bg-black text-white text-center py-24">
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest">
          Headphones
        </h1>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-20 py-24 flex flex-col gap-32">
        {/* === Product 1 === */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="bg-gray-100 rounded-lg flex-1 flex justify-center p-12">
            <Image
              src="/images/shared/desktop/black headphones.jpg"
              alt="XX99 Mark II Headphones"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <p className="text-[#D87D4A] uppercase tracking-[10px] mb-6">
              New Product
            </p>
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8">
              XX99 Mark II <br /> Headphones
            </h2>
            <p className="text-gray-600 mb-10 max-w-md mx-auto lg:mx-0">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <nav>
            <Link
              href="/headphones/markii"
              className="bg-[#D87D4A] text-white px-8 py-4 uppercase text-sm tracking-widest font-semibold hover:bg-[#fbaf85] transition"
            >
              See Product
            </Link>
            </nav>
          </div>
        </div>

        {/* === Product 2 (reverse layout) === */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="bg-gray-100 rounded-lg flex-1 flex justify-center p-12">
            <Image
              src="/images/shared/desktop/headphones.png"
              alt="XX99 Mark I Headphones"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8">
              XX99 Mark I <br /> Headphones
            </h2>
            <p className="text-gray-600 mb-10 max-w-md mx-auto lg:mx-0">
              As the gold standard for headphones, the classic XX99 Mark I offers
              detailed and accurate audio reproduction for audiophiles,
              sound engineers, and music enthusiasts alike.
            </p>
            <nav>
            <Link
              href="/headphones/marki"
              className="bg-[#D87D4A] text-white px-8 py-4 uppercase text-sm tracking-widest font-semibold hover:bg-[#fbaf85] transition"
            >
              See Product
            </Link>
            </nav>
          </div>
        </div>

        {/* === Product 3 === */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="bg-gray-100 rounded-lg flex-1 flex justify-center p-12">
            <Image
              src="/images/shared/desktop/white headphones.jpg"
              alt="XX59 Headphones"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8">
              XX59 <br /> Headphones
            </h2>
            <p className="text-gray-600 mb-10 max-w-md mx-auto lg:mx-0">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
           <nav>
            <Link
              href="/headphones/xx59"
              className="bg-[#D87D4A] text-white px-8 py-4 uppercase text-sm tracking-widest font-semibold hover:bg-[#fbaf85] transition"
            >
              See Product
            </Link>
          </nav>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY GRID ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between gap-8 mb-32">
        {[
          { name: "Headphones", href: "/headphones", img: "/images/home/headphones.png" },
          { name: "Speakers", href: "/speakers", img: "/images/home/speakers.png" },
          { name: "Earphones", href: "/earphones", img: "/images/home/earphones.jpg" },
        ].map((cat) => (
           <div key={cat.name} className="bg-[#F1F1F1] rounded-lg flex flex-col items-center pt-16 pb-6 w-full md:w-1/3 relative">
            <Image src={cat.img} alt={cat.name} width={150} height={150} className="absolute -top-10 w-28 h-28 object-contain" />
            <h3 className="uppercase font-bold tracking-widest mb-2">{cat.name}</h3>
            <Link href={cat.href} className="text-gray-500 uppercase tracking-widest text-sm hover:text-[#D87D4A]">
              Shop <span className="text-[#D87D4A] font-bold">→</span>
            </Link>
          </div>
        ))}
      </section>

      {/* ===== BEST AUDIO GEAR ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-20 flex flex-col lg:flex-row items-center gap-16 mb-32">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8">
            Bringing you the <span className="text-[#D87D4A]">best</span> audio gear
          </h2>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
            Located at the heart of New York City, Audiophile is the premier
            store for high-end headphones, earphones, speakers, and audio
            accessories. Visit our demo facility — we’re open 7 days a week.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/images/home/man listening.png"
            alt="Man listening to music"
            width={540}
            height={540}
            className="rounded-lg"
          />
        </div>
      </section>
    </main>
  );
};

export default HeadphonesPage;

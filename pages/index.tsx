import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Define the type for the category objects to ensure type safety
interface Category {
  name: string;
  img: string;
  link: string;
  // Define width/height once, as these thumbnails are likely static size
  width: number;
  height: number;
}

const CATEGORIES: Category[] = [
  { name: "Headphones", img: "/images/home/headphones.png", link: "/headphones", width: 220, height: 200 },
  { name: "Speakers", img: "/images/home/speakers.png", link: "/speakers", width: 220, height: 200 },
  { name: "Earphones", img: "/images/home/earphones.jpg", link: "/earphones", width: 220, height: 200 },
];

const Home: React.FC = () => {
  return (
    <main className="bg-white text-black font-sans">
      {/* HERO */}
      <section className="bg-[#191919] text-white text-center md:text-left py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="max-w-lg z-10">
          <p className="uppercase tracking-[8px] text-gray-400 mb-4 text-sm">New Product</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">XX99 MARK II HEADPHONES</h1>
          <p className="text-gray-300 mb-8 max-w-md mx-auto md:mx-0">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <Link href="/headphones/markii" 
           className="bg-[#D87D4A] text-white px-8 py-3 uppercase tracking-wider text-sm hover:bg-[#FBAF85] transition">See Product
          </Link>
        </div>

        <div className="mt-10 md:mt-0 md:ml-12 flex justify-center">
          <Image 
            src="/images/home/headphone.jpg" 
            alt="XX99 Mark II Headphones" 
            width={600} 
            height={400} 
            priority={true} // High-priority image in the viewport
            className="w-64 sm:w-80 md:w-[420px] h-auto object-contain" 
          />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="flex flex-col md:flex-row justify-center gap-12 py-20 px-6 md:px-20 bg-white">
        {CATEGORIES.map(cat => (
          <div key={cat.name} className="bg-[#F1F1F1] rounded-lg flex flex-col items-center pt-16 pb-6 w-full md:w-1/3 relative">
            <Image 
              src={cat.img} 
              alt={cat.name} 
              width={cat.width} 
              height={cat.height} 
              className="absolute -top-10 w-28 h-28 object-contain" 
            />
            <h3 className="uppercase font-bold mt-20 mb-2">{cat.name}</h3>
            <Link href={cat.link} className="text-gray-500 uppercase text-sm tracking-wider flex items-center hover:text-[#D87D4A]">Shop <span className="ml-2">→</span></Link>
          </div>
        ))}
      </section>

      {/* ZX9 FEATURE */}
      <section className="bg-[#D87D4A] text-white rounded-lg overflow-hidden mx-6 md:mx-20 flex flex-col md:flex-row items-center justify-between px-8 py-12 md:py-20 mb-12">
        <Image 
          src="/images/home/speakers.png" 
          alt="ZX9 Speaker" 
          width={350} 
          height={400} 
          className="mx-auto mb-8 md:mb-0 w-40 sm:w-60 md:w-80 object-contain" 
        />
        <div className="md:ml-16 max-w-md text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4 leading-tight">ZX9 <br/> Speaker</h2>
          <p className="text-white/90 mb-6">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <Link href="/speakers/zx9" className="bg-black text-white px-6 py-3 uppercase tracking-wider text-sm hover:bg-[#4C4C4C] transition">See Product</Link>
        </div>
      </section>

      {/* ZX7 + YX1 */}
      <section className="px-6 md:px-20 flex flex-col gap-8 mb-24">
        {/* ZX7 - Full Width Banner */}
        <div 
          className="bg-cover bg-center rounded-lg p-12 flex items-center h-[260px] bg-no-repeat w-full" 
          style={{backgroundImage: "url('/images/home/Zx7 speaker.jpg')"}}
          role="img" // Added accessibility role
          aria-label="ZX7 Speaker background image" // Added accessibility label
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase mb-4">ZX7 Speaker</h3>
            <Link href="/speakers/zx7" className="border border-black text-black px-6 py-2 uppercase text-sm tracking-wider hover:bg-black hover:text-white transition">See Product</Link>
          </div>
        </div>

        {/* YX1 - Two-column split on small screens and up */}
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <Image 
              src="/images/home/YX1 earphones.jpg" 
              alt="YX1 Earphones" 
              width={540} // Increased approximate dimensions for layout stability
              height={300} // Increased approximate dimensions for layout stability
              className="rounded-lg object-cover w-full h-[260px]" // Fixed height for visual consistency
            />
          </div>
          <div className="bg-[#F1F1F1] rounded-lg p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold uppercase mb-4">YX1 Earphones</h3>
            <Link 
              href="/earphones/yx1" 
              className="border border-black text-black px-6 py-2 uppercase text-sm tracking-wider w-fit hover:bg-black hover:text-white transition"
            >
              See Product
            </Link>
          </div>
        </div>
      </section>

      {/* BEST GEAR */}
      <section className="px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center mb-24 text-center md:text-left">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-4">Bringing you the <span className="text-[#D87D4A]">best</span> audio gear</h2>
          <p className="text-gray-500 leading-relaxed">Located at the heart of New York City, Audiophile is the premier store for high-end headphones, earphones, speakers, and audio accessories.</p>
        </div>
        <div className="order-1 md:order-2">
          {/* CORRECTED: Used Next.js Image component */}
          <Image 
            src="/images/home/man listening.png" 
            alt="Man wearing premium audio gear" 
            width={540} // Example desktop width
            height={588} // Example desktop height
            className="rounded-lg object-cover w-full h-auto" 
          />
        </div>
      </section>
    </main>
  );
};

export default Home;

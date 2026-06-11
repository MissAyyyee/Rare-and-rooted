"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { AddToCartButton } from "@/components/AddToCartButton";

export default function RareDropsPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 42,
    seconds: 18,
  });

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Simulated countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setIsSubscribed(true);
  };

  const dropProducts = products.filter(p => p.category === 'Rare Drops');

  return (
    <main className="min-h-screen bg-[#0a1a10] font-sans text-ivory selection:bg-terracotta/30">
      <Navbar />

      {/* Hero Section with Countdown */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/campaigns/rare-drops/drop-countdown-hero.png" 
            alt="The Emerald Collection" 
            fill 
            className="object-cover opacity-40 scale-105 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a10]/80 via-transparent to-[#0a1a10]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1 rounded-full border border-terracotta/50 bg-terracotta/10 text-terracotta text-[10px] font-bold uppercase tracking-[0.3em] mb-8 animate-pulse">
            Next Drop Arriving Soon
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter">
            The <span className="text-sage italic">Emerald</span> Collection
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-ivory/70 mb-12 text-balance leading-relaxed">
            Our most exclusive release yet. A curated selection of rare specimens with exceptional variegation and genetic pedigree.
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 md:gap-10 mb-16">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Mins", value: timeLeft.minutes },
              { label: "Secs", value: timeLeft.seconds },
            ].map((unit) => (
              <div key={unit.label} className="flex flex-col items-center">
                <div className="w-16 h-20 md:w-24 md:h-28 bg-ivory/5 backdrop-blur-md rounded-2xl border border-ivory/10 flex items-center justify-center text-3xl md:text-5xl font-mono font-bold shadow-2xl">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <span className="text-[10px] uppercase tracking-widest mt-3 font-bold text-sage/80">{unit.label}</span>
              </div>
            ))}
          </div>

          {/* Email Capture */}
          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col md:flex-row gap-3">
              <input 
                type="email" 
                required
                placeholder="Join the Early Access list..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-8 py-5 rounded-full bg-ivory/10 border border-ivory/20 focus:outline-none focus:ring-2 focus:ring-sage focus:bg-ivory/20 transition-all text-sm backdrop-blur-sm"
              />
              <button 
                type="submit"
                className="px-10 py-5 rounded-full bg-terracotta text-ivory font-bold uppercase tracking-widest text-xs hover:bg-terracotta/80 transition-all shadow-xl whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          ) : (
            <div className="max-w-md mx-auto p-6 bg-sage/20 border border-sage/40 rounded-3xl backdrop-blur-sm">
              <p className="text-sage font-bold">Registration Complete</p>
              <p className="text-sm text-ivory/80 mt-1">You'll receive a private link 1 hour before the public drop.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Collection Identity */}
      <section className="py-24 bg-ivory text-forest relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl group">
              <Image 
                src="/campaigns/rare-drops/emerald-collection-identity.png" 
                alt="Emerald Collection" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Vibrant Genes.<br/>Exquisite Care.</h2>
              <div className="space-y-6 text-lg text-forest/70 leading-relaxed max-w-xl">
                <p>
                  Every plant in The Emerald Collection has been hand-selected for its stable variegation and robust root system. These aren't just plants; they are living heirlooms.
                </p>
                <p>
                  Our collectors get exclusive access to provenance records and specialized care protocols developed in our private greenhouse.
                </p>
              </div>
              
              <div className="mt-12 flex gap-8">
                <div>
                  <p className="text-3xl font-bold text-forest">02</p>
                  <p className="text-xs uppercase tracking-widest text-sage font-bold">Limited Varieties</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-forest">05</p>
                  <p className="text-xs uppercase tracking-widest text-sage font-bold">Total Specimens</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drop List */}
      <section className="py-24 bg-[#0a1a10]">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">The Manifest</h2>
              <p className="text-ivory/50">Preview of the upcoming release</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {dropProducts.map((product) => (
              <div key={product.id} className="group relative flex flex-col md:flex-row gap-8 bg-ivory/5 p-8 rounded-[2.5rem] border border-ivory/10 hover:bg-ivory/[0.08] transition-all">
                <div className="w-full md:w-48 aspect-square relative rounded-3xl overflow-hidden shrink-0">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className={`object-cover transition-transform duration-700 group-hover:scale-110 ${product.stock === 0 ? 'grayscale opacity-60' : ''}`}
                  />
                  {product.stock === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="relative w-24 h-24 drop-shadow-2xl">
                          <Image src="/campaigns/rare-drops/sold-out-badge.png" alt="Sold Out" fill className="object-contain" />
                       </div>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col justify-center flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-ivory group-hover:text-sage transition-colors">{product.name}</h3>
                      <p className="text-sm italic text-sage/80 font-medium">{product.scientificName}</p>
                    </div>
                    <span className="text-xl font-bold text-ivory">${product.price}</span>
                  </div>
                  
                  <p className="text-ivory/60 text-sm mb-8 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  <div className="mt-auto">
                    <AddToCartButton product={product} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 rounded-[3rem] bg-gradient-to-br from-terracotta/20 to-[#0a1a10] border border-terracotta/30 text-center">
             <h3 className="text-2xl md:text-3xl font-bold mb-6 italic tracking-tight">"A rare plant is a promise between the grower and the future."</h3>
             <p className="text-terracotta font-bold uppercase tracking-[0.2em] text-xs">— Katie & Amanda, Rare & Rooted Founders</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

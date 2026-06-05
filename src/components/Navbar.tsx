"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { setIsCartOpen, cartCount } = useCart();

  return (
    <nav className="flex items-center justify-between px-6 py-6 md:px-12 bg-ivory/80 backdrop-blur-sm sticky top-0 z-50">
      <Link href="/" className="relative w-40 h-12 md:w-48 md:h-14">
        <Image
          src="/logo-gold-transparent.png"
          alt="Rare & Rooted"
          fill
          className="object-contain object-left"
        />
      </Link>
      <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
        <Link href="/shop" className="hover:text-sage transition-colors text-forest">Shop</Link>
        <Link href="/shop?category=Collector's Corner" className="hover:text-sage transition-colors text-forest">Rare Finds</Link>
        <Link href="/#our-story" className="hover:text-sage transition-colors text-forest">Our Story</Link>
        <Link href="/#care-resources" className="hover:text-sage transition-colors text-forest">Care Guide</Link>
      </div>
      <div className="flex items-center space-x-4 text-forest">
        <button className="p-2 hover:text-sage transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="p-2 hover:text-sage transition-colors relative"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-terracotta text-ivory text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}

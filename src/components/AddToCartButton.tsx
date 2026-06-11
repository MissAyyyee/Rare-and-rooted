"use client";

import React, { useState } from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface AddToCartButtonProps {
  product: Product;
  className?: string;
  showQuantity?: boolean;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({ 
  product, 
  className = "", 
  showQuantity = false 
}) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWaitlistMode, setIsWaitlistMode] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [isJoined, setIsJoined] = useState(false);

  const isOutOfStock = product.stock === 0;

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    addToCart(product, quantity);
  };

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistEmail) {
      setIsJoined(true);
      // In a real app, we'd send this to a backend
    }
  };

  if (isOutOfStock && showQuantity) {
    if (isJoined) {
      return (
        <div className={`p-6 bg-sage/10 rounded-3xl border border-sage/20 text-center ${className}`}>
          <p className="text-forest font-bold mb-2">You're on the list!</p>
          <p className="text-sm text-forest/70 text-balance">We'll notify you as soon as this specimen is back in the greenhouse.</p>
        </div>
      );
    }

    return (
      <div className={`flex flex-col gap-4 ${className}`}>
        <div className="bg-cream/50 p-6 rounded-3xl border border-forest/10">
          <p className="text-terracotta font-bold uppercase tracking-widest text-xs mb-4">Out of Stock</p>
          <p className="text-sm text-forest/70 mb-6 text-balance font-medium italic">This rare specimen is currently unavailable. Join the waitlist for early access to the next drop.</p>
          
          <form onSubmit={handleJoinWaitlist} className="flex flex-col gap-3">
            <input 
              type="email" 
              required
              placeholder="Enter your email"
              value={waitlistEmail}
              onChange={(e) => setWaitlistEmail(e.target.value)}
              className="w-full px-5 py-3 rounded-full border border-forest/10 bg-ivory text-sm focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all"
            />
            <button 
              type="submit"
              className="w-full bg-forest text-ivory py-4 rounded-full font-bold uppercase tracking-widest hover:bg-sage transition-all shadow-lg text-xs"
            >
              Join the Waitlist
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (showQuantity) {
    return (
      <div className={`flex flex-col gap-4 ${className}`}>
        <div className="flex items-center border border-forest/10 rounded-full px-4 py-2 gap-6 w-max bg-cream/30">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="text-forest hover:text-terracotta transition-colors font-bold w-4"
          >
            -
          </button>
          <span className="text-sm font-bold w-4 text-center">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="text-forest hover:text-terracotta transition-colors font-bold w-4"
          >
            +
          </button>
        </div>
        <button 
          onClick={handleAddToCart}
          className="w-full bg-forest text-ivory py-5 rounded-full font-bold uppercase tracking-widest hover:bg-sage transition-all shadow-lg text-sm"
        >
          Add to Cart
        </button>
      </div>
    );
  }

  return (
    <button 
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isOutOfStock) {
          addToCart(product, 1);
        }
      }}
      disabled={isOutOfStock}
      className={`${
        isOutOfStock 
          ? "bg-forest/20 text-forest/40 cursor-not-allowed" 
          : "bg-forest text-ivory hover:bg-sage shadow-md"
      } p-3 rounded-full transition-all ${className}`}
      aria-label={isOutOfStock ? "Out of stock" : "Add to cart"}
    >
      {isOutOfStock ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 2 20 20"/><path d="M6.3 6.3a9 9 0 1 0 11.4 11.4"/><path d="M11 5.05a9 9 0 0 1 7.95 7.95"/></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      )}
    </button>
  );
};

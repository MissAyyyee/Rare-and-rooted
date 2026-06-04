"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export const CartSidebar: React.FC = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    cartTotal, 
    isCartOpen, 
    setIsCartOpen 
  } = useCart();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [setIsCartOpen]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-forest/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar Content */}
      <div 
        ref={sidebarRef}
        className="relative w-full max-w-md bg-ivory shadow-2xl flex flex-col h-full transform transition-transform duration-300 ease-in-out"
      >
        <div className="flex items-center justify-between p-6 border-b border-forest/10">
          <h2 className="text-2xl font-bold text-forest">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-forest/5 rounded-full transition-colors text-forest"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 mb-6 text-sage opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="text-forest/60 text-lg mb-8">Your cart is currently empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="bg-forest text-ivory px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-sage transition-all"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-cream flex-shrink-0">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-bold text-forest">{item.name}</h3>
                      <p className="font-bold text-forest">${item.price}</p>
                    </div>
                    <p className="text-xs text-forest/40 italic mb-4">{item.scientificName}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border border-forest/10 rounded-full px-3 py-1 gap-4">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-forest hover:text-terracotta transition-colors"
                        >
                          -
                        </button>
                        <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-forest hover:text-terracotta transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-terracotta font-bold uppercase tracking-widest hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-forest/10 bg-cream">
            <div className="flex justify-between items-center mb-6">
              <span className="text-forest/60 font-medium">Subtotal</span>
              <span className="text-2xl font-bold text-forest">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-forest/40 mb-8 text-center italic">
              Shipping and taxes calculated at checkout.
            </p>
            <Link 
              href="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full bg-forest text-ivory py-4 rounded-full font-bold uppercase tracking-widest text-sm text-center hover:bg-sage transition-all shadow-lg"
            >
              Checkout Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

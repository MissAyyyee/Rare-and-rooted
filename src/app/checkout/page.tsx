"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CheckoutPage() {
  const { cartItems, cartTotal } = useCart();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrderPlaced(true);
  };

  if (isOrderPlaced) {
    return (
      <main className="min-h-screen bg-ivory font-sans text-forest flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 bg-sage rounded-full flex items-center justify-center mb-8 text-ivory">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl text-forest/70 mb-12 max-w-md">
            Your order has been placed successfully. We'll send you a confirmation email with your tracking details soon.
          </p>
          <Link 
            href="/shop" 
            className="bg-forest text-ivory px-12 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-sage transition-all shadow-lg"
          >
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ivory font-sans text-forest">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12 md:px-12 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-16">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Form Column */}
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-forest text-ivory flex items-center justify-center text-sm">1</span>
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-forest/40 mb-2">Email Address</label>
                    <input required type="email" className="w-full bg-cream border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-forest transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-forest/40 mb-2">Phone Number</label>
                    <input required type="tel" className="w-full bg-cream border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-forest transition-all" />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-forest text-ivory flex items-center justify-center text-sm">2</span>
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-forest/40 mb-2">Full Name</label>
                    <input required type="text" className="w-full bg-cream border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-forest transition-all" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-forest/40 mb-2">Street Address</label>
                    <input required type="text" className="w-full bg-cream border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-forest transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-forest/40 mb-2">City</label>
                    <input required type="text" className="w-full bg-cream border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-forest transition-all" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-forest/40 mb-2">State</label>
                      <input required type="text" className="w-full bg-cream border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-forest transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-forest/40 mb-2">ZIP Code</label>
                      <input required type="text" className="w-full bg-cream border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-forest transition-all" />
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-forest text-ivory flex items-center justify-center text-sm">3</span>
                  Payment Method
                </h2>
                <div className="bg-cream p-8 rounded-3xl border-2 border-forest/5">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-6 h-6 rounded-full border-4 border-forest bg-ivory"></div>
                    <span className="font-bold">Credit Card</span>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-forest/40 mb-2">Card Number</label>
                      <input placeholder="0000 0000 0000 0000" className="w-full bg-ivory border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-forest transition-all" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-forest/40 mb-2">Expiry Date</label>
                        <input placeholder="MM/YY" className="w-full bg-ivory border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-forest transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-forest/40 mb-2">CVV</label>
                        <input placeholder="123" className="w-full bg-ivory border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-forest transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <button 
                type="submit"
                className="w-full bg-forest text-ivory py-6 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-sage transition-all shadow-xl"
              >
                Place Order • ${ (cartTotal + 15).toFixed(2) }
              </button>
            </form>
          </div>

          {/* Summary Column */}
          <div className="w-full lg:w-1/3">
            <div className="bg-cream p-8 rounded-[2.5rem] sticky top-32 shadow-sm">
              <h2 className="text-2xl font-bold mb-8">Order Summary</h2>
              
              <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-ivory flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <p className="font-bold text-sm text-forest">{item.name}</p>
                        <p className="font-bold text-sm text-forest">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="text-xs text-forest/40 italic">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-8 border-t border-forest/10">
                <div className="flex justify-between text-sm">
                  <span className="text-forest/60">Subtotal</span>
                  <span className="font-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-forest/60">Shipping</span>
                  <span className="font-bold">$15.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-forest/60">Estimated Tax</span>
                  <span className="font-bold">$0.00</span>
                </div>
                <div className="flex justify-between text-xl pt-4 border-t border-forest/10 mt-4">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-terracotta">${(cartTotal + 15).toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-12 bg-sage/10 p-6 rounded-2xl flex gap-4 items-start">
                <div className="text-sage mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <p className="text-xs text-forest/60 leading-relaxed">
                  Your purchase is secure. We use industry-standard encryption to protect your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

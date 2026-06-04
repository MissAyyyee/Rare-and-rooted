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

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  if (showQuantity) {
    return (
      <div className={`flex flex-col gap-4 ${className}`}>
        <div className="flex items-center border border-forest/10 rounded-full px-4 py-2 gap-6 w-max">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="text-forest hover:text-terracotta transition-colors font-bold"
          >
            -
          </button>
          <span className="text-sm font-bold w-4 text-center">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="text-forest hover:text-terracotta transition-colors font-bold"
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
        addToCart(product, 1);
      }}
      className={`bg-forest text-ivory p-3 rounded-full hover:bg-sage transition-all shadow-md ${className}`}
      aria-label="Add to cart"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
    </button>
  );
};

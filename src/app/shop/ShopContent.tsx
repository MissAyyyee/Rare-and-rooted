"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function ShopContent() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const filteredProducts = categoryFilter
    ? products.filter((p) => p.category === categoryFilter)
    : products;

  const categories = ["Rooted Basics", "Collector's Corner", "Coveted Cuts", "Accessories", "Merchandise"];

  return (
    <div className="container mx-auto px-6 py-16 md:px-12 md:py-24">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-8">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-forest mb-4">
            {categoryFilter || "Our Collection"}
          </h1>
          <p className="text-forest/70 max-w-xl text-lg">
            Carefully curated, healthy plants delivered from our greenhouse to your home.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Link
            href="/shop"
            className={`px-6 py-2 rounded-full border text-sm font-bold uppercase tracking-widest transition-all ${
              !categoryFilter
                ? "bg-forest text-ivory border-forest"
                : "border-forest/20 text-forest hover:border-forest"
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/shop?category=${encodeURIComponent(cat)}`}
              className={`px-6 py-2 rounded-full border text-sm font-bold uppercase tracking-widest transition-all ${
                categoryFilter === cat
                  ? "bg-forest text-ivory border-forest"
                  : "border-forest/20 text-forest hover:border-forest"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6 bg-cream shadow-sm transition-all group-hover:shadow-xl group-hover:-translate-y-1">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-ivory/90 backdrop-blur-sm text-forest text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  {product.careLevel}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-forest group-hover:text-terracotta transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-forest/50 italic mb-2">
                  {product.scientificName}
                </p>
              </div>
              <p className="font-bold text-forest">${product.price}</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sage group-hover:text-forest transition-colors">
              View Details
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-xl text-forest/50">No items found in this category.</p>
          <Link href="/shop" className="text-terracotta font-bold mt-4 inline-block hover:underline">
            View all items
          </Link>
        </div>
      )}
    </div>
  );
}

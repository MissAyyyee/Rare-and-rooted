"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, Product } from "@/data/products";
import { AddToCartButton } from "@/components/AddToCartButton";

type SortOption = "newest" | "price-low-high" | "price-high-low";

export default function ShopContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // State from URL or local
  const categoryFilter = searchParams.get("category");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCareLevels, setActiveCareLevels] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [isFilterMobileOpen, setIsFilterMobileOpen] = useState(false);

  const categories = ["Rooted Basics", "Collector's Corner", "Coveted Cuts", "Sister Picks", "Accessories", "Merchandise"];
  const careLevels = ["Easy", "Intermediate", "Advanced"];

  // Memoized filtered and sorted products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // 1. Category Filter
    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter);
    }

    // 2. Care Level Filter (Combined)
    if (activeCareLevels.length > 0) {
      result = result.filter((p) => activeCareLevels.includes(p.careLevel));
    }

    // 3. Search Query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) => 
          p.name.toLowerCase().includes(query) || 
          (p.scientificName && p.scientificName.toLowerCase().includes(query))
      );
    }

    // 4. Sorting
    result.sort((a, b) => {
      if (sortBy === "price-low-high") return a.price - b.price;
      if (sortBy === "price-high-low") return b.price - a.price;
      return 0; // Default: 'newest' (order in array)
    });

    return result;
  }, [categoryFilter, activeCareLevels, searchQuery, sortBy]);

  const toggleCareLevel = (level: string) => {
    setActiveCareLevels(prev => 
      prev.includes(level) 
        ? prev.filter(l => l !== level) 
        : [...prev, level]
    );
  };

  const handleCategoryChange = (cat: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (cat) {
      params.set("category", cat);
    } else {
      params.delete("category");
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="container mx-auto px-6 py-12 md:px-12 md:py-20">
      {/* Header & Search */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-forest mb-4">
            {categoryFilter || "Our Collection"}
          </h1>
          <p className="text-forest/70 text-lg">
            Curated houseplants and rare finds. Filter by your expertise or search for something specific.
          </p>
        </div>

        <div className="w-full lg:w-96 relative">
          <input
            type="text"
            placeholder="Search species..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-cream border-none rounded-full px-6 py-4 pl-12 focus:ring-2 focus:ring-sage transition-all shadow-sm outline-none"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-forest/40"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="hidden lg:block w-64 flex-shrink-0 space-y-10">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-terracotta mb-6">Collections</h3>
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handleCategoryChange(null)}
                className={`text-left text-sm font-medium transition-colors ${!categoryFilter ? 'text-forest font-bold' : 'text-forest/60 hover:text-sage'}`}
              >
                All Products
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`text-left text-sm font-medium transition-colors ${categoryFilter === cat ? 'text-forest font-bold' : 'text-forest/60 hover:text-sage'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-terracotta mb-6">Care Level</h3>
            <div className="flex flex-col space-y-3">
              {careLevels.map(level => (
                <label key={level} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={activeCareLevels.includes(level)}
                    onChange={() => toggleCareLevel(level)}
                    className="w-4 h-4 rounded border-forest/20 text-forest focus:ring-sage accent-forest"
                  />
                  <span className={`text-sm font-medium transition-colors ${activeCareLevels.includes(level) ? 'text-forest font-bold' : 'text-forest/60 group-hover:text-sage'}`}>
                    {level}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Mobile Filter Toggle & Sort */}
        <div className="lg:hidden flex justify-between items-center mb-6">
           <button 
             onClick={() => setIsFilterMobileOpen(true)}
             className="flex items-center gap-2 bg-cream px-6 py-3 rounded-full text-sm font-bold text-forest shadow-sm"
           >
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
             Filters
           </button>
           
           <select 
             value={sortBy}
             onChange={(e) => setSortBy(e.target.value as SortOption)}
             className="bg-cream border-none rounded-full px-6 py-3 text-sm font-bold text-forest shadow-sm outline-none cursor-pointer"
           >
             <option value="newest">Sort: Newest</option>
             <option value="price-low-high">Price: Low to High</option>
             <option value="price-high-low">Price: High to Low</option>
           </select>
        </div>

        {/* Desktop Sort Dropdown */}
        <div className="hidden lg:block w-full">
          <div className="flex justify-end mb-8">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-forest/40">Sort By</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-transparent border-b-2 border-forest/10 py-1 text-sm font-bold text-forest outline-none focus:border-sage transition-colors cursor-pointer"
              >
                <option value="newest">Newest Arrivals</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
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
                    className={`object-cover transition-transform duration-700 group-hover:scale-110 ${product.stock === 0 ? 'grayscale opacity-60' : ''}`}
                  />
                  
                  {/* Status Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.category === 'Rare Drops' && (
                      <span className="bg-terracotta text-ivory text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                        Rare Drop
                      </span>
                    )}
                    {product.stock === 0 && (
                      <div className="relative w-16 h-16 md:w-20 md:h-20 drop-shadow-xl animate-in zoom-in duration-500">
                        <Image 
                          src="/campaigns/rare-drops/sold-out-badge.png" 
                          alt="Sold Out" 
                          fill 
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {product.careLevel !== 'N/A' && (
                      <span className="bg-ivory/90 backdrop-blur-sm text-forest text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm self-end">
                        {product.careLevel}
                      </span>
                    )}
                    <AddToCartButton product={product} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-forest group-hover:text-terracotta transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-forest/50 italic mb-2">
                      {product.scientificName || product.category}
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
            <div className="py-24 text-center w-full">
              <p className="text-xl text-forest/50 font-light italic">No specimens match your selection.</p>
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setActiveCareLevels([]);
                  handleCategoryChange(null);
                }}
                className="text-terracotta font-bold mt-4 inline-block hover:underline underline-offset-4"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {isFilterMobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-forest/40 backdrop-blur-sm" onClick={() => setIsFilterMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-ivory shadow-2xl p-8 animate-in slide-in-from-right duration-300">
             <div className="flex justify-between items-center mb-10">
               <h2 className="text-2xl font-bold text-forest">Filters</h2>
               <button onClick={() => setIsFilterMobileOpen(false)} className="p-2 text-forest">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
               </button>
             </div>

             <div className="space-y-12 overflow-y-auto max-h-[calc(100vh-150px)]">
               <div>
                 <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta mb-6">Collections</h3>
                 <div className="flex flex-col space-y-4">
                   <button
                     onClick={() => { handleCategoryChange(null); setIsFilterMobileOpen(false); }}
                     className={`text-left text-base font-medium ${!categoryFilter ? 'text-forest font-bold' : 'text-forest/60'}`}
                   >
                     All Products
                   </button>
                   {categories.map(cat => (
                     <button
                       key={cat}
                       onClick={() => { handleCategoryChange(cat); setIsFilterMobileOpen(false); }}
                       className={`text-left text-base font-medium ${categoryFilter === cat ? 'text-forest font-bold' : 'text-forest/60'}`}
                     >
                       {cat}
                     </button>
                   ))}
                 </div>
               </div>

               <div>
                 <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta mb-6">Care Level</h3>
                 <div className="flex flex-col space-y-4">
                   {careLevels.map(level => (
                     <label key={level} className="flex items-center gap-4 cursor-pointer">
                       <input
                         type="checkbox"
                         checked={activeCareLevels.includes(level)}
                         onChange={() => toggleCareLevel(level)}
                         className="w-5 h-5 rounded border-forest/20 text-forest focus:ring-sage accent-forest"
                       />
                       <span className={`text-base font-medium ${activeCareLevels.includes(level) ? 'text-forest font-bold' : 'text-forest/60'}`}>
                         {level}
                       </span>
                     </label>
                   ))}
                 </div>
               </div>
             </div>
             
             <div className="absolute bottom-8 left-8 right-8">
               <button 
                 onClick={() => setIsFilterMobileOpen(false)}
                 className="w-full bg-forest text-ivory py-4 rounded-full font-bold uppercase tracking-widest text-xs"
               >
                 Apply Filters
               </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}

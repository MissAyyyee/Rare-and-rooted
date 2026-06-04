import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest text-ivory py-12 border-t border-ivory/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="relative w-40 h-12 mb-6">
              <Image
                src="/logo-gold-transparent.png"
                alt="Rare & Rooted"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-ivory/60 max-w-sm font-light">
              Premium botanical boutique offering curated houseplants and rare collector specimens.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 text-ivory/60 text-sm">
              <li><Link href="/shop" className="hover:text-ivory transition-colors">Shop All</Link></li>
              <li><Link href="/shop?category=Coveted Cuts" className="hover:text-ivory transition-colors">New Drops</Link></li>
              <li><Link href="/shop?category=Collector's Corner" className="hover:text-ivory transition-colors">Rare Varieties</Link></li>
              <li><Link href="/shop?category=Accessories" className="hover:text-ivory transition-colors">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-ivory/60 text-sm">
              <li><Link href="/#care-resources" className="hover:text-ivory transition-colors">Care Tips</Link></li>
              <li><Link href="#" className="hover:text-ivory transition-colors">Shipping Info</Link></li>
              <li><Link href="#" className="hover:text-ivory transition-colors">Returns</Link></li>
              <li><Link href="#" className="hover:text-ivory transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-ivory/10 text-center text-sm text-ivory/40">
          &copy; {new Date().getFullYear()} Rare & Rooted. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

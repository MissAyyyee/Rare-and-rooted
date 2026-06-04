import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-ivory font-sans text-forest">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12 md:px-12 md:py-24">
        <Link 
          href="/shop" 
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-sage hover:text-forest transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Shop
        </Link>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Image Column */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-cream shadow-xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-8 right-8">
                <span className="bg-ivory/90 backdrop-blur-sm text-forest text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                  {product.category}
                </span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-forest mb-2">{product.name}</h1>
              <p className="text-xl text-forest/50 italic mb-6">{product.scientificName}</p>
              <p className="text-3xl font-bold text-forest">${product.price}</p>
            </div>

            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-terracotta mb-3">Description</h3>
                <p className="text-forest/70 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-terracotta mb-3">Care Level</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sage"></span>
                    <p className="font-medium">{product.careLevel}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-terracotta mb-3">Light</h3>
                  <p className="text-forest/70">{product.light}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-terracotta mb-3">Water</h3>
                  <p className="text-forest/70">{product.water}</p>
                </div>
              </div>
            </div>

            <div className="mt-auto space-y-4">
              <button className="w-full bg-forest text-ivory py-5 rounded-full font-bold uppercase tracking-widest hover:bg-sage transition-all shadow-lg text-sm">
                Add to Cart
              </button>
              <p className="text-center text-xs text-forest/40 uppercase tracking-widest">
                Secure checkout • Greenhouse fresh • Safe arrival guarantee
              </p>
            </div>
          </div>
        </div>

        {/* Related Products / More from category */}
        <div className="mt-32">
          <h2 className="text-2xl font-bold text-forest mb-12">More from {product.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((p) => (
                <Link key={p.id} href={`/products/${p.id}`} className="group">
                  <div className="relative aspect-square overflow-hidden rounded-2xl mb-4 bg-cream transition-all group-hover:-translate-y-1">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-forest group-hover:text-terracotta transition-colors">{p.name}</h3>
                  <p className="text-sm text-forest/60">${p.price}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { AddToCartButton } from "@/components/AddToCartButton";

export default function Home() {
  const sisterPicks = products.filter(p => p.category === 'Sister Picks');
  return (
    <main className="min-h-screen bg-ivory font-sans text-forest">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-lush-botanical.png"
            alt="Lush botanical background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-forest/20 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-2xl text-ivory">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 drop-shadow-sm">
              Rare & Rooted
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 italic opacity-95">
              From Common to Coveted
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-lg opacity-90 leading-relaxed font-light">
              Curated houseplants and rare finds for every stage of your plant journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop" className="bg-forest text-ivory px-8 py-4 rounded-full text-center text-sm font-semibold uppercase tracking-widest hover:bg-sage transition-all shadow-lg">
                Shop Plants
              </Link>
              <Link href="/shop?category=Collector's Corner" className="bg-ivory/10 backdrop-blur-md border border-ivory/30 text-ivory px-8 py-4 rounded-full text-center text-sm font-semibold uppercase tracking-widest hover:bg-ivory hover:text-forest transition-all">
                Explore Rare Finds
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-terracotta uppercase tracking-[0.3em] text-sm font-bold mb-4 block">Curated Selection</span>
            <h2 className="text-3xl md:text-5xl font-bold text-forest">Featured Collections</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Rooted Basics", img: "/collection-rooted-basics.png", query: "Rooted Basics" },
              { title: "Collector's Corner", img: "/collection-collectors-corner.png", query: "Collector's Corner" },
              { title: "Coveted Cuts", img: "/collection-coveted-cuts.png", query: "Coveted Cuts" },
              { title: "Sister Picks", img: "/collection-sister-picks.png", query: "Sister Picks" },
              { title: "Accessories", img: "/merchandise/rare-rooted-mix-pouch.png", query: "Accessories" },
              { title: "Merchandise", img: "/merchandise/branded-tote-bag.png", query: "Merchandise" },
            ].map((item, idx) => (
              <Link key={idx} href={`/shop?category=${encodeURIComponent(item.query)}`} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-md transition-all group-hover:shadow-xl group-hover:-translate-y-1">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-forest/10 group-hover:bg-forest/0 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-forest mb-2">{item.title}</h3>
                <div className="text-sm font-semibold uppercase tracking-widest text-terracotta group-hover:text-sage transition-colors flex items-center gap-2">
                  Shop Collection
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-24 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-ivory shadow-2xl">
                 <Image
                    src="/sisters-katie-amanda.png"
                    alt="Sisters Katie & Amanda"
                    fill
                    className="object-cover"
                 />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-terracotta uppercase tracking-[0.3em] text-sm font-bold mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-5xl font-bold text-forest mb-8 leading-tight">
                Meet Katie & Amanda
              </h2>
              <p className="text-lg md:text-xl text-forest/80 leading-relaxed mb-8 italic">
                "Whether you're bringing home your first pothos or searching for your next rare collector plant, we're here to help your collection grow."
              </p>
              <div className="w-20 h-1 bg-terracotta mb-8" />
              <p className="text-forest/70 leading-relaxed">
                As sisters with a shared passion for all things green, we founded Rare & Rooted to bridge the gap between everyday greenery and the world of elite botanical specimens. Our boutique is dedicated to providing healthy, curated plants with the expert guidance you need to thrive as a plant parent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Shop With Us Section */}
      <section className="py-24 bg-forest text-ivory">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center">
            {[
              { 
                title: "Carefully Packaged", 
                text: "Carefully packaged plants ensured to arrive safely.", 
                icon: "/icon-packaging.png" 
              },
              { 
                title: "Healthy Roots", 
                text: "Healthy established roots for a successful start.", 
                icon: "/icon-healthy-roots.png" 
              },
              { 
                title: "Rare Varieties", 
                text: "Rare and hard-to-find botanical specimens.", 
                icon: "/icon-rare-varieties.png" 
              },
              { 
                title: "Expert Support", 
                text: "Expert plant support for every stage of growth.", 
                icon: "/icon-healthy-roots.png" 
              },
              { 
                title: "Family Owned", 
                text: "Sister-owned boutique with a personal touch.", 
                icon: "/icon-packaging.png" 
              },
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 mb-6 relative">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-sm text-ivory/70 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-terracotta uppercase tracking-[0.3em] text-sm font-bold mb-4 block">Kind Words</span>
            <h2 className="text-3xl md:text-5xl font-bold text-forest">From Our Community</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                name: "Sarah M.",
                role: "Rare Plant Collector",
                text: "The variegated Monstera arrived in perfect condition. The packaging was so secure, not a single leaf was damaged. Truly a premium experience!",
                img: "/testimonials/lifestyle-living-room.png"
              },
              {
                name: "James L.",
                role: "New Plant Parent",
                text: "I was nervous about my first 'expensive' plant, but the care guide that came with my Philodendron was so helpful. It's thriving!",
                img: "/testimonials/lifestyle-study.png"
              },
              {
                name: "Elena R.",
                role: "Gift Giver",
                text: "I sent a 'Rooted Basic' bundle to my sister for her birthday. She loved the boutique feel and the plant was incredibly healthy.",
                img: "/testimonials/lifestyle-kitchen.png"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-ivory p-8 rounded-3xl shadow-sm relative">
                <div className="relative w-full h-48 mb-8 rounded-2xl overflow-hidden">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-terracotta fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-forest/80 italic mb-8">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-forest">{testimonial.name}</p>
                  <p className="text-sm text-sage font-medium">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plant Care Resources Section */}
      <section id="care-resources" className="py-24 bg-ivory">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-terracotta uppercase tracking-[0.3em] text-sm font-bold mb-4 block">Learn & Grow</span>
              <h2 className="text-3xl md:text-5xl font-bold text-forest mb-4">Plant Care Resources</h2>
              <p className="text-forest/70 leading-relaxed">
                We don't just sell plants; we ensure you have the knowledge to help them thrive. Explore our expert-led guides and tutorials.
              </p>
            </div>
            <Link href="/care" className="text-forest font-bold uppercase tracking-widest text-sm border-b-2 border-forest pb-1 hover:text-sage hover:border-sage transition-all whitespace-nowrap">
              View All Resources
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Beginner Care Guides", 
                category: "Basics",
                slug: "beginner-care-guides",
                img: "/care-beginner-guide.png" 
              },
              { 
                title: "Repotting Tips", 
                category: "Technique",
                slug: "repotting-tips",
                img: "/care-repotting.png" 
              },
              { 
                title: "Propagation Tutorials", 
                category: "Propagation",
                slug: "propagation-tutorials",
                img: "/care-propagation.png" 
              },
              { 
                title: "Rare Plant Spotlight", 
                category: "Collectors",
                slug: "rare-plant-spotlight",
                img: "/care-rare-spotlight.png" 
              },
            ].map((resource, idx) => (
              <Link key={idx} href={`/care/${resource.slug}`} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={resource.img}
                    alt={resource.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-ivory/90 backdrop-blur-sm text-forest text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                      {resource.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-forest group-hover:text-terracotta transition-colors">{resource.title}</h3>
                <p className="text-sm text-sage font-medium mt-1">Read Article &rarr;</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-24 bg-sage/20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-forest mb-6">Join the Rare & Rooted Community</h2>
            <p className="text-lg text-forest/70 mb-10 leading-relaxed">
              Get first access to rare drops, plant care tips, and exclusive offers delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-6 py-4 rounded-full bg-ivory border-none focus:ring-2 focus:ring-forest outline-none transition-all shadow-sm"
                required
              />
              <button className="bg-forest text-ivory px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-sage transition-all shadow-lg">
                Join
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Sister Picks Section */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-terracotta uppercase tracking-[0.3em] text-sm font-bold mb-4 block">Hand-Picked for You</span>
              <h2 className="text-3xl md:text-5xl font-bold text-forest mb-4">Sister Picks</h2>
              <p className="text-forest/70 leading-relaxed">
                A curated selection of our personal favorites. These plants are chosen for their unique beauty and reliable growth.
              </p>
            </div>
            <Link href="/shop?category=Sister%20Picks" className="text-forest font-bold uppercase tracking-widest text-sm border-b-2 border-forest pb-1 hover:text-sage hover:border-sage transition-all whitespace-nowrap">
              Shop All Picks
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sisterPicks.map((product) => (
              <div key={product.id} className="group">
                <Link href={`/products/${product.id}`} className="relative aspect-[4/5] block overflow-hidden rounded-[2rem] mb-6 bg-cream shadow-sm transition-all group-hover:shadow-xl group-hover:-translate-y-1">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6">
                    <AddToCartButton product={product} className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300" />
                  </div>
                </Link>
                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="text-xl font-bold text-forest mb-1">{product.name}</h3>
                    <p className="text-sm text-forest/40 italic mb-4">{product.scientificName}</p>
                    <p className="text-forest/70 line-clamp-2 text-sm max-w-xs">{product.description}</p>
                  </div>
                  <p className="text-xl font-bold text-forest">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

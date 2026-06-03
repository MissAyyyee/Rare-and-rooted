import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory font-sans text-forest">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-12 bg-ivory/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="relative w-40 h-12 md:w-48 md:h-14">
          <Image
            src="/logo-gold.png"
            alt="Rare & Rooted"
            fill
            className="object-contain object-left"
          />
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
          <a href="#" className="hover:text-sage transition-colors">Shop</a>
          <a href="#" className="hover:text-sage transition-colors">Rare Finds</a>
          <a href="#" className="hover:text-sage transition-colors">Our Story</a>
          <a href="#" className="hover:text-sage transition-colors">Care Guide</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </button>
        </div>
      </nav>

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
              <button className="bg-forest text-ivory px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-sage transition-all shadow-lg">
                Shop Plants
              </button>
              <button className="bg-ivory/10 backdrop-blur-md border border-ivory/30 text-ivory px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-ivory hover:text-forest transition-all">
                Explore Rare Finds
              </button>
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
              { title: "Rooted Basics", img: "/collection-rooted-basics.png" },
              { title: "Collector's Corner", img: "/collection-collectors-corner.png" },
              { title: "Coveted Cuts", img: "/collection-coveted-cuts.png" },
              { title: "Sister Picks", img: "/collection-sister-picks.png" },
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
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
                <a href="#" className="text-sm font-semibold uppercase tracking-widest text-terracotta hover:text-sage transition-colors flex items-center gap-2">
                  Shop Collection
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-ivory shadow-2xl">
                 <div className="absolute inset-0 bg-sage/20 flex items-center justify-center text-forest/40 text-center p-8">
                   [Image of sisters Katie & Amanda]
                 </div>
                 {/* Once we have a photo of Katie and Amanda, it would go here */}
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
                icon: "/icon-healthy-roots.png" // Reusing icon as only 3 were provided
              },
              { 
                title: "Family Owned", 
                text: "Sister-owned boutique with a personal touch.", 
                icon: "/icon-packaging.png" // Reusing icon as only 3 were provided
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

      {/* Footer */}
      <footer className="bg-forest text-ivory py-12 border-t border-ivory/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="relative w-40 h-12 mb-6">
                <Image
                  src="/logo-gold.png"
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
                <li><a href="#" className="hover:text-ivory transition-colors">Shop All</a></li>
                <li><a href="#" className="hover:text-ivory transition-colors">New Drops</a></li>
                <li><a href="#" className="hover:text-ivory transition-colors">Rare Varieties</a></li>
                <li><a href="#" className="hover:text-ivory transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Support</h4>
              <ul className="space-y-4 text-ivory/60 text-sm">
                <li><a href="#" className="hover:text-ivory transition-colors">Care Tips</a></li>
                <li><a href="#" className="hover:text-ivory transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-ivory transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-ivory transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-ivory/10 text-center text-sm text-ivory/40">
            &copy; {new Date().getFullYear()} Rare & Rooted. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

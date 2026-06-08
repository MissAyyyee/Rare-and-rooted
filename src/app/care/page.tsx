import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { careGuides } from "@/data/care-guides";

export default function CareListing() {
  return (
    <main className="min-h-screen bg-ivory font-sans text-forest">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <span className="text-terracotta uppercase tracking-[0.3em] text-sm font-bold mb-4 block text-center">Expert Guidance</span>
          <h1 className="text-4xl md:text-6xl font-bold text-forest mb-6">Plant Care Resource Center</h1>
          <p className="text-lg text-forest/70 max-w-2xl mx-auto leading-relaxed">
            We don't just sell plants; we ensure you have the knowledge to help them thrive. Explore our collection of expert-led guides, tutorials, and deep dives.
          </p>
        </div>
      </section>

      {/* Categories Filter (Visual only for now) */}
      <section className="py-8 border-b border-forest/5 sticky top-20 bg-ivory/80 backdrop-blur-md z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-4">
            {['All Resources', 'Basics', 'Technique', 'Propagation', 'Collectors'].map((cat) => (
              <button 
                key={cat}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  cat === 'All Resources' 
                    ? 'bg-forest text-ivory shadow-md' 
                    : 'bg-cream text-forest hover:bg-sage/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {careGuides.map((guide) => (
              <Link key={guide.id} href={`/care/${guide.slug}`} className="group flex flex-col h-full bg-cream rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-ivory/90 backdrop-blur-sm text-forest text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-sm">
                      {guide.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-sage">{guide.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-forest mb-4 group-hover:text-terracotta transition-colors">{guide.title}</h3>
                  <p className="text-forest/70 leading-relaxed mb-8 flex-grow">
                    {guide.excerpt}
                  </p>
                  <div className="pt-6 border-t border-forest/5 mt-auto">
                    <span className="text-sm font-bold uppercase tracking-widest text-forest group-hover:text-sage transition-colors flex items-center gap-2">
                      Read Article
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

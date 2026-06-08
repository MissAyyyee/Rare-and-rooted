import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { careGuides } from "@/data/care-guides";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return careGuides.map((guide) => ({
    slug: guide.slug,
  }));
}

export default function CareArticle({ params }: { params: { slug: string } }) {
  const guide = careGuides.find((g) => g.slug === params.slug);

  if (!guide) {
    notFound();
  }

  const otherGuides = careGuides.filter((g) => g.id !== guide.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-ivory font-sans text-forest">
      <Navbar />
      
      {/* Article Header */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <Link href="/care" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-sage hover:text-forest transition-colors mb-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Resources
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-sage/20 text-forest text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                {guide.category}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-sage">{guide.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-forest mb-8 leading-tight">{guide.title}</h1>
            <p className="text-xl text-forest/70 leading-relaxed font-light italic">
              {guide.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] shadow-2xl">
            <Image
              src={guide.image}
              alt={guide.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <article className="w-full lg:w-2/3">
              <div 
                className="prose prose-lg prose-forest max-w-none 
                prose-headings:text-forest prose-headings:font-bold
                prose-p:text-forest/80 prose-p:leading-relaxed
                prose-li:text-forest/80
                prose-strong:text-forest"
                dangerouslySetInnerHTML={{ __html: guide.content }}
              />
              
              <div className="mt-16 pt-12 border-t border-forest/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-ivory font-bold">RR</div>
                  <div>
                    <p className="text-sm font-bold">Rare & Rooted Team</p>
                    <p className="text-xs text-sage font-medium uppercase tracking-widest">Expert Plant Support</p>
                  </div>
                </div>
                <div className="flex gap-4">
                   <button className="w-10 h-10 rounded-full border border-forest/10 flex items-center justify-center hover:bg-forest hover:text-ivory transition-all">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                   </button>
                   <button className="w-10 h-10 rounded-full border border-forest/10 flex items-center justify-center hover:bg-forest hover:text-ivory transition-all">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                   </button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="w-full lg:w-1/3">
              <div className="sticky top-32">
                <div className="bg-cream p-8 rounded-3xl mb-8">
                  <h4 className="text-lg font-bold mb-6">Related Articles</h4>
                  <div className="space-y-8">
                    {otherGuides.map((g) => (
                      <Link key={g.id} href={`/care/${g.slug}`} className="group flex gap-4">
                        <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-xl bg-ivory">
                          <Image
                            src={g.image}
                            alt={g.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-terracotta mb-1">{g.category}</p>
                          <h5 className="font-bold text-sm group-hover:text-sage transition-colors leading-snug">{g.title}</h5>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-forest p-8 rounded-3xl text-ivory">
                  <h4 className="text-xl font-bold mb-4">Have Questions?</h4>
                  <p className="text-ivory/70 text-sm mb-8 leading-relaxed">
                    Our team of plant experts is here to help you with any specific care needs or troubleshooting.
                  </p>
                  <Link href="/contact" className="block w-full py-4 bg-sage text-ivory text-center rounded-full text-xs font-bold uppercase tracking-widest hover:bg-ivory hover:text-forest transition-all">
                    Contact Support
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

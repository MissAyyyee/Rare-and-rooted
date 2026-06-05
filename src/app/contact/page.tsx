import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ivory font-sans text-forest">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <span className="text-terracotta uppercase tracking-[0.3em] text-sm font-bold mb-4 block text-center">Get in Touch</span>
          <h1 className="text-4xl md:text-6xl font-bold text-forest mb-6">Boutique Support</h1>
          <p className="text-lg text-forest/70 max-w-2xl mx-auto leading-relaxed">
            Whether you have a question about our rare drops, need plant care advice, or want to track an order, we're here to help your collection grow.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <div className="w-full lg:w-1/3 space-y-12">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-sage mb-6">Our Location</h3>
                <p className="text-forest/80 leading-relaxed">
                  Rare & Rooted Boutique<br />
                  123 Botanical Lane<br />
                  Portland, OR 97201
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-sage mb-6">Connect</h3>
                <div className="space-y-4">
                  <p className="flex items-center gap-4 text-forest/80 hover:text-terracotta transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    hello@rareandrooted.com
                  </p>
                  <p className="flex items-center gap-4 text-forest/80 hover:text-terracotta transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    (503) 555-0123
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-sage mb-6">Hours</h3>
                <div className="space-y-2 text-forest/80 text-sm">
                  <div className="flex justify-between max-w-[200px]">
                    <span>Mon - Fri</span>
                    <span>10am - 6pm</span>
                  </div>
                  <div className="flex justify-between max-w-[200px]">
                    <span>Sat - Sun</span>
                    <span>11am - 4pm</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div className="flex gap-6">
                  <a href="#" className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-forest hover:bg-forest hover:text-ivory transition-all shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-forest hover:bg-forest hover:text-ivory transition-all shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3">
              <div className="bg-cream p-10 md:p-16 rounded-[3rem] shadow-sm">
                <h2 className="text-3xl font-bold text-forest mb-10">Send a Message</h2>
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-sage px-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full bg-ivory border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-sage outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-sage px-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full bg-ivory border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-sage outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-widest text-sage px-1">Subject</label>
                    <select id="subject" className="w-auto min-w-[250px] bg-ivory border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-sage outline-none transition-all appearance-none cursor-pointer">
                      <option>General Inquiry</option>
                      <option>Order Status</option>
                      <option>Plant Care Advice</option>
                      <option>Rare Plant Request</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-sage px-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={6} 
                      className="w-full bg-ivory border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-sage outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button type="submit" className="bg-forest text-ivory px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-sage transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

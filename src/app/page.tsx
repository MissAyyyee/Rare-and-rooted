import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cream text-forest">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-6xl font-bold text-forest">
          Rare & Rooted
        </h1>
        <p className="text-lg sm:text-xl text-sage font-medium">
          Premium Botanical Boutique
        </p>
        
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-forest text-ivory gap-2 hover:bg-[#3d543e] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="#"
          >
            Shop Collection
          </a>
          <a
            className="rounded-full border border-solid border-forest/[.08] transition-colors flex items-center justify-center hover:bg-sage/[.1] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="#"
          >
            Learn Plant Care
          </a>
        </div>
        
        <div className="mt-8 p-6 bg-ivory rounded-lg border border-sage/20 shadow-sm">
          <h2 className="text-xl font-semibold text-terracotta mb-2">Coming Soon</h2>
          <p className="text-forest/80">
            Our curated collection of rare specimens and rooted basics is currently being prepared for you.
          </p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-forest/60">
        &copy; {new Date().getFullYear()} Rare & Rooted. All rights reserved.
      </footer>
    </div>
  );
}

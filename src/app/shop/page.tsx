import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopContent from "./ShopContent";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-ivory font-sans text-forest">
      <Navbar />
      <Suspense fallback={<div className="py-24 text-center">Loading our collection...</div>}>
        <ShopContent />
      </Suspense>
      <Footer />
    </main>
  );
}

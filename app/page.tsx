import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <Pricing />
      {/* Additional spacing or Call to Action could go here */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-wizia-purple/20 to-wizia-pink/20 border border-white/10 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre gestion ?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">Rejoignez des milliers de Community Managers qui utilisent Wizia.</p>
            <button className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Commencer maintenant
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WantToKnowMore from "@/components/WantToKnowMore";
import TrustBadges from "@/components/TrustBadges";
import ValueProposition from "@/components/ValueProposition";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      <Navbar />
      <Hero />
      <WantToKnowMore />
      <TrustBadges />
      <ValueProposition />
      <SolutionsShowcase />
      <FAQ />
      <Footer />
    </main>
  );
}

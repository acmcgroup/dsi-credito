import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AdvantagesCarousel from "@/components/AdvantagesCarousel";
import HousingCredit from "@/components/HousingCredit";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import TrustPartners from "@/components/TrustPartners";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <AdvantagesCarousel />
        <HousingCredit />
        <Process />
        <Services />
        <Benefits />
        <TrustPartners />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
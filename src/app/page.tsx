import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        {/* <AdvantagesCarousel /> */}
        {/* <HousingCredit /> */}
        {/* <Process /> */}
        <Services />
        {/* <Benefits /> */}
        {/* <TrustPartners /> */}
        {/* <Testimonials /> */}
        {/* <FAQ /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
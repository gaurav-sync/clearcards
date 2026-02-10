import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ForCouples from "@/components/ForCouples";
import ForBrands from "@/components/ForBrands";
import SampleDesigns from "@/components/SampleDesigns";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <ForCouples />
      <ForBrands />
      <SampleDesigns />
      <Trust />
      <Contact />
      <Footer />
    </main>
  );
}

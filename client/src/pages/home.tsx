import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LogoBanner from "@/components/LogoBanner";
import About from "@/components/About";
import Consultants from "@/components/Consultants";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen space-bg">
      <Navigation />
      <Hero />
      <LogoBanner />
      <About />
      <Consultants />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

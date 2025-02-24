import About from "@/components/About/About";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/Hero";
import SubHero from "@/components/hero/SubHero";
import Navbar from "@/components/Navbar/Navbar";

import Offer from "@/components/Offers/Offer";
import Show from "@/components/show/Show";
import TestiMonial from "@/components/testimonials/TestiMonial";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar/>
      <Hero id="Home"/>
      <SubHero />
      <div className="w-full flex justify-center" id="About">
        <About />
      </div>
      <div id="Projects">
        <Show />
        </div>
      <TestiMonial />
      <Offer />
      <div className="mt-auto" id="Contact">
        <Footer />
      </div>
    </div>
  );
}

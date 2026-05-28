import Hero from "./Hero";
import How from "./How";
import Navbar from "./Navbar";
import Stats from "./Stats";
import Features from "./Features";
import Calc from "./Calc";
import CTA from "./CTA";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <How />
      <Features />
      <Calc />
      <CTA />
      <Footer />
    </div>
  );
}

import Hero from "./Hero";
import How from "./How";
import Navbar from "./Navbar";
import Stats from "./Stats";
import Features from "./Features";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <How />
      <Features />
    </div>
  );
}

import Details from "@/components/sections/Details";
import { Footer, Team } from "watermonster";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Partnerships from "@/components/sections/Partnerships";

export default function Home() {
  return (
    <main>
      <div className="px-4">
        <Header />
        <Hero />
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <Details />
        <Partnerships />
        <Team />
      </div>
      <Footer />
    </main>
  );
}

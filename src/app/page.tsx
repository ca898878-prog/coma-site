import Hero from "../components/home/Hero";
import QuickLinks from "../components/home/QuickLinks";
import FeaturedEvent from "../components/home/FeaturedEvent";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <FeaturedEvent/>
      <QuickLinks/>
    </main>
  );
}


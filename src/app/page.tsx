import Hero from "../components/home/Hero";
import FeaturedEvent from "../components/home/FeaturedEvent";
import QuickLinks from "../components/home/QuickLinks";
import CommunityProof from "../components/home/CommunityProof";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <Hero />
      <FeaturedEvent />
      <QuickLinks />
      <CommunityProof />
    </main>
  );
}

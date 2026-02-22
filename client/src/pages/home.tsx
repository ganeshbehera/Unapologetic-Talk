import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { EpisodesSection } from "@/components/episodes-section";
import { SubscribeSection } from "@/components/subscribe-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EpisodesSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
}

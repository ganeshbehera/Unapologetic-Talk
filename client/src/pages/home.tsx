import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { FeaturedEpisode } from "@/components/featured-episode";
import { EpisodesSection } from "@/components/episodes-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { SubscribeSection } from "@/components/subscribe-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { YouTubeModal } from "@/components/youtube-modal";
import type { Episode } from "@/lib/episodes-data";

export default function Home() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const { data: episodes = [], isLoading } = useQuery<Episode[]>({
    queryKey: ["/api/episodes"],
  });

  const latestEpisode = episodes.length > 0 ? episodes[0] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      {latestEpisode && (
        <FeaturedEpisode
          episode={latestEpisode}
          onPlay={setActiveVideoId}
        />
      )}
      <EpisodesSection
        episodes={episodes}
        isLoading={isLoading}
        onPlay={setActiveVideoId}
      />
      <NewsletterSection />
      <SubscribeSection />
      <ContactSection />
      <Footer />
      <YouTubeModal
        videoId={activeVideoId}
        onClose={() => setActiveVideoId(null)}
      />
    </div>
  );
}

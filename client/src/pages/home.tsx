import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/hero-section";
import { FeaturedEpisode } from "@/components/featured-episode";
import { NewsletterSection } from "@/components/newsletter-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic2, Flame, Heart, ArrowRight, Play } from "lucide-react";
import { Link } from "wouter";
import { useVideo } from "@/lib/video-context";
import type { Episode } from "@/lib/episodes-data";
import { motion } from "framer-motion";

const highlights = [
  { icon: Flame, title: "Bold Opinions", description: "No sugarcoating - just honest, thought-provoking perspectives." },
  { icon: Mic2, title: "Spicy Takes", description: "Hot topics everyone thinks about but no one's saying." },
  { icon: Heart, title: "Unedited Stories", description: "Real stories from real people. No scripts, no filters." },
];

export default function Home() {
  const { playVideo } = useVideo();

  const { data: episodes = [], isLoading } = useQuery<Episode[]>({
    queryKey: ["/api/episodes"],
  });

  const latestEpisode = episodes.length > 0 ? episodes[0] : null;
  const recentEpisodes = episodes.slice(1, 4);

  return (
    <Layout>
      <HeroSection />

      <section id="home-content" className="py-20 md:py-28 bg-background" data-testid="section-about-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gradient mb-3">
              About The Show
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6" data-testid="text-about-heading">
              What We're All About
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              This is <strong className="text-foreground">Real And Unapologetic</strong> - a talk show where we break down life's biggest questions with honesty, humor, and heart.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover-elevate transition-all duration-300" data-testid={`card-feature-${index}`}>
                  <CardContent className="p-6 md:p-8 text-center">
                    <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/about">
              <Button variant="outline" className="gap-2" data-testid="button-learn-more">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {latestEpisode && (
        <FeaturedEpisode episode={latestEpisode} onPlay={playVideo} />
      )}

      {recentEpisodes.length > 0 && (
        <section className="py-20 md:py-28 bg-card/30" data-testid="section-recent-episodes">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gradient mb-3">
                Recent Episodes
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Catch Up
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentEpisodes.map((episode, index) => (
                <motion.div
                  key={episode.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className="group h-full hover-elevate transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      if (episode.youtubeId) playVideo(episode.youtubeId);
                      else window.open(episode.youtubeUrl, "_blank");
                    }}
                    data-testid={`card-episode-${episode.id}`}
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-video bg-muted/50 flex items-center justify-center border-b border-border/50">
                        {episode.thumbnail ? (
                          <>
                            <img src={episode.thumbnail} alt={episode.title} className="w-full h-full object-cover" loading="lazy" />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                                <Play className="w-6 h-6 text-white ml-0.5" />
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                              <Play className="w-6 h-6 text-primary ml-0.5" />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-5 md:p-6">
                        <h3 className="text-base font-semibold text-card-foreground mb-2 leading-snug line-clamp-2" data-testid={`text-ep-title-${episode.id}`}>
                          {episode.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2" data-testid={`text-ep-description-${episode.id}`}>
                          {episode.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <Link href="/episodes">
                <Button variant="outline" size="lg" className="gap-2" data-testid="button-view-all-episodes">
                  View All Episodes
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      <NewsletterSection />
    </Layout>
  );
}

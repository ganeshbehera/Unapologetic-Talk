import { ExternalLink, Play, Calendar, Hash } from "lucide-react";
import { SiYoutube } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { episodes, YOUTUBE_CHANNEL_URL, type Episode } from "@/lib/episodes-data";
import { motion } from "framer-motion";

function EpisodeCard({ episode, index }: { episode: Episode; index: number }) {
  const openEpisode = () => window.open(episode.youtubeUrl, "_blank");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Card
        className="group h-full hover-elevate transition-all duration-300 cursor-pointer"
        onClick={openEpisode}
        data-testid={`card-episode-${episode.id}`}
      >
        <CardContent className="p-0">
          <div className="relative aspect-video bg-muted/50 flex items-center justify-center border-b border-border/50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
            <div className="relative flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Play className="w-7 h-7 text-primary ml-1" />
              </div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Episode {episode.episodeNumber}
              </span>
            </div>
          </div>

          <div className="p-5 md:p-6">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Hash className="w-3 h-3" />
                <span data-testid={`text-ep-number-${episode.id}`}>EP {episode.episodeNumber}</span>
              </div>
              <span className="text-muted-foreground/30">|</span>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span data-testid={`text-ep-date-${episode.id}`}>{episode.date}</span>
              </div>
            </div>

            <h3
              className="text-lg font-semibold text-card-foreground mb-3 leading-snug line-clamp-2"
              data-testid={`text-ep-title-${episode.id}`}
            >
              {episode.title}
            </h3>
            <p
              className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3"
              data-testid={`text-ep-description-${episode.id}`}
            >
              {episode.description}
            </p>

            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {episode.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <a
                href={episode.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-shrink-0"
              >
                <Button
                  size="sm"
                  variant="ghost"
                  className="gap-1.5 text-xs"
                  data-testid={`button-watch-ep-${episode.id}`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Watch
                </Button>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function EpisodesSection() {
  return (
    <section
      id="episodes"
      className="py-24 md:py-32 bg-card/30"
      data-testid="section-episodes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gradient mb-3">
            Latest Episodes
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
            data-testid="text-episodes-heading"
          >
            Tune In &amp; Turn Up
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Catch up on our latest conversations. Every episode is a deep dive into the topics that matter most.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((episode, index) => (
            <EpisodeCard key={episode.id} episode={episode} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="gap-2"
            onClick={() => window.open(YOUTUBE_CHANNEL_URL, "_blank")}
            data-testid="button-view-all-episodes"
          >
            <SiYoutube className="w-5 h-5" />
            View All Episodes on YouTube
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

import { Play, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Episode } from "@/lib/episodes-data";
import { motion } from "framer-motion";

interface FeaturedEpisodeProps {
  episode: Episode;
  onPlay: (videoId: string) => void;
}

export function FeaturedEpisode({ episode, onPlay }: FeaturedEpisodeProps) {
  const formattedDate = episode.publishedAt
    ? new Date(episode.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-featured">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gradient mb-3">
            Latest Episode
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
            data-testid="text-featured-heading"
          >
            Now Playing
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center"
        >
          <div
            className="relative aspect-video rounded-md bg-muted cursor-pointer group"
            onClick={() => episode.youtubeId && onPlay(episode.youtubeId)}
            data-testid="featured-thumbnail"
          >
            {episode.thumbnail ? (
              <img
                src={episode.thumbnail}
                alt={episode.title}
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <div className="w-full h-full rounded-md bg-gradient-to-br from-primary/20 via-primary/5 to-transparent flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Play className="w-9 h-9 text-primary ml-1" />
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center">
                <Play className="w-9 h-9 text-white ml-1" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant="default" className="text-xs">
                Latest
              </Badge>
              {formattedDate && (
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  <span data-testid="text-featured-date">{formattedDate}</span>
                </div>
              )}
            </div>

            <h3
              className="text-2xl md:text-3xl font-bold text-foreground leading-tight"
              data-testid="text-featured-title"
            >
              {episode.title}
            </h3>

            <p
              className="text-muted-foreground leading-relaxed line-clamp-4"
              data-testid="text-featured-description"
            >
              {episode.description}
            </p>

            <div className="flex items-center gap-3 mt-2 flex-wrap">
              {episode.youtubeId ? (
                <Button
                  size="lg"
                  className="gap-2"
                  onClick={() => onPlay(episode.youtubeId)}
                  data-testid="button-featured-play"
                >
                  <Play className="w-4 h-4" />
                  Watch Episode
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="gap-2"
                  onClick={() => window.open(episode.youtubeUrl, "_blank")}
                  data-testid="button-featured-play"
                >
                  <Play className="w-4 h-4" />
                  Watch Episode
                </Button>
              )}
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={() => window.open(episode.youtubeUrl, "_blank")}
                data-testid="button-featured-youtube"
              >
                <ExternalLink className="w-4 h-4" />
                Open on YouTube
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

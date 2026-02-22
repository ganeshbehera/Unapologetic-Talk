import { useState } from "react";
import { ExternalLink, Play, Calendar, Search, ChevronDown } from "lucide-react";
import { SiYoutube } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { YOUTUBE_CHANNEL_URL, type Episode } from "@/lib/episodes-data";
import { motion } from "framer-motion";

const EPISODES_PER_PAGE = 6;

function EpisodeCard({
  episode,
  index,
  onPlay,
}: {
  episode: Episode;
  index: number;
  onPlay: (videoId: string) => void;
}) {
  const formattedDate = episode.publishedAt
    ? new Date(episode.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  const handlePlay = () => {
    if (episode.youtubeId) {
      onPlay(episode.youtubeId);
    } else {
      window.open(episode.youtubeUrl, "_blank");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Card
        className="group h-full hover-elevate transition-all duration-300 cursor-pointer"
        onClick={handlePlay}
        data-testid={`card-episode-${episode.id}`}
      >
        <CardContent className="p-0">
          <div className="relative aspect-video bg-muted/50 flex items-center justify-center border-b border-border/50">
            {episode.thumbnail ? (
              <>
                <img
                  src={episode.thumbnail}
                  alt={episode.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-0.5" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
                <div className="relative flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary ml-0.5" />
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="p-5 md:p-6">
            {formattedDate && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                <Calendar className="w-3 h-3" />
                <span data-testid={`text-ep-date-${episode.id}`}>{formattedDate}</span>
              </div>
            )}

            <h3
              className="text-base font-semibold text-card-foreground mb-2 leading-snug line-clamp-2"
              data-testid={`text-ep-title-${episode.id}`}
            >
              {episode.title}
            </h3>
            <p
              className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2"
              data-testid={`text-ep-description-${episode.id}`}
            >
              {episode.description}
            </p>

            <div className="flex items-center justify-between gap-2">
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
                  YouTube
                </Button>
              </a>
              <Button
                size="sm"
                variant="default"
                className="gap-1.5 text-xs"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlay();
                }}
                data-testid={`button-play-ep-${episode.id}`}
              >
                <Play className="w-3.5 h-3.5" />
                Play
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface EpisodesSectionProps {
  episodes: Episode[];
  isLoading: boolean;
  onPlay: (videoId: string) => void;
}

export function EpisodesSection({ episodes = [], isLoading, onPlay }: EpisodesSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(EPISODES_PER_PAGE);

  const safeEpisodes = episodes || [];
  const filteredEpisodes = safeEpisodes.filter((ep) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      ep.title.toLowerCase().includes(q) ||
      ep.description.toLowerCase().includes(q)
    );
  });

  const visibleEpisodes = filteredEpisodes.slice(0, visibleCount);
  const hasMore = visibleCount < filteredEpisodes.length;

  return (
    <section
      id="episodes"
      className="py-12 md:py-16 bg-card/30"
      data-testid="section-episodes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search episodes..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(EPISODES_PER_PAGE);
              }}
              className="pl-10"
              data-testid="input-search-episodes"
            />
          </div>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="h-full animate-pulse">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted" />
                  <div className="p-6 space-y-3">
                    <div className="h-3 bg-muted rounded-md w-1/3" />
                    <div className="h-5 bg-muted rounded-md w-3/4" />
                    <div className="h-3 bg-muted rounded-md w-full" />
                    <div className="h-3 bg-muted rounded-md w-2/3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredEpisodes.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">
              {searchQuery
                ? `No episodes found matching "${searchQuery}"`
                : "No episodes available yet. Check back soon!"}
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleEpisodes.map((episode, index) => (
                <EpisodeCard
                  key={episode.id}
                  episode={episode}
                  index={index}
                  onPlay={onPlay}
                />
              ))}
            </div>

            {hasMore && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-10"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2"
                  onClick={() => setVisibleCount((prev) => prev + EPISODES_PER_PAGE)}
                  data-testid="button-load-more"
                >
                  <ChevronDown className="w-4 h-4" />
                  Load More Episodes ({filteredEpisodes.length - visibleCount} remaining)
                </Button>
              </motion.div>
            )}
          </>
        )}

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
            View All on YouTube
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

import { ArrowDown, Play } from "lucide-react";
import { SiYoutube } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { YOUTUBE_CHANNEL_URL } from "@/lib/episodes-data";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToEpisodes = () => {
    const el = document.querySelector("#episodes");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Podcast studio background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm text-white/80 font-medium tracking-wide uppercase">
              New Episodes Every Friday
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95] mb-6"
          data-testid="text-hero-heading"
        >
          REAL
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-orange-400">
            &amp; UNAPOLOGETIC
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          data-testid="text-hero-description"
        >
          Where raw meets real and fearless meets fabulous. Bold opinions, spicy takes, and conversations that cut through the noise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="gap-2 text-base px-8"
            onClick={() => window.open(YOUTUBE_CHANNEL_URL, "_blank")}
            data-testid="button-hero-watch"
          >
            <SiYoutube className="w-5 h-5" />
            Watch on YouTube
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 text-base px-8 bg-white/5 backdrop-blur-sm border-white/20 text-white"
            onClick={scrollToEpisodes}
            data-testid="button-hero-episodes"
          >
            <Play className="w-4 h-4" />
            Browse Episodes
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToEpisodes}
          className="text-white/40 animate-bounce"
          data-testid="button-scroll-down"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </motion.div>
    </section>
  );
}

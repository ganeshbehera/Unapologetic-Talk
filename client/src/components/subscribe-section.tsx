import { SiYoutube, SiInstagram, SiTiktok, SiSpotify } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { YOUTUBE_CHANNEL_URL } from "@/lib/episodes-data";
import { motion } from "framer-motion";

const socials = [
  {
    name: "YouTube",
    icon: SiYoutube,
    url: YOUTUBE_CHANNEL_URL,
    color: "bg-red-600 dark:bg-red-600",
    description: "Subscribe & watch full episodes",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    url: "https://www.instagram.com/realandunapologetic/",
    color: "bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400",
    description: "Behind the scenes & clips",
  },
  {
    name: "TikTok",
    icon: SiTiktok,
    url: "#",
    color: "bg-foreground dark:bg-foreground",
    description: "Short-form spicy takes",
  },
  {
    name: "Spotify",
    icon: SiSpotify,
    url: "#",
    color: "bg-green-600 dark:bg-green-600",
    description: "Listen on the go",
  },
];

export function SubscribeSection() {
  return (
    <section
      id="subscribe"
      className="relative py-24 md:py-32 bg-background"
      data-testid="section-subscribe"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-primary/3" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gradient mb-3">
            Join The Community
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Never Miss an Episode
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Follow us everywhere and join a community of people who aren't afraid to be themselves. Your vibe attracts your tribe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {socials.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                onClick={() => {
                  if (social.url !== "#") window.open(social.url, "_blank");
                }}
                className="w-full flex items-center gap-4 p-4 rounded-md bg-card border border-card-border hover-elevate transition-all duration-200"
                data-testid={`link-social-${social.name.toLowerCase()}`}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-md ${social.color} flex items-center justify-center`}>
                  <social.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-card-foreground">{social.name}</div>
                  <div className="text-sm text-muted-foreground">{social.description}</div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="gap-2 text-base px-10"
            onClick={() => window.open(YOUTUBE_CHANNEL_URL, "_blank")}
            data-testid="button-subscribe-youtube"
          >
            <SiYoutube className="w-5 h-5" />
            Subscribe on YouTube
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

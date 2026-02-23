import { SiYoutube, SiInstagram, SiSpotify } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { YOUTUBE_CHANNEL_URL } from "@/lib/episodes-data";
import { motion } from "framer-motion";

const socials = [
  {
    name: "YouTube",
    icon: SiYoutube,
    url: YOUTUBE_CHANNEL_URL,
    color: "bg-red-600",
    description: "Subscribe & watch full episodes",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    url: "https://www.instagram.com/_sherlynchopra_/",
    color: "bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400",
    description: "Behind the scenes & updates",
  },
  {
    name: "Spotify",
    icon: SiSpotify,
    url: "#",
    color: "bg-green-600",
    description: "Listen on the go",
  },
];

export function SubscribeSection() {
  return (
    <section
      id="subscribe"
      className="relative py-24 md:py-32 bg-card/20"
      data-testid="section-subscribe"
    >
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Join The Community
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Never Miss an Episode
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-14">
            Follow Sherlyn everywhere and join a community of fearless individuals who aren't afraid to be themselves. Your vibe attracts your tribe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-14">
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
                className="w-full flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover-elevate transition-all duration-200 group"
                data-testid={`link-social-${social.name.toLowerCase()}`}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${social.color} flex items-center justify-center`}>
                  <social.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-card-foreground text-sm">{social.name}</div>
                  <div className="text-xs text-muted-foreground">{social.description}</div>
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
            className="gap-2 text-base px-10 shadow-lg shadow-primary/20"
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

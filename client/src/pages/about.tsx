import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic2, Flame, Heart, Zap, Users, Star, Target, Sparkles, Crown, Film, Award } from "lucide-react";
import { SiYoutube } from "react-icons/si";
import { YOUTUBE_CHANNEL_URL } from "@/lib/episodes-data";
import { motion } from "framer-motion";

const features = [
  {
    icon: Flame,
    title: "Bold Opinions",
    description: "No sugarcoating, no people-pleasing. Just honest, thought-provoking perspectives on life, love, and Bollywood.",
  },
  {
    icon: Mic2,
    title: "Spicy Takes",
    description: "The hot topics everyone whispers about but nobody dares to say out loud. Sherlyn says it all.",
  },
  {
    icon: Heart,
    title: "Unedited Stories",
    description: "Real stories from real experiences. No scripts, no filters - just genuine vulnerability and fearless honesty.",
  },
  {
    icon: Zap,
    title: "Drama-Free Honesty",
    description: "Authenticity without the toxicity. A space for genuine connection and empowering conversations.",
  },
];

const values = [
  {
    icon: Target,
    title: "Authenticity First",
    description: "The world needs more real voices. Every conversation is rooted in truth and fearless curiosity.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Our listeners are family. We build together, grow together, and create a safe space for everyone to be themselves.",
  },
  {
    icon: Star,
    title: "Excellence in Conversation",
    description: "We don't just talk - we explore, challenge, and inspire. Every episode leaves you thinking differently.",
  },
  {
    icon: Sparkles,
    title: "Unapologetic Growth",
    description: "Growth isn't always comfortable. We embrace the discomfort and come out stronger on the other side.",
  },
];

const milestones = [
  { icon: Film, title: "Bollywood Actress", description: "Featured in numerous Bollywood films including Red Swastik, Dil Bole Hadippa!, and more" },
  { icon: Crown, title: "Miss Andhra", description: "Winner of the prestigious Miss Andhra beauty pageant during her early career" },
  { icon: Award, title: "Trailblazer", description: "A fearless voice who has always challenged norms and paved her own path in the entertainment industry" },
];

export default function About() {
  return (
    <Layout>
      <PageHeader
        label="Meet The Host"
        title="Sherlyn Chopra"
        description="Actress. Producer. Fearless Voice. The woman behind Real And Unapologetic."
      />

      <section className="py-20 md:py-28 bg-background" data-testid="section-about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Sherlyn Chopra is a Bollywood actress, model, singer, and producer born in Hyderabad, India. From winning the Miss Andhra beauty pageant to starring in films, she has always lived life on her own terms.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Now she brings that same fearless energy to <strong className="text-foreground">Real And Unapologetic</strong> - a talk show where authenticity reigns, drama-free honesty flows, and unapologetic confidence is celebrated. If you love raw conversations that cut through the noise, you're home.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-primary/15 bg-gradient-to-b from-primary/5 to-transparent" data-testid={`card-milestone-${index}`}>
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <milestone.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                The Experience
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                What You Can Expect
              </h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full group hover-elevate transition-all duration-300 border-border/50" data-testid={`card-feature-${index}`}>
                    <CardContent className="p-7 md:p-8">
                      <div className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="relative rounded-2xl overflow-hidden" data-testid="card-mission">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
              <div className="relative border border-primary/15 rounded-2xl p-10 md:p-16 text-center">
                <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  The Mission
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Be Unapologetically You</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  To create a space where people can be themselves without judgment. We believe in the power of honest conversation to inspire, heal, and connect. Every episode is a reminder that your truth is your superpower and being unapologetically yourself is the most courageous thing you can do.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                What Drives Us
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Our Values
              </h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full group hover-elevate transition-all duration-300 border-border/50" data-testid={`card-value-${index}`}>
                    <CardContent className="p-7 md:p-8">
                      <div className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                          <value.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-card-foreground mb-2">{value.title}</h3>
                          <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Dive In?</h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Join the community of people who aren't afraid to be themselves. Subscribe and never miss an episode.
            </p>
            <Button
              size="lg"
              className="gap-2 text-base px-8 shadow-lg shadow-primary/20"
              onClick={() => window.open(YOUTUBE_CHANNEL_URL, "_blank")}
              data-testid="button-subscribe-youtube"
            >
              <SiYoutube className="w-5 h-5" />
              Subscribe on YouTube
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

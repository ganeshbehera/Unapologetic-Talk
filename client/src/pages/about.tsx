import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic2, Flame, Heart, Zap, Users, Star, Target, Sparkles } from "lucide-react";
import { SiYoutube } from "react-icons/si";
import { YOUTUBE_CHANNEL_URL } from "@/lib/episodes-data";
import { motion } from "framer-motion";

const features = [
  {
    icon: Flame,
    title: "Bold Opinions",
    description: "No sugarcoating, no people-pleasing. Just honest, thought-provoking perspectives on the topics that matter.",
  },
  {
    icon: Mic2,
    title: "Spicy Takes",
    description: "We tackle the hot topics everyone's thinking about but no one's saying. Expect the unexpected.",
  },
  {
    icon: Heart,
    title: "Unedited Stories",
    description: "Real stories from real people. No scripts, no filters - just genuine experiences and raw vulnerability.",
  },
  {
    icon: Zap,
    title: "Drama-Free Honesty",
    description: "Authenticity without the drama. We keep it real without the toxicity, creating a space for genuine connection.",
  },
];

const values = [
  {
    icon: Target,
    title: "Authenticity First",
    description: "We believe the world needs more real voices. Every conversation we have is rooted in truth and genuine curiosity.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Our listeners are family. We build together, grow together, and create a safe space for everyone to be their true selves.",
  },
  {
    icon: Star,
    title: "Excellence in Conversation",
    description: "We don't just talk - we explore, challenge, and inspire. Every episode is crafted to leave you thinking differently.",
  },
  {
    icon: Sparkles,
    title: "Unapologetic Growth",
    description: "Growth isn't always comfortable. We embrace the discomfort, lean into the tough conversations, and come out stronger.",
  },
];

export default function About() {
  return (
    <Layout>
      <PageHeader
        label="About The Show"
        title="What We're All About"
        description="This is Real And Unapologetic - a talk show where we break down life's biggest questions with honesty, humor, and heart."
      />

      <section className="py-16 md:py-24 bg-background" data-testid="section-about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you love authenticity, drama-free honesty, and unapologetic confidence... you'll feel right at home.
              We're not here to tell you what to think - we're here to start the conversations that matter.
            </p>
          </motion.div>

          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10"
            >
              What You Can Expect
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover-elevate transition-all duration-300" data-testid={`card-feature-${index}`}>
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                          <feature.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
            className="mb-20"
          >
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" data-testid="card-mission">
              <CardContent className="p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  To create a space where people can be themselves without judgment. We believe in the power of honest conversation to inspire, heal, and connect. Every episode is a reminder that your truth is your superpower and being unapologetically yourself is the most courageous thing you can do.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10"
            >
              Our Values
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover-elevate transition-all duration-300" data-testid={`card-value-${index}`}>
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                          <value.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-card-foreground mb-2">{value.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
              Join thousands of listeners who aren't afraid to be themselves. Subscribe and never miss an episode.
            </p>
            <Button
              size="lg"
              className="gap-2 text-base px-8"
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

import { Mic2, Flame, Heart, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gradient mb-3">
            About The Show
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6" data-testid="text-about-heading">
            What We're All About
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This is <strong className="text-foreground">Real And Unapologetic</strong> - a talk show where we break down life's biggest questions with honesty, humor, and heart. If you love authenticity, drama-free honesty, and unapologetic confidence... you'll feel right at home.
          </p>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-20"
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
      </div>
    </section>
  );
}

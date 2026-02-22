import { useState } from "react";
import { Send, CheckCircle, Mail, MessageSquare, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const contactReasons = [
  {
    icon: Users,
    title: "Collaboration",
    description: "Want to be a guest on the show or collaborate? We'd love to hear from you.",
  },
  {
    icon: MessageSquare,
    title: "Topic Suggestions",
    description: "Got a spicy topic you want us to cover? Drop us a message.",
  },
  {
    icon: Mail,
    title: "General Inquiries",
    description: "Business inquiries, press, sponsorship, or just want to say hi.",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gradient mb-3">
            Get In Touch
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
            data-testid="text-contact-heading"
          >
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have something to say? We're all ears. Whether it's a collab, a topic idea, or just some love - reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-6">
            {contactReasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card data-testid="card-contact-form">
              <CardContent className="p-6 md:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                    <CheckCircle className="w-12 h-12 text-primary" />
                    <h3 className="text-xl font-semibold text-card-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground" data-testid="text-contact-success">
                      Thanks for reaching out. We'll get back to you soon!
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                      className="mt-2"
                      data-testid="button-send-another"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-contact">
                    <div>
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        data-testid="input-contact-name"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        data-testid="input-contact-email"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="resize-none"
                        data-testid="input-contact-message"
                      />
                    </div>
                    <Button type="submit" className="w-full gap-2" data-testid="button-contact-submit">
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

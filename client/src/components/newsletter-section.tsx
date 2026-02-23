import { useState } from "react";
import { Send, CheckCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden" data-testid="section-newsletter">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4" data-testid="text-newsletter-heading">
            Get Notified About New Episodes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Join Sherlyn's community and be the first to know when new episodes drop. No spam, just real updates.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-primary py-4"
            >
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-medium" data-testid="text-newsletter-success">
                You're in! We'll keep you posted.
              </span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
              data-testid="form-newsletter"
            >
              <Input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-xl bg-card border-border/50"
                data-testid="input-newsletter-email"
              />
              <Button type="submit" size="lg" className="gap-2 w-full sm:w-auto shadow-lg shadow-primary/20" data-testid="button-newsletter-submit">
                <Send className="w-4 h-4" />
                Subscribe
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

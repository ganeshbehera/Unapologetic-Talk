import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <Layout>
      <div className="pt-28 md:pt-36 pb-24 md:pb-32">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-8xl md:text-9xl font-black text-gradient">404</span>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mt-4 mb-4">
              Page Not Found
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Looks like this page went off-script. Let's get you back on track.
            </p>
            <Link href="/">
              <Button size="lg" className="gap-2" data-testid="button-go-home">
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

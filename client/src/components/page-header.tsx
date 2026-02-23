import { motion } from "framer-motion";

interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div className="relative pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08),transparent_60%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            {label}
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
            data-testid="text-page-heading"
          >
            {title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SiYoutube } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { YOUTUBE_CHANNEL_URL } from "@/lib/episodes-data";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Episodes", href: "#episodes" },
  { label: "Subscribe", href: "#subscribe" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-16 md:h-20">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="flex items-center gap-2 flex-shrink-0"
              data-testid="link-logo"
            >
              <span className="text-lg md:text-xl font-bold tracking-tight">
                <span className="text-gradient">REAL</span>
                <span className={`${scrolled ? "text-foreground" : "text-white"} transition-colors`}> & </span>
                <span className="text-gradient">UNAPOLOGETIC</span>
              </span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md hover-elevate ${
                    scrolled ? "text-muted-foreground" : "text-white/70"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="default"
                size="sm"
                className="hidden sm:flex gap-2"
                onClick={() => window.open(YOUTUBE_CHANNEL_URL, "_blank")}
                data-testid="button-watch-now"
              >
                <SiYoutube className="w-4 h-4" />
                Watch Now
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="md:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                data-testid="button-mobile-menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-20 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-semibold text-foreground"
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="default"
                size="lg"
                className="mt-4 gap-2"
                onClick={() => {
                  setMobileOpen(false);
                  window.open(YOUTUBE_CHANNEL_URL, "_blank");
                }}
                data-testid="button-mobile-watch"
              >
                <SiYoutube className="w-5 h-5" />
                Watch on YouTube
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

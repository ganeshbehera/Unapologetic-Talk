import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SiYoutube } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { YOUTUBE_CHANNEL_URL } from "@/lib/episodes-data";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Episodes", href: "/episodes" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";
  const showTransparent = isHome && !scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showTransparent
            ? "bg-transparent"
            : "bg-background/70 backdrop-blur-2xl border-b border-border/40 shadow-sm"
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-16 md:h-20">
            <Link
              href="/"
              className="flex items-center gap-2 flex-shrink-0 group"
              data-testid="link-logo"
            >
              <img
                src="/images/channel-logo.png"
                alt="Real And Unapologetic"
                className={`h-7 md:h-9 w-auto transition-all duration-300 ${showTransparent ? "brightness-0 invert" : "dark:brightness-0 dark:invert"}`}
                data-testid="img-navbar-logo"
              />
            </Link>

            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                      isActive
                        ? "text-primary"
                        : showTransparent
                          ? "text-white/70 hover:text-white"
                          : "text-muted-foreground hover:text-foreground"
                    }`}
                    data-testid={`link-nav-${link.label.toLowerCase()}`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-primary/10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
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
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl pt-20 md:hidden"
          >
            <div className="flex flex-col items-center gap-2 p-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-2xl font-semibold py-3 px-6 rounded-xl transition-colors ${
                      location === link.href ? "text-primary bg-primary/5" : "text-foreground"
                    }`}
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Button
                  variant="default"
                  size="lg"
                  className="mt-6 gap-2"
                  onClick={() => {
                    setMobileOpen(false);
                    window.open(YOUTUBE_CHANNEL_URL, "_blank");
                  }}
                  data-testid="button-mobile-watch"
                >
                  <SiYoutube className="w-5 h-5" />
                  Watch on YouTube
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { SiYoutube, SiInstagram } from "react-icons/si";
import { YOUTUBE_CHANNEL_URL } from "@/lib/episodes-data";
import { Link } from "wouter";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Episodes", href: "/episodes" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-card/30" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5">
            <img
              src="/images/channel-logo.png"
              alt="Real And Unapologetic"
              className="h-9 w-auto mb-4 dark:brightness-0 dark:invert"
              data-testid="img-footer-logo"
            />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Raw meets real. Fearless meets fabulous. Bold opinions, spicy takes, and conversations that cut through the noise.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-4">Pages</h4>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                  data-testid={`link-footer-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-4">Connect</h4>
            <div className="flex items-center gap-2.5">
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted/60 flex items-center justify-center hover-elevate transition-all"
                data-testid="link-footer-youtube"
              >
                <SiYoutube className="w-4 h-4 text-muted-foreground" />
              </a>
              <a
                href="https://www.instagram.com/realandunapologetic/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted/60 flex items-center justify-center hover-elevate transition-all"
                data-testid="link-footer-instagram"
              >
                <SiInstagram className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground/60 mt-6">
              realunapologetic.com
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            &copy; {currentYear} Real And Unapologetic. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground/40">Made with</span>
            <span className="text-primary text-xs">&#9829;</span>
            <span className="text-xs text-muted-foreground/40">for the unapologetic</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
    <footer className="border-t border-border/50 bg-card/50" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <div className="text-lg font-bold tracking-tight mb-2">
              <span className="text-gradient">REAL</span>
              <span className="text-foreground"> & </span>
              <span className="text-gradient">UNAPOLOGETIC</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Raw meets real. Fearless meets fabulous. Bold opinions, spicy takes, and conversations that cut through the noise.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`link-footer-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-muted flex items-center justify-center hover-elevate transition-all"
                data-testid="link-footer-youtube"
              >
                <SiYoutube className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href="https://www.instagram.com/realandunapologetic/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-muted flex items-center justify-center hover-elevate transition-all"
                data-testid="link-footer-instagram"
              >
                <SiInstagram className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Real And Unapologetic. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-1">
            realunapologetic.com
          </p>
        </div>
      </div>
    </footer>
  );
}

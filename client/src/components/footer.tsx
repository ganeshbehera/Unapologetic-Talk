import { SiYoutube, SiInstagram } from "react-icons/si";
import { YOUTUBE_CHANNEL_URL } from "@/lib/episodes-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/50" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-lg font-bold tracking-tight mb-1">
              <span className="text-gradient">REAL</span>
              <span className="text-foreground"> & </span>
              <span className="text-gradient">UNAPOLOGETIC</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Raw meets real. Fearless meets fabulous.
            </p>
          </div>

          <div className="flex items-center gap-4">
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

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
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

# Real And Unapologetic - Podcast Website

## Overview
A multi-page website for the "Real And Unapologetic" YouTube podcast/talk show by Sherlyn Chopra (Bollywood actress). The site features bold branding, dark/light theme support, multiple dedicated pages, modern animations, and glamorous design fitting a celebrity podcast.

## Recent Changes
- **Feb 2026**: Major content overhaul - integrated Sherlyn Chopra's biography, milestones (Bollywood career, Miss Andhra, Playboy cover), updated all copy to reference Sherlyn as host, generated glamorous podcast studio hero background, updated Instagram link to @_sherlynchopra_, refined color palette to rose/pink glamorous feel
- **Feb 2026**: Comprehensive design upgrade - glass morphism navbar, refined page headers with decorative blur elements, polished cards with rounded-2xl icon containers, consistent label pill badges, improved visual hierarchy with soft gradients, smooth hover transitions on episode thumbnails, newsletter section with mail icon, refined contact form
- **Feb 2026**: Integrated transparent channel logo across hero, navbar, footer with CSS filter dark/light mode support
- **Feb 2026**: Converted from single-page to multi-page website with dedicated Home, About, Episodes, and Contact pages
- **Feb 2026**: Initial build - Hero section, About section, Episodes grid, Subscribe/Social section, Footer, dark/light theme toggle, responsive navigation

## Project Architecture
- **Frontend**: React + Vite + Tailwind CSS + shadcn/ui + framer-motion
- **Backend**: Express.js with episodes API endpoint
- **Routing**: wouter with multiple pages (/, /about, /episodes, /contact)
- **Theme**: Dark mode by default, toggleable via ThemeProvider
- **Video**: VideoProvider context for YouTube modal playback across pages

### Pages
- `/` - Home: Hero, About preview, Featured Episode, Recent Episodes, Newsletter
- `/about` - About: Full about content, features, mission, values, YouTube CTA
- `/episodes` - Episodes: Search/filter, episode cards grid, load more, YouTube modal
- `/contact` - Contact: Contact form, Newsletter signup, Social/Subscribe section

### Key Files
- `client/src/App.tsx` - Router with all page routes + ScrollToTop
- `client/src/components/layout.tsx` - Shared layout (Navbar + Footer)
- `client/src/components/navbar.tsx` - Fixed navigation with wouter Link routing
- `client/src/components/page-header.tsx` - Reusable page header with gradient background
- `client/src/components/hero-section.tsx` - Full-screen hero (Home page only)
- `client/src/components/featured-episode.tsx` - Featured latest episode card
- `client/src/components/episodes-section.tsx` - Episode cards grid with search
- `client/src/components/about-section.tsx` - (legacy, replaced by About page)
- `client/src/components/newsletter-section.tsx` - Newsletter signup
- `client/src/components/subscribe-section.tsx` - Social links and CTA
- `client/src/components/contact-section.tsx` - Contact/collaboration form
- `client/src/components/footer.tsx` - Footer with nav links and socials
- `client/src/components/youtube-modal.tsx` - YouTube embed modal
- `client/src/lib/video-context.tsx` - VideoProvider for cross-page video playback
- `client/src/lib/episodes-data.ts` - Episode type and channel URL
- `client/src/lib/theme-provider.tsx` - Dark/light theme context
- `server/routes.ts` - API endpoints for episodes and channel info

### Design Tokens
- Primary color: Rose/Pink (340 82% 52% light, 340 75% 55% dark)
- Font: Poppins (sans)
- Dark mode default with deep blue-gray backgrounds (240 hue)
- Glamorous feel with primary shadows and gradient accents

## User Preferences
- Bold, glamorous branding matching Sherlyn Chopra's celebrity personality
- Host: Sherlyn Chopra (Bollywood actress, producer, model)
- Instagram: @_sherlynchopra_ (14M+ followers)
- Contact: contact@sherlynchopra.com
- YouTube channel: https://www.youtube.com/@RealAndUnapologetic
- Domain: realunapologetic.com

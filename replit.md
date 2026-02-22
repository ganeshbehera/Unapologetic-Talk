# Real And Unapologetic - Podcast Website

## Overview
A stunning single-page website for the "Real And Unapologetic" YouTube podcast channel (https://www.youtube.com/@RealAndUnapologetic). The site features bold branding, dark/light theme support, and a modern scrolling layout.

## Recent Changes
- **Feb 2026**: Initial build - Hero section, About section, Episodes grid, Subscribe/Social section, Footer, dark/light theme toggle, responsive navigation

## Project Architecture
- **Frontend**: React + Vite + Tailwind CSS + shadcn/ui + framer-motion
- **Backend**: Express.js with episodes API endpoint
- **Routing**: wouter (single page with hash-based section scrolling)
- **Theme**: Dark mode by default, toggleable via ThemeProvider

### Key Files
- `client/src/pages/home.tsx` - Main page composing all sections
- `client/src/components/navbar.tsx` - Fixed navigation with mobile menu
- `client/src/components/hero-section.tsx` - Full-screen hero with background image
- `client/src/components/about-section.tsx` - Show description and features
- `client/src/components/episodes-section.tsx` - Episode cards grid
- `client/src/components/subscribe-section.tsx` - Social links and CTA
- `client/src/components/footer.tsx` - Footer with links
- `client/src/lib/episodes-data.ts` - Episode data (editable)
- `client/src/lib/theme-provider.tsx` - Dark/light theme context
- `server/routes.ts` - API endpoint for episodes

### Design Tokens
- Primary color: Rose/Pink (350 80% 50%)
- Font: Poppins (sans), Playfair Display (serif)
- Dark mode default with warm card backgrounds

## User Preferences
- Bold, edgy branding that matches the podcast personality
- YouTube channel: https://www.youtube.com/@RealAndUnapologetic
- Domain: realunapologetic.com

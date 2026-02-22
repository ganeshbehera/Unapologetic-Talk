export interface Episode {
  id: number;
  title: string;
  description: string;
  youtubeUrl: string;
  episodeNumber: number;
  date: string;
  tags: string[];
}

export const episodes: Episode[] = [
  {
    id: 1,
    title: "Welcome to Real And Unapologetic",
    description: "The very first episode where we introduce ourselves and set the tone for what this show is all about. Raw conversations, unfiltered opinions, and a space where authenticity reigns supreme. No scripts, no filters, just real talk.",
    youtubeUrl: "https://www.youtube.com/@RealAndUnapologetic",
    episodeNumber: 1,
    date: "2024",
    tags: ["Introduction", "Premiere"],
  },
  {
    id: 2,
    title: "Setting Boundaries Without Apology",
    description: "We dive deep into why setting boundaries is the ultimate act of self-love. From toxic friendships to workplace dynamics, we break down how to say no without feeling guilty and why being unapologetic about your peace is non-negotiable.",
    youtubeUrl: "https://www.youtube.com/@RealAndUnapologetic",
    episodeNumber: 2,
    date: "2024",
    tags: ["Boundaries", "Self-Love"],
  },
  {
    id: 3,
    title: "The Truth About Modern Dating",
    description: "Spicy takes on the dating scene right now. We tackle ghosting culture, situationships, red flags vs. green flags, and why being real about what you want is the only way to find what you deserve.",
    youtubeUrl: "https://www.youtube.com/@RealAndUnapologetic",
    episodeNumber: 3,
    date: "2024",
    tags: ["Dating", "Relationships"],
  },
  {
    id: 4,
    title: "Confidence Is Not Arrogance",
    description: "Breaking down the difference between confidence and arrogance, and why society tries to make you feel bad for knowing your worth. We share personal stories and discuss how to build unshakeable self-confidence.",
    youtubeUrl: "https://www.youtube.com/@RealAndUnapologetic",
    episodeNumber: 4,
    date: "2024",
    tags: ["Confidence", "Mindset"],
  },
  {
    id: 5,
    title: "Cutting Through the Noise",
    description: "Social media, cancel culture, fake news - there's so much noise out there. We talk about how to stay grounded, think for yourself, and not get caught up in the outrage machine.",
    youtubeUrl: "https://www.youtube.com/@RealAndUnapologetic",
    episodeNumber: 5,
    date: "2024",
    tags: ["Social Media", "Culture"],
  },
  {
    id: 6,
    title: "Unapologetic Success Stories",
    description: "Celebrating people who took the unconventional route and won. We discuss why following your own path, even when people doubt you, is the most powerful thing you can do for yourself.",
    youtubeUrl: "https://www.youtube.com/@RealAndUnapologetic",
    episodeNumber: 6,
    date: "2025",
    tags: ["Success", "Motivation"],
  },
];

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@RealAndUnapologetic";

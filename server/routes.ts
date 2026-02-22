import type { Express } from "express";
import { createServer, type Server } from "http";

interface YouTubeEpisode {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  youtubeUrl: string;
  thumbnail: string;
  publishedAt: string;
}

const CHANNEL_ID = "RealAndUnapologetic";
const CHANNEL_URL = "https://www.youtube.com/@RealAndUnapologetic";

const fallbackEpisodes: YouTubeEpisode[] = [
  {
    id: "1",
    title: "Welcome to Real And Unapologetic",
    description: "The very first episode where we introduce ourselves and set the tone for what this show is all about. Raw conversations, unfiltered opinions, and a space where authenticity reigns supreme. No scripts, no filters, just real talk.",
    youtubeId: "",
    youtubeUrl: CHANNEL_URL,
    thumbnail: "",
    publishedAt: "2024-06-01T00:00:00Z",
  },
  {
    id: "2",
    title: "Setting Boundaries Without Apology",
    description: "We dive deep into why setting boundaries is the ultimate act of self-love. From toxic friendships to workplace dynamics, we break down how to say no without feeling guilty and why being unapologetic about your peace is non-negotiable.",
    youtubeId: "",
    youtubeUrl: CHANNEL_URL,
    thumbnail: "",
    publishedAt: "2024-07-01T00:00:00Z",
  },
  {
    id: "3",
    title: "The Truth About Modern Dating",
    description: "Spicy takes on the dating scene right now. We tackle ghosting culture, situationships, red flags vs green flags, and why being real about what you want is the only way to find what you deserve.",
    youtubeId: "",
    youtubeUrl: CHANNEL_URL,
    thumbnail: "",
    publishedAt: "2024-08-01T00:00:00Z",
  },
  {
    id: "4",
    title: "Confidence Is Not Arrogance",
    description: "Breaking down the difference between confidence and arrogance, and why society tries to make you feel bad for knowing your worth. We share personal stories and discuss how to build unshakeable self-confidence.",
    youtubeId: "",
    youtubeUrl: CHANNEL_URL,
    thumbnail: "",
    publishedAt: "2024-09-01T00:00:00Z",
  },
  {
    id: "5",
    title: "Cutting Through the Noise",
    description: "Social media, cancel culture, fake news - there is so much noise out there. We talk about how to stay grounded, think for yourself, and not get caught up in the outrage machine.",
    youtubeId: "",
    youtubeUrl: CHANNEL_URL,
    thumbnail: "",
    publishedAt: "2024-10-01T00:00:00Z",
  },
  {
    id: "6",
    title: "Unapologetic Success Stories",
    description: "Celebrating people who took the unconventional route and won. We discuss why following your own path, even when people doubt you, is the most powerful thing you can do for yourself.",
    youtubeId: "",
    youtubeUrl: CHANNEL_URL,
    thumbnail: "",
    publishedAt: "2025-01-15T00:00:00Z",
  },
];

let cachedEpisodes: YouTubeEpisode[] | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 1000 * 60 * 30;

async function fetchFromYouTubeAPI(apiKey: string): Promise<YouTubeEpisode[]> {
  const searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${CHANNEL_ID}&part=snippet&type=video&order=date&maxResults=50`;

  let channelId = CHANNEL_ID;

  const handleResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&forHandle=${CHANNEL_ID}&part=contentDetails,snippet`
  );
  if (handleResponse.ok) {
    const handleData = await handleResponse.json();
    if (handleData.items && handleData.items.length > 0) {
      channelId = handleData.items[0].id;
      const uploadsPlaylistId = handleData.items[0].contentDetails?.relatedPlaylists?.uploads;

      if (uploadsPlaylistId) {
        const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${uploadsPlaylistId}&part=snippet&maxResults=50`;
        const playlistResponse = await fetch(playlistUrl);
        if (playlistResponse.ok) {
          const playlistData = await playlistResponse.json();
          if (playlistData.items && playlistData.items.length > 0) {
            return playlistData.items.map((item: any) => ({
              id: item.snippet.resourceId.videoId,
              title: item.snippet.title,
              description: item.snippet.description,
              youtubeId: item.snippet.resourceId.videoId,
              youtubeUrl: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
              thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url || "",
              publishedAt: item.snippet.publishedAt,
            }));
          }
        }
      }
    }
  }

  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&type=video&order=date&maxResults=50`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`YouTube API error: ${response.status}`);
  }
  const data = await response.json();
  if (!data.items || data.items.length === 0) {
    throw new Error("No videos found");
  }
  return data.items.map((item: any) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    youtubeId: item.id.videoId,
    youtubeUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || "",
    publishedAt: item.snippet.publishedAt,
  }));
}

async function fetchFromRSS(): Promise<YouTubeEpisode[]> {
  try {
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=`;
    
    const handleUrl = `https://www.youtube.com/@${CHANNEL_ID}`;
    return fallbackEpisodes;
  } catch {
    return fallbackEpisodes;
  }
}

async function getEpisodes(): Promise<YouTubeEpisode[]> {
  if (cachedEpisodes && Date.now() - cacheTimestamp < CACHE_DURATION) {
    return cachedEpisodes;
  }

  const apiKey = process.env.YOUTUBE_API_KEY;

  try {
    if (apiKey) {
      console.log("Fetching episodes from YouTube Data API...");
      cachedEpisodes = await fetchFromYouTubeAPI(apiKey);
      cacheTimestamp = Date.now();
      console.log(`Fetched ${cachedEpisodes.length} episodes from YouTube API`);
      return cachedEpisodes;
    }
  } catch (error) {
    console.error("YouTube API fetch failed:", error);
  }

  try {
    console.log("Using fallback episode data...");
    cachedEpisodes = await fetchFromRSS();
    cacheTimestamp = Date.now();
    return cachedEpisodes;
  } catch {
    return fallbackEpisodes;
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/episodes", async (_req, res) => {
    try {
      const episodes = await getEpisodes();
      res.json(episodes);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch episodes", episodes: fallbackEpisodes });
    }
  });

  app.get("/api/channel-info", (_req, res) => {
    res.json({
      name: "Real And Unapologetic",
      handle: "@RealAndUnapologetic",
      url: CHANNEL_URL,
      description: "This is Real And Unapologetic - where raw meets real and fearless meets fabulous. Expect bold opinions, spicy takes, unedited stories, and conversations that cut through the noise. If you love authenticity, drama-free honesty, and unapologetic confidence... you'll feel right at home!",
    });
  });

  return httpServer;
}

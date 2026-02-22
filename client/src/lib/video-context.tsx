import { createContext, useContext, useState } from "react";
import { YouTubeModal } from "@/components/youtube-modal";

interface VideoContextType {
  playVideo: (videoId: string) => void;
}

const VideoContext = createContext<VideoContextType>({ playVideo: () => {} });

export function useVideo() {
  return useContext(VideoContext);
}

export function VideoProvider({ children }: { children: React.ReactNode }) {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <VideoContext.Provider value={{ playVideo: setActiveVideoId }}>
      {children}
      <YouTubeModal
        videoId={activeVideoId}
        onClose={() => setActiveVideoId(null)}
      />
    </VideoContext.Provider>
  );
}

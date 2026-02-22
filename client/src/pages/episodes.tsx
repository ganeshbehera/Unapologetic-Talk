import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { EpisodesSection } from "@/components/episodes-section";
import { useVideo } from "@/lib/video-context";
import type { Episode } from "@/lib/episodes-data";

export default function Episodes() {
  const { playVideo } = useVideo();

  const { data: episodes = [], isLoading } = useQuery<Episode[]>({
    queryKey: ["/api/episodes"],
  });

  return (
    <Layout>
      <PageHeader
        label="All Episodes"
        title="Tune In & Turn Up"
        description="Catch up on our latest conversations. Every episode is a deep dive into the topics that matter most."
      />
      <EpisodesSection
        episodes={episodes}
        isLoading={isLoading}
        onPlay={playVideo}
      />
    </Layout>
  );
}

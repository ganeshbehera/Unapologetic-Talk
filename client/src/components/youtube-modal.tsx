import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface YouTubeModalProps {
  videoId: string | null;
  onClose: () => void;
}

export function YouTubeModal({ videoId, onClose }: YouTubeModalProps) {
  if (!videoId) return null;

  return (
    <AnimatePresence>
      {videoId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
          data-testid="modal-youtube"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-4xl aspect-video rounded-md z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-white/70 transition-colors z-10"
              data-testid="button-close-modal"
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-md"
              data-testid="iframe-youtube"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

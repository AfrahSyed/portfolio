import { useRef } from 'react';
import { Maximize2, RotateCcw } from 'lucide-react';

export default function LoopVideo({
  src,
  title,
  className = '',
  controls = false,
}) {
  const frameRef = useRef(null);
  const videoRef = useRef(null);

  const handleReplay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play();
  };

  const handleFullscreen = async () => {
    const frame = frameRef.current;
    if (!frame) return;
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else if (frame.requestFullscreen) {
        await frame.requestFullscreen();
      }
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      ref={frameRef}
      className={`video-frame relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-[var(--color-ink)]/90 ${
        controls ? 'group' : ''
      } ${className}`}
    >
      <video
        ref={videoRef}
        className="max-h-full max-w-full object-contain"
        src={src}
        autoPlay
        loop
        muted
        playsInline
        aria-label={title}
      />
      {controls ? (
        <div className="absolute bottom-2 right-2 z-10 flex gap-1.5 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
          <button
            type="button"
            onClick={handleReplay}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75"
            aria-label={`Replay ${title}`}
          >
            <RotateCcw size={14} />
          </button>
          <button
            type="button"
            onClick={handleFullscreen}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75"
            aria-label={`Fullscreen ${title}`}
          >
            <Maximize2 size={14} />
          </button>
        </div>
      ) : null}
    </div>
  );
}

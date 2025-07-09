import React, { useRef, useState, useEffect } from 'react';

// Animated hearts component
const AnimatedHearts: React.FC = () => (
  <div className="absolute left-2 bottom-10 w-8 h-24 pointer-events-none" style={{zIndex: 2}}>
    <style>{`
      @keyframes heart-float {
        0% { transform: translateY(80px) scale(0.7); opacity: 0; }
        10% { opacity: 1; }
        100% { transform: translateY(-10px) scale(1.2); opacity: 0; }
      }
    `}</style>
    {[0, 1, 2, 3, 4].map((i) => (
      <span
        key={i}
        className="absolute left-1/2 text-pink-500 text-lg"
        style={{
          animation: `heart-float 1.8s ${i * 0.35}s infinite`,
          marginLeft: '-0.75rem',
          bottom: `${i * 12}px`,
          opacity: 0.8 - i * 0.15,
          filter: `blur(${i === 0 ? 0 : 0.5 * i}px)`
        }}
      >
        ❤️
      </span>
    ))}
  </div>
);

const FacebookPostMockup: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [duration, setDuration] = useState(0);
  const controlsTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Play/pause toggle
  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  // Mute/unmute toggle
  const handleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  // Progress bar update
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setProgress(video.currentTime / video.duration);
  };

  // Seek
  const handleSeek = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const video = videoRef.current;
    if (!video) return;
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    video.currentTime = percent * video.duration;
    setProgress(percent);
  };

  // Show/hide controls
  const showControlsTemporarily = () => {
    setShowControls(true);
    if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
    controlsTimeout.current = setTimeout(() => setShowControls(false), 2200);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    setMuted(video.muted);
    setPlaying(!video.paused);
    setDuration(video.duration || 0);
    // Clean up
    return () => { if (controlsTimeout.current) clearTimeout(controlsTimeout.current); };
  }, []);

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-16">
      {/* Header */}
      <div className="flex items-center px-4 pt-4 pb-2">
        <img src="/tortym.jpeg" alt="TortyM logo" className="w-10 h-10 rounded-full mr-3 border border-gray-200" />
        <div>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-gray-900">TortyM</span>
            {/* Verified badge */}
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 ml-1">
              <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.143 13.314a.75.75 0 01-1.06 0l-2.143-2.143a.75.75 0 111.06-1.06l1.113 1.113 3.887-3.887a.75.75 0 111.06 1.06l-4.917 4.917z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
          <div className="text-xs text-gray-500">1 h</div>
        </div>
        <div className="ml-auto text-gray-400 text-xl font-bold cursor-pointer">···</div>
      </div>
      {/* Post text */}
      <div className="px-4 pb-2 text-gray-900 text-base leading-snug">
        Predstavujeme nový <span className="font-semibold text-purple-700">maskot video</span> pre vašu značku! Získajte viac pozornosti a interakcií na Facebooku.
      </div>
      {/* Video with custom controls */}
      <div
        className="w-full aspect-video bg-black relative group"
        onMouseMove={showControlsTemporarily}
        onMouseLeave={() => setShowControls(false)}
        tabIndex={0}
        onFocus={showControlsTemporarily}
        onBlur={() => setShowControls(false)}
      >
        <video
          ref={videoRef}
          src="/cupkacik.mp4"
          autoPlay
          muted={muted}
          loop
          playsInline
          className="w-full h-full object-cover"
          onClick={handlePlayPause}
          onTimeUpdate={handleTimeUpdate}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onVolumeChange={() => setMuted(videoRef.current?.muted ?? true)}
          onLoadedMetadata={() => setDuration(videoRef.current?.duration || 0)}
        />
        {/* Animated hearts overlay only, no static heart button */}
        <AnimatedHearts />
        {/* Custom Controls Overlay */}
        <div
          className={`absolute inset-0 flex flex-col justify-end items-center pointer-events-none transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
          style={{zIndex: 3}}
        >
          {/* Center Play/Pause */}
          <button
            className="pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            onClick={handlePlayPause}
            aria-label={playing ? 'Pause video' : 'Play video'}
            tabIndex={0}
          >
            {playing ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" rx="2"/><rect x="14" y="4" width="4" height="16" rx="2"/></svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21 5,3"/></svg>
            )}
          </button>
          {/* Bottom Controls Row */}
          <div className="w-full flex items-center justify-between px-4 pb-3 pointer-events-auto">
            {/* Mute/Unmute */}
            <button
              className="bg-black/60 hover:bg-black/80 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              onClick={handleMute}
              aria-label={muted ? 'Unmute video' : 'Mute video'}
              tabIndex={0}
            >
              {muted ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 9v6h4l5 5V4l-5 5H9z" /><line x1="23" y1="1" x2="1" y2="23" stroke="currentColor" strokeWidth="2" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 9v6h4l5 5V4l-5 5H9z" /></svg>
              )}
            </button>
            {/* Progress Bar */}
            <div
              className="flex-1 mx-4 h-2 bg-gray-300 rounded-full cursor-pointer relative"
              onClick={handleSeek}
              style={{minWidth: 0}}
              tabIndex={0}
              aria-label="Seek video"
            >
              <div
                className="h-2 bg-purple-500 rounded-full"
                style={{width: `${progress * 100}%`}}
              ></div>
            </div>
            {/* Time (optional, can be removed for minimalism) */}
            <span className="text-xs text-white bg-black/60 rounded px-2 py-0.5">
              {duration ? `${Math.floor((progress * duration) / 60)}:${('0' + Math.floor((progress * duration) % 60)).slice(-2)}` : '0:00'}
            </span>
          </div>
        </div>
      </div>
      {/* Reactions */}
      <div className="flex items-center px-4 py-2 border-b border-gray-100 relative">
        <div className="flex items-center gap-1 relative">
          <span className="text-xl">❤️</span>
          <span className="text-xl">😍</span>
          <span className="text-xs text-gray-700 ml-1">8 753</span>
        </div>
        <div className="ml-auto text-xs text-gray-500">12 komentárov · 3 zdieľania · 288 967 pozretí</div>
      </div>
      {/* Like/Comment/Share bar */}
      <div className="flex items-center justify-between px-2 py-1">
        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded hover:bg-gray-100 text-gray-700 font-semibold text-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 00-6 0v4" /><path d="M5 15V9a7 7 0 0114 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2z" /></svg>
          Páči sa mi to
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded hover:bg-gray-100 text-gray-700 font-semibold text-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h12a2 2 0 012 2z" /></svg>
          Komentár
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded hover:bg-gray-100 text-gray-700 font-semibold text-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4v16h16" /></svg>
          Zdieľať
        </button>
      </div>
      {/* Comments section */}
      <div className="px-4 pt-3 pb-2 bg-gray-50 border-t border-gray-100">
        <div className="flex items-start gap-3 mb-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-200 to-teal-200 flex items-center justify-center text-lg font-bold">A</div>
          <div className="flex-1">
            <div className="font-semibold text-gray-900 leading-tight">Andrea Nováková</div>
            <div className="bg-white rounded-xl px-3 py-2 text-gray-800 shadow-sm inline-block">Toto video je úžasné! Maskot je naozaj rozkošný a pútavý. 👍😍</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-200 to-pink-200 flex items-center justify-center text-lg font-bold">M</div>
          <div className="flex-1">
            <div className="font-semibold text-gray-900 leading-tight">Martin Kováč</div>
            <div className="bg-white rounded-xl px-3 py-2 text-gray-800 shadow-sm inline-block">Perfektná práca! Takéto reklamy by som chcel vidieť častejšie na Facebooku. 👏🔥</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookPostMockup; 
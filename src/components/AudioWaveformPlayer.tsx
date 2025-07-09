import React, { useRef, useState } from 'react';
import WaveSurferPlayer from '@wavesurfer/react';

const AUDIO_SRC = '/maskot1.mp3';

const AudioWaveformPlayer: React.FC<{ src?: string }> = ({ src = AUDIO_SRC }) => {
  const wavesurferRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (wavesurferRef.current) {
      if (isPlaying) {
        wavesurferRef.current.pause();
      } else {
        wavesurferRef.current.play();
      }
    }
  };

  return (
    <div className="flex items-center gap-4 py-3 px-4 bg-white rounded-xl shadow mb-4">
      <button
        onClick={handlePlayPause}
        className={`w-12 h-12 flex items-center justify-center rounded-full border-2 border-purple-500 text-purple-600 bg-white hover:bg-purple-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-purple-300`}
        aria-label={isPlaying ? 'Stop' : 'Play'}
        type="button"
      >
        {isPlaying ? (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="5" width="4" height="14" rx="2" /><rect x="14" y="5" width="4" height="14" rx="2" /></svg>
        ) : (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" /></svg>
        )}
      </button>
      <div className="flex-1 min-w-0">
        <WaveSurferPlayer
          height={48}
          waveColor="#ddd"
          progressColor="#a78bfa"
          cursorColor="#a78bfa"
          barWidth={3}
          barRadius={2}
          barGap={2}
          url={src}
          onReady={(ws) => {
            wavesurferRef.current = ws;
            ws.on('finish', () => setIsPlaying(false));
          }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
    </div>
  );
};

export default AudioWaveformPlayer; 
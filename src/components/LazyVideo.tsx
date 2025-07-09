import React, { useRef, useState, useEffect, forwardRef } from 'react';

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  placeholderClassName?: string;
}

const LazyVideo = forwardRef<HTMLVideoElement, LazyVideoProps>(({ placeholderClassName = '', ...props }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Forward ref
  useEffect(() => {
    if (typeof ref === 'function') {
      ref(videoRef.current);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLVideoElement | null>).current = videoRef.current;
    }
  }, [ref]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${placeholderClassName}`}>
      <video
        ref={videoRef}
        {...props}
        src={isVisible ? props.src : undefined}
        onLoadedData={(e) => {
          setIsLoaded(true);
          props.onLoadedData?.(e);
        }}
        style={{ ...props.style, display: isLoaded ? undefined : 'none' }}
      >
        {props.children}
      </video>
      {/* Placeholder overlay */}
      {(!isVisible || !isLoaded) && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <svg className="animate-spin h-8 w-8 text-white/60" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
        </div>
      )}
    </div>
  );
});

LazyVideo.displayName = 'LazyVideo';

export default LazyVideo; 
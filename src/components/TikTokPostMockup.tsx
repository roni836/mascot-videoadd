import React from 'react';
import LazyVideo from './LazyVideo';

const TikTokPostMockup: React.FC = () => {
  return (
    <div className="max-w-xs w-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-16 flex flex-col">
      {/* Header */}
      <div className="flex items-center px-4 pt-4 pb-2">
        <img src="/logo-social.png" alt="Profile" className="w-9 h-9 rounded-full mr-3 border border-gray-200" />
        <span className="font-semibold text-gray-900 text-sm">@vasafirma</span>
        <div className="ml-auto text-gray-400 text-xl font-bold cursor-pointer">···</div>
      </div>
      {/* Video + Actions */}
      <div className="relative w-full aspect-square bg-black">
        <LazyVideo
          src="/showcase.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-none"
        />
        {/* Action bar */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-10">
          <button className="flex flex-col items-center text-gray-900">
            <span className="bg-gray-100 rounded-full p-2 mb-1"><svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg></span>
            <span className="text-xs font-semibold">365</span>
          </button>
          <button className="flex flex-col items-center text-gray-900">
            <span className="bg-gray-100 rounded-full p-2 mb-1"><svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h12a2 2 0 012 2z" /></svg></span>
            <span className="text-xs font-semibold">105</span>
          </button>
          <button className="flex flex-col items-center text-gray-900">
            <span className="bg-gray-100 rounded-full p-2 mb-1"><svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4v16h16" /></svg></span>
            <span className="text-xs font-semibold">Zdieľať</span>
          </button>
        </div>
      </div>
      {/* Caption and music */}
      <div className="px-4 py-2 bg-white">
        <div className="text-gray-900 text-sm mb-1">
          <span className="font-semibold">@vasafirma</span> Predstavujeme nový <span className="font-semibold text-purple-700">maskot video</span> pre vašu značku! #mascotvideo #branding
        </div>
        <div className="flex items-center text-xs text-gray-500">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 19V6l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
          Originálny zvuk - vasafirma
        </div>
      </div>
    </div>
  );
};

export default TikTokPostMockup; 
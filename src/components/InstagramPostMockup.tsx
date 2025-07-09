import React from 'react';

const InstagramPostMockup: React.FC = () => {
  return (
    <div className="max-w-xs w-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-16">
      {/* Header */}
      <div className="flex items-center px-4 pt-4 pb-2">
        <img src="/logo-social.png" alt="Profile" className="w-9 h-9 rounded-full mr-3 border border-gray-200" />
        <span className="font-semibold text-gray-900 text-sm">VašaFirma.sk</span>
        <span className="ml-2 text-blue-500 text-xs">•</span>
        <span className="ml-1 text-xs text-gray-400">Sledovať</span>
        <div className="ml-auto text-gray-400 text-xl font-bold cursor-pointer">···</div>
      </div>
      {/* Video */}
      <div className="w-full aspect-square bg-black">
        <video
          src="/showcase.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      {/* Action bar */}
      <div className="flex items-center px-4 py-2 gap-3">
        <button className="text-gray-700 hover:text-pink-500"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg></button>
        <button className="text-gray-700 hover:text-blue-500"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h12a2 2 0 012 2z" /></svg></button>
        <button className="text-gray-700 hover:text-green-500"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2" /><path d="M15 3h-6a2 2 0 00-2 2v2a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2z" /></svg></button>
        <div className="ml-auto">
          <button className="text-gray-700 hover:text-yellow-500"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" /></svg></button>
        </div>
      </div>
      {/* Likes */}
      <div className="px-4 text-sm font-semibold text-gray-900 pb-1">152 Páči sa mi to</div>
      {/* Caption */}
      <div className="px-4 text-sm text-gray-900 pb-1">
        <span className="font-semibold">vasafirma</span> Predstavujeme nový maskot video pre vašu značku! #mascotvideo #branding
      </div>
      {/* View all comments */}
      <div className="px-4 text-sm text-gray-500 pb-1 cursor-pointer">Zobraziť všetkych 7 komentárov</div>
      {/* Time */}
      <div className="px-4 text-xs text-gray-400 pb-2">PRED 3 DŇAMI</div>
      {/* Add comment */}
      <div className="flex items-center border-t border-gray-100 px-4 py-2">
        <span className="text-2xl text-gray-400 mr-2">😊</span>
        <input
          type="text"
          placeholder="Pridať komentár..."
          className="flex-1 border-none focus:ring-0 text-sm text-gray-700 bg-transparent placeholder-gray-400"
        />
        <button className="text-blue-500 font-semibold text-sm ml-2">Pridať</button>
      </div>
    </div>
  );
};

export default InstagramPostMockup; 
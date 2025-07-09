import React from 'react';

const SatisfactionGuaranteeBadge: React.FC = () => (
  <div className="flex flex-col items-center">
    <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="badgeGold" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#ffe066" />
          <stop offset="100%" stopColor="#eab308" />
        </radialGradient>
      </defs>
      {/* Outer circle */}
      <circle cx="70" cy="70" r="68" fill="url(#badgeGold)" stroke="#bfa100" strokeWidth="4" />
      {/* Inner circle */}
      <circle cx="70" cy="70" r="54" fill="#444" stroke="#fff" strokeWidth="3" />
      {/* Stars */}
      <g>
        <circle cx="40" cy="50" r="4" fill="#ffe066" />
        <circle cx="100" cy="50" r="4" fill="#ffe066" />
      </g>
      {/* Thumbs up */}
      <g>
        <circle cx="70" cy="70" r="28" fill="#ffe066" />
        <path d="M70 60c2-6 10-6 12 0 1 3-1 6-2 7 2 0 4 2 4 4 0 2-2 4-4 4h-10c-2 0-4-2-4-4 0-2 2-4 4-4h1c-1-1-3-4-2-7z" fill="#fff" stroke="#444" strokeWidth="2" />
        <rect x="66" y="75" width="8" height="12" rx="4" fill="#fff" stroke="#444" strokeWidth="2" />
      </g>
      {/* Top text */}
      <text x="70" y="38" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff" letterSpacing="1.5">GARANCIA</text>
      {/* Bottom text */}
      <text x="70" y="128" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff" letterSpacing="1.5">SPOKOJNOSTI</text>
      {/* 100% Ribbon */}
      <rect x="35" y="110" width="70" height="22" rx="8" fill="#ffe066" stroke="#bfa100" strokeWidth="2" />
      <text x="70" y="126" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#444">100%</text>
    </svg>
    <span className="sr-only">100% Garancia spokojnosti</span>
  </div>
);

export default SatisfactionGuaranteeBadge; 
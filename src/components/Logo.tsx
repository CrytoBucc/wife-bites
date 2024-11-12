import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = 'h-12 w-auto' }: LogoProps) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>
        </defs>
        {/* Shield background */}
        <path
          d="M50 5 L90 20 L90 45 C90 65 75 85 50 95 C25 85 10 65 10 45 L10 20 Z"
          fill="url(#shield-gradient)"
          stroke="#B8860B"
          strokeWidth="2"
        />
        {/* WB letters */}
        <text
          x="50"
          y="60"
          textAnchor="middle"
          fontSize="35"
          fontWeight="bold"
          fill="#1E90FF"
          fontFamily="Arial Black, sans-serif"
        >
          WB
        </text>
        {/* Wife Bites banner */}
        <path
          d="M20 70 Q50 60 80 70 L85 75 Q50 65 15 75 Z"
          fill="#FFD700"
          stroke="#B8860B"
          strokeWidth="1"
        />
        <text
          x="50"
          y="71"
          textAnchor="middle"
          fontSize="12"
          fontWeight="bold"
          fill="#1E90FF"
          fontFamily="Arial Black, sans-serif"
        >
          WIFE BITES
        </text>
      </svg>
    </div>
  );
}
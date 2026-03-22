import React from 'react';

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="brGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7cc7dd" />
          <stop offset="40%" stopColor="#2d829d" />
          <stop offset="100%" stopColor="#163e4d" />
        </linearGradient>
        <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a4b5c" />
          <stop offset="100%" stopColor="#45a5c1" />
        </linearGradient>
        <linearGradient id="ringGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a4b5c" />
          <stop offset="100%" stopColor="#45a5c1" />
        </linearGradient>
      </defs>
      
      {/* Outer Swoosh Left/Top */}
      <path d="M 15 75 C -5 50 0 20 20 5 C 40 -10 70 -5 85 15 C 70 0 45 -5 25 10 C 5 25 0 50 20 70 Z" fill="url(#ringGrad1)" />
      
      {/* Outer Swoosh Right/Bottom */}
      <path d="M 85 25 C 105 50 100 80 80 95 C 60 110 30 105 15 85 C 30 100 55 105 75 90 C 95 75 100 50 80 30 Z" fill="url(#ringGrad2)" />

      {/* Inner Top Swoosh */}
      <path d="M 20 30 C 35 10 65 10 80 30 C 65 15 35 15 20 35 Z" fill="url(#ringGrad1)" />
      
      {/* Inner Bottom Swoosh */}
      <path d="M 80 70 C 65 90 35 90 20 70 C 35 85 65 85 80 65 Z" fill="url(#ringGrad2)" />
      
      {/* BR Text */}
      <text x="50" y="70" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="900" fontStyle="italic" textAnchor="middle" fill="url(#brGrad)" letterSpacing="-2">BR</text>
    </svg>
  );
}

import React, { useState } from 'react';

interface SyntronixLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'icon';
  glow?: boolean;
  animated?: boolean;
  id?: string;
}

export const SyntronixLogo: React.FC<SyntronixLogoProps> = ({
  className = 'h-10 w-auto',
  variant = 'full',
  glow = false,
  animated = false,
  id = 'syntronix-logo',
}) => {
  const [currentSrc, setCurrentSrc] = useState('/syntronix-logo.png');
  const [pngFailed, setPngFailed] = useState(false);

  // If PNG is available in /public, prefer the exact PNG image
  if (!pngFailed && variant === 'full') {
    return (
      <div className={`relative inline-flex items-center select-none ${className}`} id={id}>
        <img
          src={currentSrc}
          alt="SYNTRONIX '26 - Create. Solve. Evolve."
          className="w-full h-full object-contain"
          onError={() => {
            if (currentSrc === '/syntronix-logo.png') {
              setCurrentSrc('/WhatsApp_Image_2026-09-06_at_11.35.02_AM-removebg-preview.png');
            } else {
              setPngFailed(true);
            }
          }}
        />
      </div>
    );
  }

  if (variant === 'icon') {
    return (
      <svg
        id={id}
        viewBox="0 0 100 100"
        className={`${className} ${animated ? 'group-hover:scale-105' : ''} transition-transform`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="iconChrome" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FFEAA7" />
            <stop offset="35%" stop-color="#FF9E43" />
            <stop offset="60%" stop-color="#7A1200" />
            <stop offset="100%" stop-color="#FFD166" />
          </linearGradient>
          <linearGradient id="iconNeedle" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FFEAA7" stop-opacity="0" />
            <stop offset="20%" stop-color="#FFD166" />
            <stop offset="50%" stop-color="#FFEAA7" />
            <stop offset="80%" stop-color="#FF7A00" />
            <stop offset="100%" stop-color="#FF5722" stop-opacity="0" />
          </linearGradient>
        </defs>

        {glow && (
          <circle cx="50" cy="50" r="35" fill="#FF8C42" opacity="0.25" filter="blur(8px)" />
        )}

        {/* Vertical Needle */}
        <path d="M 49,5 L 51,5 L 52.5,43 L 47.5,43 Z" fill="url(#iconNeedle)" />
        <path d="M 47.5,57 L 52.5,57 L 51,95 L 49,95 Z" fill="url(#iconNeedle)" />

        {/* Outer Ring / 'O' Aperture */}
        <circle cx="50" cy="50" r="28" fill="none" stroke="url(#iconChrome)" strokeWidth="8" />
        <circle cx="50" cy="50" r="14" fill="#0B0B0B" stroke="#FFE082" strokeWidth="2" />
        <circle cx="50" cy="50" r="6" fill="#FF8C42" />
        <circle cx="50" cy="50" r="2.5" fill="#FFF3D4" />
      </svg>
    );
  }

  return (
    <div className={`relative inline-flex items-center select-none ${className}`} id={id}>
      {/* Background radial glow */}
      {glow && (
        <div
          className="absolute inset-0 -inset-x-6 bg-[#FF8C42]/15 blur-xl rounded-full pointer-events-none -z-10"
          aria-hidden="true"
        />
      )}

      {/* High-definition Vector Logo mirroring the user's uploaded emblem */}
      <svg
        viewBox="0 0 740 180"
        className="w-full h-full object-contain"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic Burnished Gold & Fiery Copper Linear Gradient */}
          <linearGradient id="mainChrome" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="15%" stopColor="#FFC368" />
            <stop offset="38%" stopColor="#FF7A18" />
            <stop offset="50%" stopColor="#8A1800" />
            <stop offset="54%" stopColor="#300700" />
            <stop offset="68%" stopColor="#DE4D00" />
            <stop offset="85%" stopColor="#FFA642" />
            <stop offset="100%" stopColor="#FFDA73" />
          </linearGradient>

          {/* Searing Orange-Red Gradient for '26 */}
          <linearGradient id="yearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFC870" />
            <stop offset="30%" stopColor="#FF6B1A" />
            <stop offset="70%" stopColor="#D50000" />
            <stop offset="100%" stopColor="#FF8A65" />
          </linearGradient>

          {/* Needle Spire Gradient */}
          <linearGradient id="needleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF8E7" stopOpacity="0" />
            <stop offset="12%" stopColor="#FFD875" />
            <stop offset="48%" stopColor="#FF7A00" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="88%" stopColor="#FF7A00" />
            <stop offset="100%" stopColor="#FF5722" stopOpacity="0" />
          </linearGradient>

          {/* Divider Line Gradient */}
          <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF8C42" stopOpacity="0" />
            <stop offset="20%" stopColor="#D47A3A" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#FFE082" stopOpacity="1" />
            <stop offset="80%" stopColor="#D47A3A" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FF8C42" stopOpacity="0" />
          </linearGradient>

          {/* Motto Gradient */}
          <linearGradient id="mottoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D9B784" />
            <stop offset="50%" stopColor="#FFF8ED" />
            <stop offset="100%" stopColor="#D9B784" />
          </linearGradient>

          {/* Soft Filter for the Needle Lens Flare */}
          <filter id="needleGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g transform="translate(10, 5)">
          {/* THE VERTICAL QUANTUM NEEDLE / COMPASS AXIS */}
          {/* Aligned directly through the center of the 'O' at X ~ 372 */}
          <g filter="url(#needleGlowFilter)">
            {/* Upper Spire */}
            <polygon points="371.5,2 373.5,2 374.8,68 370.2,68" fill="url(#needleGradient)" />
            {/* Lower Spire */}
            <polygon points="370.2,96 374.8,96 373.5,160 371.5,160" fill="url(#needleGradient)" />
            {/* Central Optical Reticle */}
            <circle cx="372.5" cy="82" r="7.5" fill="none" stroke="#FFEAA7" strokeWidth="2" />
            <circle cx="372.5" cy="82" r="3.5" fill="#FF8C42" />
            <circle cx="372.5" cy="82" r="1.5" fill="#FFFFFF" />
          </g>

          {/* SYNTRONIX MAIN TYPOGRAPHY */}
          <text
            x="345"
            y="98"
            fontFamily="'Syne', 'Orbitron', 'Montserrat', 'Arial Black', sans-serif"
            fontSize="72"
            fontWeight="900"
            letterSpacing="0.07em"
            textAnchor="middle"
            fill="url(#mainChrome)"
            stroke="#160400"
            strokeWidth="1.2"
            strokeLinejoin="round"
          >
            SYNTRONIX
          </text>

          {/* '26 SUFFIX IN RADIANT EMBER */}
          <text
            x="640"
            y="98"
            fontFamily="'Syne', 'Orbitron', 'Montserrat', 'Arial Black', sans-serif"
            fontSize="72"
            fontWeight="900"
            letterSpacing="0.03em"
            fill="url(#yearGradient)"
            stroke="#1C0000"
            strokeWidth="1.2"
            strokeLinejoin="round"
          >
            '26
          </text>

          {/* SPECULAR HIGHLIGHT / POLISHED BEVEL ON TOP OF TEXT */}
          <text
            x="345"
            y="98"
            fontFamily="'Syne', 'Orbitron', 'Montserrat', 'Arial Black', sans-serif"
            fontSize="72"
            fontWeight="900"
            letterSpacing="0.07em"
            textAnchor="middle"
            fill="none"
            stroke="#FFF5DC"
            strokeWidth="0.8"
            strokeOpacity="0.65"
          >
            SYNTRONIX
          </text>

          <text
            x="640"
            y="98"
            fontFamily="'Syne', 'Orbitron', 'Montserrat', 'Arial Black', sans-serif"
            fontSize="72"
            fontWeight="900"
            letterSpacing="0.03em"
            fill="none"
            stroke="#FFF2D6"
            strokeWidth="0.8"
            strokeOpacity="0.65"
          >
            '26
          </text>

          {/* HORIZONTAL DIVIDER WITH CENTER WING ACCENTS */}
          <path
            d="M 40,118 L 340,118 L 362,120 L 372.5,118 L 383,120 L 405,118 L 675,118"
            stroke="url(#dividerGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <polygon points="372.5,116 376,118 372.5,120 369,118" fill="#FFE082" />

          {/* SYMPOSIUM MOTTO: "Create. Solve. Evolve." */}
          {variant === 'full' && (
            <text
              x="360"
              y="142"
              fontFamily="'Plus Jakarta Sans', 'Montserrat', system-ui, sans-serif"
              fontSize="20"
              fontWeight="400"
              letterSpacing="0.38em"
              textAnchor="middle"
              fill="url(#mottoGradient)"
              opacity="0.95"
            >
              Create. Solve. Evolve.
            </text>
          )}
        </g>
      </svg>
    </div>
  );
};

import React from 'react';

export const Logo = ({ className = "w-12 h-12", src }: { className?: string, src?: string | null }) => {
  if (src) {
    return <img src={src} alt="Urban Fitness Logo" className={`${className} object-contain`} referrerPolicy="no-referrer" />;
  }
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="metalShine" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
          <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1" specularExponent="20" lightingColor="white" result="specOut">
            <fePointLight x="-50" y="-50" z="100" />
          </feSpecularLighting>
          <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
          <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>

        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF2CC" />
          <stop offset="50%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#9A3412" />
        </linearGradient>

        <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F3F4F6" />
          <stop offset="50%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#4B5563" />
        </linearGradient>
      </defs>

      {/* Shield Frame */}
      <path d="M100 5 L192 38 V100 C192 165 100 198 100 198 C100 198 8 165 8 100 V38 L100 5Z" fill="url(#frameGrad)" filter="url(#metalShine)" />
      
      {/* Shield Interior */}
      <path d="M100 18 L178 45 V100 C178 155 100 188 100 188 C100 188 22 155 22 100 V45 L100 18Z" fill="#1A1A1A" />

      {/* Screws */}
      {[
        {x:100, y:12}, {x:148, y:28}, {x:52, y:28}, 
        {x:186, y:45}, {x:14, y:45}, {x:186, y:100}, 
        {x:14, y:100}, {x:148, y:172}, {x:52, y:172}, {x:100, y:192}
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="3" fill="#374151" />
          <circle cx={p.x} cy={p.y} r="1.5" fill="#9CA3AF" />
        </g>
      ))}

      {/* URBAN Text */}
      <path id="urbanPath" d="M45 80 Q100 40 155 80" fill="none" />
      <text className="font-black uppercase" fontSize="22" fill="url(#goldGrad)" style={{ fontFamily: 'Oswald, sans-serif' }}>
        <textPath href="#urbanPath" startOffset="50%" textAnchor="middle">URBAN</textPath>
      </text>

      {/* Silhouettes */}
      <g transform="translate(0, 5)">
        {/* Female Silhouette (Silver) */}
        <path d="M75 115 C75 105 85 100 85 90 C85 82 80 78 75 78 C70 78 65 82 65 90 C65 95 70 100 70 105 C60 110 55 120 58 135 L75 135 Z" fill="#E5E7EB" />
        {/* Male Silhouette (Orange) */}
        <path d="M125 115 C125 105 115 100 115 90 C115 82 120 78 125 78 C130 78 135 82 135 90 C135 95 130 100 130 105 C140 110 145 120 142 135 L125 135 Z" fill="#F97316" />
        {/* Dumbbells */}
        <rect x="52" y="112" width="10" height="3" rx="1" fill="#9CA3AF" transform="rotate(-20 52 112)"/>
        <rect x="138" y="112" width="10" height="3" rx="1" fill="#EA580C" transform="rotate(20 138 112)"/>
      </g>

      {/* FITNESS Text */}
      <text x="100" y="165" className="font-black uppercase" fontSize="34" fill="#F97316" textAnchor="middle" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '1px' }}>FITNESS</text>
      
      {/* Divider Arc */}
      <path d="M40 135 Q100 125 160 135" stroke="white" strokeWidth="2" opacity="0.5" fill="none" />
    </svg>
  );
};

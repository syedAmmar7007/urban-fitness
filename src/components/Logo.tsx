import React from 'react';

export const Logo = ({ className = "w-12 h-12", src }: { className?: string, src?: string | null }) => {
  if (src) {
    return (
      <div className={`${className} flex items-center justify-center overflow-visible bg-transparent`}>
        <img 
          src={src} 
          alt="Urban Fitness Logo" 
          className="w-full h-full object-contain bg-transparent" 
          referrerPolicy="no-referrer" 
          style={{ filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.5))' }}
        />
      </div>
    );
  }
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        {/* Specular Lighting for Metallic Shine */}
        <filter id="metalShine" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
          <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1" specularExponent="20" lightingColor="#white" result="specOut">
            <fePointLight x="-50" y="-50" z="100" />
          </feSpecularLighting>
          <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
          <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>

        {/* Extreme 3D Extrusion for FITNESS */}
        <filter id="fitness3D" x="-20%" y="-20%" width="140%" height="140%">
          <feOffset dx="0" dy="1" in="SourceAlpha" result="o1" />
          <feOffset dx="0" dy="2" in="SourceAlpha" result="o2" />
          <feOffset dx="0" dy="3" in="SourceAlpha" result="o3" />
          <feOffset dx="0" dy="4" in="SourceAlpha" result="o4" />
          <feOffset dx="0" dy="5" in="SourceAlpha" result="o5" />
          <feMerge result="ext">
            <feMergeNode in="o1" /><feMergeNode in="o2" /><feMergeNode in="o3" /><feMergeNode in="o4" /><feMergeNode in="o5" />
          </feMerge>
          <feFlood floodColor="#431407" result="extColor" />
          <feComposite in="extColor" in2="ext" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF2CC" />
          <stop offset="20%" stopColor="#FFD966" />
          <stop offset="50%" stopColor="#F6B26B" />
          <stop offset="80%" stopColor="#E69138" />
          <stop offset="100%" stopColor="#B45F06" />
        </linearGradient>

        <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F3F4F6" />
          <stop offset="50%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
      </defs>

      {/* Shield Frame */}
      <path d="M100 5 L192 38 V100 C192 165 100 198 100 198 C100 198 8 165 8 100 V38 L100 5Z" fill="url(#frameGrad)" filter="url(#metalShine)" />
      
      {/* Shield Interior */}
      <path d="M100 18 L178 45 V100 C178 155 100 188 100 188 C100 188 22 155 22 100 V45 L100 18Z" fill="#000000" />
      <path d="M100 18 L178 45 V100 C178 155 100 188 100 188 C100 188 22 155 22 100 V45 L100 18Z" fill="radial-gradient(circle at 50% 30%, #4B5563 0%, transparent 80%)" opacity="0.4" />

      {/* Screws */}
      {[
        {x:100, y:12}, {x:148, y:28}, {x:52, y:28}, 
        {x:186, y:45}, {x:14, y:45}, {x:186, y:100}, 
        {x:14, y:100}, {x:148, y:172}, {x:52, y:172}, {x:100, y:192}
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="3.5" fill="#1F2937" />
          <circle cx={p.x-0.5} cy={p.y-0.5} r="3" fill="#D1D5DB" />
          <path d={`M${p.x-1.5} ${p.y} L${p.x+1.5} ${p.y} M${p.x} ${p.y-1.5} L${p.x} ${p.y+1.5}`} stroke="#111827" strokeWidth="0.5" />
        </g>
      ))}

      {/* URBAN Text */}
      <path id="urbanPath" d="M40 85 Q100 45 160 85" fill="none" />
      <text className="font-black italic uppercase" fontSize="24" fill="url(#goldGrad)" filter="url(#metalShine)">
        <textPath href="#urbanPath" startOffset="50%" textAnchor="middle">URBAN</textPath>
      </text>

      {/* Silhouettes */}
      <g transform="translate(0, 10)">
        <path d="M75 115 C75 105 85 100 85 90 C85 82 80 78 75 78 C70 78 65 82 65 90 C65 95 70 100 70 105 C60 110 55 120 58 135 L75 135 Z" fill="#F3F4F6" filter="url(#metalShine)" />
        <path d="M125 115 C125 105 115 100 115 90 C115 82 120 78 125 78 C130 78 135 82 135 90 C135 95 130 100 130 105 C140 110 145 120 142 135 L125 135 Z" fill="#F97316" filter="url(#metalShine)" />
        <rect x="52" y="112" width="12" height="4" rx="1" fill="#9CA3AF" transform="rotate(-20 52 112)"/>
        <rect x="138" y="112" width="12" height="4" rx="1" fill="#EA580C" transform="rotate(20 138 112)"/>
      </g>

      {/* FITNESS Text */}
      <text x="100" y="172" className="font-black italic uppercase" fontSize="38" fill="url(#goldGrad)" textAnchor="middle" filter="url(#fitness3D)" style={{ letterSpacing: '-1.5px' }}>FITNESS</text>
      
      {/* Divider Arc */}
      <path d="M35 142 Q100 130 165 142" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.3" fill="none" />
    </svg>
  );
};

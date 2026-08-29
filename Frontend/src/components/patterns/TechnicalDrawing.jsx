// Technical Drawing Elements for BIM/MEPF Aesthetic
export const TechnicalGrid = ({ className = '', opacity = 0.1, size = 50 }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ opacity }}>
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={`tech-grid-${size}`} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
          <path d={`M ${size} 0 L 0 0 0 ${size}`} fill="none" stroke="#14B8A6" strokeWidth="0.5" opacity="0.3"/>
          <circle cx={size/2} cy={size/2} r="2" fill="#14B8A6" opacity="0.2"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#tech-grid-${size})`} />
    </svg>
  </div>
);

export const MeasurementLines = ({ className = '', opacity = 0.1 }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ opacity }}>
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="measurement-lines" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <line x1="0" y1="50" x2="100" y2="50" stroke="#14B8A6" strokeWidth="0.3" opacity="0.2" strokeDasharray="2,2"/>
          <line x1="50" y1="0" x2="50" y2="100" stroke="#14B8A6" strokeWidth="0.3" opacity="0.2" strokeDasharray="2,2"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#measurement-lines)" />
    </svg>
  </div>
);

export const BlueprintDots = ({ className = '', opacity = 0.1 }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ opacity }}>
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="blueprint-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="#14B8A6" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#blueprint-dots)" />
    </svg>
  </div>
);

export const TechnicalCrosshair = ({ className = '', x = '50%', y = '50%' }) => (
  <div className={`absolute pointer-events-none ${className}`} style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="15" stroke="#14B8A6" strokeWidth="0.5" opacity="0.3"/>
      <line x1="20" y1="5" x2="20" y2="35" stroke="#14B8A6" strokeWidth="0.5" opacity="0.3"/>
      <line x1="5" y1="20" x2="35" y2="20" stroke="#14B8A6" strokeWidth="0.5" opacity="0.3"/>
    </svg>
  </div>
);


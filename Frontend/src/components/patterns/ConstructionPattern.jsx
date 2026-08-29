// Construction/BIM themed patterns with technical elements
export default function ConstructionPattern({ className = '', variant = 'grid' }) {
  const patterns = {
    grid: (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="construction-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#0E3A5B" strokeWidth="1" opacity="0.15"/>
            <circle cx="25" cy="25" r="2" fill="#0E3A5B" opacity="0.1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#construction-grid)" />
      </svg>
    ),
    technical: (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="technical-lines" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <line x1="0" y1="30" x2="60" y2="30" stroke="#14B8A6" strokeWidth="0.5" opacity="0.2"/>
            <line x1="30" y1="0" x2="30" y2="60" stroke="#14B8A6" strokeWidth="0.5" opacity="0.2"/>
            <circle cx="30" cy="30" r="3" fill="none" stroke="#0E3A5B" strokeWidth="0.5" opacity="0.15"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#technical-lines)" />
      </svg>
    ),
    blueprint: (
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="blueprint-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <rect width="80" height="80" fill="none" stroke="#0E3A5B" strokeWidth="0.5" opacity="0.1"/>
            <path d="M 0 40 L 80 40" stroke="#14B8A6" strokeWidth="0.3" opacity="0.15"/>
            <path d="M 40 0 L 40 80" stroke="#14B8A6" strokeWidth="0.3" opacity="0.15"/>
            <circle cx="40" cy="40" r="4" fill="none" stroke="#0E3A5B" strokeWidth="0.5" opacity="0.2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-pattern)" />
      </svg>
    )
  };

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {patterns[variant] || patterns.grid}
    </div>
  );
}


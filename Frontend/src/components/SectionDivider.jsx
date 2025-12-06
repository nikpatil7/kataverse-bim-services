import PropTypes from 'prop-types';
import '../styles/backgrounds.css';

export default function SectionDivider({ 
  variant = 'wave',
  color = '#ffffff',
  flip = false,
  className = '' 
}) {
  const wavePathTop = "M0,50 Q360,0 720,50 T1440,50 L1440,120 L0,120 Z";
  const wavePathBottom = "M0,70 Q360,120 720,70 T1440,70 L1440,0 L0,0 Z";
  const zigzagPath = "M0,60 L120,0 L240,60 L360,0 L480,60 L600,0 L720,60 L840,0 L960,60 L1080,0 L1200,60 L1320,0 L1440,60 L1440,120 L0,120 Z";
  const curvePath = "M0,100 Q360,50 720,100 T1440,100 L1440,120 L0,120 Z";

  const paths = {
    wave: flip ? wavePathBottom : wavePathTop,
    zigzag: zigzagPath,
    curve: curvePath
  };

  return (
    <div className={`section-divider ${className}`}>
      <svg 
        viewBox="0 0 1440 120" 
        className="divider-wave"
        preserveAspectRatio="none"
        style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
      >
        <path 
          d={paths[variant] || paths.wave}
          fill={color}
        />
      </svg>
    </div>
  );
}

SectionDivider.propTypes = {
  variant: PropTypes.oneOf(['wave', 'zigzag', 'curve']),
  color: PropTypes.string,
  flip: PropTypes.bool,
  className: PropTypes.string
};

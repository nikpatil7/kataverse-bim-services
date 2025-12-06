import PropTypes from 'prop-types';
import '../styles/backgrounds.css';

export default function HeroWithBackground({ 
  children,
  backgroundImage = '/images/hero-bim.jpg',
  backgroundPattern = 'geometric',
  overlayGradient = 'linear-gradient(135deg, rgba(93, 63, 211, 0.7), rgba(74, 47, 184, 0.8))',
  className = ''
}) {
  return (
    <section className={`hero-with-background ${className}`}>
      {/* Background Layers */}
      <div className="hero-background">
        {/* Background Image */}
        <div 
          className="hero-bg-image"
          style={{
            backgroundImage: `url(${backgroundImage})`
          }}
        />
        
        {/* Gradient Overlay */}
        <div 
          className="hero-bg-overlay"
          style={{
            background: overlayGradient
          }}
        />
        
        {/* Pattern Overlay */}
        {backgroundPattern !== 'none' && (
          <div className={`absolute inset-0 pattern-${backgroundPattern} opacity-30`} />
        )}
      </div>

      {/* Content */}
      <div className="hero-content-wrapper">
        {children}
      </div>

      {/* Floating Animated Shapes */}
      <div className="animated-bg-container">
        <div className="floating-shape floating-shape-1" />
        <div className="floating-shape floating-shape-2" />
        <div className="floating-shape floating-shape-3" />
      </div>
    </section>
  );
}

HeroWithBackground.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundImage: PropTypes.string,
  backgroundPattern: PropTypes.oneOf(['geometric', 'grid', 'tech-lines', 'blueprint', 'none']),
  overlayGradient: PropTypes.string,
  className: PropTypes.string
};

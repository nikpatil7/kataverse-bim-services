import PropTypes from 'prop-types';
import '../styles/backgrounds.css';

export default function AnimatedBackground({ 
  variant = 'gradient',
  className = '' 
}) {
  return (
    <div className={`animated-bg-container ${className}`}>
      {variant === 'gradient' && (
        <div className="animated-gradient-bg absolute inset-0" />
      )}
      
      {variant === 'shapes' && (
        <>
          <div className="floating-shape floating-shape-1" />
          <div className="floating-shape floating-shape-2" />
          <div className="floating-shape floating-shape-3" />
        </>
      )}
      
      {variant === 'both' && (
        <>
          <div className="animated-gradient-bg absolute inset-0" />
          <div className="floating-shape floating-shape-1" />
          <div className="floating-shape floating-shape-2" />
          <div className="floating-shape floating-shape-3" />
        </>
      )}
    </div>
  );
}

AnimatedBackground.propTypes = {
  variant: PropTypes.oneOf(['gradient', 'shapes', 'both']),
  className: PropTypes.string
};

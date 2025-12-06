import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/backgrounds.css';

export default function ParallaxBackground({ 
  children,
  imageSrc = '/images/hero-bim.jpg',
  overlayGradient = 'linear-gradient(135deg, rgba(93, 63, 211, 0.6), rgba(74, 47, 184, 0.7))',
  speed = 0.5,
  className = ''
}) {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) {
        setOffset(window.scrollY);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <section className={`parallax-section ${className}`}>
      {/* Parallax Background */}
      <div 
        className="parallax-background"
        style={{ 
          transform: isMobile ? 'none' : `translateY(${offset * speed}px)` 
        }}
      >
        <div 
          className="parallax-image"
          style={{ 
            backgroundImage: `url(${imageSrc})` 
          }}
        />
        <div 
          className="parallax-overlay"
          style={{ 
            background: overlayGradient 
          }}
        />
      </div>

      {/* Content */}
      <div className="parallax-content">
        {children}
      </div>
    </section>
  );
}

ParallaxBackground.propTypes = {
  children: PropTypes.node.isRequired,
  imageSrc: PropTypes.string,
  overlayGradient: PropTypes.string,
  speed: PropTypes.number,
  className: PropTypes.string
};

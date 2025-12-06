import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import OptimizedImage from './OptimizedImage';

export default function VectorBackground({
  vectorSrc,
  children,
  opacity = 0.6,
  parallax = false,
  className = '',
  overlayGradient = 'linear-gradient(to right, rgba(11, 31, 42, 0.9), rgba(11, 31, 42, 0.7), transparent)',
}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!parallax) return;

    const handleScroll = () => {
      setOffset(window.scrollY * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallax]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Vector Background */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={
          parallax
            ? { transform: `translateY(${offset}px)` }
            : undefined
        }
      >
        <OptimizedImage
          src={vectorSrc}
          alt="background"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Overlay Gradient */}
      <div
        className="absolute inset-0"
        style={{ 
          background: overlayGradient,
          opacity 
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

VectorBackground.propTypes = {
  vectorSrc: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  opacity: PropTypes.number,
  parallax: PropTypes.bool,
  className: PropTypes.string,
  overlayGradient: PropTypes.string,
};

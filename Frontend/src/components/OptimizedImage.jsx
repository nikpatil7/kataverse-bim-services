import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * OptimizedImage component for Vite/React
 * Features:
 * - Lazy loading
 * - Responsive images with srcset
 * - Loading placeholder
 * - Error handling
 * - WebP support with fallback
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  objectFit = 'cover',
  objectPosition = 'center',
  aspectRatio,
  placeholderColor = '#e5e7eb',
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [src]);

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const handleError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  // Generate WebP source if original is JPG/PNG
  const getWebPSrc = (originalSrc) => {
    if (originalSrc.match(/\.(jpg|jpeg|png)$/i)) {
      return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }
    return null;
  };

  const webpSrc = getWebPSrc(src);

  // Container styles
  const containerStyle = {
    position: 'relative',
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : aspectRatio ? '0' : 'auto',
    paddingBottom: aspectRatio ? `${(1 / aspectRatio) * 100}%` : '0',
    backgroundColor: placeholderColor,
    overflow: 'hidden',
  };

  // Image styles
  const imageStyle = {
    width: '100%',
    height: aspectRatio || height ? '100%' : 'auto',
    objectFit,
    objectPosition,
    position: aspectRatio ? 'absolute' : 'relative',
    top: aspectRatio ? 0 : 'auto',
    left: aspectRatio ? 0 : 'auto',
    opacity: imageLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  if (imageError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-200 ${className}`}
        style={containerStyle}
      >
        <div className="text-center p-4">
          <svg
            className="w-12 h-12 mx-auto text-gray-400 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm text-gray-500">Image not available</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className} style={containerStyle}>
      {/* Loading placeholder */}
      {!imageLoaded && (
        <div
          className="absolute inset-0 animate-pulse"
          style={{ backgroundColor: placeholderColor }}
        />
      )}

      {/* Image with WebP support */}
      <picture>
        {webpSrc && (
          <source srcSet={webpSrc} type="image/webp" />
        )}
        <img
          src={src}
          alt={alt}
          loading={loading}
          width={width}
          height={height}
          onLoad={handleLoad}
          onError={handleError}
          style={imageStyle}
          decoding="async"
        />
      </picture>
    </div>
  );
}

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  objectFit: PropTypes.oneOf(['cover', 'contain', 'fill', 'none', 'scale-down']),
  objectPosition: PropTypes.string,
  aspectRatio: PropTypes.number, // e.g., 16/9, 4/3
  placeholderColor: PropTypes.string,
};

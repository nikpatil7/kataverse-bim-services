import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import OptimizedImage from './OptimizedImage';

const heightClasses = {
  sm: 'h-80',
  md: 'h-96',
  lg: 'h-[600px]',
  xl: 'h-[700px]',
};

const overlayClasses = {
  teal: 'from-primary/80 via-primary/60 to-transparent',
  navy: 'from-secondary/90 via-secondary/70 to-transparent',
  orange: 'from-accent/80 via-accent/60 to-transparent',
  gradient: 'from-primary/90 via-secondary/80 to-transparent',
  dark: 'from-black/80 via-black/60 to-transparent',
};

export default function HeroVector({
  vectorSrc,
  title,
  subtitle,
  ctaText,
  ctaLink,
  overlayColor = 'gradient',
  height = 'lg',
}) {
  return (
    <div className={`relative w-full ${heightClasses[height]} overflow-hidden`}>
      {/* Vector/Image Background */}
      <div className="absolute inset-0">
        <OptimizedImage
          src={vectorSrc}
          alt={title}
          loading="eager"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${overlayClasses[overlayColor]}`}
      />

      {/* Animated Pattern Overlay (subtle) */}
      <div className="absolute inset-0 pattern-grid opacity-20" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              {subtitle}
            </p>

            {ctaText && ctaLink && (
              <>
                {ctaLink.startsWith('http') || ctaLink.startsWith('mailto:') ? (
                  <a
                    href={ctaLink}
                    className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                    target={ctaLink.startsWith('http') ? '_blank' : undefined}
                    rel={ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {ctaText}
                  </a>
                ) : (
                  <Link
                    to={ctaLink}
                    className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    {ctaText}
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

HeroVector.propTypes = {
  vectorSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  overlayColor: PropTypes.oneOf(['teal', 'navy', 'orange', 'gradient', 'dark']),
  height: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
};

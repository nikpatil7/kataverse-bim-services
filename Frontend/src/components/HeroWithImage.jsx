import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import OptimizedImage from './OptimizedImage';

export default function HeroWithImage({
  imageSrc,
  title,
  subtitle,
  ctaText,
  ctaLink,
  height = '600px',
  overlayGradient = 'linear-gradient(to right, rgba(11, 31, 42, 0.95), rgba(11, 31, 42, 0.8), transparent)',
}) {
  return (
    <div className="relative w-full overflow-hidden" style={{ height }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src={imageSrc}
          alt={title}
          loading="eager"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Overlay Gradient */}
      <div 
        className="absolute inset-0" 
        style={{ background: overlayGradient }}
      />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {subtitle}
            </p>

            {ctaText && ctaLink && (
              <>
                {ctaLink.startsWith('http') || ctaLink.startsWith('mailto:') ? (
                  <a
                    href={ctaLink}
                    className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl"
                    target={ctaLink.startsWith('http') ? '_blank' : undefined}
                    rel={ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {ctaText}
                  </a>
                ) : (
                  <Link
                    to={ctaLink}
                    className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl"
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

HeroWithImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  height: PropTypes.string,
  overlayGradient: PropTypes.string,
};

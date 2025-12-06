import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import OptimizedImage from './OptimizedImage';

export default function ServiceCardWithImage({
  title,
  description,
  imageSrc,
  imageAlt,
  link,
  features,
}) {
  const CardContent = (
    <div className="relative h-80 rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-shadow">
      {/* Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src={imageSrc}
          alt={imageAlt}
          aspectRatio={1}
          objectFit="cover"
          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-200 mb-4 line-clamp-2">{description}</p>

        {features && features.length > 0 && (
          <ul className="text-xs space-y-1 mb-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <span className="text-accent mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center text-accent font-semibold group-hover:text-orange-300 transition-colors">
          Learn More →
        </div>
      </div>
    </div>
  );

  return link ? (
    <Link to={link} className="block">
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
}

ServiceCardWithImage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  link: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
};

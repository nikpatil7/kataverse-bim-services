import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import OptimizedImage from './OptimizedImage';

export default function ImageGallery({ images, columns = 3 }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedImage]);

  const gridClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns] || 'md:grid-cols-3';

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid grid-cols-1 gap-4 ${gridClass}`}>
        {images.map((image, idx) => (
          <div
            key={idx}
            className="relative h-64 rounded-lg overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all"
            onClick={() => setSelectedImage(image)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedImage(image);
              }
            }}
            aria-label={`View ${image.title}`}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              aspectRatio={1}
              objectFit="cover"
              className="w-full h-full group-hover:scale-110 transition-transform duration-300"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity">
                🔍
              </span>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <p className="text-white font-semibold text-sm">{image.title}</p>
              <p className="text-gray-300 text-xs">{image.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-accent transition-colors z-10"
              aria-label="Close lightbox"
            >
              ✕
            </button>

            {/* Image Container */}
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
              <OptimizedImage
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                loading="eager"
                className="w-full h-auto max-h-[80vh]"
                objectFit="contain"
              />
            </div>

            {/* Image Info */}
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-bold mb-1">
                {selectedImage.title}
              </h3>
              <p className="text-gray-300 text-sm">{selectedImage.category}</p>
            </div>

            {/* Navigation Hint */}
            <p className="text-center text-gray-400 text-xs mt-4">
              Press ESC or click outside to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  columns: PropTypes.oneOf([2, 3, 4]),
};

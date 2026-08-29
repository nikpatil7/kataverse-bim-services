import { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaStar, FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { getProjectById, getProjectBySlug } from '../utils/api';
import SEO from '../components/SEO';

export default function ProjectDetail() {
  const { id, slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError('');
        const res = slug ? await getProjectBySlug(slug) : await getProjectById(id);
        setProject(res.data || res);
      } catch (e) {
        setError(e.response?.data?.error || 'Failed to load project');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id, slug]);

  // If we loaded via id and project has a slug, redirect to canonical slug URL
  useEffect(() => {
    if (id && project?.slug) {
      navigate(`/projects/slug/${project.slug}`, { replace: true });
    }
  }, [id, project?.slug, navigate]);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.slug, project?._id]);

  // Handle previous image
  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? (project?.images?.length || 1) - 1 : prev - 1
    );
  };

  // Handle next image
  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === (project?.images?.length || 1) - 1 ? 0 : prev + 1
    );
  };

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project?.images?.length]);

  // Touch/swipe handling
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    
    const distance = touchStart - e.changedTouches[0].clientX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handleNextImage();
    if (isRightSwipe) handlePrevImage();
  };

  const rating = project?.client?.rating || 5;
  const tags = project?.tags || [];
  const metrics = project?.metrics ? Object.fromEntries(Object.entries(project.metrics)) : {};

  return (
    <div>
      <SEO
        title={project ? `${project.title} — KataVerse BIM Services` : 'Project — KataVerse BIM Services'}
        description={project?.description}
        url={`https://www.kataversebim.com/projects/${slug || id}`}
        image={project?.images?.[0] || '/kataverse-og-image.png'}
        jsonLd={project ? {
          '@context': 'https://schema.org',
          '@type': 'Project',
          name: project.title,
          description: project.description,
          category: project.category,
          image: project.images?.[0],
          url: `https://www.kataversebim.in/projects/${project.slug || id}`,
          provider: {
            '@type': 'Organization',
            name: 'Mechtron Global',
              url: 'https://www.kataversebim.in'
          }
        } : null}
      />

      <section className="relative py-16 bg-gradient-to-r from-primary to-[#0a2f47] text-white">
        <div className="container-custom">
          <Link to="/projects" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6">
            <FaArrowLeft /> Back to Projects
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">{project?.title || 'Loading...'}</h1>
          <p className="text-white/90 mt-3 max-w-3xl">{project?.description}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {error && (
            <div className="max-w-3xl mx-auto mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">{error}</div>
          )}
          {loading && <div className="text-center text-gray-600 mb-6">Loading project...</div>}
          {project && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main */}
              <div className="lg:col-span-2">
                {/* Image Carousel */}
                {project.images && project.images.length > 0 ? (
                  <div className="mb-6">
                    {/* Main carousel */}
                    <div
                      ref={carouselRef}
                      className="relative h-72 md:h-96 rounded-xl mb-4 overflow-hidden bg-gray-200 group cursor-grab active:cursor-grabbing"
                      onTouchStart={handleTouchStart}
                      onTouchEnd={handleTouchEnd}
                    >
                      <img
                        src={project.images[currentImageIndex]}
                        alt={`${project.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover transition-opacity duration-300"
                        loading="lazy"
                      />

                      {/* Navigation arrows */}
                      {project.images.length > 1 && (
                        <>
                          <button
                            onClick={handlePrevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition z-10 hidden group-hover:flex items-center justify-center"
                            aria-label="Previous image"
                          >
                            <FaChevronLeft className="text-xl" />
                          </button>
                          <button
                            onClick={handleNextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition z-10 hidden group-hover:flex items-center justify-center"
                            aria-label="Next image"
                          >
                            <FaChevronRight className="text-xl" />
                          </button>
                        </>
                      )}

                      {/* Image counter */}
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-medium">
                        {currentImageIndex + 1} / {project.images.length}
                      </div>
                    </div>

                    {/* Dot indicators */}
                    {project.images.length > 1 && (
                      <div className="flex justify-center gap-2 mb-4">
                        {project.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleThumbnailClick(idx)}
                            className={`transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-accent ${
                              idx === currentImageIndex
                                ? 'bg-accent w-3 h-3'
                                : 'bg-gray-300 hover:bg-gray-400 w-2 h-2'
                            }`}
                            aria-label={`Go to image ${idx + 1}`}
                            aria-current={idx === currentImageIndex}
                          />
                        ))}
                      </div>
                    )}

                    {/* Thumbnail gallery */}
                    {project.images.length > 1 && (
                      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
                        {project.images.map((image, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleThumbnailClick(idx)}
                            className={`relative h-20 rounded-lg overflow-hidden border-2 transition focus:outline-none focus:ring-2 focus:ring-accent ${
                              idx === currentImageIndex
                                ? 'border-accent'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            aria-label={`Image ${idx + 1}`}
                            aria-current={idx === currentImageIndex}
                          >
                            <img
                              src={image}
                              alt={`Thumbnail ${idx + 1}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            {idx === currentImageIndex && (
                              <div className="absolute inset-0 bg-accent/20"></div>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-72 rounded-xl mb-6 overflow-hidden bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
                    {project.title}
                  </div>
                )}

                {/* Metrics */}
                {metrics && Object.keys(metrics).length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {Object.entries(metrics).map(([key, value]) => (
                      <div key={key} className="bg-light p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                {tags.length > 0 && (
                  <div className="flex gap-2 flex-wrap mb-8">
                    {tags.map((tag, idx) => (
                      <span key={idx} className="px-4 py-2 bg-primary bg-opacity-10 text-primary rounded-lg font-medium">{tag}</span>
                    ))}
                  </div>
                )}

                {/* Client Testimonial */}
                {project.client?.testimonial && (
                  <div className="bg-light p-6 rounded-lg border-l-4 border-accent">
                    <div className="flex gap-1 text-accent mb-2">
                      {Array.from({ length: rating }).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-2">"{project.client.testimonial}"</p>
                    {project.client.name && (
                      <p className="text-sm text-gray-600">— {project.client.name}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="bg-light p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-secondary mb-4">Project Info</h3>
                  <div className="space-y-2 text-gray-700">
                    <div><span className="font-semibold">Category:</span> {project.category}</div>
                    {/* <div><span className="font-semibold">Featured:</span> {project.featured ? 'Yes' : 'No'}</div> */}
                    <div className="flex items-center gap-2"><span className="font-semibold">Rating:</span> {Array.from({ length: rating }).map((_, i) => (<FaStar key={i} className="text-accent" />))}</div>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

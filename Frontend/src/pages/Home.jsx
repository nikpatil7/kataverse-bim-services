import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import SEO from '../components/SEO';
import { getProjects } from '../utils/api';
import FadeIn from '../components/animations/FadeIn';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';
import imageConfig from '../config/imageConfig';

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  //  State for CTA button hover effect
  const [isCtaHovering, setIsCtaHovering] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError('');
        const res = await getProjects(null, 1, 10); // Get first 10 projects
        const list = res.data || [];
        // Show first 3 projects without featured filtering
        setFeatured(list.slice(0, 3));
      } catch (e) {
        setError(e.response?.data?.error || 'Failed to load featured projects');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);
  return (
    <div>
      <SEO
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'KataVerse BIM Services',
            url: 'https://www.kataversebim.in/',
            logo: '/favicon.svg',
            sameAs: [
              'https://www.linkedin.com/company/kataverse-bim-services/',
            ],
            contactPoint: [{
              '@type': 'ContactPoint',
              contactType: 'customer support',
              email: 'info@kataversebim.in',
              telephone: '+1-555-123-4567',
              areaServed: 'Worldwide',
              availableLanguage: ['English']
            }]
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'KataVerse BIM Services',
            url: 'https://www.kataversebim.in/',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://www.kataversebim.in/?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          }
        ]}
      />
      <Hero />
      <Services />
      <Stats />
      
      {/* Featured Projects Preview */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Very Subtle Technical Pattern - Minimal */}
        <div className="absolute inset-0 opacity-3">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="blueprint-grid-projects-preview" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#14B8A6" strokeWidth="0.2" opacity="0.08"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blueprint-grid-projects-preview)" />
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
              Recent Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of successful BIM implementations across diverse sectors
            </p>
          </FadeIn>

          {error && (
            <div className="max-w-3xl mx-auto mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
              {error}
            </div>
          )}

          {loading && (
            <div className="text-center text-gray-600 mb-6">Loading featured projects...</div>
          )}

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((p) => (
              <StaggerItem key={p._id}>
                <Link 
                  to={p.slug ? `/projects/slug/${p.slug}` : `/projects/${p._id}`} 
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group block"
                >
                  {/* Image */}
                  {p.images && p.images.length > 0 ? (
                    <>
                    <img
                      src={p.images[0]}
                      alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const fallback = e.target.nextElementSibling;
                          if (fallback) {
                            fallback.classList.remove('hidden');
                            fallback.classList.add('flex');
                          }
                        }}
                      />
                      {/* Fallback gradient */}
                      <div className="w-full h-full bg-gradient-to-br from-primary via-[#0a2f47] to-secondary hidden items-center justify-center text-white">
                        <span className="text-xl font-bold text-center px-4">{p.title}</span>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary via-[#0a2f47] to-secondary flex items-center justify-center text-white">
                      <span className="text-xl font-bold text-center px-4">{p.title}</span>
                    </div>
                  )}
                  
                  {/* Dark overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  {/* Project Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-1 drop-shadow-lg">
                      {p.title}
                    </h3>
                    {p.category && (
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-semibold border border-white/30">
                      {p.category}
                      </span>
                    )}
                  </div>
                  
                  {/* Image count indicator */}
                  {p.images && p.images.length > 1 && (
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg z-20 flex items-center gap-2">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white text-sm font-semibold">
                        {p.images.length}
                      </span>
                    </div>
                  )}
              </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3} className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 bg-accent text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-accent/90 hover:shadow-2xl hover:shadow-accent/30 hover:scale-105 transition-all shadow-lg group"
            >
              View All Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>


{/* ===== Enhanced Section Separator ===== */}
<div className="relative h-16 md:h-20 bg-gradient-to-b from-[#f1f5f9] via-white to-[#e0e7ef] overflow-hidden flex items-center justify-center">
  {/* Soft vertical fade, more visible contrast */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#e0e7ef] via-white/80 to-[#f1f5f9] pointer-events-none" />

  {/* Center technical divider, thicker and with strong color */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative w-2/3 md:w-1/2 h-1 bg-gradient-to-r from-transparent via-[#14B8A6] to-transparent shadow-xl">
      {/* Accent node, larger, with strong shadow and border */}
      <span className="absolute left-1/2 -translate-x-1/2 -top-2 w-5 h-5 rounded-full bg-accent shadow-2xl border-4 border-white/80 ring-2 ring-accent/40 animate-pulse" />
    </div>
  </div>

  {/* Subtle diagonal line pattern */}
  <svg
    className="absolute inset-0 w-full h-full opacity-15"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="theme-separator-lines"
        width="32" height="32" patternUnits="userSpaceOnUse" patternTransform="rotate(20)"
      >
        <line x1="0" y1="0" x2="0" y2="32" stroke="#2D7A8E" strokeWidth="1.2" strokeDasharray="6 10" opacity="0.18" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#theme-separator-lines)" />
  </svg>
</div>


      <Testimonials />

      {/* ✅ IMPROVED CTA SECTION 1 */}
      <section 
        className="section-padding bg-gradient-to-br from-[#0B1F2A] via-[#0B1F2A]/80 to-[#0B1F2A] text-white relative overflow-hidden"
        aria-label="Call to action section"
      >
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `url('${imageConfig.cta.coordination}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
            role="img"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F2A]/60 via-[#0B1F2A]/50 to-[#0B1F2A]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A]/45 via-transparent to-transparent" />
        </div>

        {/* ✅ OPTIMIZED: Single SVG Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="cta-home-1-pattern"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="25" cy="25" r="1.5" fill="white" opacity="0.1" />
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="white"
                strokeWidth="0.3"
                opacity="0.05"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-home-1-pattern)" />
        </svg>

        {/* Animated Accent Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-br from-[#14B8A6]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 -right-40 w-96 h-96 bg-gradient-to-tl from-[#FF8C42]/5 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-4xl mx-auto py-12 md:py-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                Ready to Transform Your BIM Workflow?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-10 max-w-3xl leading-relaxed font-medium drop-shadow-md">
                Let's discuss how our BIM expertise can reduce clashes, cut rework costs, and keep your next construction project on schedule.
              </p>
              
              {/* ✅ IMPROVED: CTA Button with State-based hover */}
              <div className="mb-12 w-full flex justify-center">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 sm:px-10 md:px-12 py-4 md:py-5 text-lg md:text-xl font-bold text-[#0B1F2A] rounded-lg transition-all duration-300 ease-out overflow-hidden"
                  onMouseEnter={() => setIsCtaHovering(true)}
                  onMouseLeave={() => setIsCtaHovering(false)}
                  aria-label="Get free consultation"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-[#14B8A6] via-[#2D7A8E] to-[#14B8A6] rounded-lg transition-all duration-300 ${
                      isCtaHovering
                        ? 'shadow-2xl shadow-[#14B8A6]/40'
                        : 'shadow-lg'
                    }`}
                    style={{
                      backgroundSize: '200% 100%',
                      backgroundPosition: isCtaHovering ? '100% 0' : '0 0',
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg"
                    style={{
                      transform: isCtaHovering
                        ? 'translateX(100%)'
                        : 'translateX(-100%)',
                      transition: 'transform 0.8s ease-out',
                    }}
                  />
                  <span className="relative z-10 flex items-center gap-2 group-hover:scale-105 transition-transform">
                    Get Free Consultation
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 text-sm md:text-base text-gray-200">
                <div className="flex items-center gap-2 backdrop-blur-sm px-3 py-2">
                  <svg className="w-5 h-5 text-[#14B8A6] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2 backdrop-blur-sm px-3 py-2">
                  <svg className="w-5 h-5 text-[#14B8A6] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>24hr Response</span>
                </div>
                <div className="flex items-center gap-2 backdrop-blur-sm px-3 py-2">
                  <svg className="w-5 h-5 text-[#14B8A6] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Expert Team</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import SectionDivider from '../components/SectionDivider';
import AnimatedBackground from '../components/AnimatedBackground';
import VectorBackground from '../components/VectorBackground';
import ServiceCardWithImage from '../components/ServiceCardWithImage';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import SEO from '../components/SEO';
import { getProjects } from '../utils/api';
import FadeIn from '../components/animations/FadeIn';
import StaggerContainer, { StaggerItem } from '../components/animations/StaggerContainer';

const featuredServices = [
  {
    title: 'MEP BIM Modeling',
    description: 'Comprehensive 3D modeling for mechanical, electrical, and plumbing systems',
    imageSrc: '/images/services/mep-bim-model.jpg',
    imageAlt: 'MEP BIM Model',
    link: '/services',
    features: ['Revit MEP', 'LOD 300-500', 'As-Built Models'],
  },
  {
    title: 'Clash Detection & Coordination',
    description: 'Advanced conflict identification and resolution before construction begins',
    imageSrc: '/images/services/clash-detection-coordination.jpg',
    imageAlt: 'Clash Detection',
    link: '/services',
    features: ['Navisworks', 'Issue Reports', '87% Rework Reduction'],
  },
  {
    title: 'CAD to BIM Conversion',
    description: 'Transform legacy CAD drawings into intelligent BIM models',
    imageSrc: '/images/services/BIM-XS-CAD.jpg',
    imageAlt: 'CAD to BIM',
    link: '/services',
    features: ['Legacy Conversion', 'Model Accuracy', 'Documentation'],
  },
];

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
            name: 'Mechtron Global',
            url: 'https://www.mechtronglobal.com/',
            logo: '/favicon.svg',
            sameAs: [
              'https://www.linkedin.com/company/mechtronglobal',
            ],
            contactPoint: [{
              '@type': 'ContactPoint',
              contactType: 'customer support',
              email: 'info@mechtronglobal.com',
              telephone: '+1-555-123-4567',
              areaServed: 'Worldwide',
              availableLanguage: ['English']
            }]
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Mechtron Global',
            url: 'https://www.mechtronglobal.com/',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://www.mechtronglobal.com/?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          }
        ]}
      />
      <Hero />
      <Services />
      
      <SectionDivider variant="wave" color="#F5F5F5" />

      {/* Featured Services with Images */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
              Explore Our Core Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional BIM solutions backed by cutting-edge technology and expert coordination
            </p>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, idx) => (
              <StaggerItem key={idx}>
                <ServiceCardWithImage {...service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      
      <SectionDivider variant="curve" color="#F9FAFB" flip />
      
      <Stats />
      
      {/* Featured Projects Preview */}
      <section className="section-padding bg-white pattern-grid">
        <div className="container-custom">
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

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((p) => (
              <StaggerItem key={p._id}>
                <Link 
                  to={p.slug ? `/projects/slug/${p.slug}` : `/projects/${p._id}`} 
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group block h-full"
                >
                {/* Image with overlay and badge */}
                <div className="relative h-56 overflow-hidden">
                  {p.images && p.images.length > 0 ? (
                    <img
                      src={p.images[0]}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary via-[#0a2f47] to-secondary flex items-center justify-center text-white">
                      <span className="text-xl font-bold">{p.title}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  {/* Key Metric Badge */}
                  {p.metrics && Object.keys(p.metrics).length > 0 && (
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg text-right">
                      <p className="text-accent font-bold text-lg leading-none">
                        {Object.entries(p.metrics)[0][1]}
                      </p>
                      <p className="text-gray-700 text-xs uppercase tracking-wide">
                        {Object.entries(p.metrics)[0][0]}
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors line-clamp-1 flex-1">
                      {p.title}
                    </h3>
                    <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full font-semibold ml-2">
                      {p.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {p.description}
                  </p>
                  
                  {/* Metrics */}
                  {p.metrics && Object.keys(p.metrics).length > 1 && (
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {Object.entries(p.metrics)
                        .slice(0, 4)
                        .map(([key, value]) => (
                          <div key={key} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                            <p className="text-[11px] uppercase tracking-wide text-gray-500">{key}</p>
                            <p className="text-sm font-semibold text-secondary">{value}</p>
                          </div>
                        ))}
                    </div>
                  )}
                  
                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap mb-4">
                    {(p.tags || []).slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-full border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Details / Case Study */}
                  <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold text-sm group-hover:text-accent transition-colors">
                        View Project Details
                      </span>
                      <FaArrowRight className="text-primary text-sm group-hover:translate-x-2 group-hover:text-accent transition-all" />
                    </div>
                    {p.caseStudyUrl && (
                      <a
                        href={p.caseStudyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-secondary border border-secondary/20 rounded-lg px-3 py-2 hover:bg-secondary hover:text-white transition"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaDownload className="text-sm" />
                        Download Case Study (PDF)
                      </a>
                    )}
                  </div>
                </div>
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

      <section 
        className="relative py-20"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(249, 250, 251, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), url(/images/team/bim-consulting-1-1.jpg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <Testimonials />
      </section>

      <SectionDivider variant="curve" color="#0B1F2A" flip={true} />

      {/* Final CTA with Animated Background */}
      <VectorBackground
        vectorSrc="/vectors/patterns/5779c9_42da9a288609460fabca90b54324f5d5~mv2.avif"
        opacity={0.2}
        className="section-padding bg-gradient-to-r from-primary to-secondary text-white overflow-hidden relative"
        overlayGradient="linear-gradient(135deg, rgba(45, 122, 142, 0.95) 0%, rgba(11, 31, 42, 0.95) 100%)"
      >
        <AnimatedBackground variant="shapes" />
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your BIM Workflow?
            </h2>
            <p className="text-lg mb-8 text-white text-opacity-90 max-w-2xl mx-auto">
              Let's discuss how our BIM expertise can reduce clashes, cut rework costs, and keep your next construction project on schedule.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 hover:scale-105 transition-all shadow-xl"
            >
              Get Free Consultation
              <FaArrowRight />
            </Link>
          </FadeIn>
        </div>
      </VectorBackground>
    </div>
  );
}

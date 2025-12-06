import { FaBuilding, FaCogs, FaSearch, FaCube, FaCheckCircle } from 'react-icons/fa';
import SEO from '../components/SEO';
import SectionDivider from '../components/SectionDivider';
import ServiceCardWithImage from '../components/ServiceCardWithImage';

const servicesData = [
  {
    icon: <FaBuilding />,
    title: 'BIM Modeling',
    description: 'Comprehensive 3D modeling services for residential, commercial, and high-rise projects. Our expert modelers deliver precise, detailed models that serve as the foundation for successful project execution.',
    features: [
      'MEPF BIM Modeling',
      'Structural BIM Modeling',
      'Residential & Commercial Projects',
      'As-Built Documentation',
      'LOD 300-500 Modeling',
      'Parametric Design'
    ],
    benefits: [
      'Enhanced project visualization',
      'Improved coordination between disciplines',
      'Reduced design errors',
      'Faster project delivery'
    ]
  },
  {
    icon: <FaCogs />,
    title: 'MEP Coordination',
    description: 'Expert coordination of mechanical, electrical, and plumbing systems to ensure seamless integration and optimal building performance. We identify conflicts early and provide solutions that work.',
    features: [
      'HVAC System Coordination',
      'Electrical System Integration',
      'Plumbing & Piping Coordination',
      'Fire Protection Systems',
      'Multi-Discipline Coordination',
      'Energy Analysis'
    ],
    benefits: [
      'Optimized system performance',
      'Reduced installation time',
      'Lower operational costs',
      'Improved energy efficiency'
    ]
  },
  {
    icon: <FaSearch />,
    title: 'Clash Detection',
    description: 'Advanced clash detection and analysis using industry-leading tools to identify conflicts before construction begins. Save time, money, and avoid costly rework on site.',
    features: [
      'Hard Clash Detection',
      'Soft Clash Detection',
      'Clearance Analysis',
      'Clash Reports & Documentation',
      'Resolution Recommendations',
      'Weekly Coordination Meetings'
    ],
    benefits: [
      '87% reduction in rework',
      'Earlier issue identification',
      'Cost savings up to 30%',
      'Faster project timelines'
    ]
  },
  {
    icon: <FaCube />,
    title: '3D Coordination & Visualization',
    description: 'Photorealistic 3D renders, virtual walkthroughs, and coordination drawings that bring your project to life. Perfect for client presentations, stakeholder approvals, and marketing.',
    features: [
      'Photorealistic Rendering',
      'Virtual Reality Walkthroughs',
      'Animation & Flyovers',
      'Construction Sequencing',
      'Material & Lighting Studies',
      'Marketing Visualizations'
    ],
    benefits: [
      'Faster client approvals',
      'Better stakeholder communication',
      'Enhanced marketing materials',
      'Reduced misunderstandings'
    ]
  }
];

const serviceCards = [
  {
    title: 'MEP Modeling & Design',
    description: 'Complete 3D MEP coordination and clash detection for optimal building performance',
    imageSrc: '/images/services/mep-bim-model.jpg',
    imageAlt: 'MEP BIM Model',
    link: '/contact',
    features: ['3D Modeling', 'Clash Detection', 'Coordination'],
  },
  {
    title: 'BIM Coordination',
    description: 'Multi-discipline coordination and conflict resolution for seamless integration',
    imageSrc: '/images/services/clash-detection-coordination.jpg',
    imageAlt: 'Clash Detection',
    link: '/contact',
    features: ['Clash Analysis', 'Trade Coordination', 'Conflict Resolution'],
  },
  {
    title: 'CAD to BIM Conversion',
    description: 'Transform existing CAD drawings into intelligent BIM models',
    imageSrc: '/images/services/BIM-XS-CAD.jpg',
    imageAlt: 'CAD to BIM Conversion',
    link: '/contact',
    features: ['Legacy Conversion', 'Model Accuracy', 'Documentation'],
  },
  {
    title: 'MEP Shop Drawings',
    description: 'Detailed fabrication and installation drawings from BIM models',
    imageSrc: '/images/services/MEP-drafting-1.jpg',
    imageAlt: 'MEP Shop Drawings',
    link: '/contact',
    features: ['Precision Details', 'Installation Guides', 'Material Schedules'],
  },
  {
    title: 'BIM Modeling Services',
    description: 'Expert BIM modeling for commercial and retail MEP solutions',
    imageSrc: '/images/services/mep-modeling.jpg',
    imageAlt: 'BIM Modeling',
    link: '/contact',
    features: ['Commercial Design', 'Retail Projects', 'Specialized Systems'],
  },
  {
    title: 'MEPF Services',
    description: 'Comprehensive mechanical, electrical, plumbing, and fire protection services',
    imageSrc: '/images/services/mepf-services.jpg',
    imageAlt: 'MEPF Services',
    link: '/contact',
    features: ['Full MEP Design', 'Fire Protection', 'System Integration'],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <SEO
        title="BIM Services — Mechtron Global"
        description="BIM modeling, MEP coordination, clash detection, and 3D visualization services tailored to commercial, residential, and industrial projects."
        url="https://www.mechtronglobal.com/services"
      />
      {/* Hero Section with Blueprint Pattern */}
      <section className="relative py-16 px-4 md:py-20 text-white overflow-hidden bg-[#0B1F2A]">
        {/* Blueprint pattern overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 95%, rgba(45, 122, 142, 0.5) 96%), linear-gradient(90deg, transparent 95%, rgba(45, 122, 142, 0.5) 96%)',
            backgroundSize: '32px 32px'
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F2A] via-primary/80 to-[#0B1F2A]/95 pointer-events-none" />
        
        <div className="container-custom text-center py-20 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our BIM Services
          </h1>
          <p className="text-lg md:text-xl text-white text-opacity-90 max-w-3xl mx-auto">
            Comprehensive Building Information Modeling solutions tailored to your project needs
          </p>
        </div>
      </section>

      <SectionDivider variant="wave" color="#F9FAFB" />

      {/* Service Cards Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
              Explore Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional BIM and MEP services backed by years of experience and cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service, idx) => (
              <ServiceCardWithImage key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="curve" flip color="#FFFFFF" />

      {/* Services Details */}
      {servicesData.map((service, index) => (
        <section
          key={index}
          className={`section-padding ${index % 2 === 0 ? 'bg-white pattern-grid' : 'bg-light'}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="text-5xl text-primary mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
                  {service.title}
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <h3 className="text-xl font-semibold mb-4 text-secondary">
                  Key Features
                </h3>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-gradient-to-br from-primary to-[#0a2f47] p-8 rounded-xl text-white">
                  <h3 className="text-2xl font-semibold mb-6">
                    Benefits
                  </h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">{idx + 1}</span>
                        </div>
                        <span className="text-white text-opacity-95">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 text-white text-opacity-90 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your BIM requirements
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-accent px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}

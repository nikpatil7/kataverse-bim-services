// src/pages/Services.jsx (React + Vite)
// IMPROVED CTA SECTION - Direct refactor, no separate component

import { FaBuilding, FaCogs, FaSearch, FaCube, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

const servicesData = [
  {
    icon: <FaBuilding />,
    title: 'BIM Modeling',
    description:
      'Comprehensive 3D modeling services for residential, commercial, and high-rise projects. Our expert modelers deliver precise, detailed models that serve as the foundation for successful project execution.',
    features: [
      'MEPF BIM Modeling',
      'Structural BIM Modeling',
      'Residential & Commercial Projects',
      'As-Built Documentation',
      'LOD 300-500 Modeling',
      'Parametric Design',
    ],
    benefits: [
      'Enhanced project visualization',
      'Improved coordination between disciplines',
      'Reduced design errors',
      'Faster project delivery',
    ],
  },
  {
    icon: <FaCogs />,
    title: 'MEP Coordination',
    description:
      'Expert coordination of mechanical, electrical, and plumbing systems to ensure seamless integration and optimal building performance. We identify conflicts early and provide solutions that work.',
    features: [
      'HVAC System Coordination',
      'Electrical System Integration',
      'Plumbing & Piping Coordination',
      'Fire Protection Systems',
      'Multi-Discipline Coordination',
      'Energy Analysis',
    ],
    benefits: [
      'Optimized system performance',
      'Reduced installation time',
      'Lower operational costs',
      'Improved energy efficiency',
    ],
  },
  {
    icon: <FaSearch />,
    title: 'Clash Detection',
    description:
      'Advanced clash detection and analysis using industry-leading tools to identify conflicts before construction begins. Save time, money, and avoid costly rework on site.',
    features: [
      'Hard Clash Detection',
      'Soft Clash Detection',
      'Clearance Analysis',
      'Clash Reports & Documentation',
      'Resolution Recommendations',
      'Weekly Coordination Meetings',
    ],
    benefits: [
      '87% reduction in rework',
      'Earlier issue identification',
      'Cost savings up to 30%',
      'Faster project timelines',
    ],
  },
  {
    icon: <FaCube />,
    title: '3D Coordination & Visualization',
    description:
      'Photorealistic 3D renders, virtual walkthroughs, and coordination drawings that bring your project to life. Perfect for client presentations, stakeholder approvals, and marketing.',
    features: [
      'Photorealistic Rendering',
      'Virtual Reality Walkthroughs',
      'Animation & Flyovers',
      'Construction Sequencing',
      'Material & Lighting Studies',
      'Marketing Visualizations',
    ],
    benefits: [
      'Faster client approvals',
      'Better stakeholder communication',
      'Enhanced marketing materials',
      'Reduced misunderstandings',
    ],
  },
];

export default function ServicesPage() {
  // ✅ State for button hover effect (replaced inline event handlers)
  const [isCtaHovering, setIsCtaHovering] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#0B1F2A] via-[#0B1F2A] to-[#0B1F2A] text-white overflow-hidden">
        {/* Background Image - MEPF Services Theme */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "url('/images/services/mep-bim-model.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(100%) brightness(0.2)',
            }}
          />
          <div
            className="absolute inset-0 opacity-12"
            style={{
              backgroundImage:
                "url('/images/services/clash-detection-coordination.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(100%) brightness(0.3)',
              mixBlendMode: 'screen',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F2A] via-[#0B1F2A]/95 to-[#0B1F2A]" />
        </div>

        {/* ✅ OPTIMIZED: Single SVG Pattern (was 3 duplicate patterns) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="blueprint-grid-services"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#14B8A6"
                strokeWidth="0.5"
                opacity="0.4"
              />
              <circle cx="0" cy="0" r="1" fill="#14B8A6" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid-services)" />
        </svg>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4 py-8 md:py-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-[#14B8A6]/20 backdrop-blur-sm border border-[#14B8A6]/30 rounded-full text-[#14B8A6] text-xs font-semibold uppercase tracking-wider">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Our Services</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Our BIM Services
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Comprehensive Building Information Modeling solutions tailored to
              your project needs
            </p>

            {/* Technical Indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div>
                <span>MEPF Services</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div>
                <span>Coordination</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div>
                <span>3D Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      {servicesData.map((service, index) => (
        <section
          key={index}
          className={`section-padding relative overflow-hidden ${
            index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-b from-gray-50 to-white'
          }`}
        >
          {/* ✅ OPTIMIZED: Single SVG pattern instead of image */}
          <svg
            className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id={`service-pattern-${index}`}
                x="0"
                y="0"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="25" cy="25" r="1" fill="currentColor" opacity="0.1" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill={`url(#service-pattern-${index})`}
              className="text-[#2D7A8E]"
            />
          </svg>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#2D7A8E] to-[#14B8A6] rounded-2xl text-white text-4xl mb-6 shadow-lg">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0B1F2A]">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <h3 className="text-xl font-semibold mb-5 text-[#0B1F2A]">
                  Key Features
                </h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-[#14B8A6] mt-1 flex-shrink-0 text-lg" />
                      <span className="text-gray-700 text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits Card */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-gradient-to-br from-[#2D7A8E] via-[#0B1F2A] to-[#2D7A8E] p-8 lg:p-10 rounded-2xl text-white shadow-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-[#14B8A6] to-[#FF8C42] rounded-full"></span>
                    Benefits
                  </h3>
                  <ul className="space-y-5">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#14B8A6] to-[#2D7A8E] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg">
                          <span className="text-white text-sm font-bold">
                            {idx + 1}
                          </span>
                        </div>
                        <span className="text-white text-base leading-relaxed pt-1">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ✅ IMPROVED CTA SECTION */}
      <section className="section-padding bg-gradient-to-br from-[#0B1F2A] via-[#0B1F2A]/80 to-[#0B1F2A] text-white relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          {/* Background Image */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url('/images/mechtron-images/coordination-collab.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
            role="img"
            aria-hidden="true"
          />

          {/* Primary Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F2A]/90 via-[#0B1F2A]/85 to-[#0B1F2A]/90" />

          {/* Bottom Fade Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A]/80 via-transparent to-transparent" />
        </div>

        {/* ✅ OPTIMIZED: Single SVG Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="cta-grid-pattern"
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
          <rect width="100%" height="100%" fill="url(#cta-grid-pattern)" />
        </svg>

        {/* Animated Accent Blobs */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-br from-[#14B8A6]/10 to-transparent rounded-full blur-3xl animate-blob"></div>
          <div
            className="absolute bottom-1/4 -right-40 w-96 h-96 bg-gradient-to-tl from-[#FF8C42]/5 to-transparent rounded-full blur-3xl animate-blob"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-4xl mx-auto">
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Ready to Transform Your Projects?
            </h2>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-10 max-w-3xl leading-relaxed font-medium drop-shadow-md">
              Schedule a free consultation with our BIM experts to discuss your
              project requirements and discover how we can deliver measurable
              results.
            </p>

            {/* ✅ IMPROVED: CTA Button with State-based hover */}
            <div className="mb-12 w-full flex justify-center">
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-8 sm:px-10 md:px-12 py-4 md:py-5 text-lg md:text-xl font-bold text-[#0B1F2A] rounded-lg transition-all duration-300 ease-out overflow-hidden"
                onMouseEnter={() => setIsCtaHovering(true)}
                onMouseLeave={() => setIsCtaHovering(false)}
              >
                {/* Button Background Gradient */}
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

                {/* Shine Effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg"
                  style={{
                    transform: isCtaHovering
                      ? 'translateX(100%)'
                      : 'translateX(-100%)',
                    transition: 'transform 0.8s ease-out',
                  }}
                />

                {/* Button Text and Icon */}
                <span className="relative z-10 flex items-center gap-2 group-hover:scale-105 transition-transform">
                  Schedule Free Consultation
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 text-sm md:text-base text-gray-200">
              <div className="flex items-center gap-2 backdrop-blur-sm px-3 py-2">
                <svg
                  className="w-5 h-5 text-[#14B8A6] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-sm px-3 py-2">
                <svg
                  className="w-5 h-5 text-[#14B8A6] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>24hr Response</span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-sm px-3 py-2">
                <svg
                  className="w-5 h-5 text-[#14B8A6] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Expert Team</span>
              </div>
            </div>

            {/* Optional: Additional Contact Info */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm text-gray-300 mb-2">
                Questions? Contact us at{' '}
                <a
                  href="mailto:info@kataversebim.in"
                  className="text-[#14B8A6] hover:text-[#14B8A6]/80 font-semibold transition-colors"
                >
                  info@kataversebim.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

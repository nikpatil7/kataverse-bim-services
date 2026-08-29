import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaBuilding,
  FaCogs,
  FaSearch,
  FaCube,
  FaCheckCircle,
} from "react-icons/fa";
import SEO from "../components/SEO";
import siteConfig from "../config/siteConfig";
import imageConfig from "../config/imageConfig";

// Parallax hook for scroll-based image movement
function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        const elementTop = rect.top + scrollY;
        const windowHeight = window.innerHeight;

        const scrolled = scrollY - (elementTop - windowHeight);
        const parallaxOffset = scrolled * speed;
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return [ref, offset];
}

const servicesData = [
  {
    icon: <FaBuilding />,
    title: "BIM Modeling",
    description:
      "Comprehensive 3D modeling services for residential, commercial, and high-rise projects. Our expert modelers deliver precise, detailed models that serve as the foundation for successful project execution.",
    features: [
      "MEPF BIM Modeling",
      "Structural BIM Modeling",
      "Residential & Commercial Projects",
      "As-Built Documentation",
      "LOD 300-500 Modeling",
      "Parametric Design",
    ],
    benefits: [
      "Enhanced project visualization",
      "Improved coordination between disciplines",
      "Reduced design errors",
      "Faster project delivery",
    ],
  },
  {
    icon: <FaCogs />,
    title: "MEP Coordination",
    description:
      "Expert coordination of mechanical, electrical, and plumbing systems to ensure seamless integration and optimal building performance. We identify conflicts early and provide solutions that work.",
    features: [
      "HVAC System Coordination",
      "Electrical System Integration",
      "Plumbing & Piping Coordination",
      "Fire Protection Systems",
      "Multi-Discipline Coordination",
      "Energy Analysis",
    ],
    benefits: [
      "Optimized system performance",
      "Reduced installation time",
      "Lower operational costs",
      "Improved energy efficiency",
    ],
  },
  {
    icon: <FaSearch />,
    title: "Clash Detection",
    description:
      "Advanced clash detection and analysis using industry-leading tools to identify conflicts before construction begins. Save time, money, and avoid costly rework on site.",
    features: [
      "Hard Clash Detection",
      "Soft Clash Detection",
      "Clearance Analysis",
      "Clash Reports & Documentation",
      "Resolution Recommendations",
      "Weekly Coordination Meetings",
    ],
    benefits: [
      "87% reduction in rework",
      "Earlier issue identification",
      "Cost savings up to 30%",
      "Faster project timelines",
    ],
  },
  {
    icon: <FaCube />,
    title: "3D Coordination & Visualization",
    description:
      "Photorealistic 3D renders, virtual walkthroughs, and coordination drawings that bring your project to life. Perfect for client presentations, stakeholder approvals, and marketing.",
    features: [
      "Photorealistic Rendering",
      "Virtual Reality Walkthroughs",
      "Animation & Flyovers",
      "Construction Sequencing",
      "Material & Lighting Studies",
      "Marketing Visualizations",
    ],
    benefits: [
      "Faster client approvals",
      "Better stakeholder communication",
      "Enhanced marketing materials",
      "Reduced misunderstandings",
    ],
  },
];

export default function ServicesPage() {
  const [isCtaHovering, setIsCtaHovering] = useState(false);
  const [bgRef, bgOffset] = useParallax(0.3);


  return (
    <div>
      <SEO
        title="BIM Services — KataVerse BIM Services"
        description="BIM modeling, MEP coordination, clash detection, and 3D visualization services tailored to commercial, residential, and industrial projects."
        url="https://www.kataversebim.in/services"
      />

      {/* HERO SECTION */}
     {/* HERO SECTION */}
<section
  ref={bgRef}
  className="
    relative 
    bg-[#0B1F2A] text-white 
    overflow-hidden
    pt-28 pb-16 md:pt-32 md:pb-20
    min-h-[60vh] md:min-h-[70vh]
    flex items-center
  "
>
  {/* Background Image / Parallax */}
  <div className="absolute inset-0">
    <div
      className="absolute inset-0 opacity-75 will-change-transform transition-transform duration-75"
      style={{
        backgroundImage:
          "url('/hero_bg/services_hero_bg.png')",
        backgroundSize: "cover",
        // 👇 this makes the pipes sit higher, so no big empty band on top
        backgroundPosition: "center 15%",
        backgroundRepeat: "no-repeat",
        filter: "brightness(0.7) contrast(1.12)",
        // small parallax + slight upward offset
        transform: `translateY(${bgOffset * 0.4 - 80}px)`,
      }}
    />
    {/* Dark overlay to make text readable */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F2A]/85 via-[#0B1F2A]/70 to-[#0B1F2A]/85" />
  </div>


  {/* Optional: very subtle blueprint feel */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="services-grid-pattern"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="#14B8A6"
            strokeWidth="0.5"
            opacity="0.35"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#services-grid-pattern)" />
    </svg>
  </div>

  {/* HERO CONTENT */}
  <div className="container-custom relative z-10 max-w-4xl mx-auto px-4 text-center">
    {/* Badge */}
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 
        bg-[#14B8A6]/20 border border-[#14B8A6]/30 
        rounded-full text-[#14B8A6] text-xs 
        font-semibold uppercase tracking-wider mb-6"
    >
      <span>Services</span>
    </div>

    {/* Heading */}
    <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
  <span className="relative z-10">
    Premium BIM Services
  </span>

  {/* GLOW BEHIND TEXT */}
  {/* <span
    className="
      absolute inset-0 
      blur-xl 
      opacity-60 
      bg-[#14B8A6]
    "
  /> */}
</h1>


    {/* Description */}
    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-6">
      BIM modeling, MEP coordination, clash detection &amp; 3D visualization —
      engineered for accuracy, speed, and seamless delivery.
    </p>

    {/* Indicators */}
    <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-[#14B8A6] rounded-full" />
        <span>BIM Modeling</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-[#14B8A6] rounded-full" />
        <span>Clash-Free Coordination</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-[#14B8A6] rounded-full" />
        <span>3D Visualization</span>
      </div>
    </div>
  </div>
</section>



      {/* Services Details */}
      {servicesData.map((service, index) => (
        <section
          key={index}
          className={`section-padding relative overflow-hidden ${
            index % 2 === 0
              ? "bg-white"
              : "bg-gradient-to-b from-gray-50 to-white"
          }`}
        >
          <div
            className="absolute inset-0 opacity-[0.015] pointer-events-none"
            style={{
              backgroundImage: `url('${imageConfig.patterns.hexagon}')`,
              backgroundSize: "400px 400px",
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
            }}
          />

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#2D7A8E] to-[#14B8A6] rounded-2xl text-white text-4xl mb-6 shadow-lg">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-secondary">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <h3 className="text-xl font-semibold mb-5 text-secondary">
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
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="bg-gradient-to-br from-[#2D7A8E] via-[#0B1F2A] to-[#2D7A8E] p-8 lg:p-10 rounded-2xl text-white shadow-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-1 h-8 bg-[#14B8A6] rounded-full" />
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

      {/* CTA SECTION (unchanged) */}
      <section
        className="section-padding bg-gradient-to-br from-[#0B1F2A] via-[#0B1F2A]/80 to-[#0B1F2A] text-white relative overflow-hidden"
        aria-label="Call to action section"
      >
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('${imageConfig.cta.coordination}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
            role="img"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F2A]/90 via-[#0B1F2A]/85 to-[#0B1F2A]/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A]/80 via-transparent to-transparent" />
        </div>

        <svg
          className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
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

        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-br from-[#14B8A6]/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 -right-40 w-96 h-96 bg-gradient-to-tl from-[#FF8C42]/5 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-4xl mx-auto py-12 md:py-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Ready to Transform Your Projects?
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-10 max-w-3xl leading-relaxed font-medium drop-shadow-md">
              Schedule a free consultation with our BIM experts to discuss your
              project requirements and discover how we can deliver measurable
              results.
            </p>

            <div className="mb-12 w-full flex justify-center">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-8 sm:px-10 md:px-12 py-4 md:py-5 text-lg md:text-xl font-bold text-[#0B1F2A] rounded-lg transition-all duration-300 ease-out overflow-hidden"
                onMouseEnter={() => setIsCtaHovering(true)}
                onMouseLeave={() => setIsCtaHovering(false)}
                aria-label="Schedule free consultation"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-[#14B8A6] via-[#2D7A8E] to-[#14B8A6] rounded-lg transition-all duration-300 ${
                    isCtaHovering
                      ? "shadow-2xl shadow-[#14B8A6]/40"
                      : "shadow-lg"
                  }`}
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: isCtaHovering ? "100% 0" : "0 0",
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg"
                  style={{
                    transform: isCtaHovering
                      ? "translateX(100%)"
                      : "translateX(-100%)",
                    transition: "transform 0.8s ease-out",
                  }}
                />
                <span className="relative z-10 flex items-center gap-2 group-hover:scale-105 transition-transform">
                  Schedule Free Consultation
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

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 text-sm md:text-base text-gray-200">
              <div className="flex items-center gap-2 backdrop-blur-sm px-3 py-2">
                <svg
                  className="w-5 h-5 text-[#14B8A6] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
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
                  aria-hidden="true"
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
                  aria-hidden="true"
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

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm text-gray-300 mb-2">
                Questions? Contact us at{" "}
                <a
                  href={`mailto:${siteConfig.contact.supportEmail}`}
                  className="text-[#14B8A6] hover:text-[#14B8A6]/80 font-semibold transition-colors"
                  aria-label={`Send email to ${siteConfig.contact.supportEmail}`}
                >
                  {siteConfig.contact.supportEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

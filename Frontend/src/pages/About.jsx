import { FaCheckCircle, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';
import SEO from '../components/SEO';
import { useState, useEffect } from 'react';

const values = [
  {
    icon: <FaCheckCircle />,
    title: 'Quality Excellence',
    description: 'We deliver precise, accurate BIM models that exceed industry standards and client expectations.',
  },
  {
    icon: <FaUsers />,
    title: 'Expert Team',
    description: 'Our team of 50+ certified BIM professionals brings decades of combined experience.',
  },
  {
    icon: <FaLightbulb />,
    title: 'Innovation',
    description: 'We leverage cutting-edge technology and methodologies to optimize your projects.',
  },
  {
    icon: <FaHandshake />,
    title: 'Client Partnership',
    description: 'We work collaboratively with clients to ensure project success at every stage.',
  },
];

export default function About() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.15); // smooth subtle parallax
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <SEO
        title="About Us — KataVerse BIM Services"
        description="Learn about KataVerse BIM Services: 8+ years of BIM excellence delivering BIM modeling, MEP coordination, clash detection, and 3D visualization."
        url="https://www.kataversebim.in/about"
      />

      {/* ---------------- About Hero Section ---------------- */}
      <section className="relative py-20 md:py-24 bg-[#0B1F2A] text-white overflow-hidden">
        {/* Background Image + Parallax */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-55 will-change-transform transition-transform duration-75"
            style={{
              backgroundImage:
                "url('/vectors/hero/5779c9_7576319538624d719c5535d5501a1551~mv2.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "brightness(0.45) contrast(1.15)",
              transform: `translateY(${offset}px)`,
            }}
          />
          {/* Stronger gradient for clean text */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F2A]/95 via-[#0B1F2A]/92 to-[#0B1F2A]/97" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F2A]/96 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-[#14B8A6]/20 border border-[#14B8A6]/30 rounded-full backdrop-blur-sm text-[#14B8A6] text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#14B8A6]" />
              <span>BIM-First Engineering Partner</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              About KataVerse BIM Services
            </h1>

            {/* Marketing-style Description */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              A BIM-focused engineering partner helping contractors,
              consultants, and developers deliver coordinated, clash-free
              projects—on time and with confidence.
            </p>

            {/* Indicators */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#14B8A6] rounded-full" />
                <span>8+ Years of BIM Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#14B8A6] rounded-full" />
                <span>500+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#14B8A6] rounded-full" />
                <span>50+ Certified BIM Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Company Story Section ---------------- */}
      {/* Our Story — CLEAN SECTION (no background) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center px-4">
            <span className="inline-block text-xs uppercase tracking-wider font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
              Who We Are
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
              Our Story
            </h2>

            <div className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                With 8+ years of experience, KataVerse BIM Services has grown to
                become a trusted provider of comprehensive BIM services for
                construction projects. Our journey began with a simple mission:
                to help contractors, subcontractors, and engineers prevent
                clashes and costly rework through advanced Building Information
                Modeling.
              </p>

              <p>
                Over the past decade, we've completed 500+ projects across
                residential, commercial, and high-rise sectors. Our expertise
                spans BIM modeling, MEP coordination, clash detection, and 3D
                visualization — helping clients reduce costs, minimize rework,
                and accelerate project timelines.
              </p>

              <p>
                Today, with a team of 50+ certified professionals and
                partnerships with leading industry firms, we continue to push
                the boundaries of BIM technology. Our commitment to quality,
                innovation, and client success remains at the heart of
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section — NOW SHARING SAME BACKGROUND AS STORY */}
      <section className="section-padding relative text-white overflow-hidden">
        {/* --- Reusing the SAME BG from Our Story --- */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-45 will-change-transform transition-transform duration-75"
            style={{
              backgroundImage:
                "url('/vectors/hero/5779c9_42da9a288609460fabca90b54324f5d5~mv2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "brightness(0.55) contrast(1.1)",
            }}
          />
          {/* Same strong color gradient for perfect readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F2A]/92 via-[#0B1F2A]/80 to-[#0B1F2A]/95" />
        </div>

        <div className="container-custom relative z-10">
          {/* Title */}
          <div className="text-center mb-10">
            <span
              className="
  inline-block 
  text-xs 
  uppercase 
  tracking-[0.22em] 
  font-bold 
  text-white 
  px-5 
  py-1.5 
  rounded-full 
  bg-black/40 
  backdrop-blur-md 
  border border-white/20 
  shadow-[0_2px_10px_rgba(0,0,0,0.55)]
  mb-4
"
            >
              What Drives Us
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
              Our Core Values
            </h2>

            <p
              className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed 
        drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
            >
              These principles define how we build relationships, inspire
              innovation, and deliver measurable results.
            </p>
          </div>

          {/* Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 px-6 py-8 text-center flex flex-col items-center border border-white/20"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-3xl text-primary">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Expertise Section ---------------- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-secondary">
              Our Toolstack & Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work on the platforms your teams already use, enabling smoother
              adoption and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Revit",
              "Navisworks",
              "AutoCAD",
              "BIM 360",
              "Trimble Points",
              "ArchiCAD",
              "Dynamo",
              "Solibri",
            ].map((tool) => (
              <div
                key={tool}
                className="bg-light p-6 rounded-lg text-center font-semibold text-secondary hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA Section ---------------- */}
      <section className="section-padding bg-gradient-to-r from-primary to-[#0a2f47] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Work Together
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Share your project scope, drawings, and timelines—our BIM experts
            will review them and suggest a clear, practical engagement plan.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#d4613a] transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

import { FaCheckCircle, FaUsers, FaAward, FaHandshake } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import StaggerContainer, { StaggerItem } from './animations/StaggerContainer';
import imageConfig from '../config/imageConfig';

const stats = [
  { icon: <FaCheckCircle />, number: 100, suffix: '+', label: 'Projects Completed' },
  { icon: <FaHandshake />, number: 98, suffix: '%', label: 'Client Satisfaction' },
  { icon: <FaAward />, number: 8, suffix: '+', label: 'Years Experience' }
];

// Animated Counter Component
function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#0B1F2A] via-[#2D7A8E]/20 to-[#0B1F2A] text-white relative overflow-hidden">
      {/* MEP Modeling Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('${imageConfig.services.mepModeling}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) brightness(0.2)',
          }}
        />
        {/* Additional BIM Technical Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('${imageConfig.services.mepBimModel}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) brightness(0.3)',
            mixBlendMode: 'screen',
          }}
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F2A]/95 via-[#0B1F2A]/90 to-[#0B1F2A]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D7A8E]/30 via-transparent to-transparent" />
      </div>
      
      {/* Blueprint Grid Pattern - Technical Drawing Style */}
      <div className="absolute inset-0 opacity-8">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint-grid-stats" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#14B8A6" strokeWidth="0.4" opacity="0.2"/>
            </pattern>
            <pattern id="blueprint-dots-stats" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#14B8A6" opacity="0.15"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid-stats)" />
          <rect width="100%" height="100%" fill="url(#blueprint-dots-stats)" />
        </svg>
      </div>
      
      {/* Technical Measurement Lines */}
      <div className="absolute inset-0 opacity-6">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="measurement-lines-stats" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <line x1="0" y1="50" x2="100" y2="50" stroke="#14B8A6" strokeWidth="0.3" opacity="0.15" strokeDasharray="2,2"/>
              <line x1="50" y1="0" x2="50" y2="100" stroke="#14B8A6" strokeWidth="0.3" opacity="0.15" strokeDasharray="2,2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#measurement-lines-stats)" />
        </svg>
      </div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-0 left-1/4 w-64 h-64 bg-accent rounded-full filter blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      {/* Geometric Vectors */}
      <div className="absolute top-10 left-10 w-40 h-40 opacity-10">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10L90 30V70L50 90L10 70V30L50 10Z" stroke="#14B8A6" strokeWidth="2"/>
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#14B8A6" strokeWidth="2"/>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="text-center group cursor-default"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Icon */}
                <motion.div 
                  className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-[#14B8A6]/20 to-[#2D7A8E]/20 backdrop-blur-md rounded-2xl text-[#14B8A6] text-3xl border border-[#14B8A6]/30 shadow-lg"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(20, 184, 166, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.icon}
                </motion.div>
                
                {/* Animated Number */}
                <div className="text-5xl md:text-6xl font-bold mb-3 text-white" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                </div>
                
                {/* Label */}
                <div className="text-base md:text-lg text-gray-200 font-medium">
                  {stat.label}
                </div>
                
                {/* Decorative underline */}
                <motion.div 
                  className="h-1 bg-gradient-to-r from-[#14B8A6] to-[#2D7A8E] rounded-full mx-auto mt-4"
                  initial={{ width: "4rem" }}
                  whileHover={{ width: "5rem" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

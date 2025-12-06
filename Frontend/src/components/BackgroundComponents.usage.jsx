/**
 * BACKGROUND COMPONENTS USAGE GUIDE
 * 
 * This file demonstrates how to use the new background components
 * in your pages and components.
 */

// ============================================
// 1. HeroWithBackground Component
// ============================================

import HeroWithBackground from '@/components/HeroWithBackground';

// Basic usage with defaults
<HeroWithBackground>
  <h1>Welcome to KataVerse</h1>
  <p>Professional BIM Services</p>
  <button>Get Started</button>
</HeroWithBackground>

// Custom background image and pattern
<HeroWithBackground
  backgroundImage="/images/backgrounds/home-hero-bg.png"
  backgroundPattern="geometric"
>
  <h1>Your Content Here</h1>
</HeroWithBackground>

// Custom gradient overlay
<HeroWithBackground
  backgroundImage="/images/hero-bim.jpg"
  backgroundPattern="grid"
  overlayGradient="linear-gradient(135deg, rgba(93, 63, 211, 0.8), rgba(255, 140, 66, 0.6))"
>
  <h1>Custom Gradient</h1>
</HeroWithBackground>

// Available patterns: 'geometric', 'grid', 'tech-lines', 'blueprint', 'none'


// ============================================
// 2. ParallaxBackground Component
// ============================================

import ParallaxBackground from '@/components/ParallaxBackground';

// Basic parallax effect
<ParallaxBackground imageSrc="/images/backgrounds/projects-bg.png">
  <div className="container-custom py-20 text-white">
    <h2>Our Projects</h2>
    <p>Scroll to see parallax effect</p>
  </div>
</ParallaxBackground>

// Custom parallax speed (0.5 is default, lower = slower)
<ParallaxBackground 
  imageSrc="/images/hero-bim.jpg"
  speed={0.3}
  overlayGradient="linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))"
>
  <h2>Slow Parallax</h2>
</ParallaxBackground>


// ============================================
// 3. AnimatedBackground Component
// ============================================

import AnimatedBackground from '@/components/AnimatedBackground';

// Animated gradient background
<section className="relative min-h-screen">
  <AnimatedBackground variant="gradient" />
  <div className="relative z-10">
    {/* Your content here */}
  </div>
</section>

// Floating shapes only
<section className="relative py-20 bg-gray-900">
  <AnimatedBackground variant="shapes" />
  <div className="relative z-10">
    {/* Your content here */}
  </div>
</section>

// Both gradient and shapes
<section className="relative">
  <AnimatedBackground variant="both" />
  <div className="relative z-10">
    {/* Your content here */}
  </div>
</section>


// ============================================
// 4. SectionDivider Component
// ============================================

import SectionDivider from '@/components/SectionDivider';

// Wave divider
<SectionDivider variant="wave" color="#ffffff" />

// Zigzag divider
<SectionDivider variant="zigzag" color="#5D3FD3" />

// Curve divider (flipped)
<SectionDivider variant="curve" color="#FF8C42" flip={true} />

// Between sections
<section className="bg-primary text-white py-20">
  <h2>Section One</h2>
</section>
<SectionDivider variant="wave" color="#ffffff" />
<section className="bg-white py-20">
  <h2>Section Two</h2>
</section>


// ============================================
// 5. CSS Pattern Classes (Direct Usage)
// ============================================

// Geometric pattern
<div className="pattern-geometric min-h-screen">
  <h1>Content with geometric background</h1>
</div>

// Grid pattern
<div className="pattern-grid py-20 bg-white">
  <h2>Grid Background</h2>
</div>

// Tech lines pattern
<div className="pattern-tech-lines bg-gray-900 text-white py-20">
  <h2>Tech Lines</h2>
</div>

// Blueprint pattern
<div className="pattern-blueprint py-20">
  <h2>Blueprint Style</h2>
</div>

// Animated gradient
<div className="animated-gradient-bg min-h-screen flex items-center justify-center">
  <h1 className="text-white">Animated Background</h1>
</div>


// ============================================
// COMPLETE PAGE EXAMPLES
// ============================================

// HOME PAGE
export default function Home() {
  return (
    <>
      <HeroWithBackground 
        backgroundImage="/images/hero-bim.jpg"
        backgroundPattern="geometric"
      >
        <h1 className="text-5xl font-bold mb-4">KataVerse BIM Services</h1>
        <p className="text-xl mb-8">Elevate Your Construction Projects</p>
        <button className="btn-primary">Get Started</button>
      </HeroWithBackground>

      <SectionDivider variant="wave" color="#ffffff" />

      <section className="py-20">
        {/* Services content */}
      </section>
    </>
  );
}

// SERVICES PAGE
export default function Services() {
  return (
    <>
      <ParallaxBackground imageSrc="/images/backgrounds/services-mep-bg.png">
        <div className="container-custom py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Comprehensive BIM Solutions</p>
        </div>
      </ParallaxBackground>

      <section className="py-20 bg-white pattern-grid">
        {/* Services grid */}
      </section>
    </>
  );
}

// PROJECTS PAGE
export default function Projects() {
  return (
    <>
      <section className="relative min-h-[400px] flex items-center justify-center">
        <AnimatedBackground variant="both" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl">Showcasing Excellence in BIM</p>
        </div>
      </section>

      <SectionDivider variant="curve" color="#ffffff" />

      <section className="py-20">
        {/* Projects grid */}
      </section>
    </>
  );
}

// CONTACT PAGE WITH TECH PATTERN
export default function Contact() {
  return (
    <section className="pattern-tech-lines bg-gray-900 text-white py-20 min-h-screen">
      <div className="container-custom">
        <h1 className="text-5xl font-bold mb-8">Contact Us</h1>
        {/* Contact form */}
      </div>
    </section>
  );
}


// ============================================
// RESPONSIVE BEHAVIOR
// ============================================

/**
 * All components automatically handle responsive behavior:
 * 
 * MOBILE (< 768px):
 * - Parallax effects disabled
 * - Background images use scroll attachment
 * - Floating shapes animation paused
 * - Reduced opacity for better performance
 * 
 * TABLET (769px - 1024px):
 * - Standard backgrounds
 * - Reduced parallax speed
 * 
 * DESKTOP (> 1025px):
 * - Full parallax effects
 * - Fixed background attachment
 * - All animations enabled
 */


// ============================================
// PERFORMANCE TIPS
// ============================================

/**
 * 1. Use lazy loading for background images
 * 2. Optimize images before uploading (WebP format)
 * 3. Keep animated backgrounds to 1-2 per page
 * 4. Test on mobile devices for performance
 * 5. Use 'pattern' variants for better performance
 */

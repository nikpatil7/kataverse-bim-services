import { FaCheckCircle, FaUsers, FaLightbulb, FaHandshake, FaAward, FaRocket, FaChartLine } from 'react-icons/fa';
import SEO from '../components/SEO';
import HeroWithImage from '../components/HeroWithImage';
import SectionDivider from '../components/SectionDivider';
import { motion } from 'framer-motion';

const Motion = motion;

const values = [
  {
    icon: <FaCheckCircle />,
    title: 'Quality Excellence',
    description: 'We deliver precise, accurate BIM models that exceed industry standards and client expectations.'
  },
  {
    icon: <FaUsers />,
    title: 'Expert Team',
    description: 'Our team of 50+ certified BIM professionals brings decades of combined experience.'
  },
  {
    icon: <FaLightbulb />,
    title: 'Innovation',
    description: 'We leverage cutting-edge technology and methodologies to optimize your projects.'
  },
  {
    icon: <FaHandshake />,
    title: 'Client Partnership',
    description: 'We work collaboratively with clients to ensure project success at every stage.'
  }
];

export default function About() {
  return (
    <div>
      <SEO
        title="About Us — KataVerse BIM Services"
        description="Learn about KataVerse BIM Services: 8+ years of BIM excellence delivering BIM modeling, MEP coordination, clash detection, and 3D visualization."
        url="https://www.kataversebim.com/about"
      />
      {/* Hero Section */}
      <HeroWithImage
        imageSrc="/images"
        title="About KataVerse BIM Services"
        subtitle="Leading provider of BIM services with over 8 years of experience in transforming construction projects worldwide"
        ctaText="View Our Projects"
        ctaLink="/projects"
        height="600px"
        overlayGradient="linear-gradient(135deg, rgba(45, 122, 142, 0.92) 0%, rgba(11, 31, 42, 0.92) 100%)"
      />

      <SectionDivider variant="wave" color="#FFFFFF" />

      {/* Company Story */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #2D7A8E 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container-custom relative z-10">
          {/* Story Header */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Story</p>
              <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
                Pioneering BIM Excellence <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Since 2017</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We transform construction challenges into seamless execution through advanced Building Information Modeling and intelligent MEP coordination.
              </p>
            </motion.div>
          </div>

          {/* Story Content with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/services/BIM-XS-CAD.jpg"
                  alt="BIM Expertise"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-primary to-accent p-8 rounded-2xl shadow-2xl">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold mb-1">98%</div>
                  <div className="text-sm opacity-90">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded with a singular vision to <strong className="text-secondary">eliminate construction conflicts before they happen</strong>, KataVerse has grown into a trusted partner for contractors, subcontractors, and engineers worldwide.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our journey spans over <strong className="text-primary">500+ successfully delivered projects</strong> across residential, commercial, and industrial sectors. We've helped our clients achieve an average <strong className="text-accent">87% reduction in rework costs</strong> and significantly accelerated project timelines.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, our team of <strong className="text-secondary">50+ certified BIM professionals</strong> continues to push the boundaries of what's possible, leveraging cutting-edge technology and proven methodologies to deliver excellence on every project.
              </p>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <FaRocket />, value: '8+', label: 'Years Experience' },
              { icon: <FaAward />, value: '500+', label: 'Projects Delivered' },
              { icon: <FaUsers />, value: '50+', label: 'BIM Experts' },
              { icon: <FaChartLine />, value: '87%', label: 'Rework Reduction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl text-primary mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" color="#F9FAFB" flip={true} />

      {/* Values */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Why Choose Us</p>
            <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that define our approach and drive exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary via-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <div className="text-4xl text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-secondary group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {value.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="curve" color="#FFFFFF" />

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Technology Stack</p>
            <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Industry-Leading Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified experts master the most advanced BIM platforms to deliver precision and efficiency
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
            {['Revit', 'Navisworks', 'AutoCAD', 'BIM 360', 'Trimble', 'ArchiCAD', 'Dynamo', 'Solibri'].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative text-center">
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{tool.substring(0, 2).toUpperCase()}</div>
                  <div className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">
                    {tool}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Performance Metrics */}
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-secondary via-primary to-secondary p-12 rounded-3xl shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Performance Metrics</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { value: '98%', label: 'Client Satisfaction', sublabel: 'Consistent 5-star ratings' },
                  { value: '87%', label: 'Rework Reduction', sublabel: 'Average cost savings' },
                  { value: '24/7', label: 'Support Available', sublabel: 'Round-the-clock assistance' }
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                  >
                    <div className="text-5xl md:text-6xl font-bold mb-3 text-cyan-300">{metric.value}</div>
                    <div className="text-lg font-semibold mb-2">{metric.label}</div>
                    <div className="text-sm text-cyan-100">{metric.sublabel}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" color="#2D7A8E" flip={true} />

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#0a1f2e] via-[#0B1F2A] to-[#0a1f2e] text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-cyan-200">Available for New Projects</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Ready to Transform
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-primary-200 to-accent">Your Next Project?</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Partner with industry-leading BIM experts to eliminate conflicts, reduce costs, and accelerate delivery timelines.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-accent to-orange-500 hover:from-orange-500 hover:to-accent text-white px-12 py-6 rounded-2xl font-bold text-lg shadow-2xl overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.a>
              
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/50 px-12 py-6 rounded-2xl font-bold text-lg transition-all"
              >
                View Our Portfolio
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
              {[
                { label: 'Trusted by 100+ firms', sublabel: 'Global clientele' },
                { label: '8+ years expertise', sublabel: 'Industry veterans' },
                { label: '500+ projects delivered', sublabel: 'Proven track record' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-bold text-white mb-1">{item.label}</div>
                  <div className="text-sm text-gray-400">{item.sublabel}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

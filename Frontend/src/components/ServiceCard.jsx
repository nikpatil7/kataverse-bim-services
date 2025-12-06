export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  gradient,
  delay = 0 
}) {
  return (
    <div
      className="card-base card-hover p-8 rounded-xl overflow-hidden group"
      style={{
        animation: `fadeInUp 0.8s ease-out ${delay}s both`,
      }}
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"
        style={{ background: gradient }}
      ></div>

      {/* Icon Container */}
      <div
        className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300"
        style={{
          background: gradient,
          color: 'white',
        }}
      >
        {icon}
      </div>

      {/* Content */}
      <h3 className="heading-3 mb-3" style={{ color: 'var(--color-text-dark)' }}>
        {title}
      </h3>

      <p className="text-body mb-4" style={{ color: 'var(--color-text-medium)' }}>
        {description}
      </p>

      {/* Learn More Link */}
      <a
        href="#"
        className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300"
        style={{
          color: 'var(--color-accent)',
        }}
      >
        Learn More
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </a>

      {/* Accent Line */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r w-0 group-hover:w-full transition-all duration-500"
        style={{
          background: `linear-gradient(to right, ${gradient}, transparent)`,
        }}
      ></div>
    </div>
  );
}

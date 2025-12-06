export default function CTA() {
  return (
    <section 
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
      }}
    >
      {/* Animated Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)',
          animation: 'slidePattern 8s linear infinite',
        }}
      ></div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <span 
            className="inline-block text-sm font-semibold px-4 py-2 rounded-full mb-6"
            style={{
              backgroundColor: 'rgba(173, 220, 49, 0.2)',
              color: 'var(--color-accent)',
            }}
          >
            Limited Time Offer
          </span>

          {/* Heading */}
          <h2 
            className="heading-1 mb-6"
            style={{ color: 'white' }}
          >
            Transform Your Construction Projects Today
          </h2>

          {/* Description */}
          <p 
            className="text-lg mb-8"
            style={{ color: 'rgba(255,255,255,0.9)' }}
          >
            Get a free BIM consultation with our expert team. Understand how our services can streamline your project coordination, reduce clashes, and save you time and money.
          </p>

          {/* Benefit List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              '✓ Free Expert Consultation',
              '✓ Customized Solution Plan',
              '✓ 24/7 Project Support',
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
                style={{ color: 'var(--color-accent)' }}
              >
                <span className="font-semibold">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="btn-primary font-semibold px-12 py-4 text-base"
              onClick={() => window.location.href = '/contact'}
              style={{
                backgroundColor: 'var(--color-accent)',
              }}
            >
              Get Free Consultation
            </button>
            <button
              className="btn-secondary font-semibold px-12 py-4 text-base"
              onClick={() => window.location.href = '/projects'}
            >
              View Our Portfolio
            </button>
          </div>

          {/* Trust Message */}
          <div className="mt-8 pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Join 50+ satisfied clients who trust us with their BIM solutions
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div
        className="absolute top-10 right-10 w-20 h-20 rounded-full opacity-10"
        style={{
          backgroundColor: 'var(--color-accent)',
          animation: 'bounce 4s ease-in-out infinite',
        }}
      ></div>
      <div
        className="absolute bottom-10 left-10 w-16 h-16 rounded-lg opacity-10"
        style={{
          backgroundColor: 'white',
          animation: 'patternShift 5s ease-in-out infinite',
        }}
      ></div>
    </section>
  );
}

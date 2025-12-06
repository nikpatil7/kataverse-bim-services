export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Project Kickoff',
      description: 'We understand your project requirements, scope, and deliverables. Initial consultation and planning phase.',
      icon: '🎯',
    },
    {
      number: '02',
      title: 'BIM Modeling',
      description: 'Create detailed 3D models of all building systems with accurate dimensions and specifications.',
      icon: '🏗️',
    },
    {
      number: '03',
      title: 'Coordination & QA',
      description: 'Coordinate MEP systems, detect clashes, and resolve conflicts before construction begins.',
      icon: '✅',
    },
    {
      number: '04',
      title: 'Delivery & Support',
      description: 'Deliver final BIM models, documentation, and provide ongoing support throughout the project.',
      icon: '📦',
    },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'white' }}>
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span 
            className="inline-block text-sm font-semibold px-4 py-2 rounded-full mb-4"
            style={{
              backgroundColor: 'rgba(173, 220, 49, 0.1)',
              color: 'var(--color-accent)',
            }}
          >
            Our Process
          </span>
          <h2 className="heading-2 mb-4" style={{ color: 'var(--color-text-dark)' }}>
            Streamlined BIM Workflow
          </h2>
          <p className="text-body" style={{ color: 'var(--color-text-medium)' }}>
            A proven 4-step process to deliver exceptional BIM solutions that exceed expectations.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5"
            style={{
              backgroundColor: 'var(--color-accent)',
              transform: 'translateX(-50%)',
            }}
          ></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`,
                }}
              >
                {/* Card Container */}
                <div
                  className="p-8 rounded-xl h-full"
                  style={{
                    backgroundColor: index % 2 === 0 ? 'var(--color-light-bg)' : 'white',
                    border: `2px solid ${index % 2 === 0 ? 'var(--color-border)' : 'var(--color-accent)'}`,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Step Number Badge */}
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg mb-4"
                    style={{
                      background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`,
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4">{step.icon}</div>

                  {/* Content */}
                  <h3 className="heading-3 mb-3" style={{ color: 'var(--color-text-dark)' }}>
                    {step.title}
                  </h3>

                  <p className="text-body" style={{ color: 'var(--color-text-medium)' }}>
                    {step.description}
                  </p>
                </div>

                {/* Desktop Connector */}
                <div
                  className="hidden lg:block absolute top-1/2 -right-[calc(50%-24px)] w-12 h-0.5"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    transform: index % 2 === 0 ? 'translateY(-50%)' : 'translateY(-50%)',
                  }}
                ></div>

                {/* Connector Dot */}
                <div
                  className="hidden lg:block absolute top-1/2 right-full -mr-3 w-6 h-6 rounded-full"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    border: '4px solid white',
                    transform: 'translateY(-50%)',
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-body mb-6" style={{ color: 'var(--color-text-medium)' }}>
            Ready to start your BIM journey?
          </p>
          <button
            className="btn-primary"
            onClick={() => window.location.href = '/contact'}
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}

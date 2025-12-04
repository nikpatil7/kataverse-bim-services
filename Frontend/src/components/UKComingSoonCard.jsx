import React from 'react';

const UKComingSoonCard = () => {
  return (
    <div className="min-h-[500px] flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-gradient-to-br from-[#0a2f47] to-[#1a4d6d] rounded-lg shadow-xl p-8 md:p-12 text-white text-center">
        {/* Flag Emoji */}
        <div className="text-6xl md:text-7xl mb-6">🇬🇧</div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          UK Market Expansion
        </h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-blue-100 mb-6">
          Building Virtually and Visually across UK
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-blue-50 mb-8 leading-relaxed">
          We're actively developing our MEP coordination and BIM modeling capabilities for the United Kingdom market. Our team is preparing to deliver the same industry-leading standards that define KataVerse's work across the USA.
        </p>

        {/* Timeline Info */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-blue-200 border-opacity-20">
          <p className="text-sm md:text-base text-blue-100 mb-3">
            <span className="font-semibold">Expected Launch:</span> Coming 2025
          </p>
          <p className="text-sm md:text-base text-blue-100">
            Featuring comprehensive BIM modeling, MEP coordination, and clash detection services for commercial, residential, and industrial projects.
          </p>
        </div>

        {/* CTA Section */}
        <div className="space-y-4">
          <p className="text-sm text-blue-100 font-medium">
            Expected Launch: Coming 2025
          </p>
        </div>

        {/* Support Info */}
        <p className="text-xs md:text-sm text-blue-200 mt-8 pt-8 border-t border-blue-200 border-opacity-20">
          In the meantime, if you have questions about our services or want to discuss your project needs, please contact us at <a href="mailto:Admin@KataVerseBIMServices.onmicrosoft.com" className="underline hover:text-white">Admin@KataVerseBIMServices.onmicrosoft.com</a>
        </p>
      </div>
    </div>
  );
};

export default UKComingSoonCard;

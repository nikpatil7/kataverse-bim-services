import { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { submitContactForm } from '../utils/api';
import SEO from '../components/SEO';
import siteConfig from '../config/siteConfig';
import imageConfig from '../config/imageConfig';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'BIM Modeling',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState({ type: '', message: '', visible: false });

  useEffect(() => {
    let timer;
    if (toast.visible) {
      timer = setTimeout(() => setToast({ type: '', message: '', visible: false }), 4000);
    }
    return () => clearTimeout(timer);
  }, [toast.visible]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic client-side validation
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!formData.name || formData.name.trim().length < 2) {
      setLoading(false);
      setError('Please enter your full name.');
      setToast({ type: 'error', message: 'Please enter your full name.', visible: true });
      return;
    }
    if (!emailRe.test(formData.email)) {
      setLoading(false);
      setError('Please enter a valid email address.');
      setToast({ type: 'error', message: 'Please enter a valid email address.', visible: true });
      return;
    }
    if (!formData.message || formData.message.trim().length < 10) {
      setLoading(false);
      setError('Please provide project details (at least 10 characters).');
      setToast({ type: 'error', message: 'Please provide more project details.', visible: true });
      return;
    }

    // ============================================
    // EMAIL FUNCTIONALITY TEMPORARILY DISABLED
    // ============================================
    // To re-enable: uncomment the try-catch block below
    setLoading(false);
    setToast({ 
      type: 'success', 
      message: 'Thank you for your interest! Please reach us directly at Admin@KataVerseBIMServices.onmicrosoft.com or +91 9359584867 for immediate assistance.', 
      visible: true 
    });
    return;

    /* 
    // TODO: re-enable reCAPTCHA when production keys are ready
    const recaptchaToken = null;

    try {
      const response = await submitContactForm({ ...formData, recaptchaToken });
      
      if (response.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: 'BIM Modeling',
          message: ''
        });

        setToast({ type: 'success', message: 'Message sent successfully! We will reply within 24 hours.', visible: true });

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to submit form. Please try again.');
      setToast({ type: 'error', message: 'Failed to submit. Please try again.', visible: true });
    } finally {
      setLoading(false);
    }
    */
  };

  return (
    <div>
      <SEO
        title={`Contact \u2014 ${siteConfig.siteName}`}
        description={`Contact ${siteConfig.siteName} for BIM services, quotes, and consultations. We typically respond within 24 hours.`}
        url={siteConfig.getFullUrl('/contact')}
      />
      {/* Toast */}
      {toast.visible && (
        <div className={`fixed bottom-6 right-6 z-50 rounded-lg shadow-lg px-4 py-3 text-sm md:text-base border ${toast.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
          {toast.message}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-10 md:py-14 lg:py-18 bg-gradient-to-br from-[#0B1F2A] via-[#0B1F2A] to-[#0B1F2A] text-white overflow-hidden">

        {/* Background Image - Coordination Collab Theme */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: "url('/images/mechtron-images/coordination-collab.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.85)',
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F2A]/60 via-[#0B1F2A]/40 to-[#0B1F2A]/70" />
        </div>
        
        {/* Blueprint Grid Pattern - Technical Drawing Style */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="blueprint-grid-contact" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#14B8A6" strokeWidth="0.5" opacity="0.4"/>
              </pattern>
              <pattern id="blueprint-dots-contact" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="#14B8A6" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blueprint-grid-contact)" />
            <rect width="100%" height="100%" fill="url(#blueprint-dots-contact)" />
          </svg>
        </div>
        
        {/* Technical Measurement Lines */}
        <div className="absolute inset-0 opacity-8">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="measurement-lines-contact" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <line x1="0" y1="50" x2="100" y2="50" stroke="#14B8A6" strokeWidth="0.3" opacity="0.2" strokeDasharray="2,2"/>
                <line x1="50" y1="0" x2="50" y2="100" stroke="#14B8A6" strokeWidth="0.3" opacity="0.2" strokeDasharray="2,2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#measurement-lines-contact)" />
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4 py-8 md:py-12">
            {/* Badge with Contact Icon */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#14B8A6]/20 backdrop-blur-sm border border-[#14B8A6]/30 rounded-full text-[#14B8A6] text-xs font-semibold uppercase tracking-wider mb-6">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Get In Touch</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
              Contact Us
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can help optimize your next BIM project
            </p>
            
            {/* Technical Indicators */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div>
                <span>24hr Response</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div>
                <span>Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-light relative overflow-hidden">
        {/* Very Subtle Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url('${imageConfig.patterns.hexagon}')`,
            backgroundSize: '400px 400px',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">
                Get In Touch
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Have a question about our BIM services? Need a quote for your project? 
                Our team is here to help. Fill out the form or reach us directly using 
                the contact information below.
              </p>

              {/* Contact Details */}
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2D7A8E] to-[#14B8A6] rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <FaEnvelope size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2 text-lg">Email</h3>
                    <p className="text-gray-700 font-medium">{siteConfig.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2D7A8E] to-[#14B8A6] rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <FaPhone size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2 text-lg">Phone</h3>
                    <p className="text-gray-700 font-medium">{siteConfig.contact.phone}</p>
                    {siteConfig.contact.phoneSecondary && (
                      <p className="text-gray-700 font-medium">{siteConfig.contact.phoneSecondary}</p>
                    )}
                    <p className="text-gray-500 text-sm mt-2">Available Mon-Sat 9AM-6PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2D7A8E] to-[#14B8A6] rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <FaMapMarkerAlt size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2 text-lg">Office</h3>
                    <p className="text-gray-700 font-medium">{siteConfig.contact.address}</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 p-6 bg-gradient-to-br from-[#2D7A8E]/5 to-[#14B8A6]/5 rounded-xl border border-[#14B8A6]/20 shadow-md">
                <h3 className="font-bold text-secondary mb-5 text-lg flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#14B8A6] rounded-full"></span>
                  Business Hours
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="font-medium">Monday - Friday: <span className="text-[#2D7A8E]">9:00 AM - 6:00 PM</span></p>
                  <p className="font-medium">Saturday: <span className="text-[#2D7A8E]">10:00 AM - 2:00 PM</span></p>
                  <p className="font-medium">Sunday: <span className="text-gray-500">Closed</span></p>
                </div>
              </div>

              {/* Lead Magnet */}
              <div className="mt-8 p-6 bg-gradient-to-br from-[#2D7A8E]/10 via-[#14B8A6]/10 to-[#2D7A8E]/10 border-2 border-[#14B8A6]/30 rounded-xl shadow-lg">
                <p className="text-xs uppercase tracking-[0.2em] text-[#2D7A8E] font-bold mb-3">
                  Free resource
                </p>
                <h3 className="text-2xl font-bold text-secondary mb-3">
                  BIM Coordination Checklist
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">
                  Download our step-by-step checklist to prepare drawings and models before engaging our coordination team. Share it with your architects, MEP consultants, or PMs to streamline onboarding.
                </p>
                <a
                  href="/docs/bim-coordination-checklist.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2D7A8E] to-[#14B8A6] text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Download PDF
                </a>
                <p className="text-xs text-gray-500 mt-3">
                  No email required — just a free resource for your team.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3 text-secondary">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-green-800 font-semibold">Message sent successfully!</p>
                    <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition-all"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition-all"
                  >
                    <option>BIM Modeling</option>
                    <option>MEP Coordination</option>
                    <option>Clash Detection</option>
                    <option>3D Visualization</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] resize-none transition-all"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#2D7A8E] to-[#14B8A6] text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-[#14B8A6]/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? 'Sending...' : 'Send Inquiry'}
                </button>
                <p className="mt-2 text-xs text-gray-500 text-center">
                  We typically respond within 24 hours on business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white">
        <div className="container-custom py-12">
          <h2 className="text-3xl font-bold mb-6 text-secondary text-center">
            Visit Our Office
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Located in Pune, Maharashtra, we're easily accessible and ready to meet in person for consultations.
          </p>
          
          {/* Interactive Map */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.0334795744434!2d73.80842047465545!3d18.662493564824725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9b394eba699%3A0x6a80b11d4bd28080!2sVivesta%20Purnanagar!5e0!3m2!1sen!2sin!4v1764705953361!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KataVerse BIM Services Office Location"
              className="w-full"
            ></iframe>
          </div>



          {/* Location Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-gradient-to-br from-[#2D7A8E]/5 to-[#14B8A6]/5 p-6 rounded-xl text-center border border-[#14B8A6]/20 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2D7A8E] to-[#14B8A6] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg">
                🚗
              </div>
              <h3 className="font-bold text-secondary mb-2 text-lg">Parking Available</h3>
              <p className="text-gray-600">Free visitor parking on-site</p>
            </div>

            <div className="bg-gradient-to-br from-[#14B8A6]/5 to-[#2D7A8E]/5 p-6 rounded-xl text-center border border-[#14B8A6]/20 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#14B8A6] to-[#2D7A8E] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg">
                🚇
              </div>
              <h3 className="font-bold text-secondary mb-2 text-lg">Public Transit</h3>
              <p className="text-gray-600">5 min walk from Main Station</p>
            </div>

            <div className="bg-gradient-to-br from-[#2D7A8E]/5 to-[#14B8A6]/5 p-6 rounded-xl text-center border border-[#14B8A6]/20 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2D7A8E] to-[#14B8A6] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg">
                ☕
              </div>
              <h3 className="font-bold text-secondary mb-2 text-lg">Meeting Space</h3>
              <p className="text-gray-600">Conference rooms available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

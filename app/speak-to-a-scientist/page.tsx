'use client';

import { useState, FormEvent } from 'react';
import FloatingCTA from '@/components/FloatingCTA';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, Send } from 'lucide-react';

export default function SpeakToAScientistPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectInterest: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // TODO: Implement actual form submission
    // For now, just simulate success
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        projectInterest: '',
        message: '',
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen">
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-navy via-secondary-teal to-primary-navy opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Let's Discuss Your Project
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              Our Assay Services Team will respond within 2 business days. Want to hear back faster? Try calling or chatting with us!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-background-offwhite">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Mail className="h-8 w-8 text-secondary-teal mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-navy mb-2">Email</h3>
              <a
                href="mailto:info@pblassaysci.com"
                className="text-secondary-teal hover:text-primary-navy transition-colors"
              >
                info@pblassaysci.com
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Phone className="h-8 w-8 text-secondary-teal mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-navy mb-2">Phone</h3>
              <a
                href="tel:+17327779123"
                className="text-secondary-teal hover:text-primary-navy transition-colors"
              >
                +1 732-777-9123
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Mail className="h-8 w-8 text-secondary-teal mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-navy mb-2">Assay Services</h3>
              <a
                href="mailto:assayservices@pblassaysci.com"
                className="text-secondary-teal hover:text-primary-navy transition-colors"
              >
                assayservices@pblassaysci.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 text-center">
              Get in Touch
            </h2>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                <p className="font-medium">Thank you for your inquiry! We'll get back to you within 2 business days.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                <p className="font-medium">There was an error submitting your form. Please try again or contact us directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-teal focus:border-transparent transition-all shadow-sm"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-teal focus:border-transparent transition-all shadow-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-teal focus:border-transparent transition-all shadow-sm"
                  placeholder="john.doe@company.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-teal focus:border-transparent transition-all shadow-sm"
                  placeholder="+1 555-123-4567"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company or Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-teal focus:border-transparent transition-all shadow-sm"
                  placeholder="Acme Research Inc."
                />
              </div>

              <div>
                <label htmlFor="projectInterest" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Interest
                </label>
                <select
                  id="projectInterest"
                  name="projectInterest"
                  value={formData.projectInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-teal focus:border-transparent transition-all shadow-sm bg-white"
                >
                  <option value="">Select an option...</option>
                  <option value="assay-development">Assay Development</option>
                  <option value="biomarker-testing">Biomarker Testing</option>
                  <option value="cell-based-services">Cell-Based Services</option>
                  <option value="custom-production">Custom Production</option>
                  <option value="antibody-characterization">Antibody Characterization</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-teal focus:border-transparent transition-all shadow-sm resize-none"
                  placeholder="Tell us about your project needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 bg-secondary-teal text-white font-medium rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

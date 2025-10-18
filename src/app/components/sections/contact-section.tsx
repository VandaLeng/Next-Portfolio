"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { personalInfo } from '@/app/lib/utils';

interface ContactSectionProps {
  isDarkMode: boolean;
}

export default function ContactSection({ isDarkMode }: ContactSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="min-h-screen py-16 px-6 opacity-0"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${
            isDarkMode 
              ? 'from-blue-400 to-cyan-400' 
              : 'from-blue-600 to-cyan-600'
          }`}>
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            

            {/* Email Card */}
            <div className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 group ${
              isDarkMode 
                ? 'bg-slate-800/50 border-blue-500/20 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20' 
                : 'bg-white border-blue-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-300/30'
            }`}>
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 ${
                  isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'
                }`}>
                  <Mail className={`w-5 h-5 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`text-sm font-semibold mb-0.5 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Email</h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className={`text-xs transition-colors break-all ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-blue-400' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 group ${
              isDarkMode 
                ? 'bg-slate-800/50 border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20' 
                : 'bg-white border-cyan-200 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-300/30'
            }`}>
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 ${
                  isDarkMode ? 'bg-cyan-500/20' : 'bg-cyan-100'
                }`}>
                  <Phone className={`w-5 h-5 ${
                    isDarkMode ? 'text-cyan-400' : 'text-cyan-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <h4 className={`text-sm font-semibold mb-0.5 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Phone</h4>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className={`text-xs transition-colors ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-cyan-400' 
                        : 'text-gray-700 hover:text-cyan-600'
                    }`}
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 group ${
              isDarkMode 
                ? 'bg-slate-800/50 border-purple-500/20 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20' 
                : 'bg-white border-purple-200 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-300/30'
            }`}>
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 ${
                  isDarkMode ? 'bg-purple-500/20' : 'bg-purple-100'
                }`}>
                  <MapPin className={`w-5 h-5 ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <h4 className={`text-sm font-semibold mb-0.5 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Location</h4>
                  <p className={`text-xs ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-700'
                  }`}>
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className={`mt-6 p-4 rounded-xl border ${
              isDarkMode 
                ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30' 
                : 'bg-gradient-to-br from-blue-100 to-purple-100 border-blue-300'
            }`}>
              <p className={`text-xs leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                💼 I'm currently available for freelance projects and full-time opportunities. 
                Feel free to reach out if you'd like to collaborate or just want to say hello!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>

            <form onSubmit={handleSubmit} className={`p-6 rounded-xl border space-y-4 ${
              isDarkMode 
                ? 'bg-slate-800/50 border-blue-500/20' 
                : 'bg-white border-blue-200'
            }`}>
              {/* Name Input */}
              <div>
                <label htmlFor="name" className={`block text-xs font-medium mb-1.5 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 text-sm rounded-lg border focus:outline-none focus:ring-2 transition-colors ${
                    isDarkMode 
                      ? 'bg-slate-900/50 border-blue-500/30 focus:border-blue-500 focus:ring-blue-500/20 text-white placeholder-gray-500' 
                      : 'bg-white border-blue-300 focus:border-blue-500 focus:ring-blue-500/20 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className={`block text-xs font-medium mb-1.5 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 text-sm rounded-lg border focus:outline-none focus:ring-2 transition-colors ${
                    isDarkMode 
                      ? 'bg-slate-900/50 border-blue-500/30 focus:border-blue-500 focus:ring-blue-500/20 text-white placeholder-gray-500' 
                      : 'bg-white border-blue-300 focus:border-blue-500 focus:ring-blue-500/20 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className={`block text-xs font-medium mb-1.5 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hi..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`w-full px-3 py-2 text-sm rounded-lg border focus:outline-none focus:ring-2 transition-colors resize-none ${
                    isDarkMode 
                      ? 'bg-slate-900/50 border-blue-500/30 focus:border-blue-500 focus:ring-blue-500/20 text-white placeholder-gray-500' 
                      : 'bg-white border-blue-300 focus:border-blue-500 focus:ring-blue-500/20 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 text-sm rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 group ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/50' 
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-400/50'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className={`p-3 rounded-lg border text-center text-xs ${
                  isDarkMode 
                    ? 'bg-green-500/20 border-green-500/50 text-green-300' 
                    : 'bg-green-100 border-green-300 text-green-700'
                }`}>
                  Thank you! I'll get back to you as soon as possible.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-16 pt-6 border-t text-center ${
          isDarkMode ? 'border-blue-500/20' : 'border-blue-300/30'
        }`}>
          <p className={`text-xs ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className={`text-xs mt-1 ${
            isDarkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>
            Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
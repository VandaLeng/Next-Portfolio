"use client"

import React, { useEffect, useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { educationData } from '@/app/lib/utils';

interface EducationSectionProps {
  isDarkMode: boolean;
}

export default function EducationSection({ isDarkMode }: EducationSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section 
      id="education" 
      ref={sectionRef} 
      className="min-h-screen py-16 px-6 opacity-0"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12 mt-8">
          <h2 className="text-4xl md:text-4xl text-center font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Education
          </h2>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 group ${
                isDarkMode 
                  ? 'bg-slate-800/50 border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20' 
                  : 'bg-white border-cyan-200 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-300/30'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ${
                isDarkMode ? 'bg-cyan-500/20' : 'bg-cyan-100'
              }`}>
                <GraduationCap className={`w-6 h-6 ${
                  isDarkMode ? 'text-cyan-400' : 'text-cyan-600'
                }`} />
              </div>

              <h3 className={`text-base font-bold mb-1 transition-colors ${
                isDarkMode 
                  ? 'text-white group-hover:text-cyan-400' 
                  : 'text-gray-900 group-hover:text-cyan-600'
              }`}>
                {edu.degree}
              </h3>

              <p className={`text-sm font-semibold mb-1 ${
                isDarkMode ? 'text-cyan-400' : 'text-cyan-600'
              }`}>
                {edu.institution}
              </p>

              <p className={`text-xs mb-3 flex items-center gap-1 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {edu.period}
              </p>

              <p className={`text-xs mb-3 leading-relaxed ${
                isDarkMode ? 'text-gray-400' : 'text-gray-700'
              }`}>
                {edu.description}
              </p>

              <div className={`w-full h-px mb-3 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent' 
                  : 'bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent'
              }`}></div>

              <div className="space-y-1.5">
                <p className={`text-xs uppercase tracking-wider mb-1 ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-600'
                }`}>Key Achievements</p>
                {edu.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-center gap-1.5 text-xs">
                    <Award className={`w-3 h-3 flex-shrink-0 ${
                      isDarkMode ? 'text-purple-400' : 'text-purple-600'
                    }`} />
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-700'}>
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Learning */}
        <div className={`mt-8 p-6 rounded-xl border ${
          isDarkMode 
            ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/30' 
            : 'bg-gradient-to-br from-purple-100 to-blue-100 border-purple-300'
        }`}>
          <h3 className={`text-lg font-bold mb-2 flex items-center gap-2 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <svg className={`w-6 h-6 ${
              isDarkMode ? 'text-purple-400' : 'text-purple-600'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Continuous Learning
          </h3>
          <p className={`text-sm ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I'm committed to lifelong learning through online courses, tutorials, documentation, and hands-on projects. 
            Currently exploring advanced React patterns, TypeScript best practices, and modern backend architectures.
          </p>
        </div>
      </div>
    </section>
  );
}
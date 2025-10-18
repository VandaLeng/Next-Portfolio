"use client"

import React, { useEffect, useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experienceData } from '@/app/lib/utils';

/**
 * EXPERIENCE SECTION COMPONENT
 * Displays work experience with:
 * - Timeline layout
 * - Job title, company, period
 * - Job description
 * - Skills/technologies used
 */

export default function ExperienceSection() {
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
      id="experience" 
      ref={sectionRef} 
      className="section-container opacity-0"
    >
      <div className="max-w-5xl mx-auto w-full ">
        {/* Section Header */}
        <div className="mb-12 mt-8">
          <h2 className="text-4xl md:text-4xl text-center font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Experience
          </h2>
        </div>

          {/* Timeline Container */}
          <div className="relative max-w-10xl mx-auto">  {/* limit width and center */}
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experienceData.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative pl-6 md:pl-16 group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-4 top-2 w-5 h-5 rounded-full bg-blue-500 border-4 border-slate-900 group-hover:scale-125 group-hover:bg-cyan-500 transition-all duration-300 shadow-lg shadow-blue-500/50"></div>

                  {/* Experience Card */}
                  <div className="glass-effect p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20 max-w-4xl">  {/* max width */}
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-blue-400" />
                        {exp.title}
                      </h3>
                      <span className="text-sm text-gray-400 flex items-center gap-1 mt-1 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Company */}
                    <p className="text-cyan-400 font-semibold mb-3 text-lg">
                      {exp.company}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Skills/Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full hover:bg-blue-500/30 hover:scale-105 transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
}
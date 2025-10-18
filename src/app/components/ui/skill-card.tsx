"use client"

import React, { useState } from 'react';

interface SkillCardProps {
  skill: {
    name: string;
    description: string;
    iconUrl: string;
    color: string;
  };
  index: number;
  isDarkMode: boolean;
}

export default function SkillCard({ skill, index, isDarkMode }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer hover:scale-105 backdrop-blur-sm ${
        isDarkMode
          ? 'bg-slate-800/80 border-slate-700 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20'
          : 'bg-white/80 border-gray-200 hover:border-orange-400 hover:shadow-2xl'
      }`}
      style={{
        animationDelay: `${index * 50}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className="flex items-center justify-center mb-4">
        <div className={`w-16 h-16 rounded-xl p-3 transition-all duration-300 ${
          isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
        } ${
          isDarkMode 
            ? 'bg-gradient-to-br from-orange-500/10 to-amber-500/10' 
            : 'bg-gradient-to-br from-orange-200/50 to-amber-200/50'
        }`}>
          <img
            src={skill.iconUrl}
            alt={`${skill.name} icon`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Name */}
      <h3 className={`text-xl font-bold text-center mb-2 transition-colors ${
        isDarkMode
          ? 'text-white group-hover:text-orange-400'
          : 'text-gray-900 group-hover:text-orange-600'
      }`}>
        {skill.name}
      </h3>

      {/* Description */}
      <p className={`text-sm text-center leading-relaxed ${
        isDarkMode ? 'text-gray-400' : 'text-gray-600'
      }`}>
        {skill.description}
      </p>

      {/* Gradient Border Glow on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
    </div>
  );
}
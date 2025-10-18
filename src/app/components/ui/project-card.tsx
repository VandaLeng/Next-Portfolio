// src/app/components/ui/project-card.tsx
"use client"

import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
// Import Image if you use Next.js <Image /> component (commented out for simplicity)

/**
 * PROJECT CARD COMPONENT
 * Displays project information with:
 * - Browser chrome header (newly added)
 * - Project preview/image
 * - Title and description
 * - Technology tags
 * - Live demo and GitHub links
 * - 3D tilt effect on hover
 */

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
    // Assuming you have an imageUrl property for the image/preview
    imageUrl?: string; 
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Use a relevant placeholder for the browser URL
  const browserDomain = `${project.title.toLowerCase().replace(/\s/g, '-')}.com`; 

  return (
    <div
      // 💡 ADDED: 'card' class for custom CSS styling of the browser header
      className="card flex flex-col 
        bg-slate-800/50 backdrop-blur-sm 
        rounded-xl border border-blue-500/20 
        overflow-hidden
        hover:border-blue-500/50 
        transition-all duration-300
        hover:scale-105
        hover:shadow-2xl hover:shadow-blue-500/20
        group
      "
      style={{
        animationDelay: `${index * 100}ms`,
        transform: isHovered ? 'perspective(1000px) rotateX(2deg) rotateY(2deg)' : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        {/* ------------------------------------------- */}
        {/* 💡 START: BROWSER CHROME HEADER (Custom CSS) */}
        {/* ------------------------------------------- */}
        <div className="w-full flex shrink-0">
            <div className="circles">
                <div className="c"></div>
                <div className="c"></div>
                <div className="c"></div>
            </div>
            <div className="browser">
                <div className="chevrons">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
                <div className="search-bar">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    {browserDomain}
                </div>
            </div>
        </div>
        {/* ------------------------------------------- */}
        {/* 💡 END: BROWSER CHROME HEADER                */}
        {/* ------------------------------------------- */}


        {/* Project Preview/Image (Existing Code) */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-cyan-600/30">
            {/* Conditional Image Display if imageUrl is provided */}
            {project.imageUrl ? (
              <img 
                  src={project.imageUrl}
                  alt={`Preview of ${project.title}`}
                  className="w-full h-full object-cover object-center"
              />
            ) : (
              // Placeholder content if no image URL
              <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                    🚀
                  </div>
              </div>
            )}
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

            {/* Hover overlay with quick actions (Kept your existing logic) */}
            <div className={`
              absolute inset-0 bg-blue-600/20 backdrop-blur-sm
              flex items-center justify-center gap-4
              transition-opacity duration-300
              ${isHovered ? 'opacity-100' : 'opacity-0'}
            `}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={20} className="text-white" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={20} className="text-white" />
              </a>
            </div>
        </div>

        {/* Project Information (Existing Code) */}
        <div className="p-6 flex flex-col justify-between flex-grow">
            {/* Title */}
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-2">
                {project.description}
            </p>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                    <span
                        key={tagIndex}
                        className="
                            px-3 py-1 text-xs font-medium 
                            bg-blue-500/20 text-blue-300 
                            border border-blue-500/30 
                            rounded-full
                            hover:bg-blue-500/30 hover:scale-105
                            transition-all duration-200
                        "
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-auto"> {/* mt-auto pushes buttons to the bottom */}
                {/* Live Demo Button */}
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        flex-1 px-4 py-2.5 
                        border border-blue-500 
                        hover:bg-blue-500/10 
                        rounded-lg text-sm font-semibold 
                        transition-all duration-300 
                        flex items-center justify-center gap-2
                        text-blue-400 hover:text-blue-300
                        hover:shadow-lg hover:shadow-blue-500/20
                        group/btn
                    "
                >
                    <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                </a>

                {/* GitHub Button */}
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        flex-1 px-4 py-2.5 
                        border border-cyan-500 
                        hover:bg-cyan-500/10 
                        rounded-lg text-sm font-semibold 
                        transition-all duration-300 
                        flex items-center justify-center gap-2
                        text-cyan-400 hover:text-cyan-300
                        hover:shadow-lg hover:shadow-cyan-500/20
                        group/btn
                    "
                >
                    <Github size={16} className="group-hover/btn:rotate-12 transition-transform" />
                    Code
                </a>
            </div>
        </div>
    </div>
  );
}
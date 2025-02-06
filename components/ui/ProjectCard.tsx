"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ImageModal } from "./ImageModal";
import { Github, ExternalLink } from "lucide-react";

interface Technology {
  name: string;
}

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string[];
  image: string;
  technologies: Technology[];
  sourceUrl?: string;
  demoUrl?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  image,
  technologies,
  sourceUrl,
  demoUrl,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group relative w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-xl bg-white shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50">
        {/* Left side - Image */}
        <div
          className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click to view larger
            </span>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col space-y-4">
          <div>
            <p className="text-emerald-500 font-medium mb-2">{subtitle}</p>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                {title}
              </h3>
              <div className="flex gap-3">
                {sourceUrl && (
                  <a
                    href={sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg transition-colors duration-300 hover:bg-gray-200"
                  >
                    <Github size={16} />
                    Source
                  </a>
                )}
                {demoUrl && (
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg transition-colors duration-300 hover:bg-gray-200"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
              </div>
            </div>
            <div className="space-y-3">
              {description.map((desc, index) => (
                <p key={index} className="text-gray-600 text-sm">
                  {desc}
                </p>
              ))}
            </div>
          </div>

          {/* Links and Technologies */}
          <div className="space-y-4 mt-auto">
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full transition-colors duration-300 hover:bg-blue-50 hover:text-blue-600"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={image}
        imageAlt={title}
      />
    </>
  );
};

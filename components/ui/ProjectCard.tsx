"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ImageModal } from "./ImageModal";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types/project";

export const ProjectCard: React.FC<Project> = ({
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
      <div className="group relative w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-800/50">
        {/* Left side - Image */}
        <div
          className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 dark:bg-gray-800/20 group-hover:bg-black/40 dark:group-hover:bg-gray-800/40 transition-colors duration-300 flex items-center justify-center">
            <span className="text-white dark:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click to view larger
            </span>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col space-y-4">
          <div>
            <p className="text-emerald-500 dark:text-emerald-300 font-medium mb-2">
              {subtitle}
            </p>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
                {title}
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                {sourceUrl && (
                  <a
                    href={sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg transition-colors duration-300 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
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
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg transition-colors duration-300 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
              </div>
            </div>
            <div className="space-y-3">
              {description.map((desc, index) => (
                <p
                  key={index}
                  className="text-gray-800 dark:text-gray-100 text-sm"
                >
                  {desc}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-4 mt-auto">
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full transition-colors duration-300 hover:bg-blue-100 hover:text-blue-700 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-blue-600 dark:hover:text-white"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl dark:via-blue-400/10" />
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

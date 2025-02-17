"use client";
import { ScrollAnimation } from "../animations/ScrollAnimation";
import { ProjectCard } from "../ui/ProjectCard";
import { Project } from "@/types/project";
interface ProjectProps {
  projects: Project[];
}
export const Projects: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <section
      id="projects"
      className="min-h-[calc(100vh-72px)] w-full flex flex-col justify-center items-center gap-4 py-16 px-4"
    >
      <ScrollAnimation>
        <h1 className="text-4xl mb-4">Personal Projects</h1>
      </ScrollAnimation>
      {projects.map((project) => (
        <ScrollAnimation className="w-full" key={project.title}>
          <ProjectCard key={project.title} {...project} />
        </ScrollAnimation>
      ))}
    </section>
  );
};

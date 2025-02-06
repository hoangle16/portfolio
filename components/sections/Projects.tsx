"use client";
import { ScrollAnimation } from "../animations/ScrollAnimation";
import { ProjectCard } from "../ui/ProjectCard";

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Speak Story",
      subtitle: "Side Project",
      description: [
        "Built efficient web crawler with error handling Implemented text-to-speech features",
        "Created responsive user interface",
        "Use firebase database to store selectors, admin can configure selectors from UI",
      ],
      image: "/images/projects/speak-story.png",
      technologies: [
        { name: "Express.js" },
        { name: "TypeScript" },
        { name: "Puppeteer" },
        { name: "Firebase" },
      ],
      sourceUrl: "https://github.com/hoangle16/speak-story",
      demoUrl: "https://speak-story-production.up.railway.app",
    },
    {
      title: "Shorten URLs",
      subtitle: "Side Project",
      description: [
        "A web application that allows users to shorten URLs, manage their links, and analyze access data, including location, OS, browser, and referrer. This helps users gain insights into their shortened links. Admins can manage users, links, and reports, ban users, delete reported links, and handle reports efficiently",
      ],
      image: "/images/projects/shorten-urls.png",
      technologies: [
        { name: "Express.js" },
        { name: "React" },
        { name: "MongoDB" },
        { name: "Redis" },
        { name: "Socket.io" },
      ],
      sourceUrl: "https://github.com/hoangle16/shorten-urls",
    },
    {
      title: "Enroll System",
      subtitle: "Side Project",
      description: [
        "A face recognition-based attendance system using ASP.NET Core (API) and Vue.js (frontend), leveraging the Eigenfaces algorithm with EmguCV. The system includes Admin, Teacher, and Student roles",
        "Admin: Manages users, students, courses, registrations, and classrooms.",
        "Teacher: Views teaching schedule, manages attendance via image uploads, and exports reports",
        "Student: Manages profile, uploads face images for attendance, registers for courses, and views attendance records",
      ],
      image: "/images/projects/enroll-system.png",
      technologies: [
        { name: "ASP.NET Core" },
        { name: "Vue.js" },
        { name: "SQL Server" },
        { name: "Entity Framework" },
        { name: "Vuetify" },
        { name: "EmguCV" },
      ],
      sourceUrl: "https://github.com/hoangle16/EnrollSystem",
    },
  ];
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

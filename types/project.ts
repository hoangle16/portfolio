interface Technology {
  name: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string[];
  image: string;
  technologies: Technology[];
  sourceUrl?: string;
  demoUrl?: string;
}
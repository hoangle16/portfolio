interface Skill {
  name: string;
  iconClass: string;
}

interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend Development",
    skills: [
      { name: "C#", iconClass: "devicon-csharp-plain colored" },
      { name: ".NET Core", iconClass: "devicon-dotnetcore-plain colored" },
      { name: "Node.js", iconClass: "devicon-nodejs-plain-wordmark colored" },
      { name: "Express.js", iconClass: "devicon-express-original" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", iconClass: "devicon-react-original colored" },
      { name: "Angular", iconClass: "devicon-angularjs-plain colored" },
      { name: "Vue.js", iconClass: "devicon-vuejs-plain colored" },
      { name: "HTML", iconClass: "devicon-html5-plain colored" },
      { name: "CSS", iconClass: "devicon-css3-plain colored" },
      { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
      { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "SQL Server",
        iconClass: "devicon-microsoftsqlserver-plain colored",
      },
      { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
      { name: "MySQL", iconClass: "devicon-mysql-original colored" },
      { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
      { name: "Redis", iconClass: "devicon-redis-plain colored" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", iconClass: "devicon-git-plain colored" },
      { name: "GitHub", iconClass: "devicon-github-original" },
      { name: "GitLab", iconClass: "devicon-gitlab-plain colored" },
      { name: "Docker", iconClass: "devicon-docker-plain colored" },
      { name: "Firebase", iconClass: "devicon-firebase-plain colored" },
      { name: "Vercel", iconClass: "devicon-vercel-original colored" },
    ],
  },
  {
    title: "UI Frameworks & Others",
    skills: [
      { name: "Redux", iconClass: "devicon-redux-original colored" },
      { name: "Vuetify", iconClass: "devicon-vuetify-plain colored" },
      { name: "Material UI", iconClass: "devicon-materialui-plain colored" },
      {
        name: "Tailwindcss",
        iconClass: "devicon-tailwindcss-original colored",
      },
      { name: "Bootstrap", iconClass: "devicon-bootstrap-plain colored" },
      { name: "Socket.io", iconClass: "devicon-socketio-original colored" },
      { name: "VSCode", iconClass: "devicon-vscode-plain colored" },
      {
        name: "Visual Studio",
        iconClass: "devicon-visualstudio-plain colored",
      },
      { name: "Postman", iconClass: "devicon-postman-plain colored" },
    ],
  },
];

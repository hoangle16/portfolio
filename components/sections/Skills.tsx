import { ScrollAnimation } from "../animations/ScrollAnimation";
import { SkillCard } from "../ui/SkillCard";

interface SkillGroup {
  title: string;
  skills: { name: string; iconClass: string }[];
}

export const Skills: React.FC = () => {
  const skillGroups: SkillGroup[] = [
    {
      title: "Backend Development",
      skills: [
        { name: "C#", iconClass: "devicon-csharp-plain colored" },
        { name: ".NET Core", iconClass: "devicon-dotnetcore-plain colored" },
        { name: "Node.js", iconClass: "devicon-nodejs-plain-wordmark colored" },
        { name: "Express.js", iconClass: "devicon-express-original colored" },
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
        { name: "GitHub", iconClass: "devicon-github-original colored" },
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

  return (
    <section id="skills" className="min-h-[calc(100vh-72px)] w-full py-16 px-4">
      <ScrollAnimation direction="down" className="w-full">
        <h1 className="text-4xl text-center mb-8">My Skills Set</h1>
        <div className="max-w-7xl mx-auto space-y-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h2 className="text-2xl font-semibold text-center md:text-left text-gray-800">
                {group.title}
              </h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {group.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skillName={skill.name}
                    skillIconClass={skill.iconClass}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
};

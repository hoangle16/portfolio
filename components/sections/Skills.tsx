import { SkillGroup } from "@/types/skill";
import { FadeIn } from "../animations/FadeIn";
import { ScrollAnimation } from "../animations/ScrollAnimation";
import { SkillCard } from "../ui/SkillCard";

interface SkillsProps {
  skillGroups: SkillGroup[];
}

export const Skills: React.FC<SkillsProps> = ({ skillGroups }) => {
  return (
    <section id="skills" className="min-h-[calc(100vh-72px)] w-full py-16 px-4">
      <ScrollAnimation direction="down" className="w-full">
        <h1 className="text-4xl text-center mb-8">My Skills Set</h1>
        <div className="max-w-7xl mx-auto space-y-6">
          {skillGroups?.map((group) => (
            <div key={group.title} className="space-y-4">
              <h2 className="text-2xl font-semibold text-center md:text-left text-gray-800 dark:text-gray-200">
                {group.title}
              </h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {group.skills.map((skill, index) => (
                  <FadeIn key={skill.name} delay={300 + index * 50}>
                    <SkillCard
                      key={skill.name}
                      skillName={skill.name}
                      skillIconClass={skill.iconClass}
                    />
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
};

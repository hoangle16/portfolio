"use client";
interface SkillCardProps {
  skillName: string;
  skillIconClass: string;
}
export const SkillCard: React.FC<SkillCardProps> = ({
  skillName,
  skillIconClass,
}) => {
  return (
    <div className="relative w-24 h-24 group flex flex-col items-center justify-center rounded-xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-400/50 cursor-pointer">
      <i
        className={`${skillIconClass} text-gray-900 dark:text-white text-4xl mb-2 transition-transform duration-300 group-hover:scale-110`}
      ></i>
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
        {skillName}
      </h3>

      {/* Glow effect container */}
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
    </div>
  );
};

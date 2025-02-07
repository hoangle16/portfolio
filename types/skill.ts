interface Skill {
  name: string;
  iconClass: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}
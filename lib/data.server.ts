import { Profile } from "@/types/profile";
import { adminDatabase } from "./firebaseAdmin";
import { SkillGroup } from "@/types/skill";
import { Project } from "@/types/project";

export const getProfile = async (): Promise<Profile> => {
  const snapshot = await adminDatabase.ref("profile").once("value");
  return snapshot.exists() ? snapshot.val() : null;
};

export const getProjects = async (): Promise<Project[]> => {
  const snapshot = await adminDatabase.ref("projects").once("value");
  return snapshot.exists() ? snapshot.val() : [];
};

export const getSkills = async (): Promise<SkillGroup[]> => {
  const snapshot = await adminDatabase.ref("skillGroups").once("value");
  return snapshot.exists() ? snapshot.val() : [];
};

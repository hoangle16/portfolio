import { About } from "@/components/sections/About";
import { Home } from "@/components/sections/Home";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { getProfile, getProjects, getSkills } from "@/lib/data.server";

export default async function LandingPage() {
  const [profile, projects, skillGroups] = await Promise.all([
    getProfile(),
    getProjects(),
    getSkills(),
  ]);
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <Home
        name={profile.name}
        resumeUrl={profile.resumeUrl}
        titles={profile.titles}
        socials={profile.contactInfo.socialMedia}
      />
      <About
        avatarUrl={profile.avatarUrl}
        summary={profile.description.summary}
        details={profile.description.details}
      />
      <Skills skillGroups={skillGroups} />
      <Projects projects={projects} />
      <Contact
        email={profile.contactInfo.email}
        phone={profile.contactInfo.phone}
        location={profile.contactInfo.location}
        socials={profile.contactInfo.socialMedia}
      />
      <ScrollToTop />
    </div>
  );
}

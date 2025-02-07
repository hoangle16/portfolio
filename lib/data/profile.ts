interface Social {
  link: string;
  icon: string;
}
interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  socialMedia: Social[];
}

interface Description {
  summary: string;
  details?: string[];
}

export interface Profile {
  name: string;
  titles: string[];
  avatarUrl: string;
  resumeUrl: string;
  description: Description;
  contactInfo: ContactInfo;
}

export const profile: Profile = {
  name: "Le Hoang",
  titles: ["Full Stack Developer.", "Web Developer.", "Software Developer."],
  avatarUrl: "/images/about/avatar.jpg",
  resumeUrl:
    "https://drive.google.com/file/d/1e5Z8CW0I_EUqQOtWx7GbJj7t7Zrx7-UI/view?usp=sharing",
  description: {
    summary: `I&apos;m
          <span class="text-blue-700 dark:text-blue-400 font-semibold">
            Hoang
          </span>
          -
          <span class="text-blue-700 dark:text-blue-400 font-semibold">
            Full Stack Developer
          </span>
          with
          <span className="text-blue-700 dark:text-blue-400 font-semibold">
            4+ years
          </span>
          of experience building scalable web applications and enterprise
          solutions. Strong focus on delivering quality solutions using
          <span class="text-blue-700 dark:text-blue-400 font-semibold">
            Node.js, C#.NET, and React</span>. Key technical strengths:`,
    details: [
      "Building scalable web applications with modern technologies",
      "Implementing complex features and maintaining code quality",
      "Strong debugging and problem-solving skills",
      "Experience with various databases",
    ],
  },
  contactInfo: {
    phone: "+84 369 874 979",
    email: "hoangl.dev@gmail.com",
    location: "Da Nang, Vietnam",
    socialMedia: [
      {
        link: "https://github.com/hoangle16",
        icon: "devicon-github-original colored",
      },
      {
        link: "https://linkedin.com/in/hoangle98",
        icon: "devicon-linkedin-plain colored",
      },
      {
        link: "https://facebook.com/hoangle101298/",
        icon: "devicon-facebook-original colored",
      },
    ],
  },
};

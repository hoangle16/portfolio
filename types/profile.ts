export interface Social {
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

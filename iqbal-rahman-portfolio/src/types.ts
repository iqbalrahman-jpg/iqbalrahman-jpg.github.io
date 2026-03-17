export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface ProfileData {
  name: string;
  headline: string;
  about: string;
  skills: string[];
  experience: Experience[];
  projects: Project[];
  education: string[];
  socials: {
    linkedin: string;
    github?: string;
    email?: string;
    resume?: string;
  };
}

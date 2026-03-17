import { ProfileData } from "./types";

export const fallbackData: ProfileData = {
  name: "Iqbal Rahman",
  headline: "Software Engineer | iOS Developer",
  about: "I am an iOS Developer focused on building clean, reliable, and user-friendly mobile applications. I work primarily with SwiftUI and Combine to create modern app experiences, maintain scalable codebases, and deliver polished features from development through App Store publication.",
  skills: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Next.js", "PostgreSQL", "Firebase"],
  experience: [
    {
      company: "Freelance / Self-Employed",
      role: "Software Engineer",
      period: "2023 - Present",
      description: [
        "Developing custom web solutions for various clients.",
        "Building responsive and performant user interfaces using React and Tailwind CSS.",
        "Implementing backend services with Node.js and Express."
      ]
    }
  ],
  projects: [
    {
      title: "Portfolio Website",
      description: "A minimalist portfolio built with React and Tailwind CSS.",
      tags: ["React", "Tailwind", "Motion"],
    }
  ],
  education: [
    "Information Technology, Universitas Gadjah Mada"
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/iqbalrahman-dev/",
    github: "https://github.com/iqbalrahman",
    email: "iqbalrahmanyogya@gmail.com",
    resume: "/assets/file/iqbalRahman_CV.pdf"
  }
};

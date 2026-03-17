import { ProfileData } from "./types";

export const fallbackData: ProfileData = {
  name: "Iqbal Rahman",
  headline: "Software Engineer | iOS Developer",
  about: "I am an iOS Developer focused on building clean, reliable, and user-friendly mobile applications. I work primarily with SwiftUI and Combine, use Alamofire for network communication, and manage local persistence with Realm and Core Data. I also build modular applications using Swift Package Manager and Git submodules to keep codebases scalable, maintainable, and ready for App Store release.",
  skills: [
    "Swift",
    "SwiftUI",
    "Combine",
    "UIKit",
    "Realm",
    "Core Data",
    "Alamofire",
    "Xcode",
    "MVVM",
    "Clean Architecture",
    "Modular Architecture",
    "Swift Package Manager",
    "Git Submodules",
    "REST API Integration",
    "App Store Connect",
    "TestFlight",
    "Git",
    "Firebase",
    "JSON Parsing"
  ],
  experience: [
    {
      company: "PT Paramadaksa Teknologi Nusantara (nexSOFT)",
      role: "iOS App Developer",
      period: "Jan 2024 - Present",
      description: [
        "Develop and maintain iOS applications for production use with a focus on performance, usability, and reliability.",
        "Build modern mobile interfaces using SwiftUI, implement reactive data flows with Combine, and integrate APIs using Alamofire.",
        "Manage local persistence with Realm and Core Data for efficient on-device data handling.",
        "Apply MVVM and modular architecture patterns to keep the app structure scalable, testable, and maintainable.",
        "Structure applications with modular packages and Git submodules to support scalable and maintainable development.",
        "Handle release workflows, testing, and deployment through TestFlight and App Store Connect."
      ]
    },
    {
      company: "elecomp indonesia",
      role: "Web Developer Intern",
      period: "Jul 2022 - Jan 2023",
      description: [
        "Contributed to web development tasks during the internship period, including implementation of application features and backend integration.",
        "Worked on API development and web application functionality based on project requirements.",
        "Collaborated with the team to deliver maintainable solutions and support ongoing product improvements."
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

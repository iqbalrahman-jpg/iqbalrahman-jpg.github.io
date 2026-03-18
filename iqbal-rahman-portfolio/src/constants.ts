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
      title: "Group App",
      description: "An iOS application focused on delivering a structured and user-friendly mobile experience with a scalable architecture and polished interface.",
      tags: ["SwiftUI", "Combine", "MVVM"],
      image: "/assets/img/project/group.png",
    },
    {
      title: "GroPanel",
      description: "A product-focused application built with attention to structured workflows, interface clarity, and maintainable implementation.",
      tags: ["Swift", "UIKit", "Modular Architecture"],
      image: "/assets/img/project/gropanel.png",
    },
    {
      title: "NexToken",
      description: "A mobile product implementation centered on reliable feature delivery, clean user flows, and scalable app structure.",
      tags: ["SwiftUI", "REST API", "MVVM"],
      image: "/assets/img/project/nextoken.png",
    },
    {
      title: "BOI",
      description: "An application project designed to support practical user needs through a clean interface and solid technical foundation.",
      tags: ["Swift", "Core Data", "App Development"],
      image: "/assets/img/project/boi.png",
    },
    {
      title: "Belajar Ekspor",
      description: "A digital product with a focus on accessible information delivery, organized content flow, and dependable user experience.",
      tags: ["SwiftUI", "UI Development", "Content App"],
      image: "/assets/img/project/belajarekspor.png",
    },
    {
      title: "Perpustakaan",
      description: "A library-themed application built to organize information clearly and provide a simple, effective interface for users.",
      tags: ["Swift", "Database", "Mobile App"],
      image: "/assets/img/project/perpustakaan.png",
    },
    {
      title: "Transprima",
      description: "A project focused on usability, structured implementation, and delivering a polished experience for operational workflows.",
      tags: ["Swift", "API Integration", "App Workflow"],
      image: "/assets/img/project/transprima.png",
    },
    {
      title: "Company Profile",
      description: "A company profile project emphasizing clean presentation, strong visual structure, and clear communication of product value.",
      tags: ["Frontend", "UI/UX", "Web Project"],
      image: "/assets/img/project/companyprofile.png",
    },
    {
      title: "WebGIS",
      description: "A mapping and information-focused project built to present spatial data and user interactions in a clear and usable way.",
      tags: ["Web App", "GIS", "Frontend"],
      image: "/assets/img/project/webgis.png",
    }
  ],
  education: [
    "Information Technology, Universitas Gadjah Mada"
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/iqbalrahman-dev/",
    github: "https://github.com/iqbalrahman-jpg",
    email: "iqbalrahman.amd@gmail.com",
    resume: "/assets/file/iqbalRahman_CV.pdf"
  }
};

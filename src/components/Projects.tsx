import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ProfileData, Project } from "../types";
import { ExternalLink } from "lucide-react";

interface ProjectsProps {
  data: ProfileData;
}

interface ProjectCardProps {
  key?: string;
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const images = project.images?.length ? project.images : [project.image || `https://picsum.photos/seed/${project.title}/800/450`];
  const [activeImage, setActiveImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || !isHovered) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveImage((current) => (current === images.length - 1 ? 0 : current + 1));
    }, 2500);

    return () => window.clearInterval(intervalId);
  }, [images.length, isHovered]);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group bg-white rounded-3xl border border-zinc-100 overflow-hidden shadow-sm hover:shadow-xl transition-all"
    >
      <div className="aspect-video bg-zinc-100 relative overflow-hidden">
        <motion.div
          animate={{ x: `-${activeImage * 100}%` }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-full"
        >
          {images.map((image, imageIndex) => (
            <div key={image} className="h-full w-full shrink-0">
              <img
                src={image}
                alt={`${project.title} preview ${imageIndex + 1}`}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-zinc-900/30 px-2 py-1 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
              {images.map((image, imageIndex) => (
                <span
                  key={image}
                  className={`rounded-full transition-all duration-300 ${
                    imageIndex === activeImage ? "h-1 w-3 bg-white/95" : "h-1 w-1 bg-white/35"
                  }`}
                />
              ))}
          </div>
        )}
      </div>
      <div className="p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-xl font-bold text-zinc-900">{project.title}</h3>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
        <p className="text-zinc-500 mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-lg">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 px-6 bg-zinc-50/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Featured Projects</h2>
          <p className="text-zinc-500">A selection of my recent work and personal experiments.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

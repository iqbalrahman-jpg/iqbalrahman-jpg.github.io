import { motion } from "motion/react";
import { ProfileData } from "../types";
import { ExternalLink } from "lucide-react";

interface ProjectsProps {
  data: ProfileData;
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
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl border border-zinc-100 overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-video bg-zinc-100 relative overflow-hidden">
                <img 
                  src={project.image || `https://picsum.photos/seed/${project.title}/800/450`} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
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
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

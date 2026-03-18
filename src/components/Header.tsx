import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import { ProfileData } from "../types";

interface HeaderProps {
  data: ProfileData;
}

export default function Header({ data }: HeaderProps) {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100"
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-semibold text-lg tracking-tight text-zinc-900">
          {data.name}
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
          <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
          <a href="#experience" className="hover:text-zinc-900 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-zinc-900 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          {data.socials.github && (
            <a href={data.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors">
              <Github size={20} />
            </a>
          )}
          <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors">
            <Linkedin size={20} />
          </a>
          {data.socials.email && (
            <a href={`mailto:${data.socials.email}`} className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors">
              <Mail size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.header>
  );
}

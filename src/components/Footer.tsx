import { motion } from "motion/react";
import { ProfileData } from "../types";
import { Mail, Linkedin, Github } from "lucide-react";

interface FooterProps {
  data: ProfileData;
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-zinc-100">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-bold text-zinc-900 mb-6 tracking-tight">
              Let's build something <br /> amazing together.
            </h2>
            <p className="text-zinc-500 text-lg mb-8">
              I'm always open to new projects, collaborations, or just a friendly chat about technology.
            </p>
            <div className="space-y-4">
              {data.socials.email && (
                <a href={`mailto:${data.socials.email}`} className="flex items-center gap-4 text-zinc-900 font-medium group">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  {data.socials.email}
                </a>
              )}
              <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-900 font-medium group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
                  <Linkedin size={20} />
                </div>
                LinkedIn Profile
              </a>
            </div>
          </div>
          
          <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Quick Links</h3>
            <nav className="flex flex-col gap-4 text-zinc-500 font-medium">
              <a href="#about" className="hover:text-zinc-900 transition-colors">About Me</a>
              <a href="#experience" className="hover:text-zinc-900 transition-colors">My Experience</a>
              <a href="#projects" className="hover:text-zinc-900 transition-colors">Featured Projects</a>
              <a href={data.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">GitHub</a>
            </nav>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-zinc-100 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} {data.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { motion } from "motion/react";
import { ProfileData } from "../types";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  data: ProfileData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section id="about" className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold uppercase tracking-wider mb-6">
            Available for opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 tracking-tight leading-[1.1] mb-8">
            {data.headline}
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-10">
            {data.about}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-zinc-900 text-white rounded-2xl font-medium hover:bg-zinc-800 transition-all flex items-center gap-2 group"
            >
              Get in touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={data.socials.resume || "/assets/file/iqbalRahman_CV.pdf"}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white border border-zinc-200 text-zinc-900 rounded-2xl font-medium hover:bg-zinc-50 transition-all"
            >
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

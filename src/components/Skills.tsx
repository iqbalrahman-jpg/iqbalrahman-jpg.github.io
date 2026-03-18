import { motion } from "motion/react";
import { ProfileData } from "../types";

interface SkillsProps {
  data: ProfileData;
}

export default function Skills({ data }: SkillsProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Skills & Technologies</h2>
          <p className="text-zinc-500">The tools and frameworks I use to bring ideas to life.</p>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {data.skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-6 py-3 bg-white border border-zinc-200 text-zinc-700 rounded-2xl text-sm font-medium hover:border-zinc-900 hover:text-zinc-900 transition-all cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

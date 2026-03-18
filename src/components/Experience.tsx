import { motion } from "motion/react";
import { ProfileData } from "../types";

interface ExperienceProps {
  data: ProfileData;
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 px-6 bg-zinc-50/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Experience</h2>
          <p className="text-zinc-500">My professional journey and career milestones.</p>
        </motion.div>

        <div className="space-y-8">
          {data.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900">{exp.role}</h3>
                  <p className="text-zinc-500 font-medium">{exp.company}</p>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-sm font-medium">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-zinc-600 flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

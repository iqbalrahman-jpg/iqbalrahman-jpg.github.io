import { motion, AnimatePresence } from "motion/react";
import { fallbackData } from "./constants";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-zinc-900 selection:text-white">
      <Header data={fallbackData} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero data={fallbackData} />
            <Experience data={fallbackData} />
            <Skills data={fallbackData} />
            <Projects data={fallbackData} />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer data={fallbackData} />
    </div>
  );
}

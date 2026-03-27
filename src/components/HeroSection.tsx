import { motion } from "framer-motion";
import { ArrowDown, Download, Eye } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-medium text-sm md:text-base tracking-widest uppercase mb-4">
            Full-Stack Developer & Data Analyst
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          I build powerful websites
          <br />
          <span className="gradient-text">& turn data into insights.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Full-stack developer & data analyst helping businesses grow with technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Eye size={18} /> View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold border border-border text-foreground hover:bg-secondary transition-colors"
          >
            Hire Me
          </a>
            <a
              href="/Confidence_Osagie_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              <Download size={18} /> Download CV
            </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Globe, GitBranch, BarChart3, FileSpreadsheet, TrendingUp, Layers } from "lucide-react";

const webSkills = [
  { name: "HTML & CSS", icon: Globe },
  { name: "JavaScript", icon: Code2 },
  { name: "React", icon: Layers },
  { name: "Node.js & Express", icon: Database },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "REST APIs", icon: Code2 },
];

const dataSkills = [
  { name: "Excel Dashboards", icon: FileSpreadsheet },
  { name: "Python (Pandas)", icon: Code2 },
  { name: "Matplotlib", icon: BarChart3 },
  { name: "Power BI", icon: TrendingUp },
  { name: "Data Visualization", icon: BarChart3 },
  { name: "Statistical Analysis", icon: Database },
];

const SkillCard = ({ skill, index, inView }: { skill: { name: string; icon: any }; index: number; inView: boolean }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glass-card p-5 rounded-xl hover-lift group cursor-default"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
        <Icon size={20} className="text-primary" />
      </div>
      <p className="font-medium text-sm text-foreground">{skill.name}</p>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Web Dev */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
              <Code2 size={20} className="text-primary" /> Web Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {webSkills.map((s, i) => (
                <SkillCard key={s.name} skill={s} index={i} inView={inView} />
              ))}
            </div>
          </div>

          {/* Data */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
              <BarChart3 size={20} className="text-primary" /> Data Analysis
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {dataSkills.map((s, i) => (
                <SkillCard key={s.name} skill={s} index={i + 6} inView={inView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

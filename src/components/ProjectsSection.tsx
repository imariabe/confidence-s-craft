import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

import projectChat from "@/assets/project-chat.jpg";
import projectChurch from "@/assets/project-church.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectLanding from "@/assets/project-landing.jpg";
import projectSales from "@/assets/project-sales-dashboard.jpg";
import projectStudent from "@/assets/project-student.jpg";
import projectInsights from "@/assets/project-insights.jpg";

const webProjects = [
  {
    title: "Real-Time Chat App",
    desc: "A full-featured chat application with real-time messaging, user authentication, and group conversations.",
    tech: ["Node.js", "Socket.io", "Express", "MongoDB"],
    image: projectChat,
  },
  {
    title: "Church Website",
    desc: "A modern, responsive church website with service schedules, event management, and sermon archives.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    image: projectChurch,
  },
  {
    title: "Portfolio Website",
    desc: "A sleek developer portfolio showcasing projects, skills, and professional experience.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: projectPortfolio,
  },
  {
    title: "Business Landing Pages",
    desc: "High-converting landing pages designed to drive engagement and grow businesses online.",
    tech: ["React", "CSS", "Responsive Design"],
    image: projectLanding,
  },
];

const dataProjects = [
  {
    title: "Sales Dashboard",
    desc: "Interactive dashboard analyzing sales trends, revenue metrics, and product performance across regions.",
    tech: ["Excel", "Power BI", "Python"],
    image: projectSales,
  },
  {
    title: "Student Performance Analysis",
    desc: "Data-driven analysis of student grades, attendance patterns, and academic performance factors.",
    tech: ["Python", "Pandas", "Matplotlib"],
    image: projectStudent,
  },
  {
    title: "Business Insights Report",
    desc: "Comprehensive report uncovering market trends, customer behavior, and growth opportunities.",
    tech: ["Power BI", "Excel", "SQL"],
    image: projectInsights,
  },
];

type Tab = "web" | "data";

const ProjectCard = ({ project, index, inView }: { project: typeof webProjects[0]; index: number; inView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass-card rounded-xl overflow-hidden hover-lift group"
  >
    <div className="relative overflow-hidden aspect-video">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        width={1024}
        height={640}
      />
      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity">
          <ExternalLink size={18} />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:opacity-80 transition-opacity">
          <Github size={18} />
        </a>
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-display font-semibold text-lg mb-2">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.desc}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{t}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [tab, setTab] = useState<Tab>("web");

  const projects = tab === "web" ? webProjects : dataProjects;

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Portfolio</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="inline-flex rounded-lg bg-secondary/50 p-1">
            {(["web", "data"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  tab === t
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t === "web" ? "Web Development" : "Data Analysis"}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

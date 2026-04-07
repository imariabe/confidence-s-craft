import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";

import projectChat from "@/assets/project-chat.jpg";
import projectChurch from "@/assets/project-church.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectLanding from "@/assets/project-landing.jpg";
import projectSales from "@/assets/project-sales-dashboard.jpg";
import projectStudent from "@/assets/project-student.jpg";
import projectInsights from "@/assets/project-insights.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectTaskmanager from "@/assets/project-taskmanager.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectFinancial from "@/assets/project-financial.jpg";
import projectHealthcare from "@/assets/project-healthcare.jpg";
import projectSocialAnalytics from "@/assets/project-social-analytics.jpg";

interface Project {
  title: string;
  desc: string;
  tech: string[];
  image: string;
  details: string;
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const webProjects: Project[] = [
  {
    title: "Real-Time Chat App",
    desc: "A full-featured chat application with real-time messaging, user authentication, and group conversations.",
    tech: ["Node.js", "Socket.io", "Express", "MongoDB"],
    image: projectChat,
    details: "Built a scalable real-time chat platform supporting private and group messaging with typing indicators, read receipts, and media sharing. Implemented WebSocket connections for instant message delivery.",
    features: ["Real-time messaging", "User authentication", "Group chats", "Media sharing", "Typing indicators"],
  },
  {
    title: "E-Commerce Platform",
    desc: "A complete online store with product management, cart system, payment integration, and order tracking.",
    tech: ["React", "Django", "PostgreSQL", "Stripe"],
    image: projectEcommerce,
    details: "Developed a full-stack e-commerce solution with an intuitive admin dashboard, product catalog, shopping cart, secure checkout with Stripe, and real-time order tracking for customers.",
    features: ["Product catalog", "Shopping cart", "Stripe payments", "Order tracking", "Admin dashboard"],
  },
  {
    title: "Church Website",
    desc: "A modern, responsive church website with service schedules, event management, and sermon archives.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    image: projectChurch,
    details: "Designed and built a welcoming church website featuring dynamic event calendars, sermon audio/video archives, online giving integration, and a member portal for community engagement.",
    features: ["Event calendar", "Sermon archives", "Online giving", "Member portal", "Responsive design"],
  },
  {
    title: "Task Management App",
    desc: "A collaborative project management tool with kanban boards, team assignments, and progress tracking.",
    tech: ["React", "Python", "Django", "PostgreSQL"],
    image: projectTaskmanager,
    details: "Created a comprehensive task management application featuring drag-and-drop kanban boards, team collaboration tools, deadline tracking, and automated progress reports.",
    features: ["Kanban boards", "Team collaboration", "Deadline tracking", "Progress reports", "Drag & drop"],
  },
  {
    title: "Portfolio Website",
    desc: "A sleek developer portfolio showcasing projects, skills, and professional experience.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: projectPortfolio,
    details: "Crafted a stunning developer portfolio with smooth animations, dark mode support, interactive project showcases, and optimized performance scoring 95+ on Lighthouse.",
    features: ["Smooth animations", "Dark mode", "Interactive projects", "Contact form", "SEO optimized"],
  },
  {
    title: "Restaurant Website",
    desc: "An elegant restaurant website with online reservations, menu display, and customer reviews.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: projectRestaurant,
    details: "Built a sophisticated restaurant website featuring an interactive menu with dietary filters, online table reservation system, customer review management, and integration with delivery services.",
    features: ["Online reservations", "Interactive menu", "Customer reviews", "Delivery integration", "Gallery"],
  },
  {
    title: "Business Landing Pages",
    desc: "High-converting landing pages designed to drive engagement and grow businesses online.",
    tech: ["React", "CSS", "Responsive Design"],
    image: projectLanding,
    details: "Designed and developed multiple high-converting landing pages for various businesses, focusing on conversion optimization, A/B testing, and mobile-first responsive design principles.",
    features: ["Conversion optimized", "A/B testing", "Mobile-first", "Fast loading", "SEO friendly"],
  },
];

const dataProjects: Project[] = [
  {
    title: "Sales Dashboard",
    desc: "Interactive dashboard analyzing sales trends, revenue metrics, and product performance across regions.",
    tech: ["Excel", "Power BI", "Python"],
    image: projectSales,
    details: "Developed a comprehensive sales analytics dashboard tracking KPIs across multiple regions, identifying revenue trends, forecasting future sales, and providing actionable insights for the sales team.",
    features: ["Revenue tracking", "Regional analysis", "Sales forecasting", "KPI monitoring", "Interactive filters"],
  },
  {
    title: "Financial Analytics Report",
    desc: "In-depth financial analysis with investment tracking, risk assessment, and portfolio performance metrics.",
    tech: ["Python", "Pandas", "Power BI", "SQL"],
    image: projectFinancial,
    details: "Created a financial analytics platform processing large datasets to track investment performance, assess risk metrics, and generate automated reports for stakeholders with real-time market data integration.",
    features: ["Investment tracking", "Risk assessment", "Automated reports", "Market data integration", "Portfolio analysis"],
  },
  {
    title: "Student Performance Analysis",
    desc: "Data-driven analysis of student grades, attendance patterns, and academic performance factors.",
    tech: ["Python", "Pandas", "Matplotlib"],
    image: projectStudent,
    details: "Conducted thorough analysis of student academic data, identifying key factors affecting performance, creating predictive models for at-risk students, and generating visual reports for educators.",
    features: ["Grade analysis", "Attendance tracking", "Predictive modeling", "Visual reports", "Factor analysis"],
  },
  {
    title: "Healthcare Data Analysis",
    desc: "Comprehensive healthcare analytics examining patient outcomes, treatment effectiveness, and hospital efficiency.",
    tech: ["Python", "Pandas", "Tableau", "SQL"],
    image: projectHealthcare,
    details: "Analyzed healthcare datasets to identify patterns in patient outcomes, evaluate treatment effectiveness across demographics, and optimize hospital resource allocation through data-driven recommendations.",
    features: ["Patient outcomes", "Treatment analysis", "Resource optimization", "Demographic insights", "Visual dashboards"],
  },
  {
    title: "Social Media Analytics",
    desc: "Deep analysis of social media engagement, audience growth, and content performance across platforms.",
    tech: ["Python", "Power BI", "API Integration"],
    image: projectSocialAnalytics,
    details: "Built an analytics pipeline to track social media metrics across multiple platforms, analyzing engagement patterns, audience demographics, content performance, and providing growth strategy recommendations.",
    features: ["Engagement tracking", "Audience analysis", "Content performance", "Growth strategies", "Multi-platform"],
  },
  {
    title: "Business Insights Report",
    desc: "Comprehensive report uncovering market trends, customer behavior, and growth opportunities.",
    tech: ["Power BI", "Excel", "SQL"],
    image: projectInsights,
    details: "Developed a detailed business intelligence report analyzing market trends, customer segmentation, purchasing behavior, and competitive landscape to identify strategic growth opportunities.",
    features: ["Market trends", "Customer segmentation", "Competitive analysis", "Growth opportunities", "Executive summary"],
  },
];

type Tab = "web" | "data";

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ type: "spring", damping: 25 }}
      className="glass-card rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-video object-cover rounded-t-2xl"
          width={1024}
          height={640}
        />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      <div className="p-6">
        <h3 className="font-display font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.details}</p>

        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-2 text-foreground">Key Features</h4>
          <ul className="space-y-1.5">
            {project.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                <ChevronRight size={14} className="text-primary flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{t}</span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.liveUrl || "#"}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={14} /> View Live
          </a>
          <a
            href={project.githubUrl || "#"}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground text-sm font-medium hover:opacity-80 transition-opacity"
          >
            <Github size={14} /> Source Code
          </a>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const ProjectCard = ({
  project,
  index,
  inView,
  onClick,
}: {
  project: Project;
  index: number;
  inView: boolean;
  onClick: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass-card rounded-xl overflow-hidden hover-lift group cursor-pointer"
    onClick={onClick}
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
        <span className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
          View Details
        </span>
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = tab === "web" ? webProjects : dataProjects;

  return (
    <>
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
              <ProjectCard
                key={p.title}
                project={p}
                index={i}
                inView={inView}
                onClick={() => setSelectedProject(p)}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsSection;

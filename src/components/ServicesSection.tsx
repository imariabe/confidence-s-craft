import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, RefreshCw, BarChart3, Bug } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom, responsive websites built from scratch to establish your online presence and drive growth.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    desc: "Transform outdated websites into modern, fast, and user-friendly experiences that convert visitors.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Dashboards",
    desc: "Turn raw data into actionable insights with interactive dashboards and comprehensive reports.",
  },
  {
    icon: Bug,
    title: "Bug Fixing",
    desc: "Quick and reliable debugging to get your website or application running smoothly again.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Services</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            What I <span className="gradient-text">Offer</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 rounded-xl hover-lift group text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={26} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

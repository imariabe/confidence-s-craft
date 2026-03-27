import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import portrait from "@/assets/confidence-portrait.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glow-border">
              <img
                src={portrait}
                alt="Confidence Osagie"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
                width={800}
                height={1024}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 glass-card px-5 py-3 rounded-xl">
              <p className="text-primary font-display font-bold text-lg">3+ Years</p>
              <p className="text-muted-foreground text-xs">Experience</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">About Me</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Crafting <span className="gradient-text">Digital Solutions</span> That Matter
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Hi, I'm <span className="text-foreground font-semibold">Confidence Osagie</span> — a passionate web developer and data analyst dedicated to building real-world solutions that make a difference. I combine clean, performant code with data-driven insights to help businesses grow and thrive in the digital landscape.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether it's a full-stack web application or a deep-dive analytics dashboard, I bring the same level of precision, creativity, and commitment to every project.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Frontend", value: "React, HTML, CSS, JS" },
                { label: "Backend", value: "Node.js, Express, Django" },
                { label: "Data", value: "Python, Excel, Power BI" },
                { label: "Tools", value: "Git, APIs, Figma" },
              ].map((item) => (
                <div key={item.label} className="glass-card p-4 rounded-xl">
                  <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-sm text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

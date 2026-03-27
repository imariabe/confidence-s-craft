import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Okonkwo",
    role: "Startup Founder",
    text: "Confidence delivered a stunning website that exceeded our expectations. Her attention to detail and professionalism made the entire process seamless.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Marketing Manager",
    text: "The data dashboard she built transformed how we make decisions. We can now see trends we never noticed before. Highly recommend her services!",
    rating: 5,
  },
  {
    name: "James Adebayo",
    role: "Church Administrator",
    text: "Our church website looks incredible and is so easy to manage. Confidence understood our vision perfectly and brought it to life beautifully.",
    rating: 5,
  },
  {
    name: "Amara Nwosu",
    role: "Small Business Owner",
    text: "Working with Confidence was a game-changer for my business. The landing page she designed increased our leads by 40% in the first month.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 rounded-xl hover-lift relative"
            >
              <Quote size={32} className="text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-display font-bold text-primary text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

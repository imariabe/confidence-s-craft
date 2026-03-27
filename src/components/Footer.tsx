import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-4 border-t border-border/30">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="#home" className="font-display text-lg font-bold gradient-text">
        {"<"}CodeCrafted{" />"}
      </a>
      <p className="text-muted-foreground text-sm flex items-center gap-1">
        © {new Date().getFullYear()} Confidence Osagie. Built with <Heart size={14} className="text-primary" />
      </p>
      <div className="flex gap-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={18} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

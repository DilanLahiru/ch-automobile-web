import { Wrench } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Wrench className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <span className="font-display text-xl text-foreground">CH</span>
              <span className="font-display text-xl text-gradient"> AUTOMOBILE</span>
            </div>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["Home", "Services", "About", "Booking", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear} CH Automobile. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

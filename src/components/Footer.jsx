import { Wrench, Phone, Mail, MapPin, Facebook, Linkedin, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Booking", href: "#booking" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://web.facebook.com/p/CH-Automobile-Service-100076933733502/", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const contactDetails = [
    { icon: Phone, text: "+94 (71) 427 4163" },
    { icon: Mail, text: "chautomob@gmail.com" },
    { icon: MapPin, text: "304 A Abhaya Street, Nagoda, Kalutara" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-cyan-950 to-cyan-900 border-t border-yellow-400/30 relative overflow-hidden">
      {/* Advanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animation-float" />
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl animation-pulse-slow" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-yellow-300/3 rounded-full blur-3xl animation-pulse-slow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-4">
            {/* Company Info Section */}
            <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-3">
                {/* <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-cyan-950" />
                </div> */}
                <div>
                  <p className="font-display text-2xl text-cyan-300 font-bold">CH</p>
                  <p className="font-display text-xs text-cyan-50 font-bold tracking-widest">AUTOMOBILE</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                Your trusted partner for all automotive care needs. Professional service, certified technicians, and quality guaranteed.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 hover:from-cyan-500/40 hover:to-cyan-600/40 flex items-center justify-center transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500/60"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-cyan-50 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-serif text-lg font-bold text-white uppercase tracking-widest">Quick Links</h3>
              
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 opacity-0 group-hover:opacity-100 transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Section */}
            <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="font-serif text-lg font-bold text-white uppercase tracking-widest">Our Services</h3>
              
              <ul className="space-y-3">
                {[
                  "General Repairs",
                  "Engine Service",
                  "Oil Change",
                  "Electrical Work",
                  "Online Booking",
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 opacity-0 group-hover:opacity-100 transition-all" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Section */}
            <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h3 className="font-serif text-lg font-bold text-white uppercase tracking-widest">Contact</h3>
              
              <div className="space-y-4">
                {contactDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group cursor-pointer hover:translate-x-1 transition-transform duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center flex-shrink-0 group-hover:from-cyan-500/40 group-hover:to-cyan-600/40 transition-all">
                      <detail.icon className="w-5 h-5 text-cyan-50" />
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-cyan-300 transition-colors">
                      {detail.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Working Hours */}
              <div className="pt-4 border-t border-yellow-400/20">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Working Hours</p>
                <div className="text-gray-300 space-y-1">
                  <p className="text-sm font-medium">Mon - Sat: 8:00 AM - 5:00 PM</p>
                  <p className="text-sm font-medium">Sundays and Poya days closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} <span className="text-cyan-50 font-semibold">CH Automobile</span>. All rights reserved.
            </p>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-200 to-cyan-500 flex items-center justify-center hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-cyan-950 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes animation-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes animation-pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes animate-fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animation-float {
          animation: animation-float 3s ease-in-out infinite;
        }

        .animation-pulse-slow {
          animation: animation-pulse-slow 4s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: animate-fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+94 (76) 701 2722", "+94 (71) 427 4163", "+94 (34) 222 1176"],
      color: "from-yellow-400 to-yellow-500",
      bgColor: "from-yellow-100 to-yellow-50",
      hoverColor: "text-yellow-600",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["CH Automobile service", "304 A Abhaya Street, Nagoda, Kalutara"],
      color: "from-cyan-400 to-cyan-500",
      bgColor: "from-cyan-100 to-cyan-50",
      hoverColor: "text-cyan-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["chautomob@gmail.com"],
      color: "from-blue-400 to-blue-500",
      bgColor: "from-blue-100 to-blue-50",
      hoverColor: "text-blue-600",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 8:00 AM - 5:00 PM", "Sundays and Poya days closed"],
      color: "from-orange-400 to-orange-500",
      bgColor: "from-orange-100 to-orange-50",
      hoverColor: "text-orange-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Advanced Animated Background Elements */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="max-w-4xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100/50 border border-cyan-300/50 backdrop-blur-sm mb-6"
            >
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-cyan-700 uppercase tracking-widest">
              Get In Touch
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-6">
            <span className="text-cyan-700 font-bold">CONTACT</span>
            <br />
            <span className="text-cyan-950 font-bold">US</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Stay connected with our team. We're here to help and answer any questions you might have about our services.
          </p>
        </motion.div>

        {/* Contact Info Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border-2 border-gray-200/50 hover:border-cyan-300/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 overflow-hidden group-hover:-translate-y-2">
                {/* Animated Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 to-yellow-50/0 group-hover:from-cyan-50 group-hover:to-yellow-50/30 transition-all duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.bgColor} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}>
                    <item.icon className={`w-8 h-8 text-cyan-600 group-hover:${item.hoverColor} transition-colors duration-300`} />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl text-cyan-900 mb-4 font-bold text-center">{item.title}</h3>

                  {/* Details */}
                  <div className="space-y-3">
                    {item.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-yellow-400 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                        <p className="text-gray-700 text-sm font-semibold leading-relaxed group-hover/item:text-cyan-800 transition-colors">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Hover Arrow */}
                  <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-cyan-600 animate-bounce-slow" />
                  </div>
                </div>

                {/* Decorative Border Animation */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-600 to-yellow-400 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
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
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes animate-bounce-slow {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(6px);
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

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .animation-float {
          animation: animation-float 3s ease-in-out infinite;
        }

        .animation-pulse-slow {
          animation: animation-pulse-slow 4s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: animate-bounce-slow 1.5s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: animate-fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;

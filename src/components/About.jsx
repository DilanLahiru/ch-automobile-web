import { Users, Award, Wrench, ThumbsUp, CheckCircle2, Star } from "lucide-react";
import { motion } from "framer-motion";
import subLogo from "../assets/best-quality.png";

const About = () => {
  const stats = [
    { icon: Users, value: "5000+", label: "Happy Customers" },
    { icon: Award, value: "24+", label: "Years Experience" },
    { icon: Wrench, value: "50+", label: "Services Offered" },
    { icon: ThumbsUp, value: "99%", label: "Satisfaction Rate" },
  ];

  const highlights = [
    "Certified Mechanics & Technicians",
    "State-of-the-art Equipment",
    "Transparent Pricing & Communication",
    "Quality Workmanship Guaranteed"
  ];

  return (
    <section id="about" className="pt-4 pb-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Advanced Animated Background Elements */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image with Decorative Elements */}
          <motion.div
            className="relative flex justify-center items-center order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Advanced Decorative Background Shapes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-64 h-64 border-4 border-yellow-400/15 rounded-full animation-rotate-slow" />
              <div className="absolute w-80 h-80 border-2 border-cyan-400/10 rounded-full animation-pulse-slow" />
              <div className="absolute w-96 h-96 border border-cyan-600/5 rounded-full animation-float" />
            </div>

            {/* Circular Image with Premium Styling */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full flex items-center justify-center overflow-hidden border-4 border-cyan-600 shadow-2xl z-10 group hover:shadow-yellow-400/30 transition-shadow duration-300"
              style={{
                boxShadow: "0 0 60px rgba(250, 204, 21, 0.3), inset 0 0 40px rgba(0, 0, 0, 0.05)"
              }}>
              <img 
                src={subLogo} 
                alt="Company Logo" 
                className="w-auto object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/10 via-transparent to-yellow-900/10" />
            </div>

            {/* Floating Decorative Badges with Animations */}
            <motion.div
              className="absolute -bottom-2 right-4 sm:right-8 bg-gradient-to-r from-yellow-100 to-yellow-50 px-6 py-4 rounded-xl font-bold text-cyan-900 text-xs sm:text-sm tracking-widest shadow-lg backdrop-blur-md border border-yellow-200/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 animate-pulse" />
                <div>
                  ONLINE <br className="sm:hidden" /> SERVICE
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-8 -left-6 bg-gradient-to-br from-cyan-100 to-cyan-50 p-4 rounded-xl backdrop-blur-md shadow-lg border border-cyan-200/50"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <CheckCircle2 className="w-7 h-7 text-cyan-700" />
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-300/50 backdrop-blur-sm"
              >
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-cyan-700 uppercase tracking-widest">
                About Our Company
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
                <span className="text-cyan-700 font-bold">The Best</span>
                <br />
                <span className="text-cyan-950 font-bold">Quality & Service</span>
              </h2>
            </div>

            {/* Company Description */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                With over 15 years of excellence in the automotive industry, CH Automobile has built a reputation for reliability, expertise, and uncompromising customer satisfaction.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our team of certified mechanics uses state-of-the-art equipment to diagnose and repair all vehicle makes and models. We believe in transparent pricing, honest communication, and quality workmanship that stands the test of time.
              </p>
            </div>

            {/* Highlights List */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-cyan-50 to-yellow-50 border border-cyan-200/50 hover:border-cyan-300 transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-700 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-800">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gradient-to-br from-cyan-50 to-yellow-50 rounded-xl border border-cyan-200/50 hover:border-cyan-400/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-display text-xl sm:text-2xl text-cyan-900 font-bold">{stat.value}</div>
                  <div className="text-gray-600 text-xs sm:text-sm whitespace-nowrap">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Expert Team Section */}
            <div className="pt-4 border-t border-cyan-200/30">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 border-2 border-white flex items-center justify-center text-white font-bold text-sm shadow-md hover:scale-110 transition-transform cursor-pointer"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-cyan-900 font-semibold">Expert Team</div>
                  <div className="text-gray-600 text-sm">Certified professionals ready to serve</div>
                </div>
              </div>
            </div>
          </motion.div>
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
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes animation-rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes animate-fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes animate-fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes animate-fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        .animation-rotate-slow {
          animation: animation-rotate-slow 8s linear infinite;
        }

        .animate-fade-in-left {
          animation: animate-fade-in-left 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: animate-fade-in-right 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: animate-fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: animate-fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About;

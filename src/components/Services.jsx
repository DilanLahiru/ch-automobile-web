import { Wrench, Cog, CheckCircle, Zap, Shield, Clock } from "lucide-react";
import SubLogo from "../assets/SubLogo.png";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Online Booking",
      icon: Clock,
      description:
        "Book your appointment online in just a few clicks. Select your preferred date and service type for instant confirmation.",
      details: ["Quick booking", "Flexible scheduling", "Instant confirmation"],
    },
    {
      number: "02",
      title: "General Repairs",
      icon: Wrench,
      description:
        "Complete diagnostic and repair services for all vehicle makes and models with certified mechanics.",
      details: [
        "Expert diagnostics",
        "All vehicle types",
        "Quality guaranteed",
      ],
    },
    {
      number: "03",
      title: "Engine Service",
      icon: Zap,
      description:
        "Expert engine diagnostics, tune-ups, and performance optimization for peak efficiency.",
      details: ["Performance tuning", "Diagnostics", "Maintenance"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Advanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl animate-pulse opacity-80" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animation-pulse-slow" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-yellow-300/5 rounded-full blur-3xl animation-float" />
        
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center opacity-0 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100/50 border border-cyan-300/50 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-cyan-700 uppercase tracking-widest">
              Professional Automotive Services
            </span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-6">
            <span className="text-cyan-700 font-bold">Best Quality</span>
            <br />
            <span className="text-gray-900 font-bold">Service Solutions</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We provide comprehensive automotive care services to keep your vehicle in peak condition with our team of certified professionals and industry-leading expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Column - Services List */}
          <div className="space-y-8 opacity-0 animate-fade-in-left" style={{ animationDelay: "0.1s" }}>
            {/* Service Items */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group cursor-pointer opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="relative p-6 rounded-xl bg-white border border-gray-200/50 hover:border-cyan-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                    {/* Animated Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/0 to-yellow-50/0 group-hover:from-cyan-50 group-hover:to-yellow-50/50 rounded-xl transition-all duration-300" />
                    
                    <div className="relative flex gap-6">
                      {/* Number Badge */}
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-800 text-white font-display text-lg font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                          {service.number}
                        </div>
                      </div>

                      <div className="flex-grow">
                        {/* Service Title with Icon */}
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-serif text-xl text-cyan-900 uppercase tracking-wide font-bold">
                            {service.title}
                          </h3>
                          <service.icon className="w-5 h-5 text-yellow-500 group-hover:translate-x-1 transition-transform" />
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                          {service.description}
                        </p>

                        {/* Details Tags */}
                        <div className="flex flex-wrap gap-3">
                          {service.details.map((detail, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-50 to-yellow-50 border border-cyan-200/50 group-hover:border-cyan-300 transition-all"
                            >
                              <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                              <span className="text-xs sm:text-sm text-cyan-700 font-medium">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image with Decorative Elements */}
          <div className="relative flex justify-center items-center opacity-0 animate-fade-in-right" style={{ animationDelay: "0.1s" }}>
            {/* Advanced Decorative Background Shapes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-64 h-64 border-4 border-cyan-400/10 rounded-full animation-rotate-slow" />
              <div className="absolute w-80 h-80 border-2 border-yellow-400/15 rounded-full animation-pulse-slow" />
              <div className="absolute w-96 h-96 border border-cyan-600/5 rounded-full animation-float" />
            </div>

            {/* Circular Image with Premium Styling */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden justify-center flex items-center border-4 border-cyan-600 shadow-2xl z-10 group hover:shadow-cyan-500/30 transition-shadow duration-300"
              style={{
                boxShadow: "0 0 60px rgba(13, 148, 136, 0.2), inset 0 0 40px rgba(0, 0, 0, 0.05)"
              }}>
              <img
                src={SubLogo}
                alt="Our Services"
                className="w-auto object-cover mr-4 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/10 via-transparent to-yellow-900/10" />
            </div>

            {/* Floating Decorative Elements with Animations */}
            <div className="absolute top-8 right-4 sm:right-8 bg-gradient-to-br from-yellow-100 to-yellow-50 p-4 rounded-xl shadow-lg backdrop-blur-md opacity-0 animate-fade-in-right border border-yellow-200/50"
              style={{ animationDelay: "0.3s" }}>
              <Cog className="w-7 h-7 text-yellow-600 animate-spin-slow" />
            </div>

            <div className="absolute bottom-16 left-2 sm:left-0 bg-gradient-to-r from-cyan-700 to-cyan-800 px-4 py-3 rounded-xl text-white text-xs font-bold backdrop-blur shadow-lg opacity-0 animate-fade-in-up text-center border border-cyan-600/50"
              style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>24/7 SERVICE</span>
              </div>
            </div>

            <div className="absolute top-1/3 -right-8 bg-gradient-to-br from-cyan-100 to-cyan-50 p-3 rounded-xl backdrop-blur-md shadow-lg opacity-0 animate-fade-in-left border border-cyan-200/50"
              style={{ animationDelay: "0.5s" }}>
              <Shield className="w-6 h-6 text-cyan-700" />
            </div>
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

        @keyframes animate-spin-slow {
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

        .animate-spin-slow {
          animation: animate-spin-slow 4s linear infinite;
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

        .group:hover {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.01) 100%);
        }
      `}</style>
    </section>
  );
};

export default Services;

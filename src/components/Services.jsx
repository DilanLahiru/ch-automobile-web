import React, { useRef, useState } from "react";
import { Clock, MapPin, ChefHat, Wine, Wrench, Zap, Settings, AlertCircle, Cog, Shield, Droplet, CheckCircle, Wind, Gauge, Battery, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import baseResturent from "../assets/expert-repair.png";
import skyResturent from "../assets/maintenance.png";

const Services = () => {
  const ref = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const generalServices = [
    {
      title: "Running Repairs",
      icon: Wrench,
      description: "Quick fixes for immediate vehicle issues",
      color: "cyan",
    },
    {
      title: "Engine Tune-ups",
      icon: Zap,
      description: "Optimize engine performance and efficiency",
      color: "cyan",
    },
    {
      title: "Unit Repairs",
      icon: Settings,
      description: "Engine, transmission units, starters, alternators",
      color: "cyan",
    },
    {
      title: "Suspension Repairs",
      icon: AlertCircle,
      description: "Complete suspension system maintenance",
      color: "cyan",
    },
    {
      title: "Electronic Diagnostics",
      icon: Cog,
      description: "High-tech electronic diagnostic services",
      color: "cyan",
    },
    {
      title: "Key Programming",
      icon: Shield,
      description: "Professional key programming services",
      color: "cyan",
    },
  ];

  const periodicServices = [
    {
      title: "Express Maintenance",
      icon: Clock,
      description: "Quick and efficient service on the go",
      color: "amber",
    },
    {
      title: "Oil & Filter",
      icon: Droplet,
      description: "Ensure smooth engine operation",
      color: "amber",
    },
    {
      title: "Vehicle Inspection",
      icon: CheckCircle,
      description: "Detailed analysis of vehicle condition",
      color: "amber",
    },
    {
      title: "AC Filter",
      icon: Wind,
      description: "Keep air conditioning clean and efficient",
      color: "amber",
    },
    {
      title: "Tire Pressure",
      icon: Gauge,
      description: "Optimal tire performance and safety",
      color: "amber",
    },
    {
      title: "Battery & Brake",
      icon: Battery,
      description: "Electrical and braking system maintenance",
      color: "amber",
    },
    {
      title: "Road Test",
      icon: Sparkles,
      description: "System verification and car appearance",
      color: "amber",
    },
  ];

  const services = [
    {
      id: 1,
      name: "General Repair Services",
      subtitle: "Expert Solutions",
      description:
        "From quick running repairs to complex engine work, our certified technicians handle all your general automotive repair needs with precision and expertise.",
      image: baseResturent,
      features: ["Engine Repairs", "Diagnostics", "Key Programming"],
    },
    {
      id: 2,
      name: "Periodic Services",
      subtitle: "Preventive Care",
      description:
        "Regular maintenance is key to keeping your vehicle running smoothly. Our preventive care services help you avoid costly repairs and extend the life of your car.",
      image: skyResturent,
      features: ["Oil Changes", "Inspections", "Tire Pressure"],
    },
  ];

  return (
    <section
      id="services"
      className="relative py-4 bg-gradient-to-br from-slate-50 via-gray-50 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-r from-hotel-gold/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-gradient-to-l from-hotel-accent/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center opacity-0 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100/50 border border-cyan-300/50 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-cyan-700 uppercase tracking-widest">
              Professional Automotive Services
            </span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-6">
            <span className="text-cyan-700 font-bold">What We Do</span>
            <br />
            <span className="text-gray-900 font-bold">For You</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            We provide comprehensive automotive care services to keep your vehicle in peak condition with our team of certified professionals and industry-leading expertise.
          </p>
        </div>

        {/* Featured services */}
        <div className="space-y-24 mb-32">
          {services.map((restaurant, index) => {
            const serviceList = index === 0 ? generalServices : periodicServices;
            const colorClass = index === 0 ? "cyan" : "amber";
            const colorBg = colorClass === "cyan" ? "from-cyan-50 to-blue-50" : "from-amber-50 to-yellow-50";
            const colorIcon = colorClass === "cyan" ? "text-cyan-600" : "text-amber-600";
            const colorBorder = colorClass === "cyan" ? "border-cyan-200 text-cyan-700" : "border-amber-200 text-amber-700";

            return (
              <div key={restaurant.id}>
                {/* Main Service Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`grid lg:grid-cols-2 gap-16 items-center mb-8 ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Image Section */}
                  <div
                    className={`relative group ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                    onMouseEnter={() => setHoveredCard(restaurant.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="relative h-72 md:h-96 lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

                      {/* Bottom Info */}
                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="flex items-center justify-between text-white">
                          <div>
                            <h3 className="font-serif text-3xl font-inter font-bold mb-1">
                              {restaurant.name}
                            </h3>
                            <p className="text-white/80 font-inter text-balance">
                              {restaurant.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div
                      className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-r ${colorBg} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>
                    <div
                      className={`absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r ${colorBg} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={`space-y-8 ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${colorBg} rounded-2xl flex items-center justify-center shadow-lg`}
                        >
                          <Wrench className={`w-7 h-7 ${colorIcon}`} />
                        </div>
                        <div>
                          <h3 className="font-display text-4xl font-bold text-custom_purple-900">
                            {restaurant.name}
                          </h3>
                          <p className="text-sm text-slate-600">
                            {restaurant.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-base font-body text-slate-700 leading-relaxed">
                        {restaurant.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                        {serviceList.map((service, idx) => {
                          const ServiceIcon = service.icon;
                          const isGeneral = colorClass === "cyan";
                          const borderColor = "border-l-cyan-500"
                          const bgAccent = "bg-gradient-to-r from-cyan-50 to-yellow-50 border border-cyan-200/50";
                          const iconBg = "bg-cyan-100 text-cyan-600";
                          const titleColor =  "text-cyan-950";
                          const hoverBorder = "group-hover:border-cyan-300";
                          
                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 16 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: idx * 0.1 }}
                              viewport={{ once: true, amount: 0.3 }}
                              className={`group relative flex gap-4 p-2 rounded-xl border-l-4 ${borderColor} ${bgAccent} backdrop-blur-sm border border-r-transparent border-t-transparent border-b-transparent ${hoverBorder} hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer bg-white/50 overflow-hidden`}
                            >
                              {/* Shimmer background effect on hover */}
                              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500`}></div>
                              
                              <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                <ServiceIcon className="w-4 h-4 group-hover:animate-pulse" />
                              </div>
                              
                              <div className="flex-1 min-w-0 relative z-10">
                                <h4 className={`font-bold text-sm leading-tight ${titleColor} line-clamp-1 mb-1`}>
                                  {service.title}
                                </h4>
                                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                                  {service.description}
                                </p>
                                
                                {/* Animated underline */}
                                <div className="h-0.5 mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-cyan-400"></div>
                              </div>
                              
                              {/* Hover indicator arrow */}
                              <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10 text-cyan-500">
                                <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:animate-bounce transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
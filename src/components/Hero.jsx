import { Button } from "./ui/button";
import { 
  ArrowRight, 
  Shield, 
  Wrench, 
  Zap, 
  Award,
  Star,
  CheckCircle2,
  Sparkles,
  Gauge,
  Mouse
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import heroBg from "../assets/hero-bg.jpg";

// Luxury easing curves
const easeLuxury = [0.16, 1, 0.3, 1];
const easeOutExpo = [0.16, 1, 0.3, 1];
const easeInOutSlow = [0.7, 0, 0.3, 1];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: easeLuxury },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: easeLuxury },
  },
};

const Hero = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Cinematic Background Elements - Optimized for Mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs - Disabled on Mobile */}
        {!isMobile && (
          <>
            <motion.div
              animate={{
                x: ["-20%", "20%", "-20%"],
                y: ["-10%", "10%", "-10%"],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent blur-3xl"
            />
            
            <motion.div
              animate={{
                x: ["20%", "-20%", "20%"],
                y: ["10%", "-10%", "10%"],
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl"
            />
          </>
        )}

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        
        {/* Moving Light Streaks - Disabled on Mobile */}
        {!isMobile && (
          <motion.div
            animate={{
              x: ["-100%", "100%"],
              y: ["-50%", "50%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-y-12"
          />
        )}
      </div>

      <div className="container mx-auto px-6 relative z-10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            {/* Premium Badge with Floating Animation */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              />
              <span className="text-xs tracking-[0.2em] uppercase text-cyan-950 font-semibold">
                Trusted Since 2002
              </span>
              <Award className="w-4 h-4 text-cyan-400" />
            </motion.div>

            {/* Main Heading with Text Reveal */}
            <motion.div variants={fadeUp} className="overflow-hidden">
              <h1 className="relative">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: easeOutExpo }}
                  className="block text-6xl lg:text-8xl font-black bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-950 bg-clip-text text-transparent"
                >
                  CH
                </motion.span>
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: easeOutExpo }}
                  className="block text-5xl lg:text-7xl font-light text-cyan-600 mt-2"
                >
                  Automobile
                </motion.span>
                
                {/* Animated Underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: easeInOutSlow }}
                  className="absolute -bottom-4 left-0 w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full origin-left"
                />
              </h1>

              {/* Subheading with Sequential Word Animation */}
              <motion.div 
                variants={fadeUp}
                className="mt-8 space-y-2"
              >
                <p className="text-3xl lg:text-4xl font-light text-cyan-950">
                  Drive Without Worries.
                </p>
                <p className="text-4xl lg:text-5xl font-bold bg-cyan-800 bg-clip-text text-transparent">
                  
                </p>
              </motion.div>

              {/* Description with Staggered Fade */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="mt-8 text-lg text-slate-400 max-w-xl leading-relaxed"
              >
                Experience premium diagnostics, certified technicians, and 
                performance-driven repairs engineered for reliability and excellence.
              </motion.p>
            </motion.div>

            {/* CTA Buttons with Advanced Interactions */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-6 pt-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500" />
                <Button asChild className="relative px-8 py-6 text-base font-semibold bg-gradient-to-r from-cyan-500 to-cyan-800 text-white rounded-xl shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer">
                  <a href="#booking">
                    <span className="relative z-10 flex items-center">
                      BOOK SERVICE
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </motion.span>
                    </span>
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  className="px-8 py-6 text-base font-semibold border-2 border-cyan-700 text-cyan-600 hover:bg-cyan-50 hover:text-cyan-700 rounded-xl shadow-2xl transition-all duration-300 backdrop-blur-sm cursor-pointer"
                >
                  <a href="#services">
                    EXPLORE SERVICES
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Image with Cinematic Effects */}
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-2xl">
              {/* Main Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: easeLuxury }}
                className="relative overflow-hidden rounded-3xl shadow-2xl shadow-cyan-500/20"
              >
                {/* Image with Parallax - Disabled on Mobile */}
                <motion.div
                  whileHover={!isMobile ? { scale: 1.05 } : {}}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <img
                    src={heroBg}
                    alt="Auto Mechanic"
                    className="w-full h-[600px] object-cover"
                  />
                  
                  {/* Advanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent" />
                  
                  {/* Animated Scan Line - Disabled on Mobile */}
                  {!isMobile && (
                    <motion.div
                      animate={{
                        y: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
                    />
                  )}
                </motion.div>

                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2, duration: 1, ease: easeLuxury }}
                  className="absolute top-8 left-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-4 shadow-2xl"
                >
                  <p className="text-xs text-white/60 uppercase tracking-wider">Experience</p>
                  <p className="text-2xl font-bold text-white">23+ Years</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.2, duration: 1, ease: easeLuxury }}
                  className="absolute bottom-8 right-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-4 shadow-2xl"
                >
                  <p className="text-xs text-white/60 uppercase tracking-wider">Satisfaction</p>
                  <p className="text-2xl font-bold text-white">98%</p>
                </motion.div>

                {/* Animated Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
                  className="absolute bottom-8 left-8"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl animate-pulse" />
                    <div className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm font-semibold text-white">Certified Experts</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Elements - Disabled on Mobile */}
              {!isMobile && (
                <>
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -top-20 -right-20 w-40 h-40 border-2 border-cyan-500/30 rounded-full"
                  />
                  
                  <motion.div
                    animate={{
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -bottom-20 -left-20 w-60 h-60 border border-blue-500/20 rounded-full"
                  />
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Disabled on Mobile */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/40"
          >
            <Mouse className="w-6 h-6 text-cyan-400" />
            <span className="text-xs uppercase tracking-wider text-cyan-900 font-semibold">Scroll Down</span>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Hero;
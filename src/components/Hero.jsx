// import { Button } from "./ui/button";
// import { ArrowRight, Shield, Clock, Award } from "lucide-react";
// import heroBg from "../assets/hero-bg.jpg";

// const Hero = () => {
//   const features = [
//     { icon: Shield, text: "Certified Mechanics" },
//     { icon: Clock, text: "Quick Turnaround" },
//     { icon: Award, text: "Quality Guaranteed" },
//   ];

//   return (
//     <section id="home" className="relative min-h-screen flex items-center">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={heroBg}
//           alt="Auto repair shop"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
//         <div className="max-w-3xl">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
//             <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
//             <span className="text-primary text-sm font-medium">Professional Auto Care</span>
//           </div>

//           <h1 className="font-display text-4xl md:text-4xl lg:text-6xl text-foreground leading-none mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
//             EXPERT CAR
//             <br />
//             <span className="text-gradient">REPAIR</span> & SERVICE
//           </h1>

//           <p className="text-lg md:text-lg text-muted-foreground max-w-xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
//             Your trusted partner for all automotive needs. From routine maintenance to complex repairs, we keep your vehicle running at its best.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
//             <Button variant="hero" size="xl" asChild>
//               <a href="#booking">
//                 Book Appointment
//                 <ArrowRight className="w-5 h-5" />
//               </a>
//             </Button>
//             <Button variant="heroOutline" size="xl" asChild>
//               <a href="#services">Our Services</a>
//             </Button>
//           </div>

//           {/* Feature Pills */}
//           <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card/50 backdrop-blur border border-border"
//               >
//                 <feature.icon className="w-5 h-5 text-primary" />
//                 <span className="text-foreground font-medium">{feature.text}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
// import { Button } from "./ui/button";
// import {
//   ArrowRight,
//   Wrench,
//   Hammer,
//   Zap,
//   Cog,
//   CheckCircle2,
//   Shield,
// } from "lucide-react";
// import heroBg from "../assets/hero-bg.jpg";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Floating Gradient Blobs */}
//         <div className="absolute top-20 left-0 w-40 h-40 bg-cyan-950/20 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-40 right-32 w-48 h-48 bg-yellow-400/15 rounded-full blur-3xl animation-float" />
//         <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan-600/10 rounded-full blur-3xl animation-pulse-slow" />

//         {/* Grid Pattern Background */}
//         <div className="absolute inset-0 bg-grid-pattern opacity-5" />
//       </div>

//       {/* Content Container */}
//       <div className="container mx-auto px-4 relative z-10 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left Side - Image with Professional Decorative Elements */}
//           <div className="relative flex justify-center items-center animate-fade-in-left">
//             {/* Advanced Decorative Background Shapes */}
//             <div className="absolute top-0 left-8 w-16 h-16 border-4 border-cyan-950 rounded-lg opacity-20 transform -rotate-12 animation-pulse-slow" />
//             <div className="absolute -bottom-4 right-12 w-24 h-24 border-4 border-yellow-400 rounded-full opacity-15 animation-rotate-slow" />
//             <div className="absolute top-1/3 -left-12 w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg opacity-10 transform rotate-45" />

//             {/* Main Image - Premium Circular Frame */}
//             <div
//               className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-cyan-600 shadow-2xl animate-scale-up "
//               style={{
//                 boxShadow:
//                   "0 0 60px rgba(13, 148, 136, 0.3), inset 0 0 40px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <img
//                 src={heroBg}
//                 alt="Auto Mechanic Expert"
//                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
//               />
//               {/* Premium Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-transparent to-yellow-900/10" />

//               {/* Animated Border Ring */}
//               <div
//                 className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyan-400 to-yellow-400 rounded-full opacity-0 animate-pulse"
//                 style={{
//                   animation: "pulse-ring 2s ease-in-out infinite",
//                   padding: "4px",
//                 }}
//               />
//             </div>

//             {/* Floating Decorative Icons with Animations */}
//             <div
//               className="absolute top-8 right-4 sm:right-8 bg-gradient-to-br from-yellow-100 to-yellow-50 p-4 rounded-xl backdrop-blur-md shadow-lg opacity-0 animate-fade-in-right"
//               style={{ animationDelay: "0.2s" }}
//             >
//               <Wrench className="w-7 h-7 text-yellow-600 animate-bounce-slow" />
//             </div>

//             <div
//               className="absolute -bottom-2 left-4 bg-gradient-to-br from-yellow-100 to-yellow-50 p-4 rounded-xl backdrop-blur-md shadow-lg opacity-0 animate-fade-in-up"
//               style={{ animationDelay: "0.4s" }}
//             >
//               <Hammer className="w-7 h-7 text-yellow-600" />
//             </div>

//             <div
//               className="absolute top-1/2 -right-6 bg-gradient-to-br from-cyan-100 to-cyan-50 p-3 rounded-xl backdrop-blur-md shadow-lg opacity-0 animate-fade-in-left"
//               style={{ animationDelay: "0.6s" }}
//             >
//               <Cog className="w-6 h-6 text-cyan-700 animate-spin-slow" />
//             </div>
//           </div>

//           {/* Right Side - Professional Content */}
//           <div className="space-y-8 animate-fade-in-right">
//             {/* Tagline Badge */}
//             <div
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100/50 border border-cyan-300/50 backdrop-blur-sm opacity-0 animate-fade-in"
//               style={{ animationDelay: "0.1s" }}
//             >
//               <div className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse" />
//               <span className="text-xs sm:text-sm font-semibold text-cyan-700 uppercase tracking-widest">
//                 Professional Auto Care
//               </span>
//             </div>

//             {/* Main Heading with Gradient */}
//             <div
//               className="space-y-3 opacity-0 animate-fade-in"
//               style={{ animationDelay: "0.2s" }}
//             >
//               <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
//                 <span className="text-cyan-700 font-bold">AUTO REPAIR</span>
//               </h1>
//               <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
//                 SERVICE
//               </h2>

//               {/* Professional Tagline */}
//               <p className="text-lg sm:text-xl font-medium text-cyan-600 pt-2">
//                 Drive Without Worries
//               </p>
//             </div>

//             {/* Animated Decorative Line */}
//             <div
//               className="flex gap-2 opacity-0 animate-fade-in"
//               style={{ animationDelay: "0.3s" }}
//             >
//               {[...Array(5)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="h-2 bg-cyan-950 rounded-full"
//                   style={{
//                     width: i === 2 ? "24px" : "8px",
//                     animation: "pulse 2s ease-in-out infinite",
//                     animationDelay: `${i * 0.1}s`,
//                   }}
//                 />
//               ))}
//             </div>

//             {/* Company Tagline */}
//             <div
//               className="opacity-0 animate-fade-in"
//               style={{ animationDelay: "0.4s" }}
//             >
//               <p className="text-base font-medium text-gray-600 mb-2">
//                 CH Automobile - Your Trusted Automotive Partner
//               </p>
//               <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-lg font-light">
//                 Experience professional automotive care with our certified
//                 mechanics. From routine maintenance to complex repairs, we
//                 ensure your vehicle runs at peak performance with quality
//                 guarantee and rapid turnaround times.
//               </p>
//             </div>

//             {/* CTA Buttons with Animations */}
//             <div
//               className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in"
//               style={{ animationDelay: "0.5s" }}
//             >
//               <Button
//                 variant="hero"
//                 size="lg"
//                 asChild
//                 className="bg-gradient-to-r from-cyan-700 to-cyan-800 text-cyan-900 border-2 border-cyan-700 px-8 py-6 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
//               >
//                 <a href="#booking" className="flex items-center justify-center">
//                   BOOK APPOINTMENT
//                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//                 </a>
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 asChild
//                 className="bg-gradient-to-r from-cyan-600 to-cyan-800 hover:from-cyan-800 hover:to-cyan-500 text-white px-8 py-6 text-sm font-semibold transition-all duration-300 border-cyan-700 border-2 shadow-lg hover:shadow-xl opacity-0 animate-fade-in"
//               >
//                 <a href="#services">EXPLORE SERVICES</a>
//               </Button>
//             </div>

//             {/* Trust Indicators with Icons */}
//             <div
//               className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-0 animate-fade-in"
//               style={{ animationDelay: "0.6s" }}
//             >
//               {[
//                 { icon: CheckCircle2, text: "Certified Mechanics" },
//                 { icon: Zap, text: "Fast Service" },
//                 { icon: Shield, text: "Quality Guaranteed" },
//                 { icon: Wrench, text: "Expert Repairs" },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-cyan-50 to-yellow-50 border border-cyan-200/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-md group"
//                 >
//                   <item.icon className="w-5 h-5 text-cyan-700 group-hover:text-yellow-600 transition-colors" />
//                   <span className="text-sm font-medium text-gray-800">
//                     {item.text}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes pulse-ring {
//           0%, 100% {
//             opacity: 0;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 1;
//           }
//         }

//         @keyframes animation-float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }

//         @keyframes animation-pulse-slow {
//           0%, 100% {
//             opacity: 0.5;
//           }
//           50% {
//             opacity: 1;
//           }
//         }

//         @keyframes animation-rotate-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes animate-bounce-slow {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-8px);
//           }
//         }

//         @keyframes animate-spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes animate-scale-up {
//           from {
//             transform: scale(0.9);
//             opacity: 0;
//           }
//           to {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }

//         @keyframes animate-fade-in-left {
//           from {
//             opacity: 0;
//             transform: translateX(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes animate-fade-in-right {
//           from {
//             opacity: 0;
//             transform: translateX(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes animate-fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes animate-fade-in {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         .bg-grid-pattern {
//           background-image:
//             linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
//           background-size: 40px 40px;
//         }

//         .animation-float {
//           animation: animation-float 3s ease-in-out infinite;
//         }

//         .animation-pulse-slow {
//           animation: animation-pulse-slow 4s ease-in-out infinite;
//         }

//         .animation-rotate-slow {
//           animation: animation-rotate-slow 8s linear infinite;
//         }

//         .animate-bounce-slow {
//           animation: animate-bounce-slow 2s ease-in-out infinite;
//         }

//         .animate-spin-slow {
//           animation: animate-spin-slow 4s linear infinite;
//         }

//         .animate-scale-up {
//           animation: animate-scale-up 0.8s ease-out forwards;
//         }

//         .animate-fade-in-left {
//           animation: animate-fade-in-left 0.8s ease-out forwards;
//         }

//         .animate-fade-in-right {
//           animation: animate-fade-in-right 0.8s ease-out forwards;
//         }

//         .animate-fade-in-up {
//           animation: animate-fade-in-up 0.8s ease-out forwards;
//         }

//         .animate-fade-in {
//           animation: animate-fade-in 0.8s ease-out forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// import { Button } from "./ui/button";
// import { ArrowRight, CheckCircle2, Shield, Wrench, Zap } from "lucide-react";
// import { motion } from "framer-motion";
// import heroBg from "../assets/hero-bg.jpg";

// const easeLuxury = [0.22, 1, 0.36, 1];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.25,
//       delayChildren: 0.5,
//     },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1, ease: easeLuxury },
//   },
// };

// const Hero = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1.2 }}
//       className="relative min-h-screen flex items-center overflow-hidden bg-white"
//     >
//       {/* Ambient Moving Light */}
//       <motion.div
//         className="absolute inset-0 pointer-events-none"
//         animate={{
//           backgroundPosition: ["0% 50%", "100% 50%"],
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         style={{
//           background:
//             "radial-gradient(circle at 30% 20%, rgba(14,165,233,0.15), transparent 40%)",
//           backgroundSize: "200% 200%",
//         }}
//       />

//       <div className="container mx-auto px-6 relative z-10 py-24">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* LEFT SIDE */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="space-y-8"
//           >
//             {/* Label */}
//             <motion.div
//               variants={fadeUp}
//               className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl"
//             >
//               <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
//               <span className="text-xs tracking-widest uppercase text-cyan-950 font-bold">
//                 Professional Automotive Experts
//               </span>
//             </motion.div>

//             {/* Heading with Light Sweep */}
//             <motion.div variants={fadeUp}>
//               <h1 className="relative text-5xl lg:text-7xl font-bold leading-tight overflow-hidden">
//                 <span className="text-cyan-700 block">CH Automobile</span>

//                 <span className="relative block pt-2 bg-cyan-950 bg-clip-text text-transparent text-4xl font-sans tracking-wide">
//                   Drive Without Worries
//                   {/* Shimmer Sweep */}
//                   <motion.span
//                     initial={{ x: "-100%" }}
//                     animate={{ x: "200%" }}
//                     transition={{
//                       duration: 2,
//                       delay: 1.5,
//                       ease: "easeInOut",
//                     }}
//                     className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
//                   />
//                 </span>
//               </h1>

//               <p className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed">
//                 Experience premium diagnostics, certified technicians, and
//                 performance-driven repairs engineered for reliability, safety,
//                 and excellence.
//               </p>
//             </motion.div>

//             {/* Buttons */}
//             <motion.div
//               variants={fadeUp}
//               className="flex flex-col sm:flex-row gap-6 pt-4"
//             >
//               <Button className="px-8 py-6 text-sm font-semibold bg-cyan-800 hover:bg-cyan-600 text-white rounded-xl shadow-lg transition-all duration-300">
//                 <span className="flex items-center">
//                   BOOK SERVICE
//                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </span>
//               </Button>

//               <Button
//                 variant="outline"
//                 className="px-8 py-6 text-sm font-semibold border-cyan-500 text-cyan-950 hover:bg-cyan-600 hover:text-white hover:border-white rounded-xl shadow-lg transition-all duration-300"
//               >
//                 EXPLORE SERVICES
//               </Button>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT SIDE IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, scale: 1.1 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.5, ease: easeLuxury }}
//             className="relative flex justify-center lg:justify-end"
//           >
//             <div className="relative w-full max-w-lg">
//               <div className="relative overflow-hidden rounded-3xl shadow-2xl">
//                 <img
//                   src={heroBg}
//                   alt="Auto Mechanic"
//                   className="w-full h-[520px] object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
//               </div>

//               {/* Floating Accent Card */}
//               <motion.div
//                 initial={{ opacity: 0, y: 60 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 2, duration: 1, ease: easeLuxury }}
//                 className="absolute -bottom-6 -left-6 backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl px-6 py-4 shadow-lg"
//               >
//                 <p className="text-xs text-slate-400 uppercase tracking-wider">
//                   Since 2012
//                 </p>
//                 <p className="text-lg font-semibold text-white">
//                   Trusted Auto Specialists
//                 </p>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;

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
  Gauge
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
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
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  
  // Spring physics for smooth motion
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
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

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        
        {/* Moving Light Streaks */}
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
                Trusted Since 2012
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
                <Button className="relative px-8 py-6 text-base font-semibold bg-gradient-to-r from-cyan-500 to-cyan-800 text-white rounded-xl shadow-2xl transition-all duration-300 overflow-hidden">
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
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="px-8 py-6 text-base font-semibold border-2 border-cyan-700 text-cyan-600 hover:bg-cyan-50 hover:text-cyan-700 rounded-xl shadow-2xl transition-all duration-300 backdrop-blur-sm"
                >
                  EXPLORE SERVICES
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Image with Cinematic Effects */}
          <motion.div
            style={{ y: smoothY, scale: smoothScale, opacity }}
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
                {/* Image with Parallax */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
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
                  
                  {/* Animated Scan Line */}
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
                </motion.div>

                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2, duration: 1, ease: easeLuxury }}
                  className="absolute top-8 left-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-4 shadow-2xl"
                >
                  <p className="text-xs text-white/60 uppercase tracking-wider">Experience</p>
                  <p className="text-2xl font-bold text-white">12+ Years</p>
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

              {/* Decorative Elements */}
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
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
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
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
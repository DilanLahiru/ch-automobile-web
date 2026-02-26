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
import { Button } from "./ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";

const Hero = () => {
  const features = [
    { icon: Shield, text: "Certified Mechanics" },
    { icon: Clock, text: "Quick Turnaround" },
    { icon: Award, text: "Quality Guaranteed" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="parallax-bg w-full h-full bg-cover bg-center scale-110 animate-zoom-out" 
             style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-slide-in-left">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-medium">Professional Auto Care</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-4xl lg:text-6xl text-foreground leading-none mb-6">
            <span className="block animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
              EXPERT CAR
            </span>
            <span className="block animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <span className="text-gradient animate-gradient-shift">REPAIR</span> & SERVICE
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            Your trusted partner for all automotive needs. From routine maintenance to complex repairs, we keep your vehicle running at its best.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button variant="hero" size="xl" asChild className="group animate-pulse-once">
              <a href="#booking">
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="hover:scale-105 transition-transform">
              <a href="#services">Our Services</a>
            </Button>
          </div>

          {/* Feature Pills with Staggered Animation */}
          <div className="flex flex-wrap gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card/50 backdrop-blur border border-border hover:scale-105 transition-transform animate-slide-in-up"
                style={{ 
                  animationDelay: `${0.7 + index * 0.1}s`,
                  animationFillMode: "both"
                }}
              >
                <feature.icon className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
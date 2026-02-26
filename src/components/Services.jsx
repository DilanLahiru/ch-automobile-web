import { Wrench, Gauge, Cog, Droplets, Battery, Car } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "General Repairs",
      description: "Complete diagnostic and repair services for all vehicle makes and models.",
    },
    {
      icon: Gauge,
      title: "Engine Service",
      description: "Expert engine diagnostics, tune-ups, and performance optimization.",
    },
    {
      icon: Cog,
      title: "Transmission",
      description: "Full transmission repair, rebuild, and maintenance services.",
    },
    {
      icon: Droplets,
      title: "Oil Change",
      description: "Quick and quality oil change with premium synthetic options.",
    },
    {
      icon: Battery,
      title: "Electrical",
      description: "Complete electrical system diagnosis and repair services.",
    },
    {
      icon: Car,
      title: "Hybrid",
      description: "Professional hybrid repair, rebuild, and maintenance services.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider">What We Offer</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4">
            OUR <span className="text-gradient">SERVICES</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We provide comprehensive automotive services to keep your vehicle in peak condition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

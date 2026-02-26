import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["CH Automobile service, 304 A Abaya Street, Kalutara 80110"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+94 (71) 427 4163", "+94 (71) 427 4163"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@chautomobile.com", "service@chautomobile.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 8:00 AM - 5:00 PM", "Sun: Closed"],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider">Get in Touch</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4">
            CONTACT <span className="text-gradient">US</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 text-center group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
              {item.details.map((detail, i) => (
                <p key={i} className="text-muted-foreground text-sm">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Users, Award, Wrench, ThumbsUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "5000+", label: "Happy Customers" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Wrench, value: "50+", label: "Services Offered" },
    { icon: ThumbsUp, value: "99%", label: "Satisfaction Rate" },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors group"
              >
                <stat.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <div className="font-display text-4xl text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-medium uppercase tracking-wider">About Us</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4 mb-6">
              WHY CHOOSE
              <br />
              <span className="text-gradient">CH AUTOMOBILE</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              With over 15 years of experience in the automotive industry, CH Automobile has built a reputation for excellence, reliability, and customer satisfaction.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of certified mechanics uses state-of-the-art equipment to diagnose and repair all vehicle makes and models. We believe in transparent pricing, honest communication, and quality workmanship that stands the test of time.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center text-primary-foreground font-bold text-sm"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-foreground font-semibold">Expert Team</div>
                <div className="text-muted-foreground text-sm">Certified professionals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

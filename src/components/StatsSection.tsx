import { useEffect, useState } from "react";
import { Users, Calendar, MapPin, TrendingUp } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { icon: Users, label: "Active Students", target: 1247, suffix: "" },
    { icon: Calendar, label: "Bookings This Week", target: 856, suffix: "" },
    { icon: MapPin, label: "Library Zones", target: 12, suffix: "" },
    { icon: TrendingUp, label: "Satisfaction Rate", target: 98, suffix: "%" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timers = stats.map((stat, index) => {
      let currentStep = 0;
      return setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const currentValue = Math.floor(stat.target * progress);
        
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = currentValue;
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timers[index]);
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = stat.target;
            return newCounts;
          });
        }
      }, interval);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  return (
    <section className="py-16 md:py-24 bg-eco-mint/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {counts[index].toLocaleString()}{stat.suffix}
                </div>
                <div className="text-sm md:text-base text-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

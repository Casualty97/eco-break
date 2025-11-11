import { Leaf, Users, Zap, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const ImpactSection = () => {
  const stats = [
    {
      icon: Users,
      value: "1,420",
      label: "Mindful Breaks Taken",
      color: "text-primary",
    },
    {
      icon: Zap,
      value: "200+",
      label: "Study Lamps Powered",
      color: "text-primary",
    },
    {
      icon: Leaf,
      value: "850kg",
      label: "CO₂ Equivalent Saved",
      color: "text-primary",
    },
    {
      icon: Award,
      value: "95%",
      label: "Student Satisfaction",
      color: "text-primary",
    },
  ];

  return (
    <section id="impact" className="py-20 md:py-32 bg-gradient-to-b from-eco-mint/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-eco-lightGreen/40 px-4 py-2 rounded-full mb-6">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Eco Pulse Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sustainability Impact
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Together, we're making every break count for the planet
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-eco-lightGreen/30 rounded-full flex items-center justify-center mb-4">
                      <Icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Real-Time Energy Impact
          </h3>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-foreground font-medium">Energy Conservation</span>
                <span className="text-primary font-bold">78%</span>
              </div>
              <Progress value={78} className="h-3" />
              <p className="text-sm text-muted-foreground mt-2">
                Equivalent to 200 study lamps powered for a full day
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-foreground font-medium">Carbon Footprint Reduction</span>
                <span className="text-primary font-bold">65%</span>
              </div>
              <Progress value={65} className="h-3" />
              <p className="text-sm text-muted-foreground mt-2">
                850kg CO₂ equivalent saved through mindful campus usage
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-foreground font-medium">Community Engagement</span>
                <span className="text-primary font-bold">92%</span>
              </div>
              <Progress value={92} className="h-3" />
              <p className="text-sm text-muted-foreground mt-2">
                Active participation from student community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

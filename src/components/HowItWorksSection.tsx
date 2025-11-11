import { Calendar, Scan, Coffee, TrendingUp } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Calendar,
      number: "01",
      title: "Choose Your Seat",
      description: "Browse available study rooms and time slots that fit your schedule",
    },
    {
      icon: Scan,
      number: "02",
      title: "Scan QR Code",
      description: "Confirm your reservation by scanning the QR code at your selected table",
    },
    {
      icon: Coffee,
      number: "03",
      title: "Take a Mindful Break",
      description: "Relax, recharge, and enjoy your purposeful pause in a dedicated space",
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Track Your Impact",
      description: "Watch your eco-impact grow and earn rewards for sustainable habits",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-b from-background to-eco-mint/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to transform your campus break experience
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all hover:-translate-y-2 h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <span className="text-5xl font-bold text-accent/20">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-10"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

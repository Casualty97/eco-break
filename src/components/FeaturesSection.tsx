import { Calendar, QrCode, Coffee, BarChart3, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Book a Seat",
      description: "Reserve study areas quickly. Browse available library spaces and secure your perfect spot with just a few taps.",
    },
    {
      icon: QrCode,
      title: "Scan QR",
      description: "Confirm your seat instantly. Simply scan the QR code at your chosen table to check in and start your break.",
    },
    {
      icon: Coffee,
      title: "Take a Break",
      description: "Unwind and recharge. Enjoy a peaceful, distraction-free environment designed for rest and mental clarity.",
    },
    {
      icon: BarChart3,
      title: "Track History",
      description: "View your past sessions. Monitor your booking patterns and maintain healthy break habits throughout the semester.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-eco-mint/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
            App Features
          </h1>
          <p className="text-xl text-foreground max-w-2xl mx-auto leading-relaxed">
            Discover how EcoBreak transforms your campus breaks into moments of rest and productivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-eco-mint/30 rounded-3xl p-8 border border-border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in-up"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-lg text-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center animate-fade-in-up">
          <Button
            size="lg"
            onClick={() => window.open("https://loud-editor-20488240.figma.site", "_blank")}
            className="rounded-full text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Try the App
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

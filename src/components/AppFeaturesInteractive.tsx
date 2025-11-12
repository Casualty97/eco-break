import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, QrCode, Coffee, BarChart3 } from "lucide-react";

interface Feature {
  icon: any;
  title: string;
  description: string;
  details: string;
}

const AppFeaturesInteractive = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const features: Feature[] = [
    {
      icon: Calendar,
      title: "Book a Seat Easily",
      description: "Browse and reserve library rooms in seconds",
      details:
        "Select from available library rooms, choose your preferred time slot, and instantly secure your peaceful study space. Our intuitive interface makes booking effortless, so you can focus on what matters most—your studies and well-being.",
    },
    {
      icon: QrCode,
      title: "Scan to Confirm",
      description: "Quick QR code scanning at your table",
      details:
        "Simply scan the QR code on your reserved table to check in. This seamless process ensures your booking is confirmed and your space is ready for a productive break. No complicated steps, just scan and settle in.",
    },
    {
      icon: Coffee,
      title: "Take a Mindful Break",
      description: "Relax and recharge in your reserved space",
      details:
        "Use your reserved time to truly unwind. Whether you're reading, meditating, or simply resting, your dedicated space provides the calm environment you need to recharge before your next class. Track your mindful moments and build better break habits.",
    },
    {
      icon: BarChart3,
      title: "Track Your History",
      description: "Review past bookings and break patterns",
      details:
        "Access your complete booking history and see how you're building healthier break habits over time. Monitor your usage patterns, track streaks, and celebrate your commitment to self-care during busy academic days.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-eco-mint/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              App Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a peaceful, productive break between classes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedFeature(feature)}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog
        open={selectedFeature !== null}
        onOpenChange={() => setSelectedFeature(null)}
      >
        <DialogContent className="sm:max-w-2xl">
          {selectedFeature && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                    <selectedFeature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <DialogTitle className="text-2xl">
                    {selectedFeature.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-base leading-relaxed pt-2">
                  {selectedFeature.details}
                </DialogDescription>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AppFeaturesInteractive;

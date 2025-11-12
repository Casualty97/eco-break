import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, QrCode, Coffee, BarChart3 } from "lucide-react";
import bookingImg from "@/assets/feature-booking.jpg";
import qrImg from "@/assets/qr-scanning.jpg";
import relaxImg from "@/assets/library-peaceful.jpg";
import trackingImg from "@/assets/feature-tracking.jpg";

interface Feature {
  icon: any;
  title: string;
  description: string;
  image: string;
  details: string;
}

const AppFeaturesInteractive = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const features: Feature[] = [
    {
      icon: Calendar,
      title: "Book a Seat Easily",
      description: "Browse and reserve library rooms in seconds",
      image: bookingImg,
      details:
        "Select from available library rooms, choose your preferred time slot, and instantly secure your peaceful study space. Our intuitive interface makes booking effortless, so you can focus on what matters most—your studies and well-being.",
    },
    {
      icon: QrCode,
      title: "Scan to Confirm",
      description: "Quick QR code scanning at your table",
      image: qrImg,
      details:
        "Simply scan the QR code on your reserved table to check in. This seamless process ensures your booking is confirmed and your space is ready for a productive break. No complicated steps, just scan and settle in.",
    },
    {
      icon: Coffee,
      title: "Take a Mindful Break",
      description: "Relax and recharge in your reserved space",
      image: relaxImg,
      details:
        "Use your reserved time to truly unwind. Whether you're reading, meditating, or simply resting, your dedicated space provides the calm environment you need to recharge before your next class. Track your mindful moments and build better break habits.",
    },
    {
      icon: BarChart3,
      title: "Track Your History",
      description: "Review past bookings and break patterns",
      image: trackingImg,
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
                className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedFeature(feature)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <feature.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
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
              <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg">
                <img
                  src={selectedFeature.image}
                  alt={selectedFeature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
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

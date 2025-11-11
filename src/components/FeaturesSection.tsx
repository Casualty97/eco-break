import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import appBooking from "@/assets/app-booking.png";
import appDashboard from "@/assets/app-dashboard.png";

const FeaturesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      title: "Smart Seat Booking",
      description: "Browse available study rooms and reserve your perfect spot with just a few taps",
      image: appBooking,
    },
    {
      title: "Eco Pulse Dashboard",
      description: "Track your environmental impact and mindful break statistics in real-time",
      image: appDashboard,
    },
    {
      title: "QR Scan Check-in",
      description: "Confirm your seat reservation by scanning the QR code at your table",
      image: appBooking,
    },
    {
      title: "Rewards & Streaks",
      description: "Earn green points and maintain streaks for consistent mindful breaks",
      image: appDashboard,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-eco-mint/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            App Features
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how EcoBreak makes every campus break meaningful and sustainable
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-border overflow-hidden">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 animate-fade-in-up">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {features[currentSlide].title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {features[currentSlide].description}
                  </p>
                  
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevSlide}
                      className="rounded-full w-12 h-12"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextSlide}
                      className="rounded-full w-12 h-12"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                  
                  <div className="flex gap-2 mt-6">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentSlide ? "w-8 bg-primary" : "w-2 bg-border"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center animate-scale-in">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
                    <img
                      src={features[currentSlide].image}
                      alt={features[currentSlide].title}
                      className="relative w-full max-w-xs md:max-w-sm h-auto rounded-3xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

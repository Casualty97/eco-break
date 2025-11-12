import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-booking.jpg";
import appMockup from "@/assets/app-dashboard.png";

const HeroSectionNew = () => {
  const scrollToFeatures = () => {
    const element = document.querySelector("#features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              EcoBreak
            </h1>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary mb-8">
              Pause with Purpose
            </h2>

            <p className="text-lg sm:text-xl text-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Students often struggle to find a quiet place to rest between lessons. 
              EcoBreak helps you book a library seat effortlessly, scan a QR code to confirm, 
              and take a mindful break before your next class.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToFeatures}
                className="rounded-full text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl"></div>
              <img
                src={appMockup}
                alt="EcoBreak App Preview"
                className="relative w-full max-w-sm h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionNew;

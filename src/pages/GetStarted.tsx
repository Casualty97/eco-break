import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, LogIn, QrCode, Calendar, BarChart3 } from "lucide-react";

const GetStarted = () => {
  const steps = [
    {
      number: "01",
      title: "Sign In",
      description: "Log in using your school or connect email to access EcoBreak.",
      icon: LogIn,
    },
    {
      number: "02",
      title: "Book a Seat",
      description: "Choose a quiet zone, date, and time. Reserve your space instantly.",
      icon: Calendar,
    },
    {
      number: "03",
      title: "Take a Break",
      description: "Scan your QR code and enjoy a mindful rest.",
      icon: QrCode,
    },
    {
      number: "04",
      title: "Track Progress",
      description: "View past bookings and keep a healthy routine.",
      icon: BarChart3,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 md:pt-20">
        {/* Header Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-eco-mint/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in-up">
              Get Started with EcoBreak
            </h1>
            <p className="text-xl text-foreground max-w-2xl mx-auto animate-fade-in-up">
              Discover how to book a seat, relax, and recharge.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-20">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-12 items-center animate-fade-in-up`}
                >
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-sm font-semibold text-primary mb-2">
                      Step {step.number}
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="flex-1">
                    <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-eco-mint to-eco-lightGreen flex items-center justify-center shadow-lg">
                      <step.icon className="w-24 h-24 text-primary/30" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-eco-mint/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
                Ready to Take a Break?
              </h2>
              <p className="text-xl text-foreground mb-12">
                Try EcoBreak today — your break time, reimagined.
              </p>
              <Button
                size="lg"
                onClick={() => window.open("https://loud-editor-20488240.figma.site", "_blank")}
                className="rounded-full text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Open the App
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetStarted;

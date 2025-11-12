import Navigation from "@/components/Navigation";
import HeroSectionNew from "@/components/HeroSectionNew";
import WhyEcoBreak from "@/components/WhyEcoBreak";
import AppFeaturesInteractive from "@/components/AppFeaturesInteractive";
import BookingSimulator from "@/components/BookingSimulator";
import StayUpdated from "@/components/StayUpdated";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSectionNew />
        <WhyEcoBreak />
        <div id="features">
          <AppFeaturesInteractive />
        </div>
        <BookingSimulator />
        <StayUpdated />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;

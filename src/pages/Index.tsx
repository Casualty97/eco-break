import Navigation from "@/components/Navigation";
import HeroSectionNew from "@/components/HeroSectionNew";
import StatsSection from "@/components/StatsSection";
import WhyEcoBreak from "@/components/WhyEcoBreak";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSectionNew />
        <StatsSection />
        <WhyEcoBreak />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

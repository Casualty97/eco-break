import Navigation from "@/components/Navigation";
import HeroSectionNew from "@/components/HeroSectionNew";
import WhyEcoBreak from "@/components/WhyEcoBreak";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSectionNew />
        <WhyEcoBreak />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

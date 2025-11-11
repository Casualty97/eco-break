import Navigation from "@/components/Navigation";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Features = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 md:pt-20">
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Features;

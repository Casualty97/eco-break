import Navigation from "@/components/Navigation";
import HowItWorksSection from "@/components/HowItWorksSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 md:pt-20">
        <HowItWorksSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;

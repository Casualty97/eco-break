import { Sparkles } from "lucide-react";
import webImage from "@/assets/why-ecobreak.jpg";

const WhyEcoBreak = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-eco-mint/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-eco-lightGreen/40 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Story</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why We Built EcoBreak
            </h2>
          </div>

          <div className="space-y-6 animate-fade-in-up text-center">
            <p className="text-xl leading-relaxed text-foreground max-w-3xl mx-auto">
              Students need structured rest. EcoBreak gives them quiet spaces to reset and refocus between classes.
            </p>
            
            <div className="pt-8">
              <div className="w-full max-w-2xl mx-auto aspect-video rounded-2xl bg-gradient-to-br from-eco-mint to-eco-lightGreen flex items-center justify-center shadow-lg">
              <img
                src={webImage}
                alt="Students Reading Quietly In Library"
                className="relative w-full max-w-sm h-auto drop-shadow-2xl"
              />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEcoBreak;

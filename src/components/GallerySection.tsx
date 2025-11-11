import whyEcoBreak from "@/assets/why-ecobreak.jpg";

const GallerySection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-eco-mint/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why We Created EcoBreak
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-border overflow-hidden animate-scale-in">
            <img
              src={whyEcoBreak}
              alt="Students relaxing in a peaceful library space"
              className="w-full h-auto rounded-2xl mb-8"
            />
            
            <div className="space-y-6 text-center">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Students often struggle to find a peaceful place to unwind between lessons. 
                EcoBreak helps them book library spaces easily, so they can relax, recharge, 
                and get ready for the next class.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                By creating dedicated spaces for mindful breaks, we help students balance 
                productivity with well-being, turning break time into a moment of purpose and calm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

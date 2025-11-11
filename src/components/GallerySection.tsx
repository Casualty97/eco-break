import storyboard from "@/assets/storyboard.jpg";

const GallerySection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-eco-mint/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            The EcoBreak Journey
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            See how students transform their break time with EcoBreak
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-border overflow-hidden animate-scale-in">
            <img
              src={storyboard}
              alt="EcoBreak user journey storyboard"
              className="w-full h-auto rounded-2xl"
            />
            
            <div className="mt-8 grid sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-eco-lightGreen/20 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">1</div>
                <p className="text-sm text-muted-foreground">Feeling stressed</p>
              </div>
              <div className="p-4 bg-eco-lightGreen/20 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">2</div>
                <p className="text-sm text-muted-foreground">Opens EcoBreak</p>
              </div>
              <div className="p-4 bg-eco-lightGreen/20 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">3</div>
                <p className="text-sm text-muted-foreground">Takes mindful break</p>
              </div>
              <div className="p-4 bg-eco-lightGreen/20 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">4</div>
                <p className="text-sm text-muted-foreground">Feels refreshed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

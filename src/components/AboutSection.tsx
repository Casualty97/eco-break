import { Sparkles, Heart, Leaf } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-background to-eco-mint/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-eco-lightGreen/40 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About EcoBreak</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Balancing Rest & Productivity
            </h2>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border animate-scale-in">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              EcoBreak was designed for students to balance rest and productivity on campus. Born from a comprehensive 
              design-thinking study on stress, rest, and sustainability in student life, our platform transforms how 
              students approach their break time.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-6 bg-eco-lightGreen/20 rounded-2xl">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Mindful Breaks</h3>
                <p className="text-sm text-muted-foreground">
                  Take intentional pauses to recharge and refocus
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-eco-lightGreen/20 rounded-2xl">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Eco-Conscious</h3>
                <p className="text-sm text-muted-foreground">
                  Track your environmental impact with every break
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-eco-lightGreen/20 rounded-2xl">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Smart Booking</h3>
                <p className="text-sm text-muted-foreground">
                  Reserve your ideal study space effortlessly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

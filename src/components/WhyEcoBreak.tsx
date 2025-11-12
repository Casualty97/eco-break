import { Sparkles } from "lucide-react";

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
            <p className="text-lg leading-relaxed text-foreground">
              Campus life can be overwhelming. Many students go through the day without 
              truly resting. Between back-to-back classes, assignments, and social commitments, 
              finding a moment of peace feels impossible.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground">
              We noticed that students often struggle to find a quiet, comfortable space to 
              unwind between lessons. The library has peaceful areas, but they're not always 
              easy to access or reserve.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground">
              EcoBreak was designed to solve this problem. It helps students take meaningful, 
              restorative breaks in the library—a calm space to recharge and refocus before 
              returning to class with renewed energy and clarity.
            </p>

            <div className="pt-4 max-w-2xl mx-auto">
              <div className="bg-eco-lightGreen/30 border-l-4 border-primary p-6 rounded-r-xl">
                <p className="text-base italic text-foreground">
                  "A well-rested mind is the foundation of academic success. EcoBreak ensures 
                  every student has access to the peace they need to thrive."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEcoBreak;

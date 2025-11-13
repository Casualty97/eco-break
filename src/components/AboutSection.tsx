import { Target, Users, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-eco-mint/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
              Why We Created EcoBreak
            </h1>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-3xl mx-auto">
              Many students struggle to find peace between classes. EcoBreak was designed to encourage mindful rest, 
              productive study breaks, and meaningful use of free time.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border mb-12 animate-scale-in">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Vision</h2>
            <p className="text-lg text-foreground leading-relaxed mb-8">
              Campus life moves fast. Between lectures, assignments, and social commitments, students rarely pause to truly rest. 
              We believe that structured, intentional breaks are essential for academic success and mental well-being. 
              EcoBreak transforms library spaces into sanctuaries for mindful rest, giving students the tools to manage their time 
              and energy effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8 bg-eco-mint/30 rounded-2xl border border-border animate-fade-in-up">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Purpose-Driven</h3>
              <p className="text-foreground leading-relaxed">
                Every feature is designed to help students balance rest and productivity during their campus day.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-eco-mint/30 rounded-2xl border border-border animate-fade-in-up">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Student-Centered</h3>
              <p className="text-foreground leading-relaxed">
                Built by students, for students. We understand the unique challenges of campus life.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-eco-mint/30 rounded-2xl border border-border animate-fade-in-up">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Innovative</h3>
              <p className="text-foreground leading-relaxed">
                Combining booking technology with wellness principles to create a new campus experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

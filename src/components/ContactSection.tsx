import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive live updates about EcoBreak's rollout.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-eco-mint/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-eco-lightGreen/20 to-accent/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-border animate-fade-in-up">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Stay Updated with EcoBreak
              </h2>
              <p className="text-lg text-muted-foreground">
                Welcome to EcoBreak! Our app hasn't reached your campus yet — subscribe to get real-time updates when EcoBreak launches at your school.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 text-base rounded-full bg-card border-border"
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="rounded-full whitespace-nowrap px-8"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="rounded-full">
                  Download for iOS
                </Button>
                <Button variant="outline" size="lg" className="rounded-full">
                  Download for Android
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

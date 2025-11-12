import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Bell, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const StayUpdated = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail("");
    
    toast({
      title: "Successfully Subscribed!",
      description: "You'll receive live updates about EcoBreak's rollout",
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-eco-mint/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="relative overflow-hidden border-2 shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-eco-green to-primary"></div>
            
            <div className="p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Bell className="w-8 h-8 text-primary" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Stay Updated with EcoBreak
              </h2>

              {!isSubscribed ? (
                <>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Welcome to EcoBreak! Our app hasn't reached your campus yet — 
                    subscribe to get real-time updates when EcoBreak launches at your school.
                  </p>

                  <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 h-12 rounded-full px-6"
                        disabled={isSubmitting}
                      />
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="rounded-full px-8 h-12 hover:scale-105 transition-transform"
                      >
                        {isSubmitting ? "Subscribing..." : "Subscribe"}
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="max-w-md mx-auto animate-scale-in">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-12 h-12 text-success" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        Thank you for subscribing!
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        You'll receive live updates about EcoBreak's rollout
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StayUpdated;

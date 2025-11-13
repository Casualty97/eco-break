import { useState } from "react";
import { Mail, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-eco-mint/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-foreground">
              We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 text-base rounded-lg"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 text-base rounded-lg"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what's on your mind..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[150px] text-base rounded-lg resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full rounded-full text-base"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>

            <div className="space-y-8 animate-fade-in-up">
              <div className="bg-eco-mint/30 rounded-2xl p-8 border border-border">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
                <p className="text-foreground">pang_yu_fei@connect.ite.edu.sg</p>
              </div>

              <div className="bg-eco-mint/30 rounded-2xl p-8 border border-border">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                  <User className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Support Hours</h3>
                <p className="text-foreground">Monday - Friday<br />9:00 AM - 5:00 PM SGT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

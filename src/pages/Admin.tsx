import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
  read: boolean;
}

const Admin = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  useEffect(() => {
    const storedMessages = localStorage.getItem("ecobreak_contact_messages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  const handleDelete = (id: string) => {
    const updatedMessages = messages.filter((msg) => msg.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem("ecobreak_contact_messages", JSON.stringify(updatedMessages));
    toast({
      title: "Message deleted",
      description: "The message has been removed.",
    });
  };

  const handleMarkAsRead = (id: string) => {
    const updatedMessages = messages.map((msg) =>
      msg.id === id ? { ...msg, read: true } : msg
    );
    setMessages(updatedMessages);
    localStorage.setItem("ecobreak_contact_messages", JSON.stringify(updatedMessages));
    toast({
      title: "Marked as read",
      description: "The message status has been updated.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 md:pt-20">
        <section className="py-20 md:py-32 bg-gradient-to-b from-eco-mint/30 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 animate-fade-in-up">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
                  Admin Dashboard
                </h1>
                <p className="text-xl text-foreground">
                  Manage contact form submissions
                </p>
              </div>

              {messages.length === 0 ? (
                <div className="text-center py-12 bg-card rounded-3xl border border-border">
                  <p className="text-lg text-muted-foreground">No messages yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`bg-card rounded-2xl p-6 border border-border shadow-lg transition-all hover:shadow-xl ${
                        msg.read ? "opacity-60" : ""
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-foreground">{msg.name}</h3>
                            {!msg.read && (
                              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                                New
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{msg.email}</p>
                          <p className="text-foreground mb-3">{msg.message}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(msg.date).toLocaleString()}
                          </p>
                        </div>
                        <div className="flex md:flex-col gap-2">
                          {!msg.read && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleMarkAsRead(msg.id)}
                              className="rounded-full"
                            >
                              Mark as Read
                            </Button>
                          )}
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDelete(msg.id)}
                            className="rounded-full"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;

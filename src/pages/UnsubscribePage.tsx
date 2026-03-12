import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";

const UnsubscribePage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await (supabase as any)
        .from("newsletter_unsubscribes")
        .insert({ email: email.trim().toLowerCase() });

      if (error) throw error;

      setIsUnsubscribed(true);
      toast({
        title: "Unsubscribed",
        description: "You have been successfully unsubscribed from our newsletter.",
      });
    } catch (error) {
      console.error("Unsubscribe error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16 flex items-center justify-center">
        <div className="w-full max-w-md">
          {isUnsubscribed ? (
            <div className="text-center space-y-4">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              <h1 className="text-2xl font-bold text-foreground">You've Been Unsubscribed</h1>
              <p className="text-muted-foreground">
                We're sorry to see you go. You will no longer receive our newsletter emails.
              </p>
              <Link to="/">
                <Button className="mt-4">Back to Home</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <Mail className="h-12 w-12 text-primary mx-auto" />
                <h1 className="text-2xl font-bold text-foreground">Unsubscribe from Newsletter</h1>
                <p className="text-muted-foreground">
                  Enter your email address below to unsubscribe from our newsletter.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : null}
                  {isSubmitting ? "Processing..." : "Unsubscribe"}
                </Button>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default UnsubscribePage;

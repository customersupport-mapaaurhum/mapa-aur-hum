import { useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Check, Send, Heart, AlertTriangle, FileText, Mic, Image, GraduationCap, Sparkles } from "lucide-react";
import { z } from "zod";

// ===========================================
// 🔧 CONFIGURATION - UPDATE THESE VALUES
// ===========================================
const PREMIUM_PRICE = "₹499/month";

// Validation schema
const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  phone: z.string().trim().min(10, "Phone must be at least 10 digits").max(15, "Phone too long"),
});

const benefits = [
  { icon: Heart, text: "Access to Health Module" },
  { icon: AlertTriangle, text: "Access to Emergency Module" },
  { icon: FileText, text: "Weekly Reports on child activities" },
  { icon: Mic, text: "Audio feature for voice updates" },
  { icon: Image, text: "Image upload functionality" },
  { icon: GraduationCap, text: "Bi-monthly training for caregivers to use the app" },
  { icon: Sparkles, text: "Early access to new premium features" },
];

const PricingPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      toast({
        title: "Validation Error",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Insert premium request with pending status
      const { error } = await (supabase.from("premium_requests") as any).insert({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        utr: "PAYMENT_LINK_PENDING",
        screenshot_url: null,
        status: "pending",
      });

      if (error) {
        throw error;
      }

      setShowSuccess(true);
      setFormData({ name: "", email: "", phone: "" });
      
    } catch (error: any) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Helmet>
          <title>Request Received - MaPa-Aur-Hum Premium</title>
        </Helmet>
        <Header />
        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="max-w-md text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Thank You!</h1>
            <p className="text-muted-foreground">
              We've received your request. Our team will share the payment link with you shortly via WhatsApp or email.
            </p>
            <p className="text-sm text-muted-foreground">
              Once payment is confirmed, your Premium subscription will be activated within 24 hours.
            </p>
            <Button onClick={() => setShowSuccess(false)} variant="outline">
              Submit Another Request
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Upgrade to Premium - MaPa-Aur-Hum</title>
        <meta name="description" content="Upgrade to MaPa-Aur-Hum Premium for priority support, unlimited updates, and advanced features." />
      </Helmet>
      
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 pt-24 pb-8 md:pb-16 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Upgrade to Premium
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get the most out of MaPa-Aur-Hum with our Premium plan. Unlock exclusive features for enhanced childcare management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Benefits Section */}
            <div className="space-y-8">
              {/* Price Card */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Premium Plan</p>
                <p className="text-4xl font-bold text-primary">{PREMIUM_PRICE}</p>
                <p className="text-sm text-muted-foreground mt-1">Billed monthly</p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                <h2 className="font-semibold text-lg text-foreground">Premium Benefits</h2>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How it works */}
              <div className="bg-muted/50 rounded-2xl p-6 space-y-4">
                <h2 className="font-semibold text-lg text-foreground">How it works</h2>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 text-xs font-semibold">1</span>
                    <span>Fill in your details in the form</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 text-xs font-semibold">2</span>
                    <span>Our team will send you a payment link via WhatsApp/Email</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 text-xs font-semibold">3</span>
                    <span>Complete the payment securely</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 text-xs font-semibold">4</span>
                    <span>Your Premium access will be activated within 24 hours</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Request Form */}
            <div className="bg-card border rounded-2xl p-6 md:p-8">
              <h2 className="font-semibold text-xl text-foreground mb-2">
                Get Your Payment Link
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Share your details and we'll send you a secure payment link
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    maxLength={100}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email (same as app login) *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    maxLength={255}
                  />
                  <p className="text-xs text-muted-foreground">
                    Use the same email you use to log in to the app
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">WhatsApp Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your WhatsApp number"
                    required
                    maxLength={15}
                  />
                  <p className="text-xs text-muted-foreground">
                    We'll send the payment link to this number
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Request Payment Link
                    </>
                  )}
                </Button>
              </form>

              {/* Note */}
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Secure Payment:</strong> You'll receive a secure payment link from our verified payment partner. We never ask for card details directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;

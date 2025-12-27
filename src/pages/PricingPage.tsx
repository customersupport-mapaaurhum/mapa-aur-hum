import { useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Check, Upload, Shield, Star, Clock, Users, Sparkles } from "lucide-react";
import { z } from "zod";

// ===========================================
// 🔧 CONFIGURATION - UPDATE THESE VALUES
// ===========================================
// To change the QR code image:
// 1. Upload your new QR image to src/assets/
// 2. Import it below and update the qrCodeImage variable
// 
// To change the price:
// Update the PREMIUM_PRICE constant below
// ===========================================

// Import your UPI QR code image here
// Example: import qrCodeImage from "@/assets/your-upi-qr.png";
// For now, using a placeholder - replace with actual QR code
const PREMIUM_PRICE = "₹499/month";
const PREMIUM_PRICE_VALUE = 499;

// Validation schema
const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  phone: z.string().trim().min(10, "Phone must be at least 10 digits").max(15, "Phone too long"),
  utr: z.string().trim().min(6, "UTR must be at least 6 characters").max(50, "UTR too long"),
});

const benefits = [
  { icon: Star, text: "Priority support from our team" },
  { icon: Clock, text: "Unlimited photo/video updates" },
  { icon: Users, text: "Add multiple caregivers" },
  { icon: Shield, text: "Advanced activity tracking" },
  { icon: Sparkles, text: "Early access to new features" },
];

const PricingPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    utr: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Limit file size to 5MB
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a screenshot smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      setScreenshot(file);
    }
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
      let screenshotUrl = null;

      // Upload screenshot if provided
      if (screenshot) {
        const fileExt = screenshot.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        
        const { error: uploadError, data: uploadData } = await supabase.storage
          .from("payment-screenshots")
          .upload(fileName, screenshot);

        if (uploadError) {
          console.error("Upload error:", uploadError);
          // Continue without screenshot
        } else {
          screenshotUrl = fileName;
        }
      }

      // Insert premium request - using type assertion since types may not be updated yet
      const { error } = await (supabase.from("premium_requests") as any).insert({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        utr: formData.utr.trim(),
        screenshot_url: screenshotUrl,
        status: "pending",
      });

      if (error) {
        throw error;
      }

      setShowSuccess(true);
      setFormData({ name: "", email: "", phone: "", utr: "" });
      setScreenshot(null);
      
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
          <title>Payment Received - MaPa-Aur-Hum Premium</title>
        </Helmet>
        <Header />
        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="max-w-md text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Thank You!</h1>
            <p className="text-muted-foreground">
              We've received your payment details. Your Premium subscription will be activated within 24 hours.
            </p>
            <p className="text-sm text-muted-foreground">
              You'll receive a confirmation email once your account is upgraded.
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
        <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Upgrade to Premium
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get the most out of MaPa-Aur-Hum with our Premium plan. Enjoy priority support and exclusive features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Benefits & QR Section */}
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

              {/* QR Code Section */}
              <div className="bg-card border rounded-2xl p-6 text-center space-y-4">
                <h2 className="font-semibold text-lg text-foreground">Pay via UPI</h2>
                
                {/* 
                  🔧 REPLACE THIS PLACEHOLDER WITH YOUR ACTUAL QR CODE
                  Upload your UPI QR image to src/assets/ and import it at the top of this file
                  Then replace the div below with:
                  <img src={qrCodeImage} alt="UPI QR Code" className="w-48 h-48 mx-auto" />
                */}
                <div className="w-48 h-48 mx-auto bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                  <p className="text-sm text-muted-foreground text-center px-4">
                    QR Code<br />
                    <span className="text-xs">(Upload your UPI QR)</span>
                  </p>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Scan this QR using any UPI app (GPay, PhonePe, Paytm) to pay <strong>{PREMIUM_PRICE_VALUE}</strong>
                </p>
              </div>
            </div>

            {/* Payment Confirmation Form */}
            <div className="bg-card border rounded-2xl p-6 md:p-8">
              <h2 className="font-semibold text-xl text-foreground mb-6">
                Confirm Your Payment
              </h2>
              
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                    maxLength={15}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="utr">UPI Transaction ID / UTR *</Label>
                  <Input
                    id="utr"
                    name="utr"
                    value={formData.utr}
                    onChange={handleInputChange}
                    placeholder="Enter transaction ID from your UPI app"
                    required
                    maxLength={50}
                  />
                  <p className="text-xs text-muted-foreground">
                    You can find this in your UPI app's transaction history
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="screenshot">Payment Screenshot (Optional)</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="screenshot"
                      name="screenshot"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                    />
                  </div>
                  {screenshot && (
                    <p className="text-xs text-green-600 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {screenshot.name}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Max 5MB. Helps us verify your payment faster.
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
                      <Upload className="w-4 h-4 mr-2" />
                      I Have Paid
                    </>
                  )}
                </Button>
              </form>

              {/* MVP Note */}
              <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Note:</strong> This is an MVP flow. Payments are verified manually within 24 hours.
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

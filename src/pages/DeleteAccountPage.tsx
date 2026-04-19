import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Trash2, Loader2, CheckCircle, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { z } from "zod";

const deletionSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  reason: z.string().trim().max(1000).optional().or(z.literal("")),
});

const DeleteAccountPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
  });
  const [confirmed, setConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!confirmed) {
      toast({
        title: "Please confirm",
        description: "You must confirm that you understand this action.",
        variant: "destructive",
      });
      return;
    }

    const result = deletionSchema.safeParse(formData);
    if (!result.success) {
      toast({
        title: "Invalid input",
        description: result.error.errors[0]?.message ?? "Please check your inputs.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await (supabase as any)
        .from("account_deletion_requests")
        .insert({
          name: result.data.name,
          email: result.data.email.toLowerCase(),
          phone: result.data.phone || null,
          reason: result.data.reason || null,
        });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Request submitted",
        description: "We have received your account deletion request.",
      });
    } catch (error) {
      console.error("Deletion request error:", error);
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
        <div className="w-full max-w-lg">
          {isSubmitted ? (
            <div className="text-center space-y-4">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              <h1 className="text-2xl font-bold text-foreground">Request Received</h1>
              <p className="text-muted-foreground">
                Your account deletion request has been submitted successfully. Our team will
                review your request and process the deletion of your account and associated
                data within 7 business days. You will receive a confirmation email once the
                deletion is complete.
              </p>
              <Link to="/">
                <Button className="mt-4">Back to Home</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <Trash2 className="h-12 w-12 text-destructive mx-auto" />
                <h1 className="text-2xl font-bold text-foreground">Delete Your Account</h1>
                <p className="text-muted-foreground">
                  Submit a request to permanently delete your MaPa-Aur-Hum account and all
                  associated data.
                </p>
              </div>

              <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 flex gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <div className="text-sm text-foreground/80 space-y-1">
                  <p className="font-semibold text-destructive">This action is permanent</p>
                  <p>
                    Once your account is deleted, your profile, reports, caregiver data, and
                    history will be permanently removed and cannot be recovered.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Registered Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="The email used in the app"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Registered Phone Number (optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="The phone number used in the app"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for leaving (optional)</Label>
                  <Textarea
                    id="reason"
                    value={formData.reason}
                    onChange={(e) => handleChange("reason", e.target.value)}
                    placeholder="Help us improve by sharing why you're leaving"
                    rows={4}
                  />
                </div>

                <label className="flex items-start gap-2 text-sm text-foreground/80 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={confirmed}
                    onChange={(e) => setConfirmed(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-border accent-destructive"
                  />
                  <span>
                    I understand that submitting this request will permanently delete my
                    account and all associated data, and that this action cannot be undone.
                  </span>
                </label>

                <Button
                  type="submit"
                  variant="destructive"
                  className="w-full"
                  disabled={isSubmitting || !confirmed}
                >
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    <Trash2 className="h-4 w-4 mr-2" />
                  )}
                  {isSubmitting ? "Submitting..." : "Submit Deletion Request"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Need help instead?{" "}
                  <Link to="/contact" className="text-primary hover:underline">
                    Contact support
                  </Link>
                </p>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DeleteAccountPage;

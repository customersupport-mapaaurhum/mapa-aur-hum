import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RegistrationDialogProps {
  children: React.ReactNode;
}

export const RegistrationDialog = ({ children }: RegistrationDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    ageOfChild: "",
    email: "",
    phoneNumber: ""
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate mandatory fields
    if (!formData.name || !formData.email || !formData.phoneNumber) {
      toast({
        title: "Missing Information",
        description: "Please fill in all mandatory fields (Name, Email, Phone Number)",
        variant: "destructive"
      });
      return;
    }

    // Create email content
    const emailSubject = encodeURIComponent("Pilot Program Registration - " + formData.name);
    const emailBody = encodeURIComponent(`Hello,

I would like to register for the MaPa-Aur-Hum pilot program.

Registration Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone Number: ${formData.phoneNumber}
- City: ${formData.city || "Not provided"}
- Age of Child: ${formData.ageOfChild || "Not provided"}

Please contact me with further details about the pilot program.

Best regards,
${formData.name}`);

    // Open Gmail compose
    const gmailUrl = `https://mail.google.com/mail/u/0/?fs=1&to=customer.support@mapaaurhum.com&su=${emailSubject}&body=${emailBody}&tf=cm`;
    window.open(gmailUrl, '_blank');

    // Close dialog and reset form
    setIsOpen(false);
    setFormData({
      name: "",
      city: "",
      ageOfChild: "",
      email: "",
      phoneNumber: ""
    });

    toast({
      title: "Registration Initiated",
      description: "Gmail has been opened with your registration details. Please send the email to complete your registration.",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            Register for Pilot Program
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number *</Label>
            <Input
              id="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              type="text"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              placeholder="Enter your city"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ageOfChild">Age of Child</Label>
            <Input
              id="ageOfChild"
              type="text"
              value={formData.ageOfChild}
              onChange={(e) => handleInputChange("ageOfChild", e.target.value)}
              placeholder="Enter your child's age"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              <Send className="h-4 w-4" />
              Send Registration
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
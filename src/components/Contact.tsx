import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    feedback: '',
    subject: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.feedback || !formData.subject) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to submit the form.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Thank you for your interest!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      feedback: '',
      subject: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to join our pilot program or have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <Card className="p-8 border-border/50 shadow-elegant">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email ID *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email address"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="feedback" className="text-sm font-medium text-foreground">
                  Feedback *
                </Label>
                <Select value={formData.feedback} onValueChange={(value) => handleInputChange('feedback', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="register">Register for pilot run</SelectItem>
                    <SelectItem value="issue">Report an issue</SelectItem>
                    <SelectItem value="feature">Suggest a feature</SelectItem>
                    <SelectItem value="partnership">Business partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject *
                </Label>
                <Textarea
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  placeholder="Tell us more about your requirements or feedback"
                  className="mt-1 min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" variant="default" size="lg" className="w-full">
                <Send className="h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact information */}
          <div className="space-y-8">
            <Card className="p-8 border-border/50 shadow-elegant">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">(91)-7217615508</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-trust rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">customer.support@mapaaurhum.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      Sector 4, Urban Estate<br />
                      Gurgaon, Haryana - 122001
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick registration CTA */}
            <Card className="p-8 bg-gradient-hero border-0">
              <h3 className="text-2xl font-bold text-white mb-4">
                Join Our Pilot Program
              </h3>
              <p className="text-white/90 mb-6">
                Be among the first families to experience the future of childcare management. 
                Limited spots available for our pilot run.
              </p>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full bg-white/20 hover:bg-white/30 border-white/30"
                onClick={() => handleInputChange('feedback', 'register')}
              >
                Register Now
                <Send className="h-5 w-5" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
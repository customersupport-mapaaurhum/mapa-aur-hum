import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { z } from "zod";

const applicationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  city: z.string().trim().min(1, "City is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone_number: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15),
  linkedin_profile: z.string().trim().url("Invalid LinkedIn URL").max(500).optional().or(z.literal("")),
});

interface JobApplicationDialogProps {
  jobId: string;
  jobName: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const JobApplicationDialog = ({ jobId, jobName, open, onOpenChange }: JobApplicationDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    email: "",
    phone_number: "",
    linkedin_profile: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Resume must be less than 5MB",
          variant: "destructive",
        });
        return;
      }
      setResume(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      const validatedData = applicationSchema.parse(formData);
      
      if (!resume) {
        toast({
          title: "Resume required",
          description: "Please upload your resume",
          variant: "destructive",
        });
        return;
      }

      setSubmitting(true);

      // Upload resume
      const fileExt = resume.name.split(".").pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(filePath, resume);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from("resumes")
        .getPublicUrl(filePath);

      // Submit application
      const { error: insertError } = await supabase
        .from("job_applications")
        .insert([{
          job_id: jobId,
          name: validatedData.name,
          city: validatedData.city,
          email: validatedData.email,
          phone_number: validatedData.phone_number,
          linkedin_profile: validatedData.linkedin_profile || null,
          resume_url: publicUrl,
        }]);

      if (insertError) throw insertError;

      toast({
        title: "Application submitted!",
        description: "We'll review your application and get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        city: "",
        email: "",
        phone_number: "",
        linkedin_profile: "",
      });
      setResume(null);
      onOpenChange(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        console.error("Error submitting application:", error);
        toast({
          title: "Error",
          description: "Failed to submit application. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Apply for {jobName}</DialogTitle>
          <DialogDescription>
            Fill out the form below to submit your application
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              maxLength={100}
            />
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              maxLength={255}
            />
          </div>

          <div>
            <Label htmlFor="phone_number">Phone Number *</Label>
            <Input
              id="phone_number"
              name="phone_number"
              type="tel"
              value={formData.phone_number}
              onChange={handleInputChange}
              required
              maxLength={15}
            />
          </div>

          <div>
            <Label htmlFor="city">City *</Label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              maxLength={100}
            />
          </div>

          <div>
            <Label htmlFor="linkedin_profile">LinkedIn Profile</Label>
            <Input
              id="linkedin_profile"
              name="linkedin_profile"
              type="url"
              placeholder="https://linkedin.com/in/yourprofile"
              value={formData.linkedin_profile}
              onChange={handleInputChange}
              maxLength={500}
            />
          </div>

          <div>
            <Label htmlFor="resume">Resume (PDF, DOC, DOCX - Max 5MB) *</Label>
            <Input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeChange}
              required
            />
            {resume && (
              <p className="text-sm text-muted-foreground mt-1">
                Selected: {resume.name}
              </p>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={submitting}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={submitting} className="flex-1">
              {submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

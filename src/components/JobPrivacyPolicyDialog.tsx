import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield } from "lucide-react";

interface JobPrivacyPolicyDialogProps {
  children: React.ReactNode;
}

export const JobPrivacyPolicyDialog = ({ children }: JobPrivacyPolicyDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Privacy Policy for Job Applicants
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <p className="text-muted-foreground">Last updated: November 2025</p>
            
            <p>
              At MaPa-Aur-Hum, we value your trust and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and protect the data you share with us when you 
              apply for a role at MaPa-Aur-Hum.
            </p>

            <section>
              <h3 className="font-semibold text-base mb-2">1. What Information We Collect</h3>
              <p className="mb-2">When you apply for a position, we may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your name, email address, and phone number</li>
                <li>Your resume/CV and cover letter</li>
                <li>Educational qualifications and work experience</li>
                <li>References or recommendations (if provided)</li>
                <li>Any other information you voluntarily share during the recruitment process</li>
              </ul>
              <p className="mt-2">
                We do not ask for or require sensitive personal information such as religion, caste, political 
                opinions, sexual orientation, or health data. Please avoid including such information in your application.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">2. How We Use Your Information</h3>
              <p className="mb-2">We use your personal data only for recruitment-related purposes, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Reviewing your application and assessing your suitability for the role</li>
                <li>Communicating with you regarding your application</li>
                <li>Conducting interviews and reference checks</li>
                <li>Maintaining a candidate record for potential future opportunities (only with your consent)</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">3. Who Has Access to Your Data</h3>
              <p className="mb-2">Your personal data will be accessed only by:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Our HR and recruitment team</li>
                <li>The hiring managers involved in the selection process</li>
              </ul>
              <p className="mt-2">
                We do not share your personal data with any third party, except where required by law or with 
                your prior consent.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">4. Data Retention</h3>
              <p className="mb-2">
                We will retain your information only for as long as necessary to complete the recruitment process.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  If you are not selected, your data will be deleted within 6 months of the application date, 
                  unless you consent to be considered for future roles.
                </li>
                <li>If you are hired, your data will become part of your employee record.</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">5. Your Rights</h3>
              <p className="mb-2">
                Under the Digital Personal Data Protection Act, 2023, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Withdraw consent and request deletion of your data</li>
              </ul>
              <p className="mt-2">
                To exercise these rights, please email us at{" "}
                <a href="mailto:customer.support@mapaaurhum.com" className="text-primary hover:underline">
                  customer.support@mapaaurhum.com
                </a>
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">6. Data Security</h3>
              <p className="mb-2">
                We take appropriate technical and organizational measures to keep your data safe, including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Secure HTTPS encryption for online submissions</li>
                <li>Restricted access to authorized HR staff only</li>
                <li>Periodic review and deletion of old application data</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">7. Contact Us</h3>
              <p>If you have any questions about this policy or your data, please contact:</p>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:customer.support@mapaaurhum.com" className="text-primary hover:underline">
                  customer.support@mapaaurhum.com
                </a>
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

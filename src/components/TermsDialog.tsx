import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsDialogProps {
  children: React.ReactNode;
}

export const TermsDialog = ({ children }: TermsDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
          <DialogDescription>
            Please read our terms and conditions carefully
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-sm">
            <section>
              <h3 className="text-lg font-semibold mb-2">1. Introduction</h3>
              <p>Welcome to MaPa-Aur-Hum ("App"). This App is operated by MaPaAurHum Technologies OPC Pvt Ltd ("Company"). By accessing or using the App, you ("User"), being the parent, legal guardian, or authorized caregiver, agree to comply with and be bound by the following Terms and Conditions.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">2. Eligibility</h3>
              <p>The App may only be used by:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Parents or legal guardians of children.</li>
                <li>Authorized caregivers (maids, babysitters, or attendants) expressly permitted by the parents/legal guardians.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">3. Purpose of the App</h3>
              <p>The App enables parents/legal guardians to create, assign, and track childcare-related tasks for caregivers. The App does not provide parenting, medical, or legal advice. It serves only as a task management tool for childcare.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">4. User Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Parents/legal guardians are solely responsible for setting tasks.</li>
                <li>Caregivers are responsible for executing the tasks assigned.</li>
                <li>Parents/legal guardians are responsible for the quality of execution by caregivers, and for hiring and evaluating babysitters.</li>
                <li>The Company has no involvement in hiring, training quality, or performance of babysitters.</li>
                <li>Parents and caregivers must undergo the training tutorials provided in the App for correct use.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">5. Prohibited Content</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Users are strictly prohibited from uploading images or audio containing child nudity, pornography, or child images.</li>
                <li>Parents are solely responsible for the type of content uploaded.</li>
                <li>Violation may result in suspension or termination of access.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">6. Data Collection and Usage</h3>
              <p>The App collects and stores data regarding:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Food – to remind caregivers of meal plans and create weekly food intake reports.</li>
                <li>Nap, diaper change, and screen time – to generate tasks and weekly reports.</li>
                <li>Medicinal data – should be entered only as per medical advice and checked for expiry before uploading.</li>
              </ol>
              <p className="mt-2">The Company does not provide medical advice and shall not be held responsible for misuse of health or medicinal data.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">7. Data Hosting and Security</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>All data is hosted on secure AWS India servers.</li>
                <li>Industry-standard security measures are implemented; however, no system can guarantee absolute protection.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">8. Data Access and Deletion</h3>
              <p>Refer to Data deletion policy</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">9. Babysitter Reward Points</h3>
              <p>The Company does not provide monetary or non-monetary rewards to caregivers. Evaluation of babysitter performance rests solely with the parent/legal guardian.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">10. Pilot and Feedback</h3>
              <p>This App is currently in a pilot phase. Feedback collected may be used for improvement and marketing purposes.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">11. Consent</h3>
              <p>By accepting these Terms, parents/legal guardians consent to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>The use of child-related data as per this document.</li>
                <li>Allowing authorized babysitters/caregivers to use the App.</li>
                <li>Sharing necessary task data with caregivers.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">12. Limitation of Liability</h3>
              <p>The Company is not responsible for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Accuracy of tasks entered by parents/legal guardians.</li>
                <li>Execution of tasks by caregivers.</li>
                <li>Any injury, harm, or damages arising from App usage or caregiver performance.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">13. Dispute Resolution</h3>
              <p>Disputes shall first be attempted to be resolved amicably. If unresolved, disputes shall be referred to arbitration under the Arbitration and Conciliation Act, 1996, with arbitration seated in Gurgaon, Haryana.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">14. Governing Law</h3>
              <p>These Terms and Conditions are governed by the laws of India. Courts in Gurgaon, Haryana shall have exclusive jurisdiction.</p>
            </section>

            <section className="border-t pt-4 mt-6">
              <h2 className="text-xl font-bold mb-4">SECTION 2 - PRIVACY POLICY</h2>
              
              <h3 className="text-lg font-semibold mb-2">1. Introduction</h3>
              <p>This Privacy Policy explains how MaPa-Aur-Hum collects, uses, and protects data from parents, legal guardians, and caregivers.</p>
              
              <h3 className="text-lg font-semibold mb-2 mt-4">2. Data We Collect</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Parent/guardian details: name, email, phone number.</li>
                <li>Child-related routines: food, health, nap, diaper, screen time, and medicinal data.</li>
                <li>App usage and caregiver interaction logs.</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2 mt-4">3. Purpose of Data Collection</h3>
              <p>Data is collected strictly for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Task assignment on the app</li>
                <li>Generating weekly reports</li>
                <li>Improving app functionality</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2 mt-4">4. Data Hosting</h3>
              <p>All data is stored exclusively on AWS servers located in India.</p>

              <h3 className="text-lg font-semibold mb-2 mt-4">5. Data Sharing</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Data is shared only with authorized caregivers via the app as permitted by parents/legal guardians.</li>
                <li>No sale or disclosure of data to external parties, except as required by law.</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2 mt-4">6. Data Security</h3>
              <p>Industry-standard security measures are used via AWS hosting services.</p>

              <h3 className="text-lg font-semibold mb-2 mt-4">7. User Rights</h3>
              <p>Parents/legal guardians have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access and review stored information</li>
                <li>Correct or update child information</li>
                <li>Request data/account deletion via customer.support@mapaaurhum.com</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2 mt-4">8. Child Consent</h3>
              <p>As per Indian law, only parents/legal guardians may provide consent for child-related data.</p>

              <h3 className="text-lg font-semibold mb-2 mt-4">9. Updates to Privacy Policy</h3>
              <p>The Company may update this Privacy Policy from time to time. Users will be informed via the App or registered email.</p>

              <h3 className="text-lg font-semibold mb-2 mt-4">10. Contact</h3>
              <p>For queries or complaints: customer.support@mapaaurhum.com</p>
            </section>

            <section className="border-t pt-4 mt-6">
              <h2 className="text-xl font-bold mb-4">SECTION 3 - DATA DELETION POLICY</h2>
              
              <p>You have the right to request deletion of your personal data.</p>

              <h3 className="text-lg font-semibold mb-2 mt-4">1. How to Request Deletion</h3>
              <p>You can request deletion by contacting us directly at: customer.support@mapaaurhum.com</p>
              <p className="mt-2">Please include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your full name</li>
                <li>Registered email address</li>
                <li>Mobile number (if applicable)</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2 mt-4">2. Verification of Request</h3>
              <p>We may verify your identity before processing your deletion request to ensure privacy and security.</p>

              <h3 className="text-lg font-semibold mb-2 mt-4">3. Timeline</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Acknowledgement within 7 business days</li>
                <li>Completion of deletion within 30 days of verification, unless retention is required by law</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2 mt-4">4. Exceptions</h3>
              <p>Certain data may need to be retained temporarily for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Tax, audit, or legal compliance</li>
                <li>Security and fraud-prevention purposes</li>
                <li>Dispute resolution</li>
              </ul>
              <p className="mt-2">This data will be securely deleted once no longer required.</p>

              <h3 className="text-lg font-semibold mb-2 mt-4">5. Confirmation</h3>
              <p>Once your data has been deleted, you will receive a confirmation email.</p>
            </section>

            <section className="border-t pt-4 mt-6">
              <h2 className="text-xl font-bold mb-4">SECTION 4 - PARENTAL CONSENT FORM</h2>
              
              <p>This Parental Consent Form ("Form") is provided by MaPaAurHum Technologies OPC Pvt Ltd ("Company"), operator of the MaPa-Aur-Hum mobile application ("App"). This Form is to be accepted by the parent or legal guardian ("Parent/Guardian") of the child before using the App.</p>

              <ol className="list-decimal pl-6 space-y-2 mt-4">
                <li>I confirm that I am the parent or legal guardian of the child whose information will be entered in the App.</li>
                <li>I understand and agree that the App is a task management tool to assist in childcare planning and monitoring, and does not provide parenting, medical, or legal advice.</li>
                <li>I consent to provide information regarding my child's food, health, nap, diaper, screen time, and medicinal data for the purposes of generating reports and assigning tasks to caregivers.</li>
                <li>I acknowledge that medicinal data entered in the App must be based on proper medical advice, and I am responsible for ensuring correctness and checking expiry of any medicines before uploading such details.</li>
                <li>I consent to allow authorized caregivers (babysitters, maids, or attendants) to access and execute tasks via the App, understanding that the Company is not responsible for the quality of execution of tasks by caregivers.</li>
                <li>I acknowledge that the Company has no involvement in the hiring, training quality, or performance evaluation of caregivers. I accept sole responsibility for evaluating and monitoring caregiver performance.</li>
                <li>I agree not to upload any content (images, videos, or audio) containing child nudity, pornography, or child images. I understand that I am solely responsible for the content I upload.</li>
                <li>I consent to the collection and use of my feedback about the App for improvement and marketing purposes, provided no sensitive child-related information is disclosed externally.</li>
                <li>I acknowledge that I may request deletion of my account and related data by contacting customer.support@mapaaurhum.com, and that data will be permanently deleted in accordance with law.</li>
                <li>I confirm that I have read, understood, and agree to the Terms and Conditions and Privacy Policy of the App.</li>
              </ol>

              <p className="mt-4 font-medium">I hereby provide my informed consent for the use of the App as described above.</p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

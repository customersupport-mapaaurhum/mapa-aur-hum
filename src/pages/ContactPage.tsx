import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Helmet } from "react-helmet";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | MaPa-Aur-Hum Childcare Support & Inquiries</title>
        <meta name="description" content="Get in touch with MaPa-Aur-Hum team for support, inquiries, or feedback. We're here to help Indian parents with childcare management solutions." />
        <meta name="keywords" content="contact childcare app, MaPa-Aur-Hum support, customer service, parenting app help, book a call" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-8">
                Have questions or feedback? We'd love to hear from you. Reach out to our team today.
              </p>
            </div>
          </section>
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

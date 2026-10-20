import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";

const ContactUsPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Mapa-aur-hum | Get in Touch</title>
        <meta name="description" content="Contact Mapa-aur-hum for questions or feedback about our childcare app. Email us or book a call to discuss your parenting needs." />
        <meta property="og:title" content="Contact Us - Mapa-aur-hum" />
        <meta property="og:description" content="Contact Mapa-aur-hum for questions or feedback about our childcare app. Email us or book a call to discuss your parenting needs." />
        <link rel="canonical" href="https://mapa-aur-hum.lovable.app/contact" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactUsPage;

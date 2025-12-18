import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Does my caregiver (maid, babysitter, relative) need to have the app?",
      answer: "Yes. Your caregiver (maid, babysitter, relative) will also need access to the MaPa-aur-Hum app. You (the parent) can register the caregiver (maid, babysitter, relative) from within your own app. Both of you will log in using the same email ID — you as the parent, and the caregiver (maid, babysitter, relative) as the caregiver role."
    },
    {
      question: "How do I get my caregiver (maid, babysitter, relative) to use the app?",
      answer: "During this pilot phase, we've made it simple for both parents and caregivers (maids, babysitters, relatives) to learn the app through short video tutorials available on our website and YouTube channel @mapaaurhum. After the initial walkthrough, most caregivers (maids, babysitters, relatives) find the app easy and intuitive to use."
    },
    {
      question: "Does my caregiver (maid, babysitter, relative) need to know how to read?",
      answer: "Not necessarily. The app allows you, as the parent, to add images and audio messages that help guide your caregiver (maid, babysitter, relative) step-by-step through your child's daily routine. If you still face challenges, please share your feedback with us — we're always improving to make caregiving easier and more inclusive."
    },
    {
      question: "My caregiver (maid, babysitter, relative) doesn't read Hindi and prefers another language.",
      answer: "We understand! Please share your feedback with our customer.support@mapaaurhum.com. We're actively working to introduce more regional language options to make the app comfortable for every caregiver (maid, babysitter, relative)."
    },
    {
      question: "What if I don't want to plan for food, nap, or screen time?",
      answer: "That's perfectly fine. While planning helps parents maintain better control and consistency, you can also use the app simply to track actual updates from your caregiver (maid, babysitter, relative). Just fill in minimal details and let your caregiver (maid, babysitter, relative) know that you're using it primarily for daily activity updates."
    },
    {
      question: "How do I know if my caregiver (maid, babysitter, relative) is doing the tasks properly?",
      answer: "Use the weekly reports to review caregiving patterns and routines. Discuss the importance of transparency and clear communication with your caregiver (maid, babysitter, relative) to ensure better end-of-day updates or handoffs for your child."
    },
    {
      question: "Does the app provide suggestions or parenting advice?",
      answer: "Not yet. This pilot version focuses on helping parents and caregivers (maids, babysitters, relatives) build structured, collaborative routines."
    },
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Find answers to common questions about the app MaPa-Aur-Hum
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

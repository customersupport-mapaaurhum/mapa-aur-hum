import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CheckCircle, Users, Clock, AlertTriangle, MessageSquare, HeartHandshake, Calendar, UserX, RotateCcw, Baby } from "lucide-react";

// WhyMaPa component
export const WhyMaPa = () => {
  const problems = [
    {
      icon: Users,
      title: "Urban Working Parents",
      description: "You both are Urban working parent where both parents are delegating childcare at home to babysitters.",
      color: "bg-gradient-warm"
    },
    {
      icon: AlertTriangle,
      title: "Inexperienced Caregivers",
      description: "Inexperienced or frequently changing caregivers at home who require repeated instructions and reminders and checks",
      color: "bg-gradient-trust"
    },
    {
      icon: Clock,
      title: "Office Unavailability",
      description: "Your Busyness and unavailability in office, makes it difficult to connect frequently",
      color: "bg-accent"
    },
    {
      icon: MessageSquare,
      title: "End of Day Updates Don't Work",
      description: "End of day updates don't work for you",
      color: "bg-secondary"
    },
    {
      icon: HeartHandshake,
      title: "Trust Issues",
      description: "Trust and stressful interactions only with your caregiver",
      color: "bg-gradient-warm"
    },
    {
      icon: Baby,
      title: "Grandparents Need Help",
      description: "Grandparents need help with frequent inputs and guidance for childcare",
      color: "bg-gradient-trust"
    },
    {
      icon: Calendar,
      title: "Activity Confusion",
      description: "Actual and planned activities are not understood, end of day handovers are a guesswork",
      color: "bg-accent"
    },
    {
      icon: UserX,
      title: "Out of Loop Parent",
      description: "One parent is typically out of loop of detailed childcare activities.",
      color: "bg-secondary"
    },
    {
      icon: RotateCcw,
      title: "Caregiver Conflicts",
      description: "Caregiver and parent conflicts over instructions",
      color: "bg-gradient-warm"
    },
    {
      icon: CheckCircle,
      title: "Caregiver Support",
      description: "Caregivers need enabler tools, gratitude and support rather than repeated criticism",
      color: "bg-gradient-trust"
    }
  ];

  return (
    <section id="why-mapa" className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Why MaPa-Aur-Hum</h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            If any of these situations sound familiar, MaPa-Aur-Hum is designed for you
          </p>
        </div>
        
        <Carousel className="w-full mx-auto">
          <CarouselContent className="-ml-1">
            {problems.map((problem, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/4">
                <Card className="p-3 hover:shadow-elegant transition-all duration-300 border-border/50 h-full min-h-[200px]">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-10 h-10 ${problem.color} rounded-lg flex items-center justify-center mb-3`}>
                      <problem.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-2">{problem.title}</h3>
                    <p className="text-xs text-muted-foreground">{problem.description}</p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};
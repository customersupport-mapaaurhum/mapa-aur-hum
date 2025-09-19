import { Card } from "@/components/ui/card";
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
    <section id="why-mapa" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Why MaPa-Aur-Hum</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            If any of these situations sound familiar, MaPa-Aur-Hum is designed for you
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50 group">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${problem.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <problem.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
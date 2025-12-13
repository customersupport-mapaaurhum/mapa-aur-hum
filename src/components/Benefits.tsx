import { Card, CardContent } from "@/components/ui/card";
import { Brain, Star, Ambulance, MessageSquare, Sparkles, Languages } from "lucide-react";

const benefits = [
  {
    icon: Languages,
    title: "Simple, Accessible Language Support",
    description: "The app is easy to use with audio, image, and picture support, ensuring even less-literate caregivers can understand and use it effectively.",
    tag: "Caregiver Support",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-600",
  },
  {
    icon: Brain,
    title: "Reinforcement & Support",
    description: "Caregivers are enabled with clear guidance and support for each parenting aspect, helping to reduce activity confusion.",
    tag: "Support",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-600",
  },
  {
    icon: Star,
    title: "Gratitude & Reinforcement",
    description: "Caregivers are shown frequent gratitude and positive reinforcements (e.g., Rewards points), recognizing their effort and dedication.",
    tag: "Caregiver Support",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-600",
  },
  {
    icon: Ambulance,
    title: "In-The-Moment Emergency Support",
    description: "The caregiver gets guided support in difficult tasks like health schedules and emergency notifications, as defined by parents.",
    tag: "Health & Safety",
    gradient: "from-red-500/20 to-rose-500/20",
    iconColor: "text-red-600",
  },
  {
    icon: MessageSquare,
    title: "Structured Communication",
    description: "Overcome challenges of jumbled-up, unstructured messages with clear, organized communication for all childcare aspects.",
    tag: "Communication",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-600",
  },
  {
    icon: Sparkles,
    title: "Personalized Care Alignment",
    description: "Parents can provide specific instructions for medication, food, and other aspects ensuring they get the personalized care they want.",
    tag: "Personalized Care",
    gradient: "from-indigo-500/20 to-violet-500/20",
    iconColor: "text-indigo-600",
  },
];

export const Benefits = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Why Choose MaPa-Aur-Hum
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Benefits of Using MaPa-Aur-Hum
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Empowering parents and caregivers (maid, babysitter, relatives) with tools designed for seamless childcare management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${benefit.gradient}`}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-background/80 flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className={`w-7 h-7 ${benefit.iconColor}`} />
                  </div>
                  
                  <span className="inline-block self-start px-3 py-1 text-xs font-medium rounded-full bg-background/60 text-foreground/70 mb-3">
                    {benefit.tag}
                  </span>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

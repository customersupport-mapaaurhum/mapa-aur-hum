import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageSquare, Video, Baby, X, Check } from "lucide-react";

const comparisons = [
  {
    icon: Phone,
    title: "Phone Calls",
    subtitle: "Basis Availability",
    problems: [
      "Intrudes During Work: Calls or texts often interrupt parents during office hours.",
      "Excludes a Parent: Communication tends to leave one parent uninvolved or unaware of updates.",
    ],
    solution: "The app's structured updates ensure communication is on-time, non-intrusive, and available to both parents instantly, supporting joint parenting.",
    gradient: "from-orange-500/10 to-red-500/10",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp/Texting",
    subtitle: "Unstructured Communication",
    problems: [
      "Jumbled Information: Messages are often jumbled up, covering all aspects of childcare in a stream of text.",
      "Hard to Spot Patterns: It becomes difficult for parents to identify patterns or spot gaps in childcare.",
      "Updates Get Lost: Important information can easily get lost in the stream of messages.",
    ],
    solution: "The app structures communication into distinct modules (Food, Health, Nap, etc.), making updates clear, categorized, and easy to review.",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Video,
    title: "Camera Feeds",
    subtitle: "Monitoring",
    problems: [
      "Grainy Quality: The camera feeds are often of grainy quality.",
      "Overwhelming Video: Parents have too many hours of video to scan to find relevant information.",
      "Indicates Trust Issues: Camera monitoring alone is inconvenient and often indicative of serious trust issues.",
    ],
    solution: "The app builds trust through clear reporting and data, reducing the need to scan hours of video and moving the relationship beyond suspicion.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Baby,
    title: "General Baby Care Apps",
    subtitle: "Limited Solutions",
    problems: [
      "Literacy Assumption: They assume the same level of literacy among both parents and babysitters.",
      "Misaligned Goal: They are built for a different problem than managing communication with secondary caregivers.",
      "No Gratitude: They do not recognize caregiving efforts or help build gratitude between the parties.",
    ],
    solution: "The app specifically addresses the literacy gap with visual and audio support, and incorporates a Rewards/Gratitude system to recognize the caregiver's hard work.",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

export const Comparison = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-destructive/10 text-destructive">
            The Problem with Current Methods
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why MaPa-Aur-Hum is Better
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Current modes used for close parenting in absence suffer from being either intrusive, unstructured, or inconvenient for joint parenting. MaPa-Aur-Hum solves these specific challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {comparisons.map((item, index) => (
            <Card 
              key={index}
              className={`overflow-hidden border-0 shadow-lg bg-gradient-to-br ${item.gradient}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center`}>
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Problems */}
                <div className="space-y-2">
                  {item.problems.map((problem, pIndex) => (
                    <div key={pIndex} className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/10">
                      <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground/80">{problem}</p>
                    </div>
                  ))}
                </div>

                {/* Solution */}
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-primary mb-1">MaPa-Aur-Hum Advantage</p>
                    <p className="text-sm text-foreground/80">{item.solution}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

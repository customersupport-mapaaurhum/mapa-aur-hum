import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, EyeOff, MessageSquareOff, Ban } from "lucide-react";

const problems = [
  {
    icon: EyeOff,
    title: "Money has gone invisible",
    description: "A tap replaces counting cash. The decision behind it never surfaces for the child.",
  },
  {
    icon: MessageSquareOff,
    title: "Decisions go unspoken",
    description: "Real trade-offs happen every week at home. Almost none of them get said out loud.",
  },
  {
    icon: Ban,
    title: "Kids only hear \u201cno\u201d",
    description: "Without the reasoning, a child learns compliance instead of judgement.",
  },
];

export const UpcomingSection = memo(() => {
  return (
    <section
      id="new-in-mapa"
      className="bg-secondary text-secondary-foreground pt-28 lg:pt-32 pb-12"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary-foreground/30 bg-secondary-foreground/10 px-4 py-1.5 mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide">
              New in Mapa-aur-hum
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Money Magic Pilot — teach your child real money management, together
          </h2>
          <p className="text-sm sm:text-base text-secondary-foreground/80">
            Kids learn money by watching — and that has gotten harder. Money Magic gives your family a
            shared language for the everyday decisions behind cash, UPI and every "can I have this?"
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 mt-8 max-w-5xl mx-auto">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-xl border border-secondary-foreground/20 bg-secondary-foreground/10 p-5 text-left"
            >
              <problem.icon className="w-5 h-5 mb-3" />
              <h3 className="font-semibold text-sm sm:text-base mb-1.5">{problem.title}</h3>
              <p className="text-xs sm:text-sm text-secondary-foreground/80">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 mt-8">
          <p className="text-sm text-secondary-foreground/80 text-center max-w-2xl">
            13 mini-courses and 6 everyday family tools — built like a game, so one logged expense a day
            becomes real judgement practice.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="w-[200px] bg-background text-foreground hover:bg-background/90 group"
            onClick={() => window.open("https://mapaaurhum-money-magic-pilot.lovable.app/", "_blank")}
          >
            Explore Money Magic
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
});

UpcomingSection.displayName = "UpcomingSection";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle, Video } from "lucide-react";
import { toast } from "sonner";

export const Poll = () => {
  const [voted, setVoted] = useState<string | null>(null);

  const handleVote = (option: string) => {
    setVoted(option);
    toast.success("Thank you for your feedback!", {
      description: "Your vote has been recorded."
    });
  };

  return (
    <section id="poll" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 border-2 border-primary/20 shadow-elegant">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-trust rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                We Want Your Opinion!
              </h2>
              <p className="text-lg text-muted-foreground">
                Would you like MaPa-Aur-Hum to provide daily coaching for you and caregivers (maids, babysitters, daycares, relatives) for day-to-day baby care guidance?
              </p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={() => handleVote("yes")}
                variant={voted === "yes" ? "default" : "outline"}
                size="lg"
                className="w-full text-lg h-auto py-4 justify-start"
                disabled={voted !== null}
              >
                <div className="flex items-center gap-3 w-full">
                  {voted === "yes" && <CheckCircle className="h-5 w-5 text-white" />}
                  <span className="flex-1 text-left">Yes, daily coaching for us would be very helpful!</span>
                </div>
              </Button>

              <Button
                onClick={() => handleVote("no")}
                variant={voted === "no" ? "default" : "outline"}
                size="lg"
                className="w-full text-lg h-auto py-4 justify-start"
                disabled={voted !== null}
              >
                <div className="flex items-center gap-3 w-full">
                  {voted === "no" && <CheckCircle className="h-5 w-5 text-white" />}
                  <span className="flex-1 text-left">No, we don't need daily coaching</span>
                </div>
              </Button>

              <Button
                onClick={() => handleVote("maybe")}
                variant={voted === "maybe" ? "default" : "outline"}
                size="lg"
                className="w-full text-lg h-auto py-4 justify-start"
                disabled={voted !== null}
              >
                <div className="flex items-center gap-3 w-full">
                  {voted === "maybe" && <CheckCircle className="h-5 w-5 text-white" />}
                  <span className="flex-1 text-left">Maybe, depends on the coaching content and topics</span>
                </div>
              </Button>
            </div>

            {voted && (
              <div className="mt-6 p-4 bg-primary/10 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">
                  Your feedback helps us improve MaPa-Aur-Hum for all parents!
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

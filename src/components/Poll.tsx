import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Poll = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [hasVoted, setHasVoted] = useState(false);

  const pollOptions = [
    { id: "ai-checks", label: "AI based checks for food/health inputs" },
    { id: "languages", label: "More languages" },
    { id: "coach-suggestions", label: "Suggestions based on parent coaches for caregivers" },
    { id: "activities", label: "Play / Activities suggestions" },
    { id: "age-appropriate", label: "Age-appropriate suggestions by the app" },
    { id: "general-fixes", label: "General fixes" },
  ];

  const handleSubmit = async () => {
    if (!selectedOption) {
      toast.error("Please select an option");
      return;
    }
    
    try {
      const { error } = await supabase
        .from("poll_responses")
        .insert({
          selected_option: selectedOption,
        });

      if (error) throw error;

      setHasVoted(true);
      toast.success("Thank you for your feedback!");
    } catch (error) {
      console.error("Error submitting poll:", error);
      toast.error("Failed to submit your vote. Please try again.");
    }
  };

  return (
    <section id="poll" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Help Shape MaPa-Aur-Hum
            </h2>
            <p className="text-lg text-muted-foreground">
              What feature would you like to see next in MaPa-Aur-Hum?
            </p>
          </div>

          <Card className="p-8 shadow-elegant">
            {!hasVoted ? (
              <div className="space-y-6">
                <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
                  <div className="space-y-4">
                    {pollOptions.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-all cursor-pointer"
                        onClick={() => setSelectedOption(option.id)}
                      >
                        <RadioGroupItem value={option.id} id={option.id} />
                        <Label
                          htmlFor={option.id}
                          className="flex-1 cursor-pointer text-base"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>

                <Button
                  onClick={handleSubmit}
                  size="lg"
                  className="w-full"
                  disabled={!selectedOption}
                >
                  Submit Your Vote
                </Button>
              </div>
            ) : (
              <div className="text-center py-8">
                <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  Your feedback helps us build a better MaPa-Aur-Hum
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

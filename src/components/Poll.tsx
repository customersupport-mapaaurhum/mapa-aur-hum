import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle, Video } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Progress } from "@/components/ui/progress";

interface VoteResults {
  yes: number;
  no: number;
  total: number;
}

export const Poll = () => {
  const [voted, setVoted] = useState<string | null>(null);
  const [results, setResults] = useState<VoteResults | null>(null);

  const fetchResults = async () => {
    try {
      const { data, error } = await supabase
        .from('poll_responses')
        .select('selected_option');

      if (error) throw error;

      const yes = data?.filter(r => r.selected_option === 'yes').length || 0;
      const no = data?.filter(r => r.selected_option === 'no').length || 0;
      const total = yes + no;

      setResults({ yes, no, total });
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  };

  const handleVote = async (option: string) => {
    try {
      const { error } = await supabase
        .from('poll_responses')
        .insert({ selected_option: option });

      if (error) throw error;

      setVoted(option);
      await fetchResults();
      
      toast.success("Thank you for your feedback!", {
        description: "Your vote has been recorded."
      });
    } catch (error) {
      console.error('Error submitting vote:', error);
      toast.error("Failed to submit vote", {
        description: "Please try again later."
      });
    }
  };

  const getPercentage = (count: number) => {
    if (!results || results.total === 0) return 0;
    return Math.round((count / results.total) * 100);
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
              <div className="space-y-3">
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
                {voted && results && (
                  <div className="space-y-1 px-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{results.yes} votes</span>
                      <span className="font-medium">{getPercentage(results.yes)}%</span>
                    </div>
                    <Progress value={getPercentage(results.yes)} className="h-2" />
                  </div>
                )}
              </div>

              <div className="space-y-3">
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
                {voted && results && (
                  <div className="space-y-1 px-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{results.no} votes</span>
                      <span className="font-medium">{getPercentage(results.no)}%</span>
                    </div>
                    <Progress value={getPercentage(results.no)} className="h-2" />
                  </div>
                )}
              </div>
            </div>

            {voted && results && (
              <div className="mt-6 p-4 bg-primary/10 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">
                  Your feedback helps us improve MaPa-Aur-Hum for all parents! Total votes: {results.total}
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

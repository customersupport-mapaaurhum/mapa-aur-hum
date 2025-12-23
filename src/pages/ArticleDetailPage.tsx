import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowLeft, Calendar, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CommentDialog } from "@/components/CommentDialog";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

interface Comment {
  id: string;
  name: string;
  comment: string;
  created_at: string;
}

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const [commentDialogOpen, setCommentDialogOpen] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoadingComments, setIsLoadingComments] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      if (!slug) return;
      
      const { data, error } = await supabase
        .from("article_comments")
        .select("id, name, comment, created_at")
        .eq("article_slug", slug)
        .eq("is_approved", true)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setComments(data);
      }
      setIsLoadingComments(false);
    };

    fetchComments();
  }, [slug]);

  // Article 1: Modern Village
  if (slug === "modern-village-childcare") {
    return (
      <>
        <Helmet>
          <title>The Modern Village: How Urban India is Redefining Childcare - MaPa-Aur-Hum</title>
          <meta name="description" content="Discover how urban parents in India manage childcare for kids under 5. Explore the shift to nuclear families, the role of grandparents, and the new 'Hybrid Model.'" />
          <link rel="canonical" href="https://www.mapa-aur-hum.lovable.app/articles/modern-village-childcare" />
        </Helmet>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto">
              <Link to="/articles">
                <Button variant="ghost" className="mb-6 gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Articles
                </Button>
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="secondary" className="gap-1">
                  <Sparkles className="h-3 w-3" />
                  Powered by AI
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  December 2024
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                The Modern Village: How Urban India is Redefining Childcare
              </h1>

              <Separator className="mb-8" />

              <article className="space-y-8">
                {/* The Shift to Hybrid Parenting */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">
                    The Shift to "Hybrid Parenting"
                  </h2>
                  <p className="text-lg leading-relaxed text-foreground/90">
                    In cities like Bangalore and Mumbai, the traditional joint family is evolving. According to the 2024 Time Use Survey, urban parents are now managing a complex balancing act. With nuclear families becoming the norm, childcare for children under 5 has moved to a Hybrid Model:
                  </p>
                  <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong className="text-foreground">Grandparents:</strong>
                        <span className="text-foreground/80"> Act as the "Trust Layer," often visiting for months at a time.</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong className="text-foreground">Domestic Help:</strong>
                        <span className="text-foreground/80"> Handle the "Physical Layer" (feeding and bathing).</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong className="text-foreground">Daycares:</strong>
                        <span className="text-foreground/80"> Provide the "Professional Layer," especially as the Maternity Act makes office-linked crèches more common.</span>
                      </div>
                    </div>
                  </div>
                </section>

                <Separator />

                {/* The Delegation Breakdown */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">
                    The Delegation Breakdown
                  </h2>
                  <p className="leading-relaxed">
                    Research shows that while parents stay 100% involved in health and emotional decisions, they delegate nearly 70% of physical care (like meal times and hygiene) to helpers during work hours. The challenge? Ensuring that "delegated care" matches the parents' standards.
                  </p>
                </section>

                <Separator />

                {/* The MaPa-Aur-Hum Take */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">
                    The MaPa-Aur-Hum Take
                  </h2>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                    <p className="leading-relaxed text-lg">
                      We believe parenting shouldn't feel like a solo mission. By bridging the gap between parents and caregivers, we can bring back the "village" feel in a digital world.
                    </p>
                  </div>
                </section>

                <Separator />

                {/* References */}
                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-muted-foreground">
                    References & Further Reading
                  </h2>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Ministry of Statistics (MoSPI) Time Use Survey 2024.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Maternity Benefit (Amendment) Act 2017.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Indian Childcare Market Growth Reports (2024-2030).</span>
                    </li>
                  </ul>
                </section>

                <Separator />

                {/* Comments Section */}
                <section className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <MessageCircle className="h-6 w-6" />
                      Comments
                    </h2>
                    <Button onClick={() => setCommentDialogOpen(true)}>
                      Leave a Comment
                    </Button>
                  </div>

                  {isLoadingComments ? (
                    <div className="text-center py-8 text-muted-foreground">
                      Loading comments...
                    </div>
                  ) : comments.length > 0 ? (
                    <div className="space-y-4">
                      {comments.map((comment) => (
                        <div
                          key={comment.id}
                          className="bg-muted/30 rounded-lg p-4 space-y-2"
                        >
                          <div className="flex items-center gap-2">
                            <div className="bg-primary/10 rounded-full p-2">
                              <User className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">{comment.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {format(new Date(comment.created_at), "MMM d, yyyy")}
                              </p>
                            </div>
                          </div>
                          <p className="text-foreground/80 pl-10">{comment.comment}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 bg-muted/20 rounded-lg">
                      <MessageCircle className="h-12 w-12 mx-auto text-muted-foreground/50 mb-3" />
                      <p className="text-muted-foreground">
                        No comments yet. Be the first to share your thoughts!
                      </p>
                    </div>
                  )}
                </section>
              </article>
            </div>
          </main>
          <Footer />
        </div>

        <CommentDialog
          open={commentDialogOpen}
          onOpenChange={setCommentDialogOpen}
          articleSlug={slug || ""}
        />
      </>
    );
  }

  // Article 2: Tech & Trust
  if (slug === "tech-trust-childcare") {
    return (
      <>
        <Helmet>
          <title>Tech & Trust: Solving the Urban Childcare Puzzle - MaPa-Aur-Hum</title>
          <meta name="description" content="Struggle with nanny management? Learn how technology and standardized tools are helping urban Indian parents bridge the trust gap and balance work with peace of mind." />
          <link rel="canonical" href="https://www.mapa-aur-hum.lovable.app/articles/tech-trust-childcare" />
        </Helmet>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto">
              <Link to="/articles">
                <Button variant="ghost" className="mb-6 gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Articles
                </Button>
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="secondary" className="gap-1">
                  <Sparkles className="h-3 w-3" />
                  Powered by AI
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  December 2024
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Tech & Trust: Solving the Urban Childcare Puzzle
              </h1>

              <Separator className="mb-8" />

              <article className="space-y-8">
                {/* Introduction */}
                <section className="space-y-4">
                  <p className="text-lg leading-relaxed text-foreground/90 italic">
                    How do you know your toddler is thriving when you're in a boardroom?
                  </p>
                </section>

                <Separator />

                {/* The Trust Deficit */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">
                    The "Trust Deficit" in Urban Homes
                  </h2>
                  <p className="leading-relaxed">
                    The biggest problem urban Indian parents face isn't just "finding help"—it's quality control. Parents of children under 5 often struggle with:
                  </p>
                  <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6 space-y-4">
                    <div className="flex gap-3">
                      <span className="text-destructive font-bold text-lg">1.</span>
                      <div>
                        <strong className="text-foreground">Communication Gaps:</strong>
                        <span className="text-foreground/80"> Difficulty in getting accurate, real-time updates from nannies.</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-destructive font-bold text-lg">2.</span>
                      <div>
                        <strong className="text-foreground">The Double Burden:</strong>
                        <span className="text-foreground/80"> Women still perform nearly 5x more unpaid care work than men (MoSPI, 2024).</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-destructive font-bold text-lg">3.</span>
                      <div>
                        <strong className="text-foreground">Safety Anxiety:</strong>
                        <span className="text-foreground/80"> The constant need to check "Is my child safe and engaged?"</span>
                      </div>
                    </div>
                  </div>
                </section>

                <Separator />

                {/* Technology as Digital Nanny */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">
                    Technology as the New "Digital Nanny"
                  </h2>
                  <p className="leading-relaxed">
                    To solve these issues, Indian parents are turning to a "Digital Village":
                  </p>
                  <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong className="text-foreground">Smart Monitoring:</strong>
                        <span className="text-foreground/80"> 90% of urban parents now use Wi-Fi cameras for peace of mind.</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong className="text-foreground">Development Apps:</strong>
                        <span className="text-foreground/80"> Using AI to track milestones and nutrition.</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong className="text-foreground">Standardized Tools:</strong>
                        <span className="text-foreground/80"> Parents are moving away from verbal instructions to visual and audio aids that help domestic staff follow a structured routine.</span>
                      </div>
                    </div>
                  </div>
                </section>

                <Separator />

                {/* Closing the Gap */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">
                    Closing the Gap
                  </h2>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                    <p className="leading-relaxed text-lg">
                      At MaPa-Aur-Hum, we help you move from monitoring to mentoring your caregivers. When the "Hum" (support system) is empowered with the right tools, the "MaPa" (parents) can work without the guilt.
                    </p>
                  </div>
                </section>

                <Separator />

                {/* References */}
                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-muted-foreground">
                    References & Further Reading
                  </h2>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Ministry of Statistics (MoSPI) Time Use Survey 2024.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Maternity Benefit (Amendment) Act 2017.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Indian Childcare Market Growth Reports (2024-2030).</span>
                    </li>
                  </ul>
                </section>

                <Separator />

                {/* Comments Section */}
                <section className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <MessageCircle className="h-6 w-6" />
                      Comments
                    </h2>
                    <Button onClick={() => setCommentDialogOpen(true)}>
                      Leave a Comment
                    </Button>
                  </div>

                  {isLoadingComments ? (
                    <div className="text-center py-8 text-muted-foreground">
                      Loading comments...
                    </div>
                  ) : comments.length > 0 ? (
                    <div className="space-y-4">
                      {comments.map((comment) => (
                        <div
                          key={comment.id}
                          className="bg-muted/30 rounded-lg p-4 space-y-2"
                        >
                          <div className="flex items-center gap-2">
                            <div className="bg-primary/10 rounded-full p-2">
                              <User className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">{comment.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {format(new Date(comment.created_at), "MMM d, yyyy")}
                              </p>
                            </div>
                          </div>
                          <p className="text-foreground/80 pl-10">{comment.comment}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 bg-muted/20 rounded-lg">
                      <MessageCircle className="h-12 w-12 mx-auto text-muted-foreground/50 mb-3" />
                      <p className="text-muted-foreground">
                        No comments yet. Be the first to share your thoughts!
                      </p>
                    </div>
                  )}
                </section>
              </article>
            </div>
          </main>
          <Footer />
        </div>

        <CommentDialog
          open={commentDialogOpen}
          onOpenChange={setCommentDialogOpen}
          articleSlug={slug || ""}
        />
      </>
    );
  }

  // Article not found
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Link to="/articles">
          <Button>Back to Articles</Button>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetailPage;

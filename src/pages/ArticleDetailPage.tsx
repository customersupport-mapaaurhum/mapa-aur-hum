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
import { SocialShare } from "@/components/SocialShare";
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

  // Article 3: Gratitude in Modern Parenting
  if (slug === "gratitude-modern-parenting") {
    return (
      <>
        <Helmet>
          <title>The Foundation of Modern Parenting: Why Gratitude is the Ultimate Reset - MaPa-Aur-Hum</title>
          <meta name="description" content="Discover how gratitude transforms parenting. Research shows perceived gratitude lowers parenting stress. Learn the 'Grateful Reset' for your New Year resolution." />
          <link rel="canonical" href="https://mapa-aur-hum.lovable.app/articles/gratitude-modern-parenting" />
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

              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="secondary" className="gap-1">
                    <Sparkles className="h-3 w-3" />
                    Powered by AI
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    January 2025
                  </div>
                </div>
                <SocialShare
                  title="The Foundation of Modern Parenting: Why Gratitude is the Ultimate Reset"
                  url="https://mapa-aur-hum.lovable.app/articles/gratitude-modern-parenting"
                />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                The Foundation of Modern Parenting: Why Gratitude is the Ultimate Reset
              </h1>

              <Separator className="mb-8" />

              <article className="space-y-8">
                {/* Introduction */}
                <section className="space-y-4">
                  <p className="text-lg leading-relaxed text-foreground/90">
                    In the rush of urban parenting, we often focus on "fixing" behaviors. However, recent research suggests that the most powerful parenting tool isn't a new rule—it's gratitude.
                  </p>
                  <p className="leading-relaxed text-foreground/80">
                    According to a 2024 study in The Journal of Positive Psychology, perceived gratitude from children significantly lowers parenting stress and psychological distress for mothers and fathers alike. When we shift our foundation to gratitude, we move from micromanagement to connection.
                  </p>
                </section>

                <Separator />

                {/* How Gratitude Transforms Your Home */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">
                    How Gratitude Transforms Your Home
                  </h2>
                  <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong className="text-foreground">Towards Your Child:</strong>
                        <span className="text-foreground/80"> Expressing gratitude for your child's "likable strong points" (rather than just correcting faults) strengthens neural pathways associated with trust and safety.</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong className="text-foreground">Towards Caregivers:</strong>
                        <span className="text-foreground/80"> Research indicates that caregivers who feel appreciated experience lower burnout and higher competence, creating a "positive feedback loop" of care for your child.</span>
                      </div>
                    </div>
                  </div>
                </section>

                <Separator />

                {/* New Year Resolution */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">
                    New Year Resolution: The "Grateful Reset"
                  </h2>
                  <p className="leading-relaxed">
                    This year, don't just resolve to "yell less." Resolve to notice more. A simple habit of daily gratitude journaling about your family can improve emotional regulation and resilience.
                  </p>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                    <p className="leading-relaxed text-lg font-medium">
                      This New Year, let's build a home rooted in appreciation.
                    </p>
                    <p className="leading-relaxed text-lg mt-2">
                      Start your gratitude journey today with MaPa-Aur-Hum.
                    </p>
                  </div>
                </section>

                <Separator />

                {/* References */}
                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-muted-foreground">
                    References
                  </h2>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span>1.</span>
                      <span>Barton, A. W., & Gong, Q. (2024). A 'Thank You' really would be nice: Perceived gratitude in family relationships. The Journal of Positive Psychology.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>2.</span>
                      <span>Hussong, A. M., et al. (2021). Parenting and the development of children's gratitude. Child Development Perspectives.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>3.</span>
                      <span>Algoe, S. B. (2012). Find, Remind, and Bind: The functions of gratitude in everyday relationships. Social and Personality Psychology Compass.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>4.</span>
                      <span>Emmons, R. A., & McCullough, M. E. (2003). Counting blessings versus burdens. Journal of Personality and Social Psychology.</span>
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

  // Article 1: Modern Village
  if (slug === "modern-village-childcare") {
    return (
      <>
        <Helmet>
          <title>The Modern Village: How Urban India is Redefining Childcare - MaPa-Aur-Hum</title>
          <meta name="description" content="Discover how urban parents in India manage childcare for kids under 5. Explore the shift to nuclear families, the role of grandparents, and the new 'Hybrid Model.'" />
          <link rel="canonical" href="https://mapa-aur-hum.lovable.app/articles/modern-village-childcare" />
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

              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="secondary" className="gap-1">
                    <Sparkles className="h-3 w-3" />
                    Powered by AI
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    December 2024
                  </div>
                </div>
                <SocialShare
                  title="The Modern Village: How Urban India is Redefining Childcare"
                  url="https://mapa-aur-hum.lovable.app/articles/modern-village-childcare"
                />
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
          <link rel="canonical" href="https://mapa-aur-hum.lovable.app/articles/tech-trust-childcare" />
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

              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="secondary" className="gap-1">
                    <Sparkles className="h-3 w-3" />
                    Powered by AI
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    December 2024
                  </div>
                </div>
                <SocialShare
                  title="Tech & Trust: Solving the Urban Childcare Puzzle"
                  url="https://mapa-aur-hum.lovable.app/articles/tech-trust-childcare"
                />
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

  // Article 4: Nutrition and Caregiver Partnership
  if (slug === "nutrition-caregiver-partnership") {
    return (
      <>
        <Helmet>
          <title>Raising a Healthy Child: How to Partner with Your Caregiver for Nutritional Success - MaPa-Aur-Hum</title>
          <meta name="description" content="Learn how to build a parent-caregiver partnership for your child's nutrition. Research-backed tips on meal planning, mindful eating, and the 'Golden Window' for healthy habits." />
          <link rel="canonical" href="https://mapa-aur-hum.lovable.app/articles/nutrition-caregiver-partnership" />
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

              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="secondary" className="gap-1">
                    <Sparkles className="h-3 w-3" />
                    Powered by AI
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    January 2025
                  </div>
                </div>
                <SocialShare
                  title="Raising a Healthy Child: How to Partner with Your Caregiver for Nutritional Success"
                  url="https://mapa-aur-hum.lovable.app/articles/nutrition-caregiver-partnership"
                />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Raising a Healthy Child: How to Partner with Your Caregiver for Nutritional Success
              </h1>

              <Separator className="mb-8" />

              <article className="space-y-8">
                {/* Introduction */}
                <section className="space-y-4">
                  <p className="text-lg leading-relaxed text-foreground/90">
                    In the rhythmic hustle of modern Indian life, domestic helpers and nannies are often the unsung heroes of our homes. They provide the support that allows us to pursue our careers while ensuring our children are safe and fed.
                  </p>
                  <p className="leading-relaxed text-foreground/80">
                    However, even the most dedicated caregiver needs a roadmap. Research into early childhood development suggests that the years before age 5 are a "Golden Window" for habit formation (UNICEF India). When parents and caregivers work as a synchronized team, this window becomes a foundation for a lifetime of health.
                  </p>
                </section>

                <Separator />

                {/* Section 1: Family Menu */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">
                    1. The Power of the "Family Menu"
                  </h2>
                  <p className="leading-relaxed">
                    In India, food is culture. But for a caregiver, the priority is often simply ensuring the child finishes their meal. Without a plan, they may default to "safe" options like white rice or biscuits.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong className="text-foreground">The Science of Mimicry:</strong>
                        <span className="text-foreground/80"> Research in Frontiers in Psychology shows that kids are "social eaters." They learn what to like by watching the adults around them.</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong className="text-foreground">The Partnership:</strong>
                        <span className="text-foreground/80"> When you plan meals that include traditional grains like ragi or bajra, you empower your caregiver to introduce these flavors. Your role is the Architect (the plan), and theirs is the Builder (the execution).</span>
                      </div>
                    </div>
                  </div>
                </section>

                <Separator />

                {/* Section 2: Convenience Feeding */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">
                    2. Moving Beyond "Convenience Feeding"
                  </h2>
                  <p className="leading-relaxed">
                    Caregivers often face the pressure of a "crying child" or a "clean plate." To make their own jobs easier and keep the child happy, they might lean on sugary snacks or juices.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong className="text-foreground">Addressing "Hidden Hunger":</strong>
                        <span className="text-foreground/80"> The NFHS-5 data shows that many Indian children suffer from anemia and micronutrient deficiencies. This isn't due to a lack of food, but a lack of diversity.</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong className="text-foreground">The Solution:</strong>
                        <span className="text-foreground/80"> By providing a structured plan that includes proteins (dal, paneer, eggs) and healthy fats, you take the guesswork out of the caregiver's hands, ensuring the child is nourished, not just full.</span>
                      </div>
                    </div>
                  </div>
                </section>

                <Separator />

                {/* Section 3: Mindful Eating */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">
                    3. Mindful Eating: A Team Effort
                  </h2>
                  <p className="leading-relaxed">
                    "Distraction feeding"—using screens or toys to get a child to eat—is a common tool used to avoid mealtime battles.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong className="text-foreground">The Satiety Cue:</strong>
                        <span className="text-foreground/80"> Studies in the American Journal of Clinical Nutrition suggest that distraction prevents children from feeling "full," which can lead to overeating later.</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong className="text-foreground">The Partnership:</strong>
                        <span className="text-foreground/80"> Encourage your caregiver to engage in "responsive feeding"—talking to the child about the textures and colors of the food. When you support your helper in removing the screen, you help the child develop a healthy relationship with hunger.</span>
                      </div>
                    </div>
                  </div>
                </section>

                <Separator />

                {/* Section 4: Tracking */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">
                    4. Tracking What Matters
                  </h2>
                  <p className="leading-relaxed">
                    Monitoring isn't about lack of trust; it's about supporting the caregiver in a high-stakes job.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong className="text-foreground">Hydration & Energy:</strong>
                        <span className="text-foreground/80"> Toddlers often forget to drink water, leading to irritability that caregivers might mistake for a "tantrum."</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong className="text-foreground">Protein Gap:</strong>
                        <span className="text-foreground/80"> Since Indian diets can be carb-heavy, a pre-set plan ensures the caregiver knows exactly which protein to add to which meal.</span>
                      </div>
                    </div>
                  </div>
                </section>

                <Separator />

                {/* How to Build Partnership */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                    💡 How to Build This Partnership
                  </h2>
                  <p className="leading-relaxed">
                    Support your caregiver with these simple tools:
                  </p>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">1.</span>
                      <div>
                        <strong className="text-foreground">The Digital Roadmap:</strong>
                        <span className="text-foreground/80"> Use an app like MaPa-Aur-Hum to set the weekly menu. It gives your caregiver clear instructions so they don't have to decide "what to cook" every day.</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">2.</span>
                      <div>
                        <strong className="text-foreground">The One-Meal Rule:</strong>
                        <span className="text-foreground/80"> Ensure at least one meal is a family affair. This reinforces the "Taste Memory" you want to build.</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">3.</span>
                      <div>
                        <strong className="text-foreground">The Hydration Station:</strong>
                        <span className="text-foreground/80"> Give the caregiver a dedicated, colorful bottle for the child. Make it a shared goal to see it emptied twice a day.</span>
                      </div>
                    </div>
                  </div>
                </section>

                <Separator />

                {/* Bottom Line */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">
                    The Bottom Line
                  </h2>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                    <p className="leading-relaxed text-lg">
                      Research in Frontiers in Public Health shows that parental involvement in nutrition decisions leads to better growth and cognitive outcomes. Your caregiver provides the hands, but you provide the vision. Together, you can make the "Golden Window" count.
                    </p>
                  </div>
                </section>

                <Separator />

                {/* References */}
                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-muted-foreground">
                    References
                  </h2>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span>1.</span>
                      <span>UNICEF India - Early Childhood Development and the "Golden Window"</span>
                    </li>
                    <li className="flex gap-2">
                      <span>2.</span>
                      <span>Frontiers in Psychology - Social learning and food preferences in children</span>
                    </li>
                    <li className="flex gap-2">
                      <span>3.</span>
                      <span>National Family Health Survey (NFHS-5) - Child nutrition data</span>
                    </li>
                    <li className="flex gap-2">
                      <span>4.</span>
                      <span>American Journal of Clinical Nutrition - Distraction feeding and satiety cues</span>
                    </li>
                    <li className="flex gap-2">
                      <span>5.</span>
                      <span>Frontiers in Public Health - Parental involvement in nutrition outcomes</span>
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

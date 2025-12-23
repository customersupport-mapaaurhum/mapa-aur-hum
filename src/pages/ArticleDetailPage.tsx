import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const ArticleDetailPage = () => {
  const { slug } = useParams();

  // For now, we only have one article
  if (slug !== "urban-parenting-paradox") {
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
  }

  return (
    <>
      <Helmet>
        <title>The Urban Parenting Paradox - MaPa-Aur-Hum</title>
        <meta name="description" content="Raising a child under 5 in a city like Mumbai, Bangalore, or Delhi often feels like running a marathon while balancing a tray of eggs." />
        <link rel="canonical" href="https://www.mapa-aur-hum.lovable.app/articles/urban-parenting-paradox" />
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
              The Urban Parenting Paradox: How We Raise Children in the Modern Indian City
            </h1>

            <Separator className="mb-8" />

            <article className="space-y-8">
              {/* Introduction */}
              <section className="space-y-4">
                <p className="text-lg leading-relaxed text-foreground/90">
                  Raising a child under 5 in a city like Mumbai, Bangalore, or Delhi often feels like running a marathon while balancing a tray of eggs. The "village" that our parents had—grandparents, aunts, and neighbors just a door away—has largely been replaced by Google searches, nanny interviews, and CCTV apps.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90">
                  If you've ever felt the "working-parent guilt" or the stress of managing a nanny from your office desk, you aren't alone. Here is what the research says about how we are actually managing today.
                </p>
              </section>

              <Separator />

              {/* Section 1 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">
                  1. The "Support System" is Changing
                </h2>
                <p className="leading-relaxed">
                  Gone are the days when childcare was solely the family's responsibility. Today, urban parents rely on a <strong>Hybrid Model</strong>:
                </p>
                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <div className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <div>
                      <strong className="text-foreground">The Trust Layer:</strong>
                      <span className="text-foreground/80"> Grandparents are still the #1 choice. Many families now practice "rotational visits," where sets of grandparents stay for 3–6 months to oversee the house.</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <div>
                      <strong className="text-foreground">The Executive Layer:</strong>
                      <span className="text-foreground/80"> The "Didi" or nanny. In India, we don't just delegate childcare; we delegate the logistics (cooking, cleaning, feeding).</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <div>
                      <strong className="text-foreground">The Professional Layer:</strong>
                      <span className="text-foreground/80"> Premium daycares are booming. With the Maternity Act now mandating office crèches, the shift toward professional, structured care is growing by 15% annually.</span>
                    </div>
                  </div>
                </div>
              </section>

              <Separator />

              {/* Section 2 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">
                  2. How Much Are We Actually Outsourcing?
                </h2>
                <p className="leading-relaxed">
                  Research on urban Indian households shows an interesting split. While parents (especially mothers) still hold onto "Emotional & Health Management," they delegate a massive chunk of the physical labor:
                </p>
                
                <div className="overflow-x-auto rounded-lg border border-border">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="p-4 text-left font-semibold">Task</th>
                        <th className="p-4 text-left font-semibold">Who usually does it?</th>
                        <th className="p-4 text-left font-semibold">Delegation %</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="p-4">Feeding & Bathing</td>
                        <td className="p-4">Nanny / Daycare</td>
                        <td className="p-4 font-semibold text-primary">70%</td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="p-4">Health & Vaccinations</td>
                        <td className="p-4">Parents</td>
                        <td className="p-4 font-semibold text-primary">10%</td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="p-4">Early Learning/Play</td>
                        <td className="p-4">Mixed (Apps/Nannies)</td>
                        <td className="p-4 font-semibold text-primary">40%</td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="p-4">Safety Monitoring</td>
                        <td className="p-4">Technology (CCTV)</td>
                        <td className="p-4 font-semibold text-primary">90%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <Separator />

              {/* Section 3 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">
                  3. The Tech-Village: Our New Best Friend
                </h2>
                <p className="leading-relaxed">
                  Since we can't be there physically, urban Indian parents are the world's fastest adopters of "Parent-Tech."
                </p>
                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <div className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <div>
                      <strong className="text-foreground">CCTV is the new "Neighbor":</strong>
                      <span className="text-foreground/80"> High-speed Wi-Fi cameras are now a standard part of a baby's nursery. However videos are difficult to scan for any issues and can only be used for adhoc monitoring.</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <div>
                      <strong className="text-foreground">Development Apps:</strong>
                      <span className="text-foreground/80"> Parents are moving away from "just keeping the child busy" to tracking milestones via AI-driven platforms.</span>
                    </div>
                  </div>
                </div>
              </section>

              <Separator />

              {/* Communication Gaps */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">
                  Communication Gaps
                </h2>
                <p className="leading-relaxed">
                  This is the biggest pain point. Most nannies in India struggle with care personalised to family needs and regular updates. This is why tools that standardize care—like visual schedules or easy tracking—are becoming essential for peace of mind.
                </p>
              </section>

              <Separator />

              {/* The Real Problems */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">
                  The Real Problems
                </h2>
                <p className="leading-relaxed">
                  Despite the help, the road isn't smooth. Urban parents face three major hurdles:
                </p>
                <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6 space-y-4">
                  <div className="flex gap-3">
                    <span className="text-destructive font-bold text-lg">1.</span>
                    <div>
                      <strong className="text-foreground">The Trust Deficit:</strong>
                      <span className="text-foreground/80"> "Did they actually give the medicine?" "Did the baby nap for an hour or three?"</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-destructive font-bold text-lg">2.</span>
                    <div>
                      <strong className="text-foreground">The "Double Burden":</strong>
                      <span className="text-foreground/80"> According to the 2024 Time Use Survey, Indian women still do 5x more unpaid care work than men, even when working full-time.</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-destructive font-bold text-lg">3.</span>
                    <div>
                      <strong className="text-foreground">The Cost of Quality:</strong>
                      <span className="text-foreground/80"> Finding a caregiver who understands nutrition and stimulation (not just screen time) is the hardest search a parent will ever undertake.</span>
                    </div>
                  </div>
                </div>
              </section>

              <Separator />

              {/* MaPa-Aur-Hum Perspective */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">
                  The MaPa-Aur-Hum Perspective
                </h2>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <p className="leading-relaxed text-lg">
                    At MaPa-Aur-Hum, we believe that "Hum" (the support system) needs better tools. You shouldn't have to choose between a flourishing career and a flourishing child. By empowering caregivers with better communication and standardizing daily routines, we turn "outsourced care" into "quality care."
                  </p>
                </div>
                <p className="text-lg font-medium text-center italic text-muted-foreground">
                  What's your biggest childcare challenge today? Whether it's managing your nanny or finding the right daycare, let's talk about it in the comments.
                </p>
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
                    <span>MoSPI Time Use Survey (2024) – On the gender gap in caregiving.</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Maternity Benefit (Amendment) Act – On the rise of office-mandated crèches.</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Research on the Indian Childcare Market (2024-2030) – Predicting the shift to professionalized care.</span>
                  </li>
                </ul>
              </section>
            </article>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ArticleDetailPage;

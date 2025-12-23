import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleImage from "@/assets/article-urban-parenting-paradox.png";

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

            <Badge variant="secondary" className="gap-1 mb-4">
              <Sparkles className="h-3 w-3" />
              Powered by AI
            </Badge>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              The Urban Parenting Paradox: How We Raise Children in the Modern Indian City
            </h1>

            <img
              src={articleImage}
              alt="MaPa-Aur-Hum Parenting Journey"
              className="w-full rounded-lg mb-8 shadow-lg"
            />

            <article className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-lg text-muted-foreground mb-6">
                Raising a child under 5 in a city like Mumbai, Bangalore, or Delhi often feels like running a marathon while balancing a tray of eggs. The "village" that our parents had—grandparents, aunts, and neighbors just a door away—has largely been replaced by Google searches, nanny interviews, and CCTV apps.
              </p>

              <p className="mb-6">
                If you've ever felt the "working-parent guilt" or the stress of managing a nanny from your office desk, you aren't alone. Here is what the research says about how we are actually managing today.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. The "Support System" is Changing</h2>
              <p className="mb-4">
                Gone are the days when childcare was solely the family's responsibility. Today, urban parents rely on a Hybrid Model:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>The Trust Layer:</strong> Grandparents are still the #1 choice. Many families now practice "rotational visits," where sets of grandparents stay for 3–6 months to oversee the house.</li>
                <li><strong>The Executive Layer:</strong> The "Didi" or nanny. In India, we don't just delegate childcare; we delegate the logistics (cooking, cleaning, feeding).</li>
                <li><strong>The Professional Layer:</strong> Premium daycares are booming. With the Maternity Act now mandating office crèches, the shift toward professional, structured care is growing by 15% annually.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. How Much Are We Actually Outsourcing?</h2>
              <p className="mb-4">
                Research on urban Indian households shows an interesting split. While parents (especially mothers) still hold onto "Emotional & Health Management," they delegate a massive chunk of the physical labor:
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left">Task</th>
                      <th className="border border-border p-3 text-left">Who usually does it?</th>
                      <th className="border border-border p-3 text-left">Delegation %</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">Feeding & Bathing</td>
                      <td className="border border-border p-3">Nanny / Daycare</td>
                      <td className="border border-border p-3">70%</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Health & Vaccinations</td>
                      <td className="border border-border p-3">Parents</td>
                      <td className="border border-border p-3">10%</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Early Learning/Play</td>
                      <td className="border border-border p-3">Mixed (Apps/Nannies)</td>
                      <td className="border border-border p-3">40%</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Safety Monitoring</td>
                      <td className="border border-border p-3">Technology (CCTV)</td>
                      <td className="border border-border p-3">90%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. The Tech-Village: Our New Best Friend</h2>
              <p className="mb-4">
                Since we can't be there physically, urban Indian parents are the world's fastest adopters of "Parent-Tech."
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>CCTV is the new "Neighbor":</strong> High-speed Wi-Fi cameras are now a standard part of a baby's nursery. However videos are difficult to scan for any issues and can only be used for adhoc monitoring.</li>
                <li><strong>Development Apps:</strong> Parents are moving away from "just keeping the child busy" to tracking milestones via AI-driven platforms.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Communication Gaps</h2>
              <p className="mb-6">
                This is the biggest pain point. Most nannies in India struggle with care personalised to family needs and regular updates. This is why tools that standardize care—like visual schedules or easy tracking—are becoming essential for peace of mind.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">The Real Problems</h2>
              <p className="mb-4">Despite the help, the road isn't smooth. Urban parents face three major hurdles:</p>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li><strong>The Trust Deficit:</strong> "Did they actually give the medicine?" "Did the baby nap for an hour or three?"</li>
                <li><strong>The "Double Burden":</strong> According to the 2024 Time Use Survey, Indian women still do 5x more unpaid care work than men, even when working full-time.</li>
                <li><strong>The Cost of Quality:</strong> Finding a caregiver who understands nutrition and stimulation (not just screen time) is the hardest search a parent will ever undertake.</li>
              </ol>

              <h2 className="text-2xl font-bold mt-8 mb-4">The MaPa-Aur-Hum Perspective</h2>
              <p className="mb-6">
                At MaPa-Aur-Hum, we believe that "Hum" (the support system) needs better tools. You shouldn't have to choose between a flourishing career and a flourishing child. By empowering caregivers with better communication and standardizing daily routines, we turn "outsourced care" into "quality care."
              </p>

              <p className="mb-6 text-lg font-medium">
                What's your biggest childcare challenge today? Whether it's managing your nanny or finding the right daycare, let's talk about it in the comments.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">References & Further Reading</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>MoSPI Time Use Survey (2024) – On the gender gap in caregiving.</li>
                <li>Maternity Benefit (Amendment) Act – On the rise of office-mandated crèches.</li>
                <li>Research on the Indian Childcare Market (2024-2030) – Predicting the shift to professionalized care.</li>
              </ul>
            </article>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ArticleDetailPage;

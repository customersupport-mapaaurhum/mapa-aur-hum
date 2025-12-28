import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";
import articleImage1 from "@/assets/article-urban-parenting-paradox.png";
import articleImage2 from "@/assets/article-weekly-reports.png";
import articleImage3 from "@/assets/article-gratitude-parenting.png";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  month: string;
  year: number;
  slug: string;
}

const articles: Article[] = [
  {
    id: "3",
    title: "The Foundation of Modern Parenting: Why Gratitude is the Ultimate Reset",
    excerpt: "In the rush of urban parenting, we often focus on 'fixing' behaviors. However, recent research suggests that the most powerful parenting tool isn't a new rule—it's gratitude.",
    image: articleImage3,
    month: "January",
    year: 2025,
    slug: "gratitude-modern-parenting"
  },
  {
    id: "2",
    title: "Tech & Trust: Solving the Urban Childcare Puzzle",
    excerpt: "How do you know your toddler is thriving when you're in a boardroom? The biggest problem urban Indian parents face isn't just 'finding help'—it's quality control.",
    image: articleImage2,
    month: "December",
    year: 2024,
    slug: "tech-trust-childcare"
  },
  {
    id: "1",
    title: "The Modern Village: How Urban India is Redefining Childcare",
    excerpt: "In cities like Bangalore and Mumbai, the traditional joint family is evolving. With nuclear families becoming the norm, childcare for children under 5 has moved to a Hybrid Model.",
    image: articleImage1,
    month: "December",
    year: 2024,
    slug: "modern-village-childcare"
  }
];

// Group articles by month and year
const groupedArticles = articles.reduce((acc, article) => {
  const key = `${article.month} ${article.year}`;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(article);
  return acc;
}, {} as Record<string, Article[]>);

// Sort months in reverse chronological order
const sortedMonths = Object.keys(groupedArticles).sort((a, b) => {
  const [monthA, yearA] = a.split(' ');
  const [monthB, yearB] = b.split(' ');
  const monthOrder = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  if (yearA !== yearB) return parseInt(yearB) - parseInt(yearA);
  return monthOrder.indexOf(monthB) - monthOrder.indexOf(monthA);
});

const ArticlesPage = () => {
  return (
    <>
      <Helmet>
        <title>Thoughts from the Founder - MaPa-Aur-Hum</title>
        <meta name="description" content="Read AI-powered articles on parenting, childcare, and building trust with caregivers. Insights for working parents in India." />
        <link rel="canonical" href="https://mapa-aur-hum.lovable.app/articles" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Thoughts from the Founder</h1>
              <p className="text-muted-foreground text-lg mb-4">
                Insights on childcare, parenting, and building trust with caregivers
              </p>
              <Badge variant="secondary" className="gap-1">
                <Sparkles className="h-3 w-3" />
                Powered by AI
              </Badge>
            </div>

            <div className="grid gap-6">
              {articles.map((article) => (
                <Link key={article.id} to={`/articles/${article.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden">
                          <OptimizedImage
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            width={400}
                            height={300}
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                        <div className="p-6 md:w-2/3 flex flex-col justify-center">
                          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground line-clamp-3">
                            {article.excerpt}
                          </p>
                          <span className="text-primary font-medium mt-4 inline-block">
                            Read more →
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ArticlesPage;

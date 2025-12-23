import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import articleImage from "@/assets/article-urban-parenting-paradox.png";

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
    id: "1",
    title: "The Urban Parenting Paradox: How We Raise Children in the Modern Indian City",
    excerpt: "Raising a child under 5 in a city like Mumbai, Bangalore, or Delhi often feels like running a marathon while balancing a tray of eggs. The 'village' that our parents had has largely been replaced by Google searches, nanny interviews, and CCTV apps.",
    image: articleImage,
    month: "December",
    year: 2024,
    slug: "urban-parenting-paradox"
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
        <title>Articles - MaPa-Aur-Hum | Parenting Insights & Tips</title>
        <meta name="description" content="Read AI-powered articles on parenting, childcare, and building trust with caregivers. Expert insights for working parents in India." />
        <link rel="canonical" href="https://www.mapa-aur-hum.lovable.app/articles" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Parenting Articles & Insights
              </h1>
              <p className="text-muted-foreground text-lg mb-4">
                Insights on childcare, parenting, and building trust with caregivers
              </p>
              <Badge variant="secondary" className="gap-1">
                <Sparkles className="h-3 w-3" />
                Powered by AI
              </Badge>
            </div>

            {sortedMonths.map((monthYear) => (
              <div key={monthYear} className="mb-12">
                <h2 className="text-xl font-semibold mb-6 text-primary border-b border-border pb-2">
                  {monthYear}
                </h2>
                <div className="grid gap-6">
                  {groupedArticles[monthYear].map((article) => (
                    <Link key={article.id} to={`/articles/${article.slug}`}>
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                        <CardContent className="p-0">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden">
                              <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ArticlesPage;

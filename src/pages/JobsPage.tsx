import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JobCard } from "@/components/JobCard";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";

interface Job {
  id: string;
  job_number: number;
  job_name: string;
  description: string;
  employment_type: string;
  is_intern: boolean;
  experience_required: string;
  minimum_qualification: string;
  city: string;
  is_remote: boolean;
  status: string;
}

const JobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .ilike("status", "open")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setJobs(data || []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      toast({
        title: "Error",
        description: "Failed to load job listings",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Careers at MaPa-Aur-Hum | Join Our Childcare Technology Team</title>
        <meta name="description" content="Explore career opportunities at MaPa-Aur-Hum. Join our team building innovative childcare solutions for Indian families. View open positions." />
        <meta name="keywords" content="MaPa-Aur-Hum careers, childcare tech jobs, startup jobs India, product development, software engineering" />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-primary/5 to-white">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-12 mt-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Join Our Team
            </h1>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No open positions at the moment. Check back soon!
              </p>
            </div>
          ) : (
            <div className="space-y-6 max-w-4xl mx-auto">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default JobsPage;

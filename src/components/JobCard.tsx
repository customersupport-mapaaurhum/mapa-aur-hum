import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Briefcase, GraduationCap, Clock } from "lucide-react";
import { JobApplicationDialog } from "./JobApplicationDialog";
import { useState } from "react";

interface JobCardProps {
  job: {
    id: string;
    job_name: string;
    description: string;
    employment_type: string;
    is_intern: boolean;
    experience_required: string;
    minimum_qualification: string;
    city: string;
    is_remote: boolean;
    status: string;
  };
}

export const JobCard = ({ job }: JobCardProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="text-2xl">{job.job_name}</CardTitle>
            <div className="flex flex-wrap gap-2">
              <Badge variant={job.employment_type === "Full-time" ? "default" : "secondary"}>
                {job.employment_type}
              </Badge>
              {job.is_intern && <Badge variant="outline">Internship</Badge>}
              {job.is_remote && <Badge variant="outline">Remote</Badge>}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Job Description</h3>
            <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
              {job.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </h4>
              <p className="text-muted-foreground pl-6">{job.city}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Experience Required
              </h4>
              <p className="text-muted-foreground pl-6">{job.experience_required}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Minimum Qualification
              </h4>
              <p className="text-muted-foreground pl-6">{job.minimum_qualification}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Work Mode
              </h4>
              <p className="text-muted-foreground pl-6">{job.is_remote ? "Remote" : "On-site"}</p>
            </div>
          </div>

          <div className="pt-2">
            <Button 
              onClick={() => setDialogOpen(true)}
              className="w-full md:w-auto"
            >
              Apply Now
            </Button>
          </div>
        </CardContent>
      </Card>

      <JobApplicationDialog 
        jobId={job.id}
        jobName={job.job_name}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
};

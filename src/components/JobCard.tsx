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
            <div className="flex-1">
              <CardTitle className="text-2xl mb-2">{job.job_name}</CardTitle>
              <CardDescription className="text-base whitespace-pre-line">
                {job.description}
              </CardDescription>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant={job.employment_type === "Full-time" ? "default" : "secondary"}>
                {job.employment_type}
              </Badge>
              {job.is_intern && <Badge variant="outline">Internship</Badge>}
              {job.is_remote && <Badge variant="outline">Remote</Badge>}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{job.city}</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Experience: {job.experience_required}</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <GraduationCap className="h-4 w-4" />
              <span>{job.minimum_qualification}</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Briefcase className="h-4 w-4" />
              <span>{job.is_remote ? "Remote" : "On-site"}</span>
            </div>
          </div>

          <div className="pt-4">
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

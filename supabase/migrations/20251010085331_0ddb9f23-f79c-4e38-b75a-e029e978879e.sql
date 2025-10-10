-- Add status column to job_applications table
ALTER TABLE public.job_applications 
ADD COLUMN status text NOT NULL DEFAULT 'pending';

-- Create validation trigger for status values
CREATE OR REPLACE FUNCTION public.validate_job_application_status()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path TO 'public'
AS $$
BEGIN
  IF NEW.status NOT IN ('pending', 'approved', 'rejected') THEN
    RAISE EXCEPTION 'Invalid status value. Must be pending, approved, or rejected';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER validate_job_application_status_trigger
BEFORE INSERT OR UPDATE ON public.job_applications
FOR EACH ROW
EXECUTE FUNCTION public.validate_job_application_status();

-- Add RLS policy to allow admins to update job applications
CREATE POLICY "Admins can update job applications"
ON public.job_applications
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
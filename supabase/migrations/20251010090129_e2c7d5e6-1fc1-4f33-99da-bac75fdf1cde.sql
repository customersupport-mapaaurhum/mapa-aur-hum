-- Add job_number column to jobs table
ALTER TABLE public.jobs 
ADD COLUMN job_number SERIAL;

-- Create a unique index on job_number
CREATE UNIQUE INDEX jobs_job_number_idx ON public.jobs(job_number);

-- Update existing rows with sequential numbers
UPDATE public.jobs 
SET job_number = nextval(pg_get_serial_sequence('public.jobs', 'job_number'));
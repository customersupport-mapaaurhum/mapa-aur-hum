-- Make jobs visibility case-insensitive and normalize data
-- 1) Drop existing SELECT policy and recreate with LOWER(status) check
DROP POLICY IF EXISTS "Anyone can view open jobs" ON public.jobs;

CREATE POLICY "Anyone can view open jobs"
ON public.jobs
FOR SELECT
USING (lower(status) = 'open');

-- 2) Backfill existing data to lowercase for consistency
UPDATE public.jobs SET status = lower(status) WHERE status IS NOT NULL;

-- 3) Add trigger to normalize status to lowercase on insert/update
CREATE OR REPLACE FUNCTION public.normalize_jobs_status()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.status IS NOT NULL THEN
    NEW.status := lower(NEW.status);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

DROP TRIGGER IF EXISTS trg_normalize_jobs_status ON public.jobs;
CREATE TRIGGER trg_normalize_jobs_status
BEFORE INSERT OR UPDATE ON public.jobs
FOR EACH ROW
EXECUTE FUNCTION public.normalize_jobs_status();

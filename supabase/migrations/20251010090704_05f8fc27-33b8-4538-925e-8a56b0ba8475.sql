-- Drop storage policies first (they depend on has_role function)
DROP POLICY IF EXISTS "Admins can read all resumes" ON storage.objects;
DROP POLICY IF EXISTS "Admins can download all resumes" ON storage.objects;
DROP POLICY IF EXISTS "Admins can download resumes" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can upload resumes" ON storage.objects;

-- Drop RLS policies on application tables
DROP POLICY IF EXISTS "Admins can view all job applications" ON public.job_applications;
DROP POLICY IF EXISTS "Anyone can submit job applications" ON public.job_applications;
DROP POLICY IF EXISTS "Admins can update job applications" ON public.job_applications;
DROP POLICY IF EXISTS "Admins can manage all roles" ON public.user_roles;
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;

-- Drop triggers
DROP TRIGGER IF EXISTS validate_job_application_status_trigger ON public.job_applications;
DROP TRIGGER IF EXISTS update_job_applications_updated_at ON public.job_applications;

-- Drop functions
DROP FUNCTION IF EXISTS public.validate_job_application_status();
DROP FUNCTION IF EXISTS public.has_role(uuid, app_role) CASCADE;

-- Drop tables
DROP TABLE IF EXISTS public.job_applications CASCADE;
DROP TABLE IF EXISTS public.user_roles CASCADE;

-- Drop enum type
DROP TYPE IF EXISTS public.app_role CASCADE;

-- Delete all files in the resumes bucket first
DELETE FROM storage.objects WHERE bucket_id = 'resumes';

-- Then delete the bucket
DELETE FROM storage.buckets WHERE id = 'resumes';
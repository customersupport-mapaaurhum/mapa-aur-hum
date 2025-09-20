-- Remove the overly permissive policy that allows any authenticated user to view all registrations
DROP POLICY IF EXISTS "Only authenticated users can view registrations" ON public.registrations;

-- Registration data should only be accessible to administrators via Supabase dashboard
-- or through dedicated admin interfaces, not through the client application
-- The INSERT policy remains to allow public registration submissions
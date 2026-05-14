
DROP TABLE IF EXISTS public.premium_requests CASCADE;
DROP TABLE IF EXISTS public.premium_users CASCADE;
DROP TABLE IF EXISTS public.article_comments CASCADE;
DROP TABLE IF EXISTS public.registrations CASCADE;
DROP TABLE IF EXISTS public.user_roles CASCADE;

DROP FUNCTION IF EXISTS public.has_role(uuid, app_role) CASCADE;
DROP TYPE IF EXISTS public.app_role CASCADE;

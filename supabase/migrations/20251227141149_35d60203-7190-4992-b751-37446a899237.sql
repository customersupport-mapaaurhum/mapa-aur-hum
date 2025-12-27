-- Add location and role columns to premium_requests table
ALTER TABLE public.premium_requests
ADD COLUMN location text,
ADD COLUMN role text;
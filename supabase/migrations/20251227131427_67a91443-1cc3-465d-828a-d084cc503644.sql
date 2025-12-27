-- Create premium_requests table for tracking payment submissions
CREATE TABLE public.premium_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  utr TEXT NOT NULL,
  screenshot_url TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create premium_users table for tracking premium subscriptions
CREATE TABLE public.premium_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  is_premium BOOLEAN NOT NULL DEFAULT false,
  premium_expiry DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on both tables
ALTER TABLE public.premium_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.premium_users ENABLE ROW LEVEL SECURITY;

-- Anyone can submit premium requests (INSERT)
CREATE POLICY "Anyone can submit premium requests"
ON public.premium_requests
FOR INSERT
WITH CHECK (true);

-- Only admins can view all premium requests
CREATE POLICY "Admins can view premium requests"
ON public.premium_requests
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can update premium requests (approve/reject)
CREATE POLICY "Admins can update premium requests"
ON public.premium_requests
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete premium requests
CREATE POLICY "Admins can delete premium requests"
ON public.premium_requests
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can manage premium_users table
CREATE POLICY "Admins can view premium users"
ON public.premium_users
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert premium users"
ON public.premium_users
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update premium users"
ON public.premium_users
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete premium users"
ON public.premium_users
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for updating updated_at column
CREATE TRIGGER update_premium_requests_updated_at
BEFORE UPDATE ON public.premium_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_premium_users_updated_at
BEFORE UPDATE ON public.premium_users
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for payment screenshots
INSERT INTO storage.buckets (id, name, public)
VALUES ('payment-screenshots', 'payment-screenshots', false)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for payment screenshots
CREATE POLICY "Anyone can upload payment screenshots"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'payment-screenshots');

CREATE POLICY "Admins can view payment screenshots"
ON storage.objects
FOR SELECT
USING (bucket_id = 'payment-screenshots' AND has_role(auth.uid(), 'admin'::app_role));
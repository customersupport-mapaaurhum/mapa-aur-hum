-- Create poll_responses table to store voting data
CREATE TABLE IF NOT EXISTS public.poll_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vote_option TEXT NOT NULL CHECK (vote_option IN ('yes', 'no')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.poll_responses ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert poll responses
CREATE POLICY "Anyone can submit poll responses"
ON public.poll_responses
FOR INSERT
TO public
WITH CHECK (true);

-- Only admins can view poll responses
CREATE POLICY "Only admins can view poll responses"
ON public.poll_responses
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_poll_responses_created_at ON public.poll_responses(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_poll_responses_vote_option ON public.poll_responses(vote_option);
-- Create poll_responses table
CREATE TABLE public.poll_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  selected_option TEXT NOT NULL,
  user_email TEXT,
  user_name TEXT
);

-- Enable Row Level Security
ALTER TABLE public.poll_responses ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert poll responses
CREATE POLICY "Anyone can submit poll responses"
ON public.poll_responses
FOR INSERT
WITH CHECK (true);

-- Create policy to allow reading poll responses (for analytics)
CREATE POLICY "Anyone can view poll responses"
ON public.poll_responses
FOR SELECT
USING (true);
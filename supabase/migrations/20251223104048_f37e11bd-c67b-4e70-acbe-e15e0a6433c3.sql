-- Create a table for article comments
CREATE TABLE public.article_comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  article_slug TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  comment TEXT NOT NULL,
  is_approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.article_comments ENABLE ROW LEVEL SECURITY;

-- Anyone can submit comments
CREATE POLICY "Anyone can submit comments"
ON public.article_comments
FOR INSERT
WITH CHECK (true);

-- Anyone can view approved comments
CREATE POLICY "Anyone can view approved comments"
ON public.article_comments
FOR SELECT
USING (is_approved = true);

-- Only admins can view all comments (for review)
CREATE POLICY "Admins can view all comments"
ON public.article_comments
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can update comments (to approve them)
CREATE POLICY "Admins can update comments"
ON public.article_comments
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete comments
CREATE POLICY "Admins can delete comments"
ON public.article_comments
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_article_comments_updated_at
BEFORE UPDATE ON public.article_comments
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
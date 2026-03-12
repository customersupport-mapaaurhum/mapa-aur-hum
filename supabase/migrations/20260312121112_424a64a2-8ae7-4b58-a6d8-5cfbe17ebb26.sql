
CREATE TABLE public.newsletter_unsubscribes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  unsubscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.newsletter_unsubscribes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can unsubscribe" ON public.newsletter_unsubscribes
  FOR INSERT TO public WITH CHECK (true);

CREATE POLICY "Only admins can view unsubscribes" ON public.newsletter_unsubscribes
  FOR SELECT TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

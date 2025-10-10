-- Create storage policies for admin access to resumes
CREATE POLICY "Admins can view all resumes"
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'resumes' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can download all resumes"
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'resumes' 
  AND has_role(auth.uid(), 'admin'::app_role)
);
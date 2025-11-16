-- Allow anyone to view poll responses so they can see the results
DROP POLICY IF EXISTS "Only admins can view poll responses" ON poll_responses;

CREATE POLICY "Anyone can view poll responses"
ON poll_responses
FOR SELECT
USING (true);
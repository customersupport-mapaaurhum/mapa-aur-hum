-- Add new column for caregiver feedback and update existing data
ALTER TABLE public.registrations 
ADD COLUMN has_existing_caregiver BOOLEAN;

-- Update the age_of_child column to be more descriptive
COMMENT ON COLUMN public.registrations.age_of_child IS 'Deprecated - use has_existing_caregiver instead';

-- Remove the age_of_child column since it's not actually used for age
ALTER TABLE public.registrations 
DROP COLUMN age_of_child;

-- Add comment to the new column
COMMENT ON COLUMN public.registrations.has_existing_caregiver IS 'Whether the family has an existing caregiver and is willing to provide feedback for the technology platform';
-- Add admin role for customer.support@mapaaurhum.com
-- User ID: 23202d6e-7930-4831-9055-671fcac6eff3
INSERT INTO public.user_roles (user_id, role)
VALUES ('23202d6e-7930-4831-9055-671fcac6eff3', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;
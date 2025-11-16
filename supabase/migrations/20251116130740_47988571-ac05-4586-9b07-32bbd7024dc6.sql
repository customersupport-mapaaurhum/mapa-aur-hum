-- Rename vote_option column to selected_option to match TypeScript types
ALTER TABLE poll_responses RENAME COLUMN vote_option TO selected_option;
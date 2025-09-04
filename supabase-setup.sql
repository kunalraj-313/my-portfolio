-- Simple view counter setup for Supabase

-- 1. Create a simple views counter table
CREATE TABLE IF NOT EXISTS views (
  id BIGSERIAL PRIMARY KEY,
  count BIGINT DEFAULT 1,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Insert initial record if table is empty
INSERT INTO views (count) 
SELECT 1 
WHERE NOT EXISTS (SELECT 1 FROM views);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE views ENABLE ROW LEVEL SECURITY;

-- 4. Create policies to allow reading and updating
CREATE POLICY "Allow reading views" ON views
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow updating views" ON views
  FOR UPDATE
  TO anon, authenticated
  USING (true);

-- 5. Create function to increment view count
CREATE OR REPLACE FUNCTION increment_view_count()
RETURNS BIGINT AS $$
DECLARE
  current_count BIGINT;
BEGIN
  UPDATE views 
  SET count = count + 1, updated_at = NOW()
  WHERE id = 1
  RETURNING count INTO current_count;
  
  RETURN current_count;
END;
$$ LANGUAGE plpgsql;

-- 6. Create function to get current view count
CREATE OR REPLACE FUNCTION get_view_count()
RETURNS BIGINT AS $$
DECLARE
  current_count BIGINT;
BEGIN
  SELECT count INTO current_count FROM views WHERE id = 1;
  RETURN COALESCE(current_count, 0);
END;
$$ LANGUAGE plpgsql;

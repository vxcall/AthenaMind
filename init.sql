-- AthenaMind Database Initialization Script
-- This script runs when the PostgreSQL container starts for the first time

-- Create extension for UUID generation (optional)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Example: Create a users table (modify as needed for your application)
-- CREATE TABLE IF NOT EXISTS users (
--     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
--     email VARCHAR(255) UNIQUE NOT NULL,
--     name VARCHAR(255) NOT NULL,
--     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
--     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
-- );

-- Example: Create an index on email for faster lookups
-- CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Add your own table definitions and initial data here
-- This file is optional and can be removed if not needed
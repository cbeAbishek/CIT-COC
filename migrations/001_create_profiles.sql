-- Migration: 001_create_profiles.sql
-- Creates the profiles table used by the app. Run this with the Supabase CLI or psql in your CI/deploy pipeline.

CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY,
  email text UNIQUE,
  full_name text,
  created_at timestamptz DEFAULT now()
);

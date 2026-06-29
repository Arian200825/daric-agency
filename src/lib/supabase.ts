import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Supabase client factory (server-side use).
 * Returns null when env vars are absent so the app builds and runs without
 * credentials — the contact API responds with a clear "not configured" error
 * instead of crashing. Paste keys into .env.local to activate.
 */
export function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) return null;

  return createClient(url, anonKey, {
    auth: { persistSession: false },
  });
}

export const isSupabaseConfigured = () =>
  Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

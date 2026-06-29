-- Cobalt — lead capture schema
-- Run this in Supabase → SQL Editor (one time).

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  email       text not null,
  company     text,
  budget      text,
  plan        text,
  message     text not null
);

-- Row Level Security: allow anonymous INSERT (the public contact form),
-- but NOT select/update/delete. Read your leads from the Supabase dashboard
-- or with the service-role key on a trusted server.
alter table public.leads enable row level security;

drop policy if exists "anon can submit leads" on public.leads;
create policy "anon can submit leads"
  on public.leads
  for insert
  to anon
  with check (true);

-- Helpful index for sorting newest-first in the dashboard.
create index if not exists leads_created_at_idx
  on public.leads (created_at desc);

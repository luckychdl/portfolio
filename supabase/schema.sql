-- ------------------------------------------------------------------
-- 방문자 집계 테이블
-- Supabase 대시보드 → SQL Editor 에 통째로 붙여넣고 실행하세요.
-- ------------------------------------------------------------------

create table if not exists public.page_views (
  id          bigint generated always as identity primary key,
  path        text        not null,
  visitor_id  text        not null,
  referrer    text,
  device      text,
  visited_at  timestamptz not null default now()
);

create index if not exists page_views_visited_at_idx on public.page_views (visited_at desc);
create index if not exists page_views_path_idx       on public.page_views (path);
create index if not exists page_views_visitor_idx    on public.page_views (visitor_id);

-- RLS 를 켜두고 정책은 만들지 않는다.
-- anon / authenticated 키로는 한 줄도 읽거나 쓸 수 없고,
-- 서버에서만 쓰는 service_role 키만 RLS 를 우회한다.
alter table public.page_views enable row level security;

-- 누적 순 방문자 수 (전체 행을 클라이언트로 내리지 않기 위한 집계 함수)
create or replace function public.total_unique_visitors()
returns bigint
language sql
stable
security definer
set search_path = public
as $$
  select count(distinct visitor_id) from public.page_views;
$$;

revoke all on function public.total_unique_visitors() from anon, authenticated;

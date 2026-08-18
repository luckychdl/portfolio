import {
  BlockLine,
  CodeSurface,
  InlineComment,
  Line,
  Num,
  Prop,
  Punc,
} from "@/app/_components/editorSurface";
import type { Bucket, Ranked, VisitStats } from "@/app/_lib/visitStats";

/** `"key": 12,` 한 줄 */
function Entry({
  name,
  value,
  suffix,
  indent = 1,
}: {
  name: string;
  value: number | string;
  suffix?: string;
  indent?: 0 | 1 | 2 | 3;
}) {
  return (
    <Line indent={indent}>
      <span className="inline-flex flex-wrap items-baseline gap-x-2">
        <Prop>&quot;{name}&quot;:</Prop>
        {typeof value === "number" ? (
          <Num>{value.toLocaleString("ko-KR")}</Num>
        ) : (
          <span className="tok-str">&quot;{value}&quot;</span>
        )}
        <Punc>,</Punc>
        {suffix && <InlineComment>{suffix}</InlineComment>}
      </span>
    </Line>
  );
}

/** `"today": { "views": 12, "visitors": 8 },` */
function BucketLine({ name, bucket }: { name: string; bucket: Bucket }) {
  return (
    <Line indent={1}>
      <span className="inline-flex flex-wrap items-baseline gap-x-2">
        <Prop>&quot;{name}&quot;:</Prop>
        <Punc>{"{"}</Punc>
        <Prop>&quot;views&quot;:</Prop>
        <Num>{bucket.views.toLocaleString("ko-KR")}</Num>
        <Punc>,</Punc>
        <Prop>&quot;visitors&quot;:</Prop>
        <Num>{bucket.visitors.toLocaleString("ko-KR")}</Num>
        <Punc>{"},"}</Punc>
      </span>
    </Line>
  );
}

/** 순위 목록 — 값 옆에 비율 막대를 같이 그린다. */
function RankedList({
  name,
  items,
  empty,
}: {
  name: string;
  items: Ranked[];
  empty: string;
}) {
  const max = Math.max(1, ...items.map((item) => item.views));

  return (
    <>
      <Line indent={1}>
        <span className="inline-flex items-baseline gap-x-2">
          <Prop>&quot;{name}&quot;:</Prop>
          <Punc>{"["}</Punc>
        </span>
      </Line>

      {items.length === 0 && (
        <Line indent={2}>
          <InlineComment>{empty}</InlineComment>
        </Line>
      )}

      {items.map((item) => (
        <BlockLine key={item.key} indent={2}>
          <div className="flex items-center gap-3">
            <span className="tok-str min-w-0 flex-1 truncate">
              &quot;{item.key}&quot;
            </span>
            <span className="h-1.5 w-24 shrink-0 overflow-hidden rounded-full bg-surface-2 sm:w-40">
              <span
                className="block h-full rounded-full bg-accent"
                style={{ width: `${Math.round((item.views / max) * 100)}%` }}
              />
            </span>
            <span className="tok-num w-12 shrink-0 text-right tabular-nums">
              {item.views.toLocaleString("ko-KR")}
            </span>
          </div>
        </BlockLine>
      ))}

      <Line indent={1}>
        <Punc>{"],"}</Punc>
      </Line>
    </>
  );
}

export default function StatsView({ stats }: { stats: VisitStats }) {
  const maxDaily = Math.max(1, ...stats.daily.map((day) => day.views));

  return (
    <CodeSurface className="max-w-4xl pb-20">
      <Line>
        <InlineComment>
          방문자 통계 — 하루 경계는 한국 시간(KST) 기준
        </InlineComment>
      </Line>
      <Line>
        <Punc>{"{"}</Punc>
      </Line>

      <Entry
        name="totalViews"
        value={stats.totalViews}
        suffix="전체 기간 페이지뷰"
      />
      <Entry
        name="totalVisitors"
        value={stats.totalVisitors}
        suffix="전체 기간 순 방문자"
      />

      <Line />
      <BucketLine name="today" bucket={stats.today} />
      <BucketLine name="last7days" bucket={stats.last7} />
      <BucketLine name="last30days" bucket={stats.last30} />

      <Line />
      <Line indent={1}>
        <span className="inline-flex items-baseline gap-x-2">
          <Prop>&quot;daily&quot;:</Prop>
          <InlineComment>최근 14일 페이지뷰</InlineComment>
        </span>
      </Line>
      <BlockLine indent={1}>
        <div className="flex h-28 items-end gap-1 pr-4 sm:gap-1.5">
          {stats.daily.map((day) => (
            <div
              key={day.date}
              className="group flex h-full min-w-0 flex-1 flex-col justify-end gap-1"
              title={`${day.date} — ${day.views} views / ${day.visitors} visitors`}
            >
              <span className="text-center text-[10px] text-faint tabular-nums opacity-0 transition-opacity group-hover:opacity-100">
                {day.views}
              </span>
              <span
                className="w-full rounded-sm bg-accent/70 transition-colors group-hover:bg-accent"
                style={{
                  height: `${Math.max(2, Math.round((day.views / maxDaily) * 100))}%`,
                }}
              />
            </div>
          ))}
        </div>
        <div className="mt-1.5 flex gap-1 pr-4 sm:gap-1.5">
          {stats.daily.map((day, index) => (
            <span
              key={day.date}
              className="min-w-0 flex-1 text-center text-[10px] text-gutter tabular-nums"
            >
              {index % 2 === 0 ? day.label : ""}
            </span>
          ))}
        </div>
      </BlockLine>

      <Line />
      <RankedList
        name="paths"
        items={stats.paths}
        empty="최근 30일 기록 없음"
      />

      <Line />
      <RankedList
        name="referrers"
        items={stats.referrers}
        empty="유입 경로 기록 없음"
      />

      <Line />
      <Line indent={1}>
        <span className="inline-flex flex-wrap items-baseline gap-x-2">
          <Prop>&quot;devices&quot;:</Prop>
          <Punc>{"{"}</Punc>
          <Prop>&quot;desktop&quot;:</Prop>
          <Num>{stats.devices.desktop.toLocaleString("ko-KR")}</Num>
          <Punc>,</Punc>
          <Prop>&quot;mobile&quot;:</Prop>
          <Num>{stats.devices.mobile.toLocaleString("ko-KR")}</Num>
          <Punc>{"},"}</Punc>
        </span>
      </Line>

      <Line />
      <Line indent={1}>
        <span className="inline-flex items-baseline gap-x-2">
          <Prop>&quot;recent&quot;:</Prop>
          <Punc>{"["}</Punc>
        </span>
      </Line>
      {stats.recent.length === 0 && (
        <Line indent={2}>
          <InlineComment>아직 기록된 방문이 없습니다</InlineComment>
        </Line>
      )}
      {stats.recent.map((visit, index) => (
        <Line key={`${visit.at}-${index}`} indent={2}>
          <span className="inline-flex flex-wrap items-baseline gap-x-2">
            <span className="tok-com w-24 shrink-0 not-italic">{visit.at}</span>
            <span className="tok-str">&quot;{visit.path}&quot;</span>
            <InlineComment>{visit.device}</InlineComment>
          </span>
        </Line>
      ))}
      <Line indent={1}>
        <Punc>{"]"}</Punc>
      </Line>

      <Line>
        <Punc>{"}"}</Punc>
      </Line>

      {stats.truncated && (
        <Line>
          <InlineComment>
            최근 30일 기록이 조회 상한을 넘어 일부만 집계했습니다
          </InlineComment>
        </Line>
      )}
    </CodeSurface>
  );
}

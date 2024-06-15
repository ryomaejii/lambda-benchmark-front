import { RankingTable } from "@/components/ranking-table";
import { ScoreGraph } from "@/components/score-graph";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="space-y-16">
      <Suspense fallback={<div>Now loading...</div>}>
        <ScoreGraph />
      </Suspense>
      <Suspense fallback={<div>Now loading...</div>}>
        <RankingTable />
      </Suspense>
    </div>
  );
}

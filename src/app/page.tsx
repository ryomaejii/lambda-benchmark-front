import { RankingTable } from "@/components/ranking-table";
import { ScoreGraph } from "@/components/score-graph";
import { TeamForm } from "@/components/team-form";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="space-y-16">
      <TeamForm />
      <Suspense fallback={<div>Now loading...</div>}>
        <ScoreGraph />
      </Suspense>
      <Suspense fallback={<div>Now loading...</div>}>
        <RankingTable />
      </Suspense>
    </div>
  );
}

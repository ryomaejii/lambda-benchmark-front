import { BenchmarkForm } from "@/components/benchmark-form";
import { RankingTable } from "@/components/ranking-table";
import { ScoreGraph } from "@/components/score-graph";
import { TeamForm } from "@/components/team-form";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="space-y-16">
      <TeamForm />
      <BenchmarkForm />
      <ScoreGraph />
      <RankingTable />
    </div>
  );
}

import { BenchmarkForm } from "@/components/benchmark-form";
import { RankingTable } from "@/components/ranking-table";
import { ScoreGraph } from "@/components/score-graph";
import { TeamForm } from "@/components/team-form";

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

"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
} from "@/components/ui/table";
import { TableHead } from "@/components/ui/table";
import { TableRow } from "@/components/ui/table";
import { useGetRanking } from "@/utils/hooks/useGetRanking";

export function RankingTable() {
  const ranking = useGetRanking();

  if (!ranking) {
    return <div>Now loading...</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl">Ranking</h2>
      <Table className="text-lg">
        <TableHeader>
          <TableRow>
            <TableHead>Rank</TableHead>
            <TableHead>Team</TableHead>
            <TableHead className="text-right">Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ranking.map((team) => (
            <TableRow key={team.name}>
              <TableCell>{team.rank}</TableCell>
              <TableCell>{team.name}</TableCell>
              <TableCell className="text-right">{team.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

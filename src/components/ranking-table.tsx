"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
} from "@/components/ui/table";
import { TableHead } from "@/components/ui/table";
import { TableRow } from "@/components/ui/table";

export function RankingTable() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl">Team Ranking</h2>
      <Table className="text-lg">
        <TableHeader>
          <TableRow>
            <TableHead>Rank</TableHead>
            <TableHead>Team</TableHead>
            <TableHead className="text-right">Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell className="text-right">100</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Jane Doe</TableCell>
            <TableCell className="text-right">90</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

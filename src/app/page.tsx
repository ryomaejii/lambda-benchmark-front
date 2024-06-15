import { RankingTable } from "@/components/ranking-table";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="">
      <Suspense fallback={<div>Now loading...</div>}>
        <RankingTable />
      </Suspense>
    </div>
  );
}

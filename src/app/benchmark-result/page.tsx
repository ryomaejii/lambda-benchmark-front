import { BenchmarkResult } from "@/components/benchmark-result";
import { Suspense } from "react";

export default function BenchmarkResultPage() {
  return (
    <Suspense fallback={<div>Now Loading...</div>}>
      <BenchmarkResult />
    </Suspense>
  );
}

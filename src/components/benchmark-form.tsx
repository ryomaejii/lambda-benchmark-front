"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function BenchmarkForm() {
  const team = localStorage.getItem("team");
  const [targetUrlInput, setTargetUrlInput] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl">Run Benchmark</h2>
      {team ? (
        <form onSubmit={onSubmit} className="flex gap-x-4">
          <Input
            value={targetUrlInput}
            onChange={(e) => setTargetUrlInput(e.target.value)}
            placeholder="Benchmark Target URL"
            disabled={!team}
          />
          <Button>Run</Button>
        </form>
      ) : (
        <div>Team not set</div>
      )}
    </div>
  );
}

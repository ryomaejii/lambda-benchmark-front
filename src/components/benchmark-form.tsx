"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { runBenchmark } from "@/utils/api/runBenchmark";
import Link from "next/link";
import { useState } from "react";

export function BenchmarkForm() {
  const { toast } = useToast();
  let team = "";
  const [targetUrlInput, setTargetUrlInput] = useState("");
  const [running, setRunning] = useState(false);

  if (typeof window !== "undefined") {
    team = localStorage?.getItem("team") ?? "";
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!team) return;

    setRunning(true);

    try {
      const res = await runBenchmark({
        name: team,
        url: targetUrlInput,
      });
      if (res.pass) {
        toast({
          title: "Benchmark Passed",
          description: `Score: ${res.score}
          Success: ${res.success}
          Fail: ${res.fail}`,
          action: (
            <Button asChild>
              <Link
                href={{
                  pathname: "/benchmark-result",
                  query: {
                    score: res.score,
                    success: res.success,
                    fail: res.fail,
                    messages: res.messages,
                  },
                }}
              >
                Show Detail
              </Link>
            </Button>
          ),
        });
      } else {
        toast({
          title: "Benchmark Failed",
          description: `Score: ${res.score}
          Success: ${res.success}
          Fail: ${res.fail}`,
          variant: "destructive",
          action: (
            <Button asChild>
              <Link
                href={{
                  pathname: "/benchmark-result",
                  query: {
                    score: res.score,
                    success: res.success,
                    fail: res.fail,
                    messages: res.messages,
                  },
                }}
              >
                Show Detail
              </Link>
            </Button>
          ),
        });
      }
    } catch (e) {
      if (e instanceof Error) {
        toast({
          title: "Error Occurred",
          description: e.message,
          variant: "destructive",
        });
      }
    } finally {
      setRunning(false);
    }
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
            disabled={!team || running}
          />
          <Button disabled={running}>{running ? "Running..." : "Run"}</Button>
        </form>
      ) : (
        <div>Team not set</div>
      )}
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function BenchmarkDetail() {
  const searchParams = useSearchParams();
  const score = searchParams.get("score") ?? "";
  const success = searchParams.get("success") ?? "";
  const fail = searchParams.get("fail") ?? "";
  const messages = searchParams.getAll("messages");

  return (
    <div className="space-y-16">
      <h2 className="text-2xl">Benchmark Result</h2>
      <div className="space-y-8">
        <div className="flex justify-between items-start">
          <h3 className="text-lg">Score</h3>
          <p>{score}</p>
        </div>
        <div className="flex justify-between items-start">
          <h3 className="text-lg">Success</h3>
          <p>{success}</p>
        </div>
        <div className="flex justify-between items-start">
          <h3 className="text-lg">Fail</h3>
          <p>{fail}</p>
        </div>
        <div className="flex justify-between items-start">
          <h3 className="text-lg">Messages</h3>
          <ul>
            {messages.map((message, i) => (
              <li key={i}>{message}</li>
            ))}

            {messages.length === 0 && <li>No messages</li>}
          </ul>
        </div>
        <Button asChild>
          <Link href="/">Back To Top</Link>
        </Button>
      </div>
    </div>
  );
}

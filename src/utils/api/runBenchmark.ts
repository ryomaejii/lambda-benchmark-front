type RunBenchmarkRequest = {
  name: string;
  url: string;
};

type RunBenchmarkResponse = {
  pass: boolean;
  score: number;
  success: number;
  fail: number;
  messages: string[];
};

export async function runBenchmark(data: RunBenchmarkRequest) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BENCHMARK_API_URL}/bench`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_ACCESS_TOKEN ?? "",
      },
      body: JSON.stringify(data),
    }
  );

  const json = (await res.json()) as RunBenchmarkResponse;
  return json;
}

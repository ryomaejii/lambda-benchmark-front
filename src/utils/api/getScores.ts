export type GetScoresResponse = {
  name: string;
  scores: {
    score: number;
    timestamp: number;
  }[];
}[];

export async function getScores() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/scores`, {
    headers: {
      "x-api-key": process.env.NEXT_PUBLIC_ACCESS_TOKEN ?? "",
    },
  });

  const json = (await res.json()) as GetScoresResponse;
  return json;
}

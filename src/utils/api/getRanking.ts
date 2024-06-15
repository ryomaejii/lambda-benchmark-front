type GetRankingResponse = {
  name: string;
  score: number;
  rank: number;
}[];

export async function getRanking() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ranking`, {
    headers: {
      "x-api-key": process.env.NEXT_PUBLIC_ACCESS_TOKEN ?? "",
    },
  });

  const json = (await res.json()) as GetRankingResponse;
  return json;
}

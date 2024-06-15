async function getScores() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL ?? "", {
    headers: {
      "x-api-key": process.env.NEXT_PUBLIC_ACCESS_TOKEN ?? "",
    },
  });

  const json = await res.json();
  return json;
}

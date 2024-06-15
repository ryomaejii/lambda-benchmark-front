import { getScores } from "@/utils/api/getScores";
import useSWR from "swr";

export function useGetScores() {
  const { data } = useSWR("/scores", getScores, {
    refreshInterval: 30000, // 30s
    suspense: true,
  });
  return data;
}

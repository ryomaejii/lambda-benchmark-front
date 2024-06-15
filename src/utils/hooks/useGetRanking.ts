import { getRanking } from "@/utils/api/getRanking";
import useSWR from "swr";

export function useGetRanking() {
  const { data } = useSWR("/ranking", getRanking, {
    refreshInterval: 30000, // 30s
    suspense: true,
  });
  return data;
}

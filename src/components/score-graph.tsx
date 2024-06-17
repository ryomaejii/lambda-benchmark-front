"use client";

import { GetScoresResponse } from "@/utils/api/getScores";
import { useGetScores } from "@/utils/hooks/useGetScores";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const processData = (data: GetScoresResponse) => {
  const formattedData: any[] = [];

  // すべてのスコアをタイムスタンプと共に集める
  const allScores: { timestamp: number; [key: string]: number }[] = [];
  data.forEach((user) => {
    user.scores.forEach((score) => {
      allScores.push({ timestamp: score.timestamp, [user.name]: score.score });
    });
  });

  allScores.sort((a, b) => a.timestamp - b.timestamp);

  allScores.forEach((item) => {
    const existingItem = formattedData.find(
      (data) => data.timestamp === item.timestamp
    );
    if (existingItem) {
      Object.assign(existingItem, item);
    } else {
      formattedData.push(item);
    }
  });

  return formattedData;
};

const formatTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
};

const stringToColor = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const h = ((hash % 360) + 360) % 360; // 0-360の範囲に正規化
  const s = 70 + (hash % 30); // 彩度は70-100の範囲に設定
  const l = 50 + (hash % 20); // 明度は50-70の範囲に設定

  return `hsl(${h}, ${s}%, ${l}%)`;
};

export function ScoreGraph() {
  const data = useGetScores();

  if (!data) {
    return <div>Now loading...</div>;
  }

  const chartData = processData(data);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl">Score Graph</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#E0E0E0" />
          <XAxis
            dataKey="timestamp"
            stroke="#000000"
            tickFormatter={(timestamp) => formatTime(timestamp)}
          />
          <YAxis stroke="#000000" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #000000",
            }}
          />
          <Legend />
          {data.map((user, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={user.name}
              stroke={stringToColor(user.name)}
              connectNulls
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

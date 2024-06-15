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

  data.forEach((user) => {
    user.scores.forEach((score, index) => {
      if (!formattedData[index]) {
        formattedData[index] = { timestamp: formatDate(score.timestamp) };
      }
      formattedData[index][user.name] = score.score;
    });
  });

  return formattedData;
};

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export function ScoreGraph() {
  const data = useGetScores();
  const chartData = processData(data);
  const colors = data.map(() => getRandomColor());

  return (
    <div className="space-y-4">
      <h2 className="text-2xl">Team Ranking</h2>
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
          <XAxis dataKey="timestamp" stroke="#000000" />
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
              stroke={colors[index]}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

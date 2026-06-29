import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function NutritionChart() {
  const data = [
    { day: "Mon", calories: 1820 },
    { day: "Tue", calories: 2100 },
    { day: "Wed", calories: 1950 },
    { day: "Thu", calories: 2250 },
    { day: "Fri", calories: 2050 },
    { day: "Sat", calories: 2400 },
    { day: "Sun", calories: 1980 },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-foreground">
          Weekly Nutrition
        </h2>

        <p className="text-muted-foreground">
          Calories consumed during the last 7 days
        </p>

      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#30345A"
            />

            <XAxis
              dataKey="day"
              stroke="#94A3B8"
            />

            <YAxis
              stroke="#94A3B8"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="calories"
              stroke="#6366F1"
              strokeWidth={4}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}
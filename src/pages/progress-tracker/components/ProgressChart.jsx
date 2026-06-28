import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const ProgressChart = ({
  data,
  type = "line",
  title,
  color = "#4F46E5",
}) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-poppins font-medium text-foreground mb-1">
            {label}
          </p>

          {payload.map((entry, index) => (
            <p
              key={index}
              className="text-sm"
              style={{ color: entry.color }}
            >
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="morphic-card bg-card p-6 border border-border">
      <h3 className="font-poppins font-semibold text-lg text-foreground mb-6">
        {title}
      </h3>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {type === "line" ? (
            <LineChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#374151"
              />

              <XAxis
                dataKey="date"
                stroke="#94A3B8"
                fontSize={12}
              />

              <YAxis
                stroke="#94A3B8"
                fontSize={12}
              />

              <Tooltip content={<CustomTooltip />} />

              <Line
                type="monotone"
                dataKey="value"
                stroke={color}
                strokeWidth={3}
                dot={{
                  fill: color,
                  strokeWidth: 2,
                  r: 4,
                }}
                activeDot={{
                  r: 6,
                  stroke: color,
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          ) : (
            <BarChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#374151"
              />

              <XAxis
                dataKey="date"
                stroke="#94A3B8"
                fontSize={12}
              />

              <YAxis
                stroke="#94A3B8"
                fontSize={12}
              />

              <Tooltip content={<CustomTooltip />} />

              <Bar
                dataKey="value"
                fill={color}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProgressChart;
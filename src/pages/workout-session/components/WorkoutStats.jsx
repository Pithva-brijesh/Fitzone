import React from "react";
import Icon from "../../../components/AppIcon";

export default function WorkoutStats({
  timer,
  reps,
  calories,
  heartRate,
}) {
  const stats = [
    {
      title: "Timer",
      value: timer,
      icon: "Timer",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "Reps",
      value: reps,
      icon: "Repeat",
      color: "text-success",
      bg: "bg-success/10",
    },
    {
      title: "Calories",
      value: `${calories} kcal`,
      icon: "Flame",
      color: "text-warning",
      bg: "bg-warning/10",
    },
    {
      title: "Heart Rate",
      value: `${heartRate} BPM`,
      icon: "Heart",
      color: "text-error",
      bg: "bg-destructive/10",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="morphic-card bg-card border border-border rounded-2xl p-6"
        >
          <div
            className={`w-14 h-14 rounded-xl ${stat.bg} flex items-center justify-center mb-4`}
          >
            <Icon
              name={stat.icon}
              size={28}
              className={stat.color}
            />
          </div>

          <p className="text-sm text-muted-foreground">
            {stat.title}
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-2">
            {stat.value}
          </h2>
        </div>
      ))}
    </div>
  );
}
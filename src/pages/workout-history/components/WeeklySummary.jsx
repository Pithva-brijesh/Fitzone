import React from "react";
import Icon from "../../../components/AppIcon";

export default function WeeklySummary() {
  const stats = [
    {
      title: "Workouts",
      value: "6",
      icon: "Dumbbell",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "Duration",
      value: "5h 20m",
      icon: "Clock3",
      color: "text-success",
      bg: "bg-success/10",
    },
    {
      title: "Calories",
      value: "3,480",
      icon: "Flame",
      color: "text-warning",
      bg: "bg-warning/10",
    },
    {
      title: "Exercises",
      value: "42",
      icon: "Activity",
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item) => (

        <div
          key={item.title}
          className="morphic-card bg-card border border-border rounded-2xl p-6 hover:scale-[1.02] transition-all"
        >

          <div className="flex justify-between items-center mb-5">

            <div>

              <p className="text-muted-foreground text-sm">

                {item.title}

              </p>

              <h2 className="text-3xl font-bold text-foreground mt-2">

                {item.value}

              </h2>

            </div>

            <div
              className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center`}
            >

              <Icon
                name={item.icon}
                size={28}
                className={item.color}
              />

            </div>

          </div>

          <div className="h-2 bg-background rounded-full overflow-hidden">

            <div
              className="h-full bg-primary rounded-full"
              style={{
                width: `${70 + Math.random() * 25}%`,
              }}
            />

          </div>

        </div>

      ))}

    </div>
  );
}
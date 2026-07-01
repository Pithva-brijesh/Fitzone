import React from "react";
import Icon from "../../../components/AppIcon";

export default function MonthlyStatistics() {
  const stats = [
    {
      title: "Total Workouts",
      value: "22",
      icon: "Dumbbell",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "Hours Trained",
      value: "28.5",
      icon: "Clock3",
      color: "text-success",
      bg: "bg-success/10",
    },
    {
      title: "Calories Burned",
      value: "14,820",
      icon: "Flame",
      color: "text-warning",
      bg: "bg-warning/10",
    },
    {
      title: "Completion Rate",
      value: "91%",
      icon: "TrendingUp",
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Monthly Statistics
          </h2>

          <p className="text-muted-foreground">
            Your performance this month
          </p>

        </div>

        <Icon
          name="BarChart3"
          size={30}
          className="text-primary"
        />

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((item) => (

          <div
            key={item.title}
            className="bg-background rounded-2xl p-6 text-center"
          >

            <div
              className={`w-14 h-14 mx-auto mb-4 rounded-xl ${item.bg} flex items-center justify-center`}
            >

              <Icon
                name={item.icon}
                size={26}
                className={item.color}
              />

            </div>

            <h3 className="text-3xl font-bold text-foreground">
              {item.value}
            </h3>

            <p className="text-muted-foreground mt-2">
              {item.title}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}
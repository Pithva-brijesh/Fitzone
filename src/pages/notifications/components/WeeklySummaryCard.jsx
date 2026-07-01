import React from "react";
import Icon from "../../../components/AppIcon";

export default function WeeklySummaryCard() {
  const stats = [
    {
      title: "Workouts",
      value: "6",
      icon: "Dumbbell",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "Calories",
      value: "3,480",
      icon: "Flame",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      title: "XP Earned",
      value: "+480",
      icon: "Star",
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
    },
    {
      title: "Water Goal",
      value: "92%",
      icon: "Droplets",
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Weekly Summary
          </h2>

          <p className="text-muted-foreground">
            Your performance over the last 7 days.
          </p>
        </div>

        <Icon
          name="BarChart3"
          size={30}
          className="text-primary"
        />

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((stat) => (

          <div
            key={stat.title}
            className="bg-background rounded-2xl p-6 text-center"
          >

            <div
              className={`w-14 h-14 mx-auto mb-4 rounded-xl ${stat.bg} flex items-center justify-center`}
            >
              <Icon
                name={stat.icon}
                size={26}
                className={stat.color}
              />
            </div>

            <h3 className="text-3xl font-bold text-foreground">
              {stat.value}
            </h3>

            <p className="text-muted-foreground mt-2">
              {stat.title}
            </p>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="mt-8 p-5 bg-primary/5 rounded-2xl border border-primary/20">

        <div className="flex items-center gap-3">

          <Icon
            name="TrendingUp"
            size={22}
            className="text-primary"
          />

          <p className="text-muted-foreground">
            Great job! You completed more workouts this week than last week.
            Keep up the consistency.
          </p>

        </div>

      </div>

    </div>
  );
}
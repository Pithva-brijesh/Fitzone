import React from "react";
import Icon from "../../../components/AppIcon";

export default function AchievementTimeline() {
  const timeline = [
    {
      title: "Joined FitZone",
      date: "January 15, 2026",
      description: "Started your fitness journey.",
      icon: "UserPlus",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "First Workout Completed",
      date: "January 16, 2026",
      description: "Completed your first training session.",
      icon: "Dumbbell",
      color: "text-success",
      bg: "bg-success/10",
    },
    {
      title: "Level 5 Reached",
      date: "March 2, 2026",
      description: "Unlocked new workout challenges.",
      icon: "TrendingUp",
      color: "text-warning",
      bg: "bg-warning/10",
    },
    {
      title: "1000 XP Earned",
      date: "April 18, 2026",
      description: "Reached an important XP milestone.",
      icon: "Star",
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
    },
    {
      title: "Current Level 8",
      date: "Today",
      description: "Keep going to reach Level 9!",
      icon: "Trophy",
      color: "text-primary",
      bg: "bg-primary/10",
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Achievement Timeline
          </h2>

          <p className="text-muted-foreground">
            Your fitness journey through milestones.
          </p>
        </div>

        <Icon
          name="History"
          size={30}
          className="text-primary"
        />

      </div>

      <div className="space-y-8">

        {timeline.map((item, index) => (

          <div
            key={index}
            className="flex gap-5"
          >

            {/* Icon */}

            <div className="flex flex-col items-center">

              <div
                className={`w-14 h-14 rounded-full ${item.bg} flex items-center justify-center`}
              >
                <Icon
                  name={item.icon}
                  size={24}
                  className={item.color}
                />
              </div>

              {index !== timeline.length - 1 && (
                <div className="w-1 h-16 bg-border mt-2 rounded-full" />
              )}

            </div>

            {/* Content */}

            <div className="flex-1 bg-background rounded-2xl p-5">

              <div className="flex justify-between items-center">

                <h3 className="font-bold text-lg text-foreground">
                  {item.title}
                </h3>

                <span className="text-sm text-muted-foreground">
                  {item.date}
                </span>

              </div>

              <p className="mt-2 text-muted-foreground">
                {item.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
import React from "react";
import Icon from "../../../components/AppIcon";

export default function Milestones() {
  const milestones = [
    {
      title: "First Workout Completed",
      date: "15 Jan 2026",
      xp: "+100 XP",
      completed: true,
    },
    {
      title: "50 Workouts Completed",
      date: "20 Mar 2026",
      xp: "+500 XP",
      completed: true,
    },
    {
      title: "100 Workouts Completed",
      date: "Coming Soon",
      xp: "+1000 XP",
      completed: false,
    },
    {
      title: "30-Day Workout Streak",
      date: "In Progress",
      xp: "+750 XP",
      completed: false,
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Milestones
          </h2>

          <p className="text-muted-foreground">
            Celebrate every important achievement.
          </p>
        </div>

        <Icon
          name="Flag"
          size={30}
          className="text-success"
        />

      </div>

      {/* Timeline */}

      <div className="space-y-6">

        {milestones.map((milestone, index) => (

          <div
            key={index}
            className="flex gap-5 items-start"
          >

            {/* Icon */}

            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center ${
                milestone.completed
                  ? "bg-success/10"
                  : "bg-muted"
              }`}
            >

              <Icon
                name={milestone.completed ? "CheckCircle2" : "Circle"}
                size={28}
                className={
                  milestone.completed
                    ? "text-success"
                    : "text-muted-foreground"
                }
              />

            </div>

            {/* Content */}

            <div className="flex-1 bg-background rounded-2xl p-5">

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="font-bold text-foreground">
                    {milestone.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-1">
                    {milestone.date}
                  </p>

                </div>

                <div className="text-warning font-bold">
                  {milestone.xp}
                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
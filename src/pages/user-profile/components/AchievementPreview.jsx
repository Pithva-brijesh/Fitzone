import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

export default function AchievementPreview() {
  const achievements = [
    {
      title: "First Workout",
      icon: "Dumbbell",
      earned: true,
      color: "bg-success/10",
      iconColor: "text-success",
    },
    {
      title: "7 Day Streak",
      icon: "Flame",
      earned: true,
      color: "bg-warning/10",
      iconColor: "text-warning",
    },
    {
      title: "100 Workouts",
      icon: "Award",
      earned: true,
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      title: "Marathon",
      icon: "Medal",
      earned: false,
      color: "bg-muted",
      iconColor: "text-muted-foreground",
    },
    {
      title: "Fitness Master",
      icon: "Crown",
      earned: false,
      color: "bg-muted",
      iconColor: "text-muted-foreground",
    },
    {
      title: "Legend",
      icon: "Sparkles",
      earned: false,
      color: "bg-muted",
      iconColor: "text-muted-foreground",
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">

            <Icon
              name="Trophy"
              size={24}
              className="text-primary"
            />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-foreground">
              Achievements
            </h2>

            <p className="text-muted-foreground">
              Unlock badges as you progress
            </p>

          </div>

        </div>

        <Button
          variant="outline"
          size="sm"
        >
          View All
        </Button>

      </div>

      {/* XP */}

      <div className="bg-primary/10 rounded-2xl p-6 mb-8">

        <div className="flex justify-between mb-3">

          <span className="font-semibold text-foreground">
            Level 12
          </span>

          <span className="font-bold text-primary">
            2,850 XP
          </span>

        </div>

        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">

          <div
            className="bg-primary h-3 rounded-full"
            style={{ width: "72%" }}
          />

        </div>

        <div className="text-xs text-muted-foreground mt-2">

          72% to Level 13

        </div>

      </div>

      {/* Achievement Grid */}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

        {achievements.map((achievement) => (

          <div
            key={achievement.title}
            className={`rounded-2xl p-5 border transition hover:scale-105 ${
              achievement.earned
                ? "border-primary bg-card"
                : "border-border opacity-60"
            }`}
          >

            <div
              className={`w-14 h-14 rounded-xl ${achievement.color} flex items-center justify-center mx-auto`}
            >

              <Icon
                name={achievement.icon}
                size={28}
                className={achievement.iconColor}
              />

            </div>

            <h4 className="text-center mt-4 font-semibold text-foreground">

              {achievement.title}

            </h4>

            <div className="text-center mt-3">

              {achievement.earned ? (

                <span className="text-success text-sm font-medium">

                  Unlocked

                </span>

              ) : (

                <span className="text-muted-foreground text-sm">

                  Locked

                </span>

              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
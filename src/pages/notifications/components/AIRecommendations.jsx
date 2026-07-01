import React from "react";
import Icon from "../../../components/AppIcon";

export default function AchievementNotification() {
  const achievements = [
    {
      id: 1,
      title: "7-Day Streak Unlocked",
      description: "You worked out for 7 consecutive days.",
      reward: "+300 XP",
      icon: "Flame",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      id: 2,
      title: "First Workout Badge",
      description: "Congratulations on completing your first workout!",
      reward: "+100 XP",
      icon: "Award",
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
    },
    {
      id: 3,
      title: "Nutrition Master",
      description: "Tracked meals for 14 consecutive days.",
      reward: "+250 XP",
      icon: "Apple",
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Achievement Notifications
          </h2>

          <p className="text-muted-foreground">
            Celebrate your latest accomplishments.
          </p>

        </div>

        <Icon
          name="Trophy"
          size={30}
          className="text-warning"
        />

      </div>

      {/* Achievement List */}

      <div className="space-y-5">

        {achievements.map((achievement) => (

          <div
            key={achievement.id}
            className="bg-background rounded-2xl p-6 border border-border hover:border-warning transition-all"
          >

            <div className="flex items-center gap-5">

              <div
                className={`w-14 h-14 rounded-xl ${achievement.bg} flex items-center justify-center`}
              >
                <Icon
                  name={achievement.icon}
                  size={26}
                  className={achievement.color}
                />
              </div>

              <div className="flex-1">

                <h3 className="font-bold text-lg text-foreground">
                  {achievement.title}
                </h3>

                <p className="text-muted-foreground mt-1">
                  {achievement.description}
                </p>

              </div>

              <div className="bg-warning/10 text-warning px-4 py-2 rounded-full font-semibold">
                {achievement.reward}
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
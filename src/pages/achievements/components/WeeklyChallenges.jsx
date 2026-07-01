import React from "react";
import Icon from "../../../components/AppIcon";

export default function WeeklyChallenges() {
  const challenges = [
    {
      title: "Complete 5 Workouts",
      progress: 80,
      current: "4 / 5",
      reward: "+500 XP",
    },
    {
      title: "Burn 3,500 Calories",
      progress: 72,
      current: "2,520 / 3,500 kcal",
      reward: "+400 XP",
    },
    {
      title: "Drink 56 Glasses of Water",
      progress: 65,
      current: "36 / 56 Glasses",
      reward: "+250 XP",
    },
    {
      title: "Walk 70,000 Steps",
      progress: 91,
      current: "63,700 / 70,000",
      reward: "+350 XP",
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Weekly Challenges
          </h2>

          <p className="text-muted-foreground">
            Complete weekly goals for massive XP rewards.
          </p>

        </div>

        <Icon
          name="CalendarDays"
          size={30}
          className="text-warning"
        />

      </div>

      <div className="space-y-6">

        {challenges.map((challenge) => (

          <div
            key={challenge.title}
            className="bg-background rounded-2xl p-6"
          >

            <div className="flex justify-between items-center mb-4">

              <div>

                <h3 className="font-bold text-foreground">
                  {challenge.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {challenge.current}
                </p>

              </div>

              <div className="text-right">

                <div className="font-bold text-warning">
                  {challenge.reward}
                </div>

                <div className="text-sm text-primary">
                  {challenge.progress}%
                </div>

              </div>

            </div>

            <div className="w-full h-3 bg-muted rounded-full overflow-hidden">

              <div
                className="h-full bg-warning rounded-full transition-all duration-700"
                style={{
                  width: `${challenge.progress}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
import React from "react";
import Icon from "../../../components/AppIcon";

export default function LevelProgress() {
  const currentLevel = 8;
  const currentXP = 8420;
  const nextLevelXP = 10000;

  const progress = (currentXP / nextLevelXP) * 100;

  const rewards = [
    {
      level: 9,
      reward: "Premium Badge",
      unlocked: false,
    },
    {
      level: 10,
      reward: "Golden Trophy",
      unlocked: false,
    },
    {
      level: 11,
      reward: "Exclusive Workout Plan",
      unlocked: false,
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Level Progress
          </h2>

          <p className="text-muted-foreground">
            Keep earning XP to unlock exclusive rewards.
          </p>

        </div>

        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">

          <Icon
            name="TrendingUp"
            size={30}
            className="text-primary"
          />

        </div>

      </div>

      {/* Current Level */}

      <div className="bg-background rounded-2xl p-6 mb-8 text-center">

        <div className="text-5xl font-bold text-primary">
          Level {currentLevel}
        </div>

        <div className="text-muted-foreground mt-2">
          {currentXP.toLocaleString()} / {nextLevelXP.toLocaleString()} XP
        </div>

      </div>

      {/* Progress */}

      <div className="mb-8">

        <div className="flex justify-between mb-3">

          <span className="font-semibold text-foreground">
            Progress
          </span>

          <span className="text-primary font-semibold">
            {Math.round(progress)}%
          </span>

        </div>

        <div className="w-full h-4 bg-background rounded-full overflow-hidden">

          <div
            className="h-full bg-primary rounded-full transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Upcoming Rewards */}

      <div>

        <h3 className="text-lg font-bold text-foreground mb-5">
          Upcoming Rewards
        </h3>

        <div className="space-y-4">

          {rewards.map((reward) => (

            <div
              key={reward.level}
              className="bg-background rounded-xl p-4 flex justify-between items-center"
            >

              <div>

                <div className="font-semibold text-foreground">
                  Level {reward.level}
                </div>

                <div className="text-sm text-muted-foreground">
                  {reward.reward}
                </div>

              </div>

              <Icon
                name="Gift"
                size={24}
                className="text-warning"
              />

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}
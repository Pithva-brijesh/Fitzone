import React from "react";
import Icon from "../../../components/AppIcon";

export default function XPCard() {
  const totalXP = 8420;
  const currentLevel = 8;
  const nextLevelXP = 10000;

  const progress = (totalXP / nextLevelXP) * 100;

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Experience Points
          </h2>

          <p className="text-muted-foreground">
            Keep training to level up
          </p>

        </div>

        <div className="w-16 h-16 rounded-2xl bg-warning/10 flex items-center justify-center">

          <Icon
            name="Star"
            size={32}
            className="text-warning"
          />

        </div>

      </div>

      {/* XP */}

      <div className="text-center mb-8">

        <h1 className="text-6xl font-bold text-warning">

          {totalXP.toLocaleString()}

        </h1>

        <p className="text-muted-foreground mt-2">
          Total XP Earned
        </p>

      </div>

      {/* Progress */}

      <div className="mb-8">

        <div className="flex justify-between mb-3">

          <span className="font-semibold text-foreground">

            Level {currentLevel}

          </span>

          <span className="text-primary font-semibold">

            {nextLevelXP - totalXP} XP to Level {currentLevel + 1}

          </span>

        </div>

        <div className="w-full h-4 bg-background rounded-full overflow-hidden">

          <div
            className="h-full bg-warning rounded-full transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-3 gap-5">

        <div className="bg-background rounded-2xl p-5 text-center">

          <div className="text-2xl font-bold text-primary">
            +480
          </div>

          <div className="text-sm text-muted-foreground">
            This Week
          </div>

        </div>

        <div className="bg-background rounded-2xl p-5 text-center">

          <div className="text-2xl font-bold text-success">
            18
          </div>

          <div className="text-sm text-muted-foreground">
            Badges
          </div>

        </div>

        <div className="bg-background rounded-2xl p-5 text-center">

          <div className="text-2xl font-bold text-warning">
            #24
          </div>

          <div className="text-sm text-muted-foreground">
            Rank
          </div>

        </div>

      </div>

    </div>
  );
}

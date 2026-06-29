import React from "react";
import Icon from "../../../components/AppIcon";

export default function DailyCalories() {
  const goal = 2150;
  const consumed = 1635;
  const burned = 420;

  const remaining = goal - consumed + burned;

  const progress = Math.min((consumed / goal) * 100, 100);

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Daily Calories
          </h2>

          <p className="text-muted-foreground">
            Today's calorie progress
          </p>

        </div>

        <div className="w-14 h-14 rounded-xl bg-warning/10 flex items-center justify-center">

          <Icon
            name="Flame"
            size={28}
            className="text-warning"
          />

        </div>

      </div>

      {/* Progress Circle */}

      <div className="flex justify-center mb-8">

        <div className="relative w-48 h-48">

          <svg
            className="w-48 h-48 rotate-[-90deg]"
            viewBox="0 0 200 200"
          >

            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="#2A2E4D"
              strokeWidth="14"
              fill="none"
            />

            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="#6366F1"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={503}
              strokeDashoffset={
                503 - (503 * progress) / 100
              }
            />

          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <div className="text-5xl font-bold text-foreground">

              {consumed}

            </div>

            <div className="text-muted-foreground">

              kcal

            </div>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-3 gap-5">

        <div className="bg-background rounded-2xl p-5 text-center">

          <div className="text-success text-2xl font-bold">

            {goal}

          </div>

          <div className="text-sm text-muted-foreground">

            Goal

          </div>

        </div>

        <div className="bg-background rounded-2xl p-5 text-center">

          <div className="text-primary text-2xl font-bold">

            {burned}

          </div>

          <div className="text-sm text-muted-foreground">

            Burned

          </div>

        </div>

        <div className="bg-background rounded-2xl p-5 text-center">

          <div className="text-warning text-2xl font-bold">

            {remaining}

          </div>

          <div className="text-sm text-muted-foreground">

            Remaining

          </div>

        </div>

      </div>

    </div>
  );
}
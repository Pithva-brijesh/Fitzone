import React from "react";
import Icon from "../../../components/AppIcon";

export default function WorkoutHistoryHeader() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

        {/* Left */}

        <div>

          <div className="flex items-center gap-4 mb-4">

            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">

              <Icon
                name="History"
                size={32}
                className="text-primary"
              />

            </div>

            <div>

              <h1 className="text-4xl font-bold text-foreground">

                Workout History

              </h1>

              <p className="text-muted-foreground">

                {today}

              </p>

            </div>

          </div>

          <p className="text-lg text-muted-foreground max-w-2xl">

            Review your previous workouts, track consistency,
            analyze progress, and celebrate every milestone.

          </p>

        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-background rounded-2xl p-5 text-center">

            <div className="text-3xl font-bold text-primary">

              126

            </div>

            <div className="text-sm text-muted-foreground">

              Total Workouts

            </div>

          </div>

          <div className="bg-background rounded-2xl p-5 text-center">

            <div className="text-3xl font-bold text-success">

              18

            </div>

            <div className="text-sm text-muted-foreground">

              Day Streak

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
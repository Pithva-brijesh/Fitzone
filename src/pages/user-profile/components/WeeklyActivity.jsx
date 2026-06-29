import React from "react";
import Icon from "../../../components/AppIcon";

export default function WeeklyActivity() {
  const weekData = [
    { day: "Mon", workouts: 1, calories: 320 },
    { day: "Tue", workouts: 2, calories: 510 },
    { day: "Wed", workouts: 1, calories: 280 },
    { day: "Thu", workouts: 0, calories: 0 },
    { day: "Fri", workouts: 2, calories: 620 },
    { day: "Sat", workouts: 1, calories: 410 },
    { day: "Sun", workouts: 1, calories: 350 },
  ];

  const maxCalories = Math.max(...weekData.map((d) => d.calories));

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">

            <Icon
              name="BarChart3"
              size={24}
              className="text-primary"
            />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-foreground">
              Weekly Activity
            </h2>

            <p className="text-muted-foreground">
              Workout summary for this week
            </p>

          </div>

        </div>

      </div>

      {/* Graph */}

      <div className="flex items-end justify-between gap-4 h-64">

        {weekData.map((item) => {

          const height =
            (item.calories / maxCalories) * 180;

          return (

            <div
              key={item.day}
              className="flex flex-col items-center flex-1"
            >

              <div className="text-xs text-muted-foreground mb-3">

                {item.calories}

              </div>

              <div
                className="w-full max-w-[45px] rounded-t-xl bg-primary hover:bg-primary/80 transition-all duration-300"
                style={{
                  height: `${height}px`,
                  minHeight: item.calories ? "25px" : "8px",
                }}
              />

              <div className="mt-4 font-semibold text-foreground">

                {item.day}

              </div>

            </div>

          );

        })}

      </div>

      {/* Bottom Stats */}

      <div className="grid grid-cols-3 gap-4 mt-10">

        <div className="bg-success/10 rounded-2xl p-4 text-center">

          <div className="text-2xl font-bold text-success">

            8

          </div>

          <div className="text-sm text-muted-foreground">

            Workouts

          </div>

        </div>

        <div className="bg-warning/10 rounded-2xl p-4 text-center">

          <div className="text-2xl font-bold text-warning">

            2,490

          </div>

          <div className="text-sm text-muted-foreground">

            Calories

          </div>

        </div>

        <div className="bg-primary/10 rounded-2xl p-4 text-center">

          <div className="text-2xl font-bold text-primary">

            6h

          </div>

          <div className="text-sm text-muted-foreground">

            Total Time

          </div>

        </div>

      </div>

    </div>
  );
}
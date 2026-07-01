import React from "react";
import Icon from "../../../components/AppIcon";

export default function WorkoutCalendar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  const workoutDays = [1, 2, 4, 5, 7, 9, 10, 13, 15, 17, 18, 20, 22, 24, 25, 27, 29];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Workout Calendar
          </h2>

          <p className="text-muted-foreground">
            Your workout activity this month
          </p>

        </div>

        <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-xl">

          <Icon
            name="Calendar"
            size={20}
            className="text-primary"
          />

          <span className="font-semibold text-primary">
            June 2026
          </span>

        </div>

      </div>

      {/* Week Days */}

      <div className="grid grid-cols-7 gap-3 mb-4">

        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (

          <div
            key={day}
            className="text-center text-muted-foreground font-semibold"
          >
            {day}
          </div>

        ))}

      </div>

      {/* Calendar */}

      <div className="grid grid-cols-7 gap-3">

        {days.map((day) => {

          const completed = workoutDays.includes(day);

          return (

            <div
              key={day}
              className={`aspect-square rounded-xl flex flex-col items-center justify-center border transition-all hover:scale-105 cursor-pointer ${
                completed
                  ? "bg-success/15 border-success"
                  : "bg-background border-border"
              }`}
            >

              <span className="font-semibold text-foreground">
                {day}
              </span>

              {completed && (
                <Icon
                  name="Dumbbell"
                  size={16}
                  className="text-success mt-1"
                />
              )}

            </div>

          );
        })}

      </div>

      {/* Footer */}

      <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">

        <div>

          <h3 className="font-semibold text-foreground">
            Monthly Completion
          </h3>

          <p className="text-muted-foreground">
            17 workouts completed this month
          </p>

        </div>

        <div className="text-right">

          <div className="text-3xl font-bold text-success">
            57%
          </div>

          <div className="text-sm text-muted-foreground">
            Goal Progress
          </div>

        </div>

      </div>

    </div>
  );
}
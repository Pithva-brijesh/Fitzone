import React from "react";
import Icon from "../../../components/AppIcon";

export default function WorkoutHistoryCard({
  workout,
}) {
  return (
    <div className="morphic-card bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">

      {/* Top */}

      <div className="flex justify-between items-start">

        <div>

          <h3 className="text-xl font-bold text-foreground">
            {workout.title}
          </h3>

          <p className="text-muted-foreground mt-1">
            {workout.date}
          </p>

        </div>

        <div
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            workout.completed
              ? "bg-success/10 text-success"
              : "bg-warning/10 text-warning"
          }`}
        >
          {workout.completed ? "Completed" : "Missed"}
        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-3 gap-5 mt-8">

        <div className="bg-background rounded-xl p-4 text-center">

          <Icon
            name="Clock3"
            size={20}
            className="text-primary mx-auto mb-2"
          />

          <div className="font-bold text-foreground">
            {workout.duration}
          </div>

          <div className="text-xs text-muted-foreground">
            Duration
          </div>

        </div>

        <div className="bg-background rounded-xl p-4 text-center">

          <Icon
            name="Flame"
            size={20}
            className="text-warning mx-auto mb-2"
          />

          <div className="font-bold text-foreground">
            {workout.calories}
          </div>

          <div className="text-xs text-muted-foreground">
            Calories
          </div>

        </div>

        <div className="bg-background rounded-xl p-4 text-center">

          <Icon
            name="Dumbbell"
            size={20}
            className="text-success mx-auto mb-2"
          />

          <div className="font-bold text-foreground">
            {workout.exercises}
          </div>

          <div className="text-xs text-muted-foreground">
            Exercises
          </div>

        </div>

      </div>

      {/* Notes */}

      <div className="mt-6 bg-background rounded-xl p-4">

        <div className="flex items-center gap-2 mb-2">

          <Icon
            name="NotebookPen"
            size={18}
            className="text-primary"
          />

          <span className="font-semibold text-foreground">
            Notes
          </span>

        </div>

        <p className="text-muted-foreground text-sm">
          {workout.notes}
        </p>

      </div>

    </div>
  );
}
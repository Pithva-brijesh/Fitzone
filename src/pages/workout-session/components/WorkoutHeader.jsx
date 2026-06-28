import React from "react";

export default function WorkoutHeader({
  exercise,
  current,
  total,
}) {
  const progress = (current / total) * 100;

  return (
    <div className="bg-card border border-border rounded-2xl p-6 morphic-card">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>
          <p className="text-primary font-semibold mb-2">
            Workout Session
          </p>

          <h1 className="text-4xl font-bold text-foreground">
            {exercise.name}
          </h1>

          <p className="text-muted-foreground mt-2">
            Exercise {current} of {total}
          </p>
        </div>

        <div className="w-full lg:w-80">

          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Workout Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>

          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">

            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

      </div>

    </div>
  );
}
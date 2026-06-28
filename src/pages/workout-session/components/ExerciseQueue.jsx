import React from "react";
import Icon from "../../../components/AppIcon";

export default function ExerciseQueue({ exercises }) {
  return (
    <div className="morphic-card bg-card border border-border rounded-2xl p-6">

      <h2 className="text-2xl font-bold text-foreground mb-6">
        Exercise Queue
      </h2>

      <div className="space-y-4">

        {exercises.map((exercise, index) => {
          const isCompleted = exercise.completed;
          const isCurrent = exercise.current;

          return (
            <div
              key={exercise.id}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300
              ${
                isCurrent
                  ? "border-2 border-primary bg-primary/10"
                  : isCompleted
                  ? "bg-success/10"
                  : "bg-muted"
              }`}
            >

              {/* Status Icon */}

              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center
                ${
                  isCompleted
                    ? "bg-success"
                    : isCurrent
                    ? "bg-primary"
                    : "bg-card"
                }`}
              >
                {isCompleted ? (
                  <Icon
                    name="Check"
                    size={20}
                    color="white"
                  />
                ) : isCurrent ? (
                  <Icon
                    name="Play"
                    size={18}
                    color="white"
                  />
                ) : (
                  <span className="text-muted-foreground font-bold">
                    {index + 1}
                  </span>
                )}
              </div>

              {/* Exercise Info */}

              <div className="flex-1">

                <h3 className="text-lg font-semibold text-foreground">
                  {exercise.name}
                </h3>

                <div className="flex gap-4 text-sm text-muted-foreground mt-1">

                  <span>
                    ⏱ {exercise.duration}s
                  </span>

                  <span>
                    🔁 {exercise.reps} reps
                  </span>

                </div>

              </div>

              {/* Status */}

              <div>

                {isCompleted && (
                  <span className="text-success font-semibold">
                    Completed
                  </span>
                )}

                {isCurrent && (
                  <span className="text-primary font-semibold">
                    Current
                  </span>
                )}

                {!isCompleted && !isCurrent && (
                  <span className="text-muted-foreground">
                    Upcoming
                  </span>
                )}

              </div>

            </div>
          );
        })}

      </div>

      {/* Overall Progress */}

      <div className="mt-8">

        <div className="flex justify-between text-sm mb-2">

          <span className="text-muted-foreground">
            Overall Progress
          </span>

          <span className="font-semibold text-foreground">
            40%
          </span>

        </div>

        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">

          <div
            className="h-full bg-success rounded-full"
            style={{ width: "40%" }}
          />

        </div>

      </div>

    </div>
  );
}
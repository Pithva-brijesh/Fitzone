import React from "react";
import Icon from "../../../components/AppIcon";

export default function FavoriteExercises() {
  const exercises = [
    {
      name: "Bench Press",
      muscle: "Chest",
      sessions: 48,
      calories: 8200,
      difficulty: "Advanced",
    },
    {
      name: "Squats",
      muscle: "Legs",
      sessions: 44,
      calories: 9100,
      difficulty: "Advanced",
    },
    {
      name: "Pull Ups",
      muscle: "Back",
      sessions: 37,
      calories: 6300,
      difficulty: "Intermediate",
    },
    {
      name: "Shoulder Press",
      muscle: "Shoulders",
      sessions: 31,
      calories: 5200,
      difficulty: "Intermediate",
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Favorite Exercises
          </h2>

          <p className="text-muted-foreground">
            Your most performed exercises
          </p>

        </div>

        <Icon
          name="Heart"
          size={32}
          className="text-red-500"
        />

      </div>

      <div className="space-y-5">

        {exercises.map((exercise) => (

          <div
            key={exercise.name}
            className="bg-background rounded-2xl p-5 flex justify-between items-center hover:scale-[1.02] transition-all"
          >

            <div>

              <h3 className="text-lg font-bold text-foreground">
                {exercise.name}
              </h3>

              <p className="text-muted-foreground">
                {exercise.muscle}
              </p>

            </div>

            <div className="grid grid-cols-3 gap-6 text-center">

              <div>

                <div className="font-bold text-primary">
                  {exercise.sessions}
                </div>

                <div className="text-xs text-muted-foreground">
                  Sessions
                </div>

              </div>

              <div>

                <div className="font-bold text-warning">
                  {exercise.calories}
                </div>

                <div className="text-xs text-muted-foreground">
                  Calories
                </div>

              </div>

              <div>

                <div className="font-bold text-success">
                  {exercise.difficulty}
                </div>

                <div className="text-xs text-muted-foreground">
                  Level
                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
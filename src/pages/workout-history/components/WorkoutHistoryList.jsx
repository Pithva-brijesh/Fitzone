import React from "react";
import WorkoutHistoryCard from "./WorkoutHistoryCard";

export default function WorkoutHistoryList() {
  const workouts = [
    {
      id: 1,
      title: "Upper Body Strength",
      date: "30 June 2026",
      duration: "58 min",
      calories: "520 kcal",
      exercises: 8,
      completed: true,
      notes: "Increased bench press weight by 5 kg.",
    },
    {
      id: 2,
      title: "Leg Day",
      date: "28 June 2026",
      duration: "72 min",
      calories: "680 kcal",
      exercises: 10,
      completed: true,
      notes: "Focused on squats and Romanian deadlifts.",
    },
    {
      id: 3,
      title: "HIIT Cardio",
      date: "26 June 2026",
      duration: "32 min",
      calories: "410 kcal",
      exercises: 6,
      completed: true,
      notes: "Completed all intervals successfully.",
    },
    {
      id: 4,
      title: "Push Workout",
      date: "24 June 2026",
      duration: "61 min",
      calories: "560 kcal",
      exercises: 9,
      completed: true,
      notes: "Improved shoulder endurance.",
    },
    {
      id: 5,
      title: "Recovery Session",
      date: "22 June 2026",
      duration: "30 min",
      calories: "210 kcal",
      exercises: 5,
      completed: false,
      notes: "Workout skipped due to soreness.",
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Recent Workouts
          </h2>

          <p className="text-muted-foreground">
            Your latest training sessions
          </p>

        </div>

      </div>

      <div className="space-y-6">

        {workouts.map((workout) => (

          <WorkoutHistoryCard
            key={workout.id}
            workout={workout}
          />

        ))}

      </div>

    </div>
  );
}
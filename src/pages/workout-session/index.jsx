import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/ui/Header";

import WorkoutHeader from "./components/WorkoutHeader";
import WorkoutVideo from "./components/WorkoutVideo";
import WorkoutStats from "./components/WorkoutStats";
import WorkoutControls from "./components/WorkoutControls";
import ExerciseQueue from "./components/ExerciseQueue";
import WorkoutComplete from "./components/WorkoutComplete";

export default function WorkoutSession() {
  const navigate = useNavigate();

  const [isCompleted, setIsCompleted] = useState(false);

  const user = {
    name: "Alex Chen",
    streak: 12,
  };

  const exercises = [
    {
      id: 1,
      name: "Jumping Jacks",
      duration: 30,
      reps: 20,
      completed: true,
    },
    {
      id: 2,
      name: "Push Ups",
      duration: 45,
      reps: 15,
      completed: false,
      current: true,
      image:
        "https://images.unsplash.com/photo-1598971639058-a81f6f64e2f3?w=1200",
    },
    {
      id: 3,
      name: "Squats",
      duration: 40,
      reps: 20,
    },
    {
      id: 4,
      name: "Plank",
      duration: 60,
      reps: 1,
    },
    {
      id: 5,
      name: "Mountain Climbers",
      duration: 45,
      reps: 25,
    },
  ];

  const currentExercise = exercises[1];

  if (isCompleted) {
    return (
      <WorkoutComplete
        calories={280}
        duration="24 min"
        xp={350}
        onBack={() => navigate("/dashboard-home")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header
        user={user}
        onNavigate={(path) => navigate(path)}
      />

      <main className="max-w-7xl mx-auto px-6 py-8">

        <WorkoutHeader
          current={2}
          total={5}
          exercise={currentExercise}
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">

          {/* LEFT */}

          <div className="lg:col-span-2 space-y-8">

            <WorkoutVideo exercise={currentExercise} />

            <WorkoutStats
              timer="00:45"
              reps="12 / 15"
              calories="38"
              heartRate="118"
            />

            <WorkoutControls
              onPause={() => console.log("Pause")}
              onResume={() => console.log("Resume")}
              onSkip={() => console.log("Skip")}
              onFinish={() => setIsCompleted(true)}
            />

          </div>

          {/* RIGHT */}

          <div>

            <ExerciseQueue
              exercises={exercises}
            />

          </div>

        </div>

      </main>
    </div>
  );
}
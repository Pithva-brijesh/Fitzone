import React, { useEffect, useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);

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
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200",
    },
    {
      id: 2,
      name: "Push Ups",
      duration: 45,
      reps: 15,
      image:
        "https://images.unsplash.com/photo-1598971639058-a81f6f64e2f3?w=1200",
    },
    {
      id: 3,
      name: "Squats",
      duration: 40,
      reps: 20,
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200",
    },
    {
      id: 4,
      name: "Plank",
      duration: 60,
      reps: 1,
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200",
    },
    {
      id: 5,
      name: "Mountain Climbers",
      duration: 45,
      reps: 25,
      image:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1200",
    },
  ];

  const currentExercise = exercises[currentIndex];

  const [timeLeft, setTimeLeft] = useState(currentExercise.duration);
  const [isPaused, setIsPaused] = useState(false);

  const [calories, setCalories] = useState(0);
  const [heartRate, setHeartRate] = useState(95);
  const [repsCompleted, setRepsCompleted] = useState(0);

  useEffect(() => {
    setTimeLeft(currentExercise.duration);
    setIsPaused(false);
    setRepsCompleted(0);
  }, [currentIndex]);

  const nextExercise = () => {
    setIsPaused(false);

    if (currentIndex < exercises.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const previousExercise = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const skipExercise = () => {
    nextExercise();
  };

  // Countdown Timer
  useEffect(() => {
    if (isPaused || isCompleted) return;

    if (timeLeft <= 0) {
      nextExercise();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isPaused, isCompleted]);

  // Live Workout Metrics
  useEffect(() => {
    if (isPaused || isCompleted) return;

    const metrics = setInterval(() => {
      setCalories((prev) => prev + 1);

      setHeartRate((prev) => {
        const random = Math.floor(Math.random() * 5) - 2;
        const value = prev + random;

        return Math.max(90, Math.min(150, value));
      });

      setRepsCompleted((prev) => {
        if (prev < currentExercise.reps) {
          return prev + 1;
        }
        return prev;
      });

    }, 1000);

    return () => clearInterval(metrics);

  }, [currentIndex, isPaused, isCompleted, currentExercise.reps]);

  if (isCompleted) {
    return (
      <WorkoutComplete
        calories={calories}
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
          current={currentIndex + 1}
          total={exercises.length}
          exercise={currentExercise}
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">

          {/* LEFT */}

          <div className="lg:col-span-2 space-y-8">

            <WorkoutVideo exercise={currentExercise} />

            <WorkoutStats
              timer={`00:${String(timeLeft).padStart(2, "0")}`}
              reps={`${repsCompleted} / ${currentExercise.reps}`}
              calories={calories}
              heartRate={heartRate}
            />

            <WorkoutControls
              onPause={() => setIsPaused(true)}
              onResume={() => setIsPaused(false)}
              onSkip={skipExercise}
              onFinish={nextExercise}
            />

          </div>

          {/* RIGHT */}

          <div>

            <ExerciseQueue
              exercises={exercises.map((exercise, index) => ({
                ...exercise,
                completed: index < currentIndex,
                current: index === currentIndex,
              }))}
              currentIndex={currentIndex}
            />

          </div>

        </div>

      </main>
    </div>
  );
}
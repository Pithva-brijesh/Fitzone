import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/ui/Header";
import ExerciseVideoPlayer from "./components/ExerciseVideoPlayer";
import ExerciseInformation from "./components/ExerciseInformation";
import ExerciseActions from "./components/ExerciseActions";

export default function ExerciseDetailsPage() {
  const navigate = useNavigate();

  const user = {
    name: "Alex Johnson",
    streak: 21,
    role: "user",
    stats: {
      workouts: 45,
      level: 12,
      points: 2340,
    },
    unreadNotifications: 3,
  };

  const exercise = {
    id: 1,
    name: "Plank Hold",
    category: "Core",
    difficulty: "Beginner",
    duration: "30-60 sec",
    thumbnail:
      "https://images.unsplash.com/photo-1718633625616-e5f297177a26?w=1200",
    thumbnailAlt: "Plank Exercise",
    videoUrl: "",

    instructions: [
      "Start in a push-up position.",
      "Place your forearms on the floor.",
      "Keep your body in a straight line.",
      "Engage your core muscles.",
      "Hold the position while breathing normally.",
      "Lower your knees if you cannot maintain proper form.",
    ],

    primaryMuscles: [
      "Rectus Abdominis",
      "Obliques",
      "Transverse Abdominis",
    ],

    secondaryMuscles: [
      "Shoulders",
      "Glutes",
      "Lower Back",
    ],

    equipment: [],

    safetyTips: [
      "Keep your neck neutral.",
      "Do not let your hips sag.",
      "Avoid arching your lower back.",
      "Stop immediately if you feel pain.",
    ],
  };

  const handleBookmark = (exerciseId, isBookmarked) => {
    console.log("Bookmark:", exerciseId, isBookmarked);
  };

  const handleShare = (exerciseId, platform) => {
    console.log("Share:", exerciseId, platform);
  };

  const handleStartWorkout = (exercise) => {
    console.log("Start Workout:", exercise.name);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        user={user}
        onNavigate={(path) => navigate(path)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <button
            onClick={() => navigate("/dashboard-home")}
            className="hover:text-foreground"
          >
            Dashboard
          </button>

          <span>/</span>

          <button
            onClick={() => navigate("/exercise-catalog")}
            className="hover:text-foreground"
          >
            Exercises
          </button>

          <span>/</span>

          <span className="text-foreground font-medium">
            {exercise.name}
          </span>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              {exercise.name}
            </h1>

            <div className="flex gap-6 mt-3 text-sm text-muted-foreground">
              <span>🏋 {exercise.category}</span>
              <span>📈 {exercise.difficulty}</span>
              <span>⏱ {exercise.duration}</span>
            </div>
          </div>
        </div>

        {/* Rocket Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <ExerciseVideoPlayer exercise={exercise} />

            <ExerciseInformation exercise={exercise} />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <ExerciseActions
              exercise={exercise}
              onBookmark={handleBookmark}
              onShare={handleShare}
              onStartWorkout={handleStartWorkout}
            />
          </div>

        </div>
      </main>
    </div>
  );
}
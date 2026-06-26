import React from "react";
import Header from "../../components/ui/Header";
import QuickActions from "./components/QuickActions";
import CategoryFilter from "./components/CategoryFilter";
import FilterControls from "./components/FilterControls";
import ExerciseGrid from "./components/ExerciseGrid";

const categories = [
  {
    id: "strength",
    name: "Strength",
    icon: "Dumbbell",
    color: "bg-primary text-primary-foreground",
  },
];

const exerciseCounts = {
  all: 1,
  strength: 1,
};

const exercises = [
  {
    id: 1,
    name: "Push Ups",
    difficulty: "Beginner",
    duration: "15 min",
    equipment: "None",
    rating: 4.8,
    muscleGroups: ["Chest", "Triceps"],
    description: "Basic push up exercise.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600",
    imageAlt: "Push up",
  },
];

export default function ExerciseCatalog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto p-6 space-y-6">
        <QuickActions />

        <CategoryFilter
          categories={categories}
          activeCategory="all"
          exerciseCounts={exerciseCounts}
          onCategoryChange={() => {}}
        />

        <FilterControls
          searchQuery=""
          sortBy="name"
          difficultyFilter="all"
          equipmentFilter="all"
          durationFilter="all"
          resultCount={1}
          onSearchChange={() => {}}
          onSortChange={() => {}}
          onDifficultyChange={() => {}}
          onEquipmentChange={() => {}}
          onDurationChange={() => {}}
          onClearFilters={() => {}}
        />

        <ExerciseGrid
          exercises={exercises}
          bookmarkedExercises={[]}
          onBookmark={() => {}}
          onAddToRoutine={() => {}}
          isLoading={false}
        />
      </main>
    </div>
  );
}
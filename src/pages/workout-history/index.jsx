import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/ui/Header";
import WorkoutHistoryHeader from "./components/WorkoutHistoryHeader";
import WeeklySummary from "./components/WeeklySummary";
import SearchWorkout from "./components/SearchWorkout";
import WorkoutCalendar from "./components/WorkoutCalendar";
import WorkoutHistoryList from "./components/WorkoutHistoryList";
import PersonalRecords from "./components/PersonalRecords";
import FavoriteExercises from "./components/FavoriteExercises";
import WorkoutNotes from "./components/WorkoutNotes";
import MonthlyStatistics from "./components/MonthlyStatistics";

export default function WorkoutHistory() {
  const navigate = useNavigate();

  const user = {
    name: "Alex Chen",
    email: "alex@test.com",
    streak: 18,
  };

  return (
  <div className="min-h-screen bg-background">
    <Header
      user={user}
      onNavigate={(path) => navigate(path)}
    />

    <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">

      <WorkoutHistoryHeader />

      <WeeklySummary />

      <SearchWorkout />

      <WorkoutCalendar />

      <WorkoutHistoryList />

      <div className="grid xl:grid-cols-2 gap-8">

        <PersonalRecords />

        <FavoriteExercises />

      </div>

      <WorkoutNotes />

      <MonthlyStatistics />

    </main>

  </div>
);
}
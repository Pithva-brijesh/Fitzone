import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/ui/Header";
import ProfileHeader from "./components/ProfileHeader";
import ProfileStats from "./components/ProfileStats";
import PersonalInfo from "./components/PersonalInfo";
import BMICard from "./components/BMICard";
import GoalCard from "./components/GoalCard";
import WeeklyActivity from "./components/WeeklyActivity";
import FitnessLevel from "./components/FitnessLevel";
import AchievementPreview from "./components/AchievementPreview";

export default function UserProfile() {
  const navigate = useNavigate();

  const user = {
    name: "Alex Chen",
    email: "alex@fitzone.com",
    age: 21,
    gender: "Male",
    height: 181,
    weight: 79,
    goalWeight: 75,
    streak: 12,
    level: "Intermediate Athlete",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
  };

  return (
    <div className="min-h-screen bg-background">

      <Header
        user={user}
        onNavigate={(path) => navigate(path)}
      />

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">

        <ProfileHeader user={user} />

        <ProfileStats />

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT */}

          <div className="lg:col-span-2 space-y-8">

            <PersonalInfo user={user} />

            <WeeklyActivity />

            <AchievementPreview />

          </div>

          {/* RIGHT */}

          <div className="space-y-8">

            <BMICard user={user} />

            <GoalCard user={user} />

            <FitnessLevel />

          </div>

        </div>

      </main>

    </div>
  );
}
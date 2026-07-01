import React from "react";
import BadgeCard from "./BadgeCard";

export default function BadgeGrid() {
  const badges = [
    {
      id: 1,
      name: "First Workout",
      description: "Complete your first workout.",
      icon: "Award",
      xp: 100,
      unlocked: true,
    },
    {
      id: 2,
      name: "7-Day Streak",
      description: "Work out for 7 consecutive days.",
      icon: "Flame",
      xp: 300,
      unlocked: true,
    },
    {
      id: 3,
      name: "100 Workouts",
      description: "Complete 100 workout sessions.",
      icon: "Dumbbell",
      xp: 1000,
      unlocked: false,
    },
    {
      id: 4,
      name: "10,000 XP",
      description: "Earn a total of 10,000 XP.",
      icon: "Star",
      xp: 500,
      unlocked: false,
    },
    {
      id: 5,
      name: "Nutrition Master",
      description: "Track your meals for 30 days.",
      icon: "Apple",
      xp: 400,
      unlocked: false,
    },
    {
      id: 6,
      name: "Hydration Hero",
      description: "Reach your water goal for 14 days.",
      icon: "Droplets",
      xp: 350,
      unlocked: true,
    },
    {
      id: 7,
      name: "Speed Demon",
      description: "Finish a HIIT workout under 20 minutes.",
      icon: "Zap",
      xp: 250,
      unlocked: true,
    },
    {
      id: 8,
      name: "Elite Athlete",
      description: "Reach Level 10.",
      icon: "Crown",
      xp: 1500,
      unlocked: false,
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Achievement Badges
          </h2>

          <p className="text-muted-foreground">
            Unlock badges by completing challenges and milestones.
          </p>

        </div>

      </div>

      {/* Grid */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {badges.map((badge) => (

          <BadgeCard
            key={badge.id}
            badge={badge}
          />

        ))}

      </div>

    </div>
  );
}
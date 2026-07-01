import React, { useState } from "react";

const filters = [
  "All",
  "Workouts",
  "Nutrition",
  "Achievements",
  "AI Tips",
  "Reminders",
];

export default function NotificationFilters() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-6">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-foreground">
          Filter Notifications
        </h2>

        <p className="text-muted-foreground">
          Choose which notifications you'd like to view.
        </p>

      </div>

      <div className="flex flex-wrap gap-4">

        {filters.map((filter) => (

          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-3 rounded-xl transition-all font-medium ${
              activeFilter === filter
                ? "bg-primary text-white"
                : "bg-background border border-border hover:border-primary"
            }`}
          >
            {filter}
          </button>

        ))}

      </div>

    </div>
  );
}
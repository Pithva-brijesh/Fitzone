import React, { useState } from "react";
import Icon from "../../../components/AppIcon";

export default function SearchWorkout() {
  const [search, setSearch] = useState("");

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Search Workouts
          </h2>

          <p className="text-muted-foreground">
            Find your previous workouts quickly
          </p>

        </div>

        <Icon
          name="Search"
          size={28}
          className="text-primary"
        />

      </div>

      {/* Search */}

      <div className="relative mb-6">

        <Icon
          name="Search"
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
        />

        <input
          type="text"
          placeholder="Search by workout name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-background border border-border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary"
        />

      </div>

      {/* Filters */}

      <div className="grid md:grid-cols-3 gap-4">

        <select className="bg-background border border-border rounded-xl px-4 py-3 text-foreground">
          <option>All Muscle Groups</option>
          <option>Chest</option>
          <option>Back</option>
          <option>Legs</option>
          <option>Shoulders</option>
          <option>Arms</option>
          <option>Core</option>
        </select>

        <select className="bg-background border border-border rounded-xl px-4 py-3 text-foreground">
          <option>Newest First</option>
          <option>Oldest First</option>
          <option>Longest Duration</option>
          <option>Most Calories</option>
        </select>

        <input
          type="date"
          className="bg-background border border-border rounded-xl px-4 py-3 text-foreground"
        />

      </div>

      {/* Info */}

      <div className="mt-8 bg-primary/5 border border-primary/20 rounded-2xl p-5">

        <div className="flex items-center gap-3">

          <Icon
            name="Info"
            size={20}
            className="text-primary"
          />

          <p className="text-muted-foreground">
            Search and filtering will become fully functional after we
            connect FitZone to the backend database.
          </p>

        </div>

      </div>

    </div>
  );
}